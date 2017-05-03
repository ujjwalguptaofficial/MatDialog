class Helper {
    createAlert(Msg: string) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-action modal-close material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">OK</a></div>';
        $('#divMatDialog .modal').html(ElementInnerHTML);
    }
}