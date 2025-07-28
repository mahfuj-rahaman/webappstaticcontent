//const { ajax } = require("jquery");

//const { forEach } = require("angular");









//dropdown casecade

function CascadeMultipleDropdown(id, targets, codes) {
    //debugger;
    let arrTargets = targets.split(',');
    let arrCodes = codes.split(',');

    if (arrTargets.length == arrCodes.length) {

        for (var i = 0; i < arrTargets.length; i++) {

            let target = arrTargets[i];
            let code = arrCodes[i];
            CascadeDropdown(id, target, code);

        }

    } else {
        alert("invalid parameter to cascade");
    }

}

function ProductDataShow(tergetBuyerId, tergetBuyerName) {
    $.get("/Po/GetPartialView", function (data) {
        Resetmodal();
        $("#partialContainer").html(data);
        $("#exampleModal").modal('show');
        $("#exampleModalLabel").html("Po Number List");
        $('#searchIdentity').val(7);
        let buyerdrop = document.getElementById('buyerid');
        buyerdrop.removeAttribute('style');
        $('#targetCallById').val(tergetBuyerId);
        $('#targetCallByName').val(tergetBuyerName);
        let elements = document.getElementsByClassName('step1');
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('style');
        }
    });
}


function DataShow(tergetBuyerId,tergetBuyerName) {
    $.get("/Po/GetPartialView", function (data) {
        Resetmodal();
        $("#partialContainer").html(data);
        $("#exampleModal").modal('show');
        $("#exampleModalLabel").html("Buyer List");
        $('#searchIdentity').val(1);

        $('#targetCallById').val(tergetBuyerId);
        $('#targetCallByName').val(tergetBuyerName);

        let elements = document.getElementsByClassName('step1');
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('style');
        }

        let hidenelements = document.getElementsByClassName('step2');
        for (let i = 0; i < hidenelements.length; i++) {
            hidenelements[i].style.display = 'none';
        }

        let stpe3 = document.getElementsByClassName('step3');
        for (let i = 0; i < stpe3.length; i++) {
            stpe3[i].style.display = 'none';
        }

    });
}

function DataStyleShow(targetValueId,targetValueName) {
    $.get("/Po/GetPartialView", function (data) {
       
        Resetmodal();
        $("#partialContainer").html(data);
        $("#exampleModal").modal('show');
        $("#exampleModalLabel").html("Buyer Style");
        $('#searchIdentity').val(2);

        $('#targetCallById').val(targetValueId);
        $('#targetCallByName').val(targetValueName);

        let elements = document.getElementsByClassName('step2');
        for (let i = 0; i < elements.length; i++) {

            elements[i].removeAttribute('style');
        }


        let hideelements = document.getElementsByClassName('step1');
        for (let i = 0; i < hideelements.length; i++) {
            hideelements[i].style.display = 'none';
        }


        let stpe3 = document.getElementsByClassName('step3');
        for (let i = 0; i < stpe3.length; i++) {
            stpe3[i].style.display = 'none';
        }

    });
}



function SizeDataShow(targetValueId, targetValueName) {
    $.get("/Po/GetPartialView", function (data) {

        Resetmodal();
        $("#partialContainer").html(data);
        $("#exampleModal").modal('show');
        $("#exampleModalLabel").html("Size Name");
        $('#searchIdentity').val(12);

        $('#targetCallById').val(targetValueId);
        $('#targetCallByName').val(targetValueName);

        let hidenelements = document.getElementsByClassName('step2');
        for (let i = 0; i < hidenelements.length; i++) {
            hidenelements[i].style.display = 'none';
        }

        let hideelements = document.getElementsByClassName('step1');
        for (let i = 0; i < hideelements.length; i++) {
            hideelements[i].style.display = 'none';
        }

        let stpe3 = document.getElementsByClassName('step3');
        for (let i = 0; i < stpe3.length; i++) {

            stpe3[i].removeAttribute('style');
        }

    });
}









function Resetmodal() {



    
    $('#targetCallById').val('');
    $('#targetCallByName').val('');
    $('#selectedItemId').val('');
    $('#selectedItemName').val('');
    var tableHeaderRowCount = 1;
    var table = document.getElementById('example');   
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    const rows = table.querySelectorAll("tr");
    if (rows.length > 2) table.removeChild(rows[0]);

}


function Editbtnvalue(Id) {

    let id = Id;
    let number = $('#searchIdentity').val();
    let currentid = parseInt(number);

    if (currentid == 1) {

        var button = document.getElementById('insertData');
        button.click();
        let elements = document.getElementsByClassName('step1');
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('style');
        }
        $('#Buyerid').val(Id);
        $("#btnInsert").text('update');
        debugger;

        $.ajax({
            url: '/BuyerJson/BuyerUpdate',
            type: "GET",
            data: { id: id },
            success: function (result) {
                console.log(result);

                if (result.Success) {
                    let data = result.Payload;

                    debugger;
                    $('#BuyerName').val(data.BuyerName);
                    $('#BuyerCode').val(data.BuyerCode);
                    $('#CountryId').val(data.CountryId);


                }
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });


    } else if (currentid == 2) {

        EditbtnStyle(Id);
    }
    else if (currentid == 12) {

        BuyerSizeEdit(Id);
    }



}



function BuyerSizeEdit(Id) {
    var button = document.getElementById('insertData');
    button.click();
    let elements = document.getElementsByClassName('step3');
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('style');
    }
    $('#SizeId').val(Id);
    $("#btnSizeSave").text('update');
  

    $.ajax({
        url: '/BuyerStyleJson/BuyerSizeFind',
        type: "GET",
        data: { id: Id },
        success: function (result) {
            console.log(result);

            if (result.Success) {
                let data = result.Payload;             
               
                $('#Code').val(data.BuyerCode);
                $('#Names').val(data.BuyerName);
                $('#Specifi').val(data.StyleSpecification);
                $('#BuyerIds').val(data.BuyerId);


            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}



function add() {


    let x = '';
    const divEle = document.getElementById('hourinput');

    let counter = 1;

    function generateUniqueId() {

        return 'Value_' + counter++;

    }



    x += '<div id="inputFormRow" class="row"><div class="col-md-3"><div class="form-group"><label id="SewingLineId" class="control-label">Start Time</label><input type="time" id="' + generateUniqueId() + '"  name="time" class="form-control"  placeholder = "HH:mm" /></div ></div ><div class="col-md-3"><div class="form-group"><label id="SewingLineId" class="control-label">End Time</label><input type="time" name="time" id="' + generateUniqueId() + '"class="form-control" placeholder="HH:mm" /></div></div><div class="col-md-1" style="margin-top:30px;"><a type="button" onclick="Cancel(this)" id="btncancel"><i class="fa-solid fa-xmark"></i></a></div></div > ';


    document.getElementById('hourinput').innerHTML += x;

};


function SearchValues(data) {
    //debugger;
    let item = parseInt(data);
    let number = $('#searchIdentity').val();
    let currentid = parseInt(number);
    let value = $('#Searchvalue').val();
   // debugger;
    let datalink = "";
    if (item == 12 ) {
        datalink = '/BuyerStyleJson/GetBuyerSizeData';
        GetDataBuyerSize(datalink);
    } else {



        if (item == 3 ) {
            datalink = '/BuyerJson/GetBuyerData';
            DynamicTable(datalink);
        }
        else if (item == 4 ) {
            datalink = '/BuyerStyleJson/GetBuyerSytleData';
            DynamicTable(datalink);
        }
       

        if (item == 10) {

            datalink = '/BuyerJson/GetSearchBuyerData?search=' + value + '&id=' + currentid;
            if (currentid == 12) {

               
                GetDataBuyerSize(datalink);


            } else {
                

                DynamicTable(datalink);
            }

            
        }



       

    }

}


function DynamicTable(datalink) {
    $.ajax({
        url: datalink,
        type: "GET",

        traditional: true,
        success: function (result) {
            console.log(result);

            if (result.Success) {

                $('#op-issue-body').empty();
                let data = result.Payload;
                if (data.length > 0) {
                    let trss = '';
                    for (let i = 0; i < data.length; i++) {

                        let name = "";
                        name += "'";
                        name += data[i].Name;
                        name += "'";


                        trss += '<tr>';


                        //1
                        trss += '<td>';
                        trss += '<input type="radio" id="g2" onclick="CheckRadioSelect(' + data[i].Id + ',' + name + ')" name="radioGroup"  />';
                        trss += '</td>';
                        //2
                        trss += '<td>';
                        trss += data[i].Code;
                        trss += '</td>';


                        //3
                        trss += '<td>';
                        trss += data[i].Name;
                        trss += '</td>';



                        //4
                        trss += '<td>';
                        trss += data[i].CreateDate;
                        trss += '</td>';

                        //5
                        trss += '<td>';
                        trss += '<a type="button" onclick="Editbtnvalue(' + data[i].Id + ')"   class="collapseExa" id="' + data[i].Id + '"><i class="fa fa-pen"></i></a> &nbsp; <a  type="button" onclick="Deletetbn(' + data[i].Id + ')"  class="collapseExa"  id="' + data[i].Id + '"><i class="fa fa-trash"></i></a>';
                        trss += '</td>';

                        trss += '</tr>';
                    }

                    $('#op-issue-body').append(trss);
                    $('#Searchvalue').val('');
                    $('#example').DataTable();
                }
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}


function GetDataBuyerSize(datalink)
{
   

    $.ajax({
        url: datalink,
        type: "GET",

        traditional: true,
        success: function (result) {
            console.log(result);

            if (result.Success) {

                $('#op-issue-body').empty();
                let data = result.Payload;
                if (data.length > 0) {
                    let trss = '';
                    for (let i = 0; i < data.length; i++) {

                        let name = "";
                        name += "'";
                        name += data[i].Name;
                        name += "'";


                        trss += '<tr>';
                    

                        //1
                        trss += '<td>';
                        trss += '<input type="checkbox" id="g2" onclick="CheckboxSelect(' + data[i].Id + ',' + name + ')" name="radioGroup"  />';
                        trss += '</td>';
                        //2
                        trss += '<td>';
                        trss += data[i].Code;
                        trss += '</td>';


                        //3
                        trss += '<td>';
                        trss += data[i].Name;
                        trss += '</td>';



                        //4
                        trss += '<td>';
                        trss += data[i].CreateDate;
                        trss += '</td>';

                        //5
                        trss += '<td>';
                        trss += '<a type="button" onclick="Editbtnvalue(' + data[i].Id + ')"   class="collapseExa" id="' + data[i].Id + '"><i class="fa fa-pen"></i></a> &nbsp; <a  type="button" onclick="Deletetbn(' + data[i].Id + ')"  class="collapseExa"  id="' + data[i].Id + '"><i class="fa fa-trash"></i></a>';
                        trss += '</td>';

                        trss += '</tr>';
                    }

                    $('#op-issue-body').append(trss);
                    $('#Searchvalue').val('');
                    $('#example').DataTable();
                }
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });


}




function Cancel(element) {
    debugger;
    element.closest('#inputFormRow').remove();

};

function trCancel(element) {
    console.log("Cancel function called"); // Check if the function is being called
    element.closest('tr').remove(); // Remove the closest ancestor 'tr'
}








function EditbtnStyle(Id) {


    let id = Id;

    var button = document.getElementById('insertData');
    button.click();
    let elements = document.getElementsByClassName('step2');
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('style');
    }
    $('#StyleId').val(Id);
    $("#btnStyleSave").text('update');
    debugger;

    $.ajax({
        url: '/BuyerStyleJson/BuyerStyleUpdate',
        type: "GET",
        data: { id: id },
        success: function (result) {
            console.log(result);
            debugger;
            if (result.Success) {
                let data = result.Payload;

                debugger;
                $('#StyleCode').val(data.BuyerCode);
                $('#StyleName').val(data.BuyerName);
                $('#StyleSpece').val(data.StyleSpecification);
                $('#BuyerId').val(data.BuyerId);


            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}

function ValueSet() {
    //debugger;
    let targetCallById = $('#targetCallById').val();
    let targetCallByName = $('#targetCallByName').val();
    let selectedItemId = $('#selectedItemId').val();
    let selectedItemName = $('#selectedItemName').val();

    let idList = selectedItemId.split(',').map(id => parseInt(id, 10));

    $('#' + targetCallById).val(idList);
    $('#' + targetCallByName).val(selectedItemName);

    selectedIds = [];
    selectedName = [];
    $("#exampleModal").modal('hide');

}







function StyleUpdate () {

 
    let stylecode = $('#StyleCode').val();
    let stylename = $('#StyleNames').val();
    let styleSpece = $('#StyleSpece').val();
    let BuyerId = $('#BuyerId').val();
    let StyleId = $('#StyleId').val();

    var model = {
        BuyerCode: stylecode,
        BuyerName: stylename,
        StyleSpecification: styleSpece,
        BuyerId: BuyerId,
        Id: StyleId

    }
    $.ajax({
        url: '/BuyerStyleJson/BuyerStyleInsert',
        type: "POST",
        data: model,
        success: function (result) {
            console.log(result);

            if (result.Success) {

                SearchValues(4);
                $('#StyleCode').val('');
                $('#StyleName').val('');
                $('#StyleSpece').val('');
                $('#BuyerId').val(0);

                toastr.success(result.Message);
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}


function ColorDataShow(colorid) {

    $.ajax({
        url: '/BuyerStyleJson/ColorCreate',
        type: "GET",
        data: { id: colorid },
        success: function (result) {
            console.log(result);
            
            if (result.Success) {
               
                window.open('/ProductType/Index', '_blank');
               
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}

function BuyerSizeUpdate() {

    let code = $('#Code').val();
    let name = $('#Names').val();
    let Spece = $('#Specifi').val();
    let BuyerId = $('#BuyerIds').val();
    let SizeId = $('#SizeId').val();

    var model = {
        BuyerCode: code,
        BuyerName: name,
        StyleSpecification: Spece,
        BuyerId: BuyerId,
        Id: SizeId

    }
    $.ajax({
        url: '/BuyerStyleJson/BuyerSizeInsert',
        type: "POST",
        data: model,
        success: function (result) {
            console.log(result);

            if (result.Success) {

                SearchValues(12);
                $('#Code').val('');
                $('#Names').val('');
                $('#Specifi').val('');
                $('#BuyerIds').val(0);

                toastr.success(result.Message);
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

}


function BuyerDataSave() {
   
    let name = $('#BuyerNames').val();
    let code = $('#BuyerCode').val();
    let CountryId = $('#CountryId').val();
    let id = $('#Buyerid').val();
    var model = {
        BuyerName: name,
        BuyerCode: code,
        CountryId: CountryId,
        BuyerId: id
    };

    $.ajax({
        url: '/BuyerJson/BuyerInsert',
        type: "POST",
        data: model,
        success: function (result) {
            console.log(result);

            if (result.Success) {

                SearchValues(3);

                $('#BuyerName').val('');
                $('#BuyerCode').val('');
                $('#CountryId').val(0);
                toastr.success("Buyer Create Successfully");
            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}


$('.delete-btn').click(function () {
    debbuger;
    var id = $(this).data('id');
    if (confirm('Are you sure you want to delete this item?')) {
        // Redirect to delete action with the item id
        window.location.href = '@Url.Action("Delete", "YourController")?id=' + id;
    }
});


function ValueSet() {
    //debugger;
    let targetCallById = $('#targetCallById').val();
    let targetCallByName = $('#targetCallByName').val();
    let selectedItemId = $('#selectedItemId').val();
    let selectedItemName = $('#selectedItemName').val();


    $('#' + targetCallById).val(selectedItemId);
    $('#' + targetCallByName).val(selectedItemName);

    selectedIds = [];
    selectedName = [];
    $("#exampleModal").modal('hide');

}



function dataSave() {

    debugger;
    let datevalue = $('#WorkingDay').val();
    let rangevalue = $('#DateRange').val();
    let PlantId = $('#PlantId').val();
    let PlantUnitId = $('#PlantUnitId').val();
    let SewingLineId = $('#SewingLineId').val();
    let Id = $("#Id").val();


    const timeInputs = document.querySelectorAll('input[type="time"]');
    let timeValues = [];
    timeInputs.forEach(input => {
        let value = input.value;
        //const hour = parseInt(value.split(':')[0]);       
        //const period = hour >= 12 ? 'PM' : 'AM';
        //const currect = convertTo24Hour(value);
        timeValues.push(value);
    });

    console.log(timeValues);


    //function convertTo24Hour(time12h) {
    //    let [hours, minutes] = time12h.split(':');
    //    let hour = parseInt(hours);
    //    let period = hour >= 12 ? 'PM' : 'AM';        
    //    if (hour > 12) {
    //        hour -= 12;
    //    }       
    //    if (hour === 0) {
    //        hour = 12;
    //    }       
    //    return `${hour}:${minutes} ${period}`;
    //}
    let timevDetails = [];
    const lenval = timeValues.length / 2;
    for (let i = 0; i < lenval; i++) {
        let details = {
            startDate: timeValues[i * 2],
            endDate: timeValues[i * 2 + 1],
        };
        timevDetails.push(details);
    }

    //debugger;
    let model = {
        WorkingDay: datevalue,
        SewingLineId: SewingLineId,
        PlantId: PlantId,
        PlantUnitId: PlantUnitId,
        TimeDetails: timevDetails,
        Id: Id,
        DateRange: rangevalue,
    };

    $.ajax({
        url: '/SewingLineJson/SewingWorking',
        type: "POST",
        data: model,
        success: function (result) {
            console.log(result);
            //debugger;
            if (result.success) {

                toastr.success('SewingLine Work Create Successfully');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
               
                setTimeout(function () {
                    window.location.href = '/SewingLine/LineWorkList';
                }, 1000);
               

            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });


}



function workHourUpdate() {
    let datevalue = $('#WorkingDay').val();
    let rangevalue = $('#DateRange').val();
    let PlantId = $('#PlantId').val();
    let PlantUnitId = $('#PlantUnitId').val();
    let SewingLineId = $('#SewingLineId').val();
    let Id = $("#Id").val();


    const timeInputs = document.querySelectorAll('input[type="time"]');
    let timeValues = [];
    timeInputs.forEach(input => {
        let value = input.value;       
        timeValues.push(value);
    });

    console.log(timeValues);


    let timevDetails = [];
    const lenval = timeValues.length / 2;
    for (let i = 0; i < lenval; i++) {
        let details = {
            startDate: timeValues[i * 2],
            endDate: timeValues[i * 2 + 1],
        };
        timevDetails.push(details);
    }

    
    let model = {
        WorkingDay: datevalue,
        SewingLineId: SewingLineId,
        PlantId: PlantId,
        PlantUnitId: PlantUnitId,
        TimeDetails: timevDetails,
        Id: Id,
        DateRange: rangevalue,
    };

    $.ajax({
        url: '/SewingLineJson/SewingWorkingUpdate',
        type: "POST",
        data: model,
        success: function (result) {
            console.log(result);
           
            if (result.success) {

                toastr.success('SewingLine Work Update Successfully');
                setTimeout(function () {
                    window.location.reload();
                }, 1000);

                setTimeout(function () {
                    window.location.href = '/SewingLine/LineWorkList';
                }, 1000);


            }
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}