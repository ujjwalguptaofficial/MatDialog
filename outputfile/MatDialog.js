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
var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.createAlert = function (Msg) {
        var ElementInnerHTML = '<div class="modal-header">' +
            '<i class="modal-action modal-close material-icons right-align header-close-icon">&#xE5CD;</i></div>' +
            '<div class="divider"></div><div class="modal-content">' + Msg + '</div>' + '<div class="divider"></div>' +
            '<div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn">OK</a></div>';
        $('#divMatDialog .modal').html(ElementInnerHTML);
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
            endingTop: '2%',
            complete: function () {
                if (That.callBack != null) {
                    That.callBack();
                }
            }
        });
        return _this;
    }
    MatDialog.prototype.alert = function (Message, callBack) {
        this.callBack = callBack;
        this.createAlert(Message);
        $('#divMatDialog .modal').modal('open');
    };
    return MatDialog;
}(Helper));
/// <reference path="jquery.d.ts" />
/// <reference path="Code/Helper.ts" />
/// <reference path="Code/MainLogic.ts" />
//# sourceMappingURL=MatDialog.js.map