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
            var OkLabel = (option.Ok && option.Ok.Content) ? option.Ok.Content : 'Ok', CancelLabel = (option.Cancel && option.Cancel.Content) ? option.Cancel.Content : 'Cancel';
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
        var ButtonContent = (option.Button && option.Button.Content) ? option.Button.Content : 'Ok';
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + option.Text + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">' + ButtonContent + '</a></div>';
        if (option.Button && option.Button.ClassName) {
            $('#divMatDialog .modal .btn').addClass(option.Button.ClassName);
        }
        $('#divMatDialog .modal').data('type', 'alert').html(ElementInnerHTML);
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
        }
        Prompt.prototype.createPrompt = function (Msg) {
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + Msg + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">OK</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
        };
        Prompt.prototype.createCustomPrompt = function (option) {
            var OkLabel = (option.Ok && option.Ok.Content) ? option.Ok.Content : 'Ok', CancelLabel = (option.Cancel && option.Cancel.Content) ? option.Cancel.Content : 'Cancel';
            var ElementInnerHTML = '<div class="modal-header">' +
                '<span class="prompt-msg">' + option.Text + '</span>' +
                '<i class="modal-button material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
                '<div class="divider"></div><div class="modal-content"><input type="text" /></div>' + '<div class="divider"></div>' +
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green prompt btn-cancel">Cancel</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green prompt btn-ok">OK</a></div>';
            $('#divMatDialog .modal').data('type', 'prompt').html(ElementInnerHTML);
            if (option.Ok && option.Ok.ClassName) {
                $('#divMatDialog .modal .prompt .btn-ok').addClass(option.Ok.ClassName);
            }
            if (option.Cancel && option.Cancel.ClassName) {
                $('#divMatDialog .modal .prompt .btn-cancel').addClass(option.Cancel.ClassName);
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
        var That = _this;
        //create a matdialog container
        var container = document.createElement('div');
        container.id = 'divMatDialog';
        container.innerHTML = '<div class="modal"></div>';
        document.body.appendChild(container);
        _this.registerModal(config);
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'), DialogType = Modal.data('type');
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
                        var InputValue = $('#divMatDialog .modal input[type="text"]').val();
                        That.callBack(InputValue.length > 0 ? InputValue : null);
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
        });
        return _this;
    }
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
        $('#divMatDialog .modal').modal('open');
        $('#divMatDialog .modal input[type="text"]').focus();
    };
    return MatDialog;
}(Helper));
/// <reference path="jquery.d.ts" />
/// <reference path="Code/Helper.ts" />
/// <reference path="Code/Prompt.ts" />
/// <reference path="Code/MainLogic.ts" />
//# sourceMappingURL=MatDialog.js.map