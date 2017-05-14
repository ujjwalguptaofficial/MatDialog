var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Helper = (function () {
    function Helper() {
        this.createCustomConfirm = function (option) {
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }
            var OkLabel = (option.Ok && option.Ok.Text) ? option.Ok.Text : 'Ok', CancelLabel = (option.Cancel && option.Cancel.Text) ? option.Cancel.Text : 'Cancel';
            var ElementInnerHTML = '<div class="modal-header">' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm btn-cancel">' + CancelLabel + '</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm btn-ok">' + OkLabel + '</a></div>';
            $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);
            if (option.Ok && option.Ok.ClassName) {
                $('#divMatDialog .modal .confirm .btn-ok').addClass(option.Ok.ClassName);
            }
            if (option.Cancel && option.Cancel.ClassName) {
                $('#divMatDialog .modal .confirm .btn-cancel').addClass(option.Cancel.ClassName);
            }
            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        };
    }
    Helper.prototype.createAlert = function (Msg) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">OK</a></div>';
        $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
    };
    Helper.prototype.createCustomAlert = function (option) {
        if (option.ExecuteBefore) {
            option.ExecuteBefore();
        }
        var ButtonContent = (option.Button && option.Button.Text) ? option.Button.Text : 'Ok';
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">' + ButtonContent + '</a></div>';
        if (option.Button && option.Button.ClassName) {
            $('#divMatDialog .modal .btn').addClass(option.Button.ClassName);
        }
        $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
        if (option.ExecuteAfter) {
            option.ExecuteAfter();
        }
    };
    Helper.prototype.createConfirm = function (Msg) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm btn-cancel">Cancel</a>' +
            '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm btn-ok">OK</a></div>';
        $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);
    };
    return Helper;
}());
var MatDialogs;
(function (MatDialogs) {
    var Prompt = (function () {
        function Prompt() {
            this.getInnerContent = function (input) {
                var InnerContent;
                switch (input.Type) {
                    case 'text':
                    case 'date':
                    case 'number':
                    case 'email':
                    case 'password': return '<input type="' + input.Type + '"/>';
                    case 'select': if (input.Values && input.Values.length > 0) {
                        var Content = '<select id="selectMatDialog" class="browser-default">';
                        input.Values.forEach(function (value) {
                            Content += '<option value=' + value.Value + '>' + value.Text + '</option>';
                        });
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
            };
        }
        Prompt.prototype.createPrompt = function (Msg) {
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + Msg + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">Ok</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
        };
        Prompt.prototype.createCustomPrompt = function (option) {
            if (option.ExecuteBefore) {
                option.ExecuteBefore();
            }
            var OkLabel = (option.Ok && option.Ok.Text) ? option.Ok.Text : 'Ok', CancelLabel = (option.Cancel && option.Cancel.Text) ? option.Cancel.Text : 'Cancel';
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + option.Text + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content">' + this.getInnerContent(option.Input) + '</div><div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">' + CancelLabel + '</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">' + OkLabel + '</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
            if (option.Ok && option.Ok.ClassName) {
                $('#divMatDialog .modal .prompt .btn-ok').addClass(option.Ok.ClassName);
            }
            if (option.Cancel && option.Cancel.ClassName) {
                $('#divMatDialog .modal .prompt .btn-cancel').addClass(option.Cancel.ClassName);
            }
            if (option.ExecuteAfter) {
                option.ExecuteAfter();
            }
        };
        return Prompt;
    }());
    MatDialogs.Prompt = Prompt;
})(MatDialogs || (MatDialogs = {}));
var MatDialog = (function (_super) {
    __extends(MatDialog, _super);
    function MatDialog(config) {
        var _this = _super.call(this) || this;
        _this.registerModal = function (config) {
            var DefaultConfig = {
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
                    dismissible: config.Dismissible ? config.Dismissible : DefaultConfig.Dismissible,
                    opacity: config.Opacity ? config.Opacity : DefaultConfig.Opacity,
                    inDuration: config.InDuration ? config.InDuration : DefaultConfig.InDuration,
                    outDuration: config.OutDuration ? config.OutDuration : DefaultConfig.OutDuration,
                    startingTop: config.StartingTop ? config.StartingTop : DefaultConfig.StartingTop,
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
        };
        _this.setModalConfig = function (config) {
            this.registerModal(config);
        };
        var That = _this;
        //create a matdialog container
        if (document.getElementById('divMatDialog') == null) {
            var container = document.createElement('div');
            container.id = 'divMatDialog';
            container.innerHTML = '<div class="modal"></div>';
            document.body.appendChild(container);
        }
        _this.registerModal(config);
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'), DialogType = Modal.data('type');
            Modal.modal('close');
            if (That.callBack != null) {
                if (DialogType == 'alert') {
                    That.callBack();
                }
                else if (DialogType == 'confirm' || DialogType == 'dialog') {
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
                else if (DialogType == 'prompt' || DialogType == 'dialog') {
                    That.callBack(null);
                }
            }
        });
        return _this;
    }
    MatDialog.prototype.getPromptInputValue = function (type) {
        switch (type) {
            case 'text':
            case 'date':
            case 'number':
            case 'email':
            case 'password': return $('#divMatDialog .modal input[type=' + type + ']').val();
            case 'select': return $('#divMatDialog .modal #selectMatDialog').val();
            case 'radio': return $('#divMatDialog .modal input[name="radioMatDialog"]:checked').val();
            case 'check':
            case 'checkbox':
                var Values = [];
                $('#divMatDialog .modal input[name="checkMatDialog"]:checked').each(function () {
                    Values.push($(this).val());
                });
                return Values;
            default: return $('#divMatDialog .modal input[type="text"]').val();
        }
    };
    MatDialog.prototype.alert = function (Message, callBack) {
        this.callBack = callBack;
        if (typeof (Message) === 'object') {
            this.createCustomAlert(Message);
        }
        else {
            this.createAlert(Message);
        }
        $('#divMatDialog .modal').modal('open');
    };
    MatDialog.prototype.confirm = function (Message, callBack) {
        this.callBack = callBack;
        if (typeof (Message) === 'object') {
            this.createCustomConfirm(Message);
        }
        else {
            this.createConfirm(Message);
        }
        $('#divMatDialog .modal').modal('open');
    };
    MatDialog.prototype.prompt = function (Message, callBack) {
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
        $('#divMatDialog .modal .modal-content input').focus();
    };
    MatDialog.prototype.dialog = function (option, callBack) {
        if (option) {
            this.callBack = callBack;
            new MatDialogs.Dialog().createDialog(option);
        }
        else {
            console.error('no Dialog option provided');
        }
        $('#divMatDialog .modal').modal('open');
    };
    return MatDialog;
}(Helper));
/// <reference path="jquery.d.ts" />
/// <reference path="Code/Helper.ts" />
/// <reference path="Code/Prompt.ts" />
/// <reference path="Code/MainLogic.ts" />
var MatDialogs;
(function (MatDialogs) {
    var Dialog = (function () {
        function Dialog() {
            this.createDialog = function (option) {
                if (option.ExecuteBefore) {
                    option.ExecuteBefore();
                }
                var ElementInnerHTML = '';
                //Title
                if (option.Title) {
                    ElementInnerHTML += '<div class="modal-header">';
                    if (option.Title.Text) {
                        ElementInnerHTML += '<span class="prompt-msg">' + option.Title.Text + '</span>';
                    }
                    if (option.Title.ShowClose == undefined || JSON.parse(option.Title.ShowClose)) {
                        ElementInnerHTML += '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i>';
                    }
                    ElementInnerHTML += '</div><div class="divider"></div>';
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
                    });
                }
                if (BottomHtml.length > 0) {
                    ElementInnerHTML += '<div class="divider"></div><div class="modal-footer">' + BottomHtml + '</div>';
                }
                $('#divMatDialog .modal').data('type', 'dialog').html(ElementInnerHTML);
                if (option.ExecuteAfter) {
                    option.ExecuteAfter();
                }
            };
        }
        return Dialog;
    }());
    MatDialogs.Dialog = Dialog;
})(MatDialogs || (MatDialogs = {}));
//# sourceMappingURL=MatDialog.js.map