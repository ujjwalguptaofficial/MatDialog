interface IPrompt {
    Text: string,
    Buttons: {
        Ok: Button,
        Cancel: Button
    }
    Input: IInput,
    ExecuteAfter: Function,
    ExecuteBefore: Function
}

interface IInput {
    Type: string,
    Values: Array<{
        Text: string,
        Value: string
    }>
}

module MatDialogs {
    export class Prompt {
        constructor(option) {
            if (typeof (option) === 'object') {
                this.createCustomPrompt(option);
            }
            else {
                this.createPrompt(option);
            }
        }
        createPrompt(Msg: string) {
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + Msg + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">Ok</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
        }

        createCustomPrompt(option: IPrompt) {
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }
            var OkLabel = (option.Buttons && option.Buttons.Ok && option.Buttons.Ok.Label) ? option.Buttons.Ok.Label : 'Ok',
                CancelLabel = (option.Buttons && option.Buttons.Cancel && option.Buttons.Cancel.Label) ? option.Buttons.Cancel.Label : 'Cancel'

            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + option.Text + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content">' + this.getInnerContent(option.Input) + '</div><div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">' + CancelLabel + '</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">' + OkLabel + '</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);

            if (option.Buttons && option.Buttons.Ok && option.Buttons.Ok.Class) {
                $('#divMatDialog .modal .prompt.btn-ok').addClass(option.Buttons.Ok.Class);
            }
            if (option.Buttons && option.Buttons.Cancel && option.Buttons.Cancel.Class) {
                $('#divMatDialog .modal .prompt.btn-cancel').addClass(option.Buttons.Cancel.Class);
            }

            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        }

        getInnerContent = function (input: IInput) {
            var Type = (!input || !input.Type) ? 'Text' : input.Type;
            switch (Type) {
                case 'text':
                case 'date':
                case 'number':
                case 'email':
                case 'password': return '<input type="' + input.Type + '"/>';
                case 'select': if (input.Values && input.Values.length > 0) {
                    var Content = '<select id="selectMatDialog" class="browser-default">'
                    input.Values.forEach(function (value) {
                        Content += '<option value=' + value.Value + '>' + value.Text + '</option>';
                    })
                    Content += '</select>';
                    return Content;
                }
                else {
                    console.error('no values provided');
                    return '';
                }
                case 'radio': if (input.Values && input.Values.length > 0) {
                    var Content = "";
                    input.Values.forEach(function (value, index) {
                        Content += '<div class="margin-top-5px"><input type="radio" id=' + index + ' name="radioMatDialog" value="' + value.Value + '"/><label for=' + index + '>' + value.Text + '</label></div>';
                    });
                    return Content;
                }
                else {
                    console.error('no values provided');
                    return '';
                }
                case 'check':
                case 'checkbox': if (input.Values && input.Values.length > 0) {
                    var Content = "";
                    input.Values.forEach(function (value, index) {
                        Content += '<div class="margin-top-5px"><input type="checkbox" id=' + index + ' name="checkMatDialog" value=' + value.Value + '><label for=' + index + '>' + value.Text + '</label></div>';
                    });
                    return Content;
                }
                else {
                    console.error('no values provided');
                    return '';
                }
                default: return '<input type="text" />';
            }
        }
    }
}