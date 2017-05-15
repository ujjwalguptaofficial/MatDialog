interface IConfirm {
    Text: string,
    Ok: Button,
    Cancel: Button,
    ExecuteAfter: Function,
    ExecuteBefore: Function
};
interface Button {
    Text: string,
    ClassName: string,
    Value: string
}

module MatDialogs {
    export class Confirm {
        constructor(option) {
            if (typeof (option) === 'object') {
                this.createCustomConfirm(option);
            }
            else {
                this.createConfirm(option);
            }
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
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }
            var OkLabel = (option.Ok && option.Ok.Text) ? option.Ok.Text : 'Ok',
                CancelLabel = (option.Cancel && option.Cancel.Text) ? option.Cancel.Text : 'Cancel'
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
            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        }

    }
}