

function CheckRadioSelect(Id, Name) {
    
   
    if (Id <= 0) {
        //show error message
        return false;
    }
    if (Name == undefined || Name == null || Name == '') {
        //show error message
        return false;
    }

   

    $('#selectedItemId').val(Id);
    $('#selectedItemName').val(Name);
}


let selectedIds = [];
let selectedName = [];

function CheckboxSelect(Id, Name) {

    //debugger;
    if (Id <= 0) {
        //show error message
        return false;
    }
    if (Name == undefined || Name == null || Name == '') {
        //show error message
        return false;
    }

    selectedIds.push(Id);
    selectedName.push(Name)
    $('#selectedItemId').val(selectedIds.join(','));
    $('#selectedItemName').val(selectedName.join(','));
}





function Deletetbn(Id) {

    var result = confirm("Want to delete?");
    if (result) {
        //debugger;
        let number = $('#searchIdentity').val();
        let currentid = parseInt(number);
        let linkUrl = "";
        if (currentid == 1) {
            linkUrl = '/BuyerJson/BuyerDelete';

        } else if (currentid == 2) {
            linkUrl = '/BuyerStyleJson/BuyerStyleDelete';
        }
        else if (currentid == 12) {
            linkUrl = '/BuyerStyleJson/BuyerSizeDelete';
        }

        let id = Id;
        $.ajax({
            url: linkUrl,
            type: "POST",
            data: { id: id },
            success: function (result) {
                console.log(result);
                debugger;
                if (result.Success) {


                    toastr.info('Delete Successfully');


                }
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    }
   
}


function Clear() {
    
    let number = $('#searchIdentity').val();
    let currentid = parseInt(number);
    if (currentid == 1) {
        $('#BuyerNames').val('');
        $('#BuyerCode').val('');
        $('#CountryId').val(0);
    }
    else if (currentid == 2) {
        $('#StyleCode').val('');
        $('#StyleNames').val('');
        $('#StyleSpece').val('');
        $('#BuyerId').val(0);
    }
}