class Helper {
    CallBack: Function;
    Option: IPrompt;

    protected openModal = function (callBack: Function, isInput?: boolean) {
        this.CallBack = callBack;
        var That: Helper = this;
        $('#divMatDialog .modal').modal('open');
        //registering button click
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'),
                DialogType = Modal.data('type'),
                Value = $(this).data('val');
            Modal.modal('close');
            (Value == null) ? false : Value;

            if (That.CallBack != null) {
                if (DialogType == 'alert') {
                    That.CallBack();
                }
                else if (DialogType == 'confirm') {
                    That.CallBack(JSON.parse(Value));
                }
                else if (DialogType == 'prompt') {
                    if (JSON.parse(Value)) {
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
                else if (DialogType == 'create') {
                    That.CallBack(Value);
                }
            }
        });

        //registering modal overlay
        $('body').on('click', '.modal-overlay', function () {
            if (That.CallBack != null) {
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
            Dismissible: true, // Modal can be dismissed by clicking outside of the modal
            EndingTop: '2%', // Ending top style attribute,
            InDuration: 300, // Transition in duration
            OutDuration: 200, // Transition out duration
            Opacity: 0.5, // Opacity of modal background
            StartingTop: '2%', // Starting top style attribute
            OnCompleted: function () {
                $('#divMatDialog .modal').off('click', '.modal-button');
                $('body').off('click', '.modal-overlay');
            }
        }
        if (config) {
            //registering modal
            $('.modal').modal({
                dismissible: config.Dismissible != null ? config.Dismissible : DefaultConfig.Dismissible,
                opacity: config.Opacity ? config.Opacity : DefaultConfig.Opacity,
                inDuration: config.InDuration ? config.InDuration : DefaultConfig.InDuration,
                outDuration: config.OutDuration ? config.OutDuration : DefaultConfig.OutDuration,
                startingTop: config.StartingTop ? config.StartingTop : DefaultConfig.StartingTop,
                endingTop: config.EndingTop ? config.EndingTop : DefaultConfig.EndingTop,
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