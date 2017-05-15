interface IDialogOption {
    Dismissible: Boolean, // Modal can be dismissed by clicking outside of the modal
    Opacity: number, // Opacity of modal background
    InDuration: number, // Transition in duration
    OutDuration: number, // Transition out duration
    StartingTop: string, // Starting top style attribute
    EndingTop: string,
    OnCompleted: Function
}

class MatDialog extends Helper {
    Option: IPrompt;
    setModalConfig = function (config: IDialogOption) {
        this.registerModal(config);
    }

    constructor(config: IDialogOption) {
        super();
        var That = this;
        //create a matdialog container
        if (document.getElementById('divMatDialog') == null) {
            var container = document.createElement('div');
            container.id = 'divMatDialog';
            container.innerHTML = '<div class="modal"></div>'
            document.body.appendChild(container);
            this.registerModal(config);
        }

    }

    alert(message: any, callBack: Function) {
        new MatDialogs.Alert(message);
        this.openModal(callBack);
    }

    confirm(message: any, callBack: Function) {
        new MatDialogs.Confirm(message);
        this.openModal(callBack);
    }

    prompt(message: any, callBack: Function) {
        new MatDialogs.Prompt(message);
        this.Option = message;
        this.openModal(callBack, true);

    }

    create(option: IDialog, callBack) {
        if (option) {
            new MatDialogs.Dialog(option);
            this.openModal(callBack);
        }
        else {
            console.error('no Dialog option provided');
        }
    }
}