interface IConfirm {
    Text: string,
    Ok: Button,
    Cancel: Button
};
interface IAlert {
    Text: string,
    Button: Button,
}
interface Button {
    Content: string,
    ClassName: string
}

class Helper {
    createAlert(Msg: string) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">OK</a></div>';
        $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
    }

    createCustomAlert(option: IAlert) {
        var ButtonContent = (option.Button && option.Button.Content) ? option.Button.Content : 'Ok';
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">' + ButtonContent + '</a></div>';
        if (option.Button && option.Button.ClassName) {
            $('#divMatDialog .modal .btn').addClass(option.Button.ClassName);
        }
        $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
    }

    createConfirm(Msg: string) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm btn-cancel">Cancel</a>' +
            '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm btn-ok">OK</a></div>';
        $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);

    }

    createCustomConfirm = function (option: IConfirm) {
        var OkLabel = (option.Ok && option.Ok.Content) ? option.Ok.Content : 'Ok',
            CancelLabel = (option.Cancel && option.Cancel.Content) ? option.Cancel.Content : 'Cancel'
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm btn-cancel">' + CancelLabel + '</a>' +
            '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm btn-ok">' + OkLabel + '</a></div>';
        $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);
        if (option.Ok && option.Ok.ClassName) {
            $('#divMatDialog .modal .confirm .btn-ok').addClass(option.Ok.ClassName);
        }
        if (option.Cancel && option.Cancel.ClassName) {
            $('#divMatDialog .modal .confirm .btn-cancel').addClass(option.Cancel.ClassName);
        }
    }


}