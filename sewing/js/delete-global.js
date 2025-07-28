function DeleteElement(deleteUrl,deleteText) {

    swal({
        title: "Confirm delete?!",
        text: deleteText,
        icon: "warning",
        dangerMode: true,
        showCancelButton: true,
    })
        .then(willDelete => {
            if (willDelete) {

                $.ajax({
                    url: deleteUrl,
                    method: 'DELETE',
                    //traditional: true,
                    success: function (result) {
                        debugger;
                        console.log(result);
                        if (result.Success) {
                            swal("Success!", "Item deleted", "success");
                            location.reload();
                        }
                        else {
                            swal("Error!", result.Message, "warning");
                        }
                    },
                    error: function (error) {
                        swal("Error!", error, "warning");
                    }
                });


            }
        });






}
