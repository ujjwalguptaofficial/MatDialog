interface IPrompt {
    Text: string,
    Ok: Button,
    Cancel: Button
}
module MatDialogs {
    export class Prompt {

        createPrompt(Msg: string) {
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + Msg + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">OK</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
        }

        createCustomPrompt(option: IPrompt) {
            var OkLabel = (option.Ok && option.Ok.Content) ? option.Ok.Content : 'Ok',
                CancelLabel = (option.Cancel && option.Cancel.Content) ? option.Cancel.Content : 'Cancel'
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + option.Text + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">OK</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);

            if (option.Ok && option.Ok.ClassName) {
                $('#divMatDialog .modal .prompt .btn-ok').addClass(option.Ok.ClassName);
            }
            if (option.Cancel && option.Cancel.ClassName) {
                $('#divMatDialog .modal .prompt .btn-cancel').addClass(option.Cancel.ClassName);
            }
        }
    }
}