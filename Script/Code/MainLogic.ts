interface IDialog {
    Dismissible: Boolean, // Modal can be dismissed by clicking outside of the modal
    Opacity: number, // Opacity of modal background
    InDuration: number, // Transition in duration
    OutDuration: number, // Transition out duration
    StartingTop: string, // Starting top style attribute
    EndingTop: string
}

class MatDialog extends Helper {
    callBack: Function;
    Option: IPrompt;

    registerModal = function (config: IDialog) {
        var DefaultConfig = <IDialog>{
            Dismissible: true,
            EndingTop: '2%',
            InDuration: 300,
            OutDuration: 200,
            Opacity: 0.5,
            StartingTop: '2%'
        };
        if (config) {
            //registering modal
            $('.modal').modal({
                dismissible: config.Dismissible ? config.Dismissible : DefaultConfig.Dismissible, // Modal can be dismissed by clicking outside of the modal
                opacity: config.Opacity ? config.Opacity : DefaultConfig.Opacity, // Opacity of modal background
                inDuration: config.InDuration ? config.InDuration : DefaultConfig.InDuration, // Transition in duration
                outDuration: config.OutDuration ? config.OutDuration : DefaultConfig.OutDuration, // Transition out duration
                startingTop: config.StartingTop ? config.StartingTop : DefaultConfig.StartingTop, // Starting top style attribute
                endingTop: config.EndingTop ? config.EndingTop : DefaultConfig.EndingTop // Ending top style attribute,
            });
        }
        else {
            $('.modal').modal({
                dismissible: DefaultConfig.Dismissible,
                opacity: DefaultConfig.Opacity,
                inDuration: DefaultConfig.InDuration,
                outDuration: DefaultConfig.OutDuration,
                startingTop: DefaultConfig.StartingTop,
                endingTop: DefaultConfig.EndingTop,
            });
        }
    }

    constructor(config: IDialog) {
        super();
        var That = this;
        //create a matdialog container
        var container = document.createElement('div');
        container.id = 'divMatDialog';
        container.innerHTML = '<div class="modal"></div>'
        document.body.appendChild(container);

        this.registerModal(config);
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'),
                DialogType = Modal.data('type');
            Modal.modal('close');
            if (That.callBack != null) {
                if (DialogType == 'alert') {
                    That.callBack();
                }
                else if (DialogType == 'confirm') {
                    var Value = $(this).data('val');
                    That.callBack(Value != null ? JSON.parse(Value) : false);
                }
                else if (DialogType == 'prompt') {
                    var Value = $(this).data('val');
                    if (Value != null ? JSON.parse(Value) : false) {
                        var InputValue;
                        if (That.Option.Input) {
                            InputValue = That.getPromptInputValue(That.Option.Input.Type);
                        }
                        else {
                            InputValue = $('#divMatDialog .modal input[type="text"]').val();
                        }
                        That.callBack(InputValue && InputValue.length > 0 ? InputValue : null);
                    }
                    else {
                        That.callBack(null);
                    }
                }
            }
        });

        $('body').on('click', '.modal-overlay', function () {
            if (That.callBack != null) {
                var DialogType = $('#divMatDialog .modal').data('type');
                if (DialogType == 'alert') {
                    That.callBack();
                }
                else if (DialogType == 'confirm') {
                    That.callBack(false);
                }
                else if (DialogType == 'prompt') {
                    That.callBack(null);
                }
            }
        })
    }

    private getPromptInputValue(type: string) {
        switch (type) {
            case 'text':
            case 'date':
            case 'number':
            case 'email':
            case 'password': return $('#divMatDialog .modal input[type=' + type + ']').val();
            case 'select': return $('#divMatDialog .modal #selectMatDialog').val();
            case 'radio': return $('#divMatDialog .modal input[name="radioMatDialog"]:checked').val()
            case 'check':
            case 'checkbox': var Values = [];
                $('#divMatDialog .modal input[name="checkMatDialog"]:checked').each(function () {
                    Values.push($(this).val());
                });
                return Values;
            default: return $('#divMatDialog .modal input[type="text"]').val();
        }
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

    prompt(Message: any, callBack: Function) {
        this.callBack = callBack;
        var Prompt = new MatDialogs.Prompt();
        if (typeof (Message) === 'object') {
            Prompt.createCustomPrompt(Message);
        }
        else {
            Prompt.createPrompt(Message);
        }
        this.Option = Message;
        $('#divMatDialog .modal').modal('open');
        $('#divMatDialog .modal input[type="text"]').focus();
    }
}