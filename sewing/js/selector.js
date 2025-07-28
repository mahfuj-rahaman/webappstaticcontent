//const { remove } = require("toastr");

function loadSelector(selectionCode, loadParam, trgetValueId, trgetValueId) {

    switch (selectionCode) {

        case '':
            return swal("Error!", 'invalid code', "warning");

        case 'ddds':

            break;

        default:
    }

    return false;
}

function selectBuyer() {



}


function getHtml(heading, bodyContent) {

    let html = '';

    html += '<div class="modal fade" id="static-backdrop-slect-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">';
    html += '<div class="modal-dialog">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<h5 class="modal-title" id="staticBackdropLabel">';
    html += heading;
    html += '</h5>';
    html += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += bodyContent;
    html += '</div>';
    //html += '<div class="modal-footer">';
    //html += '<button type="button" class="btn btn-secondary float-start" data-bs-dismiss="modal">Close</button>';
    //html += '<button type="button" onclick="SaveOperation()" class="btn btn-primary">Save</button>';
    //html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div> ';

    $('#modal-holder').empty();
    $('#modal-holder').append(html);

    var myModal = new bootstrap.Modal(document.getElementById('static-backdrop-slect-modal'));
    myModal.show();

}
