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
            endingTop: '2%', // Ending top style attribute,
            complete: function () {
                if (That.callBack != null) {
                    That.callBack();
                }
            }
        });

    }

    alert(Message: string, callBack: Function) {
        this.callBack = callBack;
        this.createAlert(Message);
        $('#divMatDialog .modal').modal('open');
    }
}