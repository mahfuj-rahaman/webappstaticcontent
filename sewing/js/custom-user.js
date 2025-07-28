


function ActiveUser(id) {
    var data = id;
    $('#UserActiveModel').modal('show');
    $('#identity').val(1);
    $.ajax({
        url: '/UserJson/GetWebuserDetails',
        type: "GET",
        data: { id: data },
        success: function (result) {
            console.log(result);

            if (result.Success) {
                let data = result.Payload;


                GenerateActiveUser(data);

            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}



function ResetPassWord(id) {

    var data = id;
    $('#UserActiveModel').modal('show');
    $('#identity').val(2);

    ///password reset input field

    var inputfiled = '<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="font-style: initial; font-weight: 700; "><div class="row text-center"><h3 style=" text-align: center !important;margin: 0 auto; width: auto;float: none;padding: 4px 20px;background: #e9ebec;border - radius: 4px;text - transform: uppercase;color: $logo - color;font - size: 15px; font - weight: 700; border-radius:13px; ">Change User Password</h3></div><div class="row mt-3"><input type="hidden" value=' + data + ' /><div class="form-group"> <label class="control-label"> Old Password &nbsp;&nbsp;</label><input id="oldpassword" type="password" class="form-control" /></div><div class="form-group mt-3"><label class="control-label"> New Password &nbsp;&nbsp;</label><input id="newpassword" type="password" class="form-control" /></div></div>';

    document.getElementById('userdates').innerHTML = inputfiled;



}



function GenerateActiveUser(data)
{
    var tableHTML = '<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="font-style: initial; font-weight: 700; "><div class="row text-center"><h3 style=" text-align: center !important;margin: 0 auto; width: auto;float: none;padding: 4px 20px;background: #e9ebec;border - radius: 4px;text - transform: uppercase;color: $logo - color;font - size: 15px; font - weight: 700; border-radius:13px; ">User Information </h3></div><div class="row p-2" style="margin-left:30px; font-size:16px;"><input type="hidden" id="userId" value=' + data.UserId + ' />';



    var name = data.FirstName + ' ' + data.LastName;

    tableHTML += '<table class="table table-striped"><tr><td>Title  </td><td> ' + data.Title + '</td></tr><br/><br/>' +
        '<tr><td>Name   </td><td>   ' + name + '</td></tr><br/><br/>' +
        '<tr><td>Email   </td><td>    ' + data.Email + '</td></tr><br/><br/>' +
        '<tr><td>Mobile No   </td><td>  ' + data.MobileNo + '</td></tr><br/><br/>' +
        '<tr>';
    tableHTML += data.IsActive ? '<td>Status  &nbsp; &nbsp;</td><td> <input id="Checkdata" type="checkbox" checked/> </td>' : '<td>Status</td><td><input  id="Checkdata"    type="checkbox"/></td>';
    tableHTML += '</tr>';



    tableHTML += '</table></div></div>';


    document.getElementById('userdates').innerHTML = tableHTML;

}


//function Userupdate() {


//    debugger;
//    var num = $('#identity').val();
//    var value = parseInt(num);
//    if (value == 1) {

//        ActiveInactive();
//    } else {
//        ResetUserPassWord();
//    }



function ActiveInactive() {

    var id = $('#userId').val();
    var ischeck = $('#Checkdata').prop('checked');

    var model = {
        Id: id,
        IsCheck: ischeck,
    };


    $.ajax({
        url: '/UserJson/GetUserStatusUpdate',
        type: "POST",
        data: { model: model },
        success: function (result) {
            console.log(result);

            if (result.success) {

                $('#UserActiveModel').modal('hide');
                toastr.success('User Active Status Updated');
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
            else {
                window.location.href = '/User/WebAppUserList';

            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}

function Userupdate() {


    debugger;
    var num = $('#identity').val();
    var value = parseInt(num);
    if (value == 1) {

        ActiveInactive();
    } else {
        ResetUserPassWord();
    }


}


function ResetUserPassWord() {
   
}
