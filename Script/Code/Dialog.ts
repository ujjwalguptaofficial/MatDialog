interface IDialog {
    Title: {
        Text: string,
        ShowClose: boolean
    },
    Content: {
        Text: string,
        Class: string
    },
    ButtonType: string
    Buttons: Array<Button>,
    callBack: Function,
    ExecuteAfter: Function,
    ExecuteBefore: Function
}
module MatDialogs {
    export class Dialog {
        createDialog = function (option: IDialog) {
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }

            var ElementInnerHTML = '';
            //Title
            if (option.Title) {
                ElementInnerHTML += '<div class="modal-header">'
                if (option.Title.Text) {
                    ElementInnerHTML += '<span class="prompt-msg">' + option.Title.Text + '</span>';
                }
                if (option.Title.ShowClose == undefined || JSON.parse(<any>option.Title.ShowClose)) {
                    ElementInnerHTML += '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i>'
                }
                ElementInnerHTML += '</div><div class="divider"></div>'
            }
            //Content
            if (option.Content) {
                ElementInnerHTML += '<div class="modal-content ' + (option.Content.Class ? option.Content.Class : "") + '">' + option.Content.Text + '</div>';
            }
            //Button
            var BottomHtml = "";
            if (option.ButtonType) {
                var CancelLabel = 'Cancel', OkLabel = 'Ok';
                if (option.ButtonType.toLowerCase() == 'ok') {
                    BottomHtml = '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">' + OkLabel + '</a>';
                }
                else {
                    BottomHtml = '<a href="#!" data- val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel" > ' + CancelLabel + ' </a>' +
                        '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">' + OkLabel + '</a>';
                }
            }
            else if (option.Buttons) {
                option.Buttons.forEach(function (item) {
                    BottomHtml = '<a href="#!" data-val=' + item.Value + 'class="modal-button btn waves-effect waves-green prompt btn-ok ' + (item.ClassName ? item.ClassName : "") + '">' + item.Text + '</a>';
                })
            }
            if (BottomHtml.length > 0) {
                ElementInnerHTML += '<div class="divider"></div><div class="modal-footer">' + BottomHtml + '</div>';
            }
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        }
    }
}