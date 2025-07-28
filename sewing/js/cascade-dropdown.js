function CascadeDropdown(id, target, code) {
    debugger;
    let currentId = $('#' + id).val();
    currentId = parseInt(currentId);

    let dropDownUrl = '/DropDown/GetCascade?code=' + code + '&id=' + currentId;

    let $list = $('#' + target);
    $list.empty();
    $.ajax({
        url: dropDownUrl,
        type: "GET",
        traditional: true,
        success: function(result) {
            console.log(result);
            if (result.Success) {

                result.Payload.forEach((x) => {
                    $list.append('<option value="' + x.Id + '"> ' + x.Name + ' </option>');
                });

                //$.each(result.Payload, function (item) {
                //    debugger;
                //    console.log("item");
                //    console.log(item);
                //    $list.append('<option value="' + item["Id"] + '"> ' + item["Name"] + ' </option>');
                //});
            }
        },
        error: function(error) {
            //alert("Something went wrong call the police");
        }
    });




}
