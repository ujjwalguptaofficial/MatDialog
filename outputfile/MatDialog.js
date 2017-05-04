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
                '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm-btn-cancel">' + CancelLabel + '</a>' +
                '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm-btn-ok">' + OkLabel + '</a></div>';
            $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);
            if (option.Ok && option.Ok.ClassName) {
                $('#divMatDialog .modal .confirm-btn-ok').addClass(option.Ok.ClassName);
            }
            if (option.Cancel && option.Cancel.ClassName) {
                $('#divMatDialog .modal .confirm-btn-ok').addClass(option.Cancel.ClassName);
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
            '<div class="modal-footer"><a href="#!" data-val="false" class="modal-button btn waves-effect waves-green confirm-btn-cancel">Cancel</a>' +
            '<a href="#!" data-val="true" class="modal-button btn waves-effect waves-green confirm-btn-ok">OK</a></div>';
        $('#divMatDialog .modal').data('type', 'confirm').html(ElementInnerHTML);
    };
    return Helper;
}());
var MatDialog = (function (_super) {
    __extends(MatDialog, _super);
    function MatDialog() {
        var _this = _super.call(this) || this;
        var That = _this;
        //create a matdialog container
        var container = document.createElement('div');
        container.id = 'divMatDialog';
        container.innerHTML = '<div class="modal"></div>';
        document.body.appendChild(container);
        //registering modal
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '2%',
            endingTop: '2%' // Ending top style attribute,
        });
        $('#divMatDialog .modal').on('click', '.modal-button', function () {
            var Modal = $('#divMatDialog .modal'), DialogType = Modal.data('type');
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
    return MatDialog;
}(Helper));
/// <reference path="jquery.d.ts" />
/// <reference path="Code/Helper.ts" />
/// <reference path="Code/MainLogic.ts" />
//# sourceMappingURL=MatDialog.js.map