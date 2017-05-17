interface IAlert {
    Text: string,
    Button: Button,
    ExecuteAfter: Function,
    ExecuteBefore: Function
}
module MatDialogs {
    export class Alert {
        constructor(option) {
            if (typeof (option) === 'object') {
                this.createCustomAlert(option);
            }
            else {
                this.createAlert(option);
            }
        }
        createAlert(Msg: string) {
            var ElementInnerHTML = '<div class="modal-header">' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" class="modal-button btn waves-effect waves-green">Ok</a></div>';
            $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
        }

        createCustomAlert(option: IAlert) {
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }
            var ButtonContent = (option.Button && option.Button.Label) ? option.Button.Label : 'Ok';
            var ElementInnerHTML = '<div class="modal-header">' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" class="modal-button btn waves-effect waves-green">' + ButtonContent + '</a></div>';
            $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
            if (option.Button && option.Button.Class) {
                $('#divMatDialog .modal .btn').addClass(option.Button.Class);
            }
            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        }
    }
}