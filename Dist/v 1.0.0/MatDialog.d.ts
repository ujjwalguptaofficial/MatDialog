/// <reference path="../Script/jquery.d.ts" />
declare class Helper {
    CallBack: Function;
    Option: IPrompt;
    IsDismissible: boolean;
    protected openModal: (callBack: Function, isInput?: boolean) => void;
    protected closeModal: (callBack?: Function) => void;
    protected getPromptInputValue(type: string): any;
    protected registerModal: (config: IDialogOption) => void;
}
interface IPrompt {
    Text: string;
    Buttons: {
        Ok: Button;
        Cancel: Button;
    };
    Input: IInput;
    ExecuteAfter: Function;
    ExecuteBefore: Function;
}
interface IInput {
    Type: string;
    Values: Array<{
        Text: string;
        Value: string;
    }>;
}
declare module MatDialogs {
    class Prompt {
        constructor(option: any);
        createPrompt(Msg: string): void;
        createCustomPrompt(option: IPrompt): void;
        getInnerContent: (input: IInput) => string;
    }
}
interface IAlert {
    Text: string;
    Button: Button;
    ExecuteAfter: Function;
    ExecuteBefore: Function;
}
declare module MatDialogs {
    class Alert {
        constructor(option: any);
        createAlert(Msg: string): void;
        createCustomAlert(option: IAlert): void;
    }
}
interface IDialogOption {
    Dismissible: Boolean;
    Opacity: number;
    InDuration: number;
    OutDuration: number;
    StartingTop: string;
    EndingTop: string;
    OnCompleted: Function;
}
declare class MatDialog extends Helper {
    setModalConfig: (config: IDialogOption) => void;
    constructor(config: IDialogOption);
    alert(message: any, callBack: Function): void;
    confirm(message: any, callBack: Function): void;
    prompt(message: any, callBack: Function): void;
    create(option: IDialog, callBack: any): void;
}
interface IConfirm {
    Text: string;
    Buttons: {
        Ok: Button;
        Cancel: Button;
    };
    ExecuteAfter: Function;
    ExecuteBefore: Function;
}
interface Button {
    Label: string;
    Class: string;
    Value: string;
}
declare module MatDialogs {
    class Confirm {
        constructor(option: any);
        createConfirm(Msg: string): void;
        createCustomConfirm: (option: IConfirm) => void;
    }
}
interface IDialog {
    Title: {
        Label: string;
        ShowClose: boolean;
    };
    Content: {
        Label: string;
        Class: string;
    };
    ButtonType: string;
    Buttons: Array<Button>;
    ExecuteAfter: Function;
    ExecuteBefore: Function;
}
declare module MatDialogs {
    class Dialog {
        constructor(option: any);
        createDialog: (option: IDialog) => void;
    }
}
