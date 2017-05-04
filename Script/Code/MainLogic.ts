interface DialogOption {

}
class MatDialog extends Helper {
    callBack: Function;
    constructor() {
        super();
        var That = this;
        //create a matdialog container
        var container = document.createElement('div');
        container.id = 'divMatDialog';
        container.innerHTML = '<div class="modal"></div>'
        document.body.appendChild(container);

        //registering modal
        $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '2%', // Starting top style attribute
            endingTop: '2%' // Ending top style attribute,
        });

        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'),
                DialogType = Modal.data('type');
            Modal.modal('close');
            if (DialogType == 'alert') {
                if (That.callBack != null) {
                    That.callBack();
                }
            }
            else if (DialogType == 'confirm') {
                if (That.callBack != null) {
                    var Value = $(this).data('val');
                    That.callBack(Value != null ? JSON.parse(Value) : false);
                }
            }

        });

        $('body').on('click', '.modal-overlay', function () {
            var DialogType = $('#divMatDialog .modal').data('type');
            if (DialogType == 'alert') {
                if (That.callBack != null) {
                    That.callBack();
                }
            }
            else if (DialogType == 'confirm') {
                if (That.callBack != null) {
                    That.callBack(false);
                }
            }
        })
    }

    alert(Message: any, callBack: Function) {
        this.callBack = callBack;
        if (typeof (Message) === 'object') {
            this.createCustomAlert(Message);
        }
        else {
            this.createAlert(Message);
        }
        $('#divMatDialog .modal').modal('open');
    }

    confirm(Message: any, callBack: Function) {
        this.callBack = callBack;
        if (typeof (Message) === 'object') {
            this.createCustomConfirm(Message);
        }
        else {
            this.createConfirm(Message);
        }
        $('#divMatDialog .modal').modal('open');
    }
}