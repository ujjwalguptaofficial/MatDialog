class Helper {
    CallBack: Function;

    protected openModal = function (callBack: Function, isInput?: boolean) {
        this.CallBack = callBack;
        var That = this;
        $('#divMatDialog .modal').modal('open');
        //registering button click
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'),
                DialogType = Modal.data('type');
            Modal.modal('close');
            if (That.CallBack != null) {
                if (DialogType == 'alert') {
                    That.CallBack();
                }
                else if (DialogType == 'confirm' || DialogType == 'dialog') {
                    var Value = $(this).data('val');
                    That.CallBack(Value != null ? JSON.parse(Value) : false);
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
                        That.CallBack(InputValue && InputValue.length > 0 ? InputValue : null);
                    }
                    else {
                        That.CallBack(null);
                    }
                }
            }
        });

        //registering modal overlay
        $('body').on('click', '.modal-overlay', function () {
            if (That.callBack != null) {
                var DialogType = $('#divMatDialog .modal').data('type');
                if (DialogType == 'alert') {
                    That.CallBack();
                }
                else if (DialogType == 'confirm') {
                    That.CallBack(false);
                }
                else if (DialogType == 'prompt' || DialogType == 'dialog') {
                    That.CallBack(null);
                }
            }
        })
        if (isInput) {
            $('#divMatDialog .modal .modal-content input').focus();
        }
    }

    protected closeModal = function (callBack?: Function) {
        $('#divMatDialog .modal').modal('close');
        if (callBack) {
            callBack();
        }
    }

    protected getPromptInputValue(type: string) {
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

    protected registerModal = function (config: IDialogOption) {
        var DefaultConfig = <IDialogOption>{
            Dismissible: true,
            EndingTop: '2%',
            InDuration: 300,
            OutDuration: 200,
            Opacity: 0.5,
            StartingTop: '2%',
            OnCompleted: function () {
                $('#divMatDialog .modal').off('click', '.modal-button');
                $('body').off('click', '.modal-overlay');
            }
        }
        if (config) {
            //registering modal
            $('.modal').modal({
                dismissible: config.Dismissible ? config.Dismissible : DefaultConfig.Dismissible, // Modal can be dismissed by clicking outside of the modal
                opacity: config.Opacity ? config.Opacity : DefaultConfig.Opacity, // Opacity of modal background
                inDuration: config.InDuration ? config.InDuration : DefaultConfig.InDuration, // Transition in duration
                outDuration: config.OutDuration ? config.OutDuration : DefaultConfig.OutDuration, // Transition out duration
                startingTop: config.StartingTop ? config.StartingTop : DefaultConfig.StartingTop, // Starting top style attribute
                endingTop: config.EndingTop ? config.EndingTop : DefaultConfig.EndingTop, // Ending top style attribute,
                complete: DefaultConfig.OnCompleted
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
                complete: DefaultConfig.OnCompleted
            });
        }
    }
}