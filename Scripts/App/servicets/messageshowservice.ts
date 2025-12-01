import { MessageBus } from "../base/messagebus";
import { ServiceBase } from "../base/servicebase";

class MessageShowService extends ServiceBase {


    information(message: string) {
        ko.postbox.publish<MessageBus.MessageInformation.IMessageInformation>(MessageBus.MessageInformation.NAME, { message: message });
    }

    customMessage(title: string, message: string) {
        ko.postbox.publish<MessageBus.CustomMessage.ICustomMessage>(MessageBus.CustomMessage.NAME, { title: title, message: message });
    }

    warning(message: string) {
        ko.postbox.publish<MessageBus.MessageWarning.IMessageWarning>(MessageBus.MessageWarning.NAME, { message: message });
    }

    error(message: string) {
        ko.postbox.publish<MessageBus.MessageError.IMessageError>(MessageBus.MessageError.NAME, { message: message });
    }

    questionYesNo(message: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            ko.postbox.publish<MessageBus.MessageQuestionYesNo.IMessageQuestionYesNo>(MessageBus.MessageQuestionYesNo.NAME, { message: message, callback: resolve });
        });
    }

    questionYesNoCancel(message: string) {
        return new Promise<boolean>((resolve, reject) => {
            ko.postbox.publish<MessageBus.MessageQuestionYesNoCancel.IMessageQuestionYesNoCancel>(MessageBus.MessageQuestionYesNoCancel.NAME, { message: message, callback: resolve });
        });
    }

    dangerQuestionYesNo = function (message: string) {
        return new Promise<boolean>((resolve, reject) => {
            ko.postbox.publish<MessageBus.MessageDangerQuestionYesNo.IMessageDangerQuestionYesNo>(MessageBus.MessageDangerQuestionYesNo.NAME, { message: message, callback: resolve });
        });
    }

    dangerQuestionYesNoCancel(message) {
        return new Promise<boolean>((resolve, reject) => {
            ko.postbox.publish<MessageBus.MessageDangerQuestionYesNoCancel.IMessageDangerQuestionYesNoCancel>(MessageBus.MessageDangerQuestionYesNoCancel.NAME, { message: message, callback: resolve });
        });
    };

    superDangerQuestionYesNo(messageFirstRow, messageSecondRow) {
        return new Promise<boolean>((resolve, reject) => {
            ko.postbox.publish<MessageBus.MessageSuperDangerQuestionYesNo.IMessageSuperDangerQuestionYesNo>(MessageBus.MessageSuperDangerQuestionYesNo.NAME, { messageFirstRow: messageFirstRow, messageSecondRow: messageSecondRow, callback: resolve });
        });
    };

    /**
     * @description notification
     * @param {type} message
     * @param {type} [position] - "left top", "top", "right top", "right", "right bottom", "bottom","left bottom", "left", "center"
     * @param {type} [offset]
     */
    notificationError = function (message: string, position?: string, offset?: string) {
        DevExpress.ui.notify(this.getToast(message, 2, position, offset));
    };
    /**
     * @description notification
     * @param {type} message
     * @param {type} [position] - "left top", "top", "right top", "right", "right bottom", "bottom","left bottom", "left", "center"
     * @param {type} [offset]
     */
    notificationInfo = function (message: string, position?: string, offset?: string) {
        DevExpress.ui.notify(this.getToast(message, 4, position, offset));
    };
    /**
     * @description notification
     * @param {type} message
     * @param {type} [position] - "left top", "top", "right top", "right", "right bottom", "bottom","left bottom", "left", "center"
     * @param {type} [offset]
     */
    notificationSuccess = function (message: string, position?: string, offset?: string) {
        DevExpress.ui.notify(this.getToast(message, 1, position, offset));
    };
    /**
     * @description notification
     * @param {type} message
     * @param {type} [position] - "left top", "top", "right top", "right", "right bottom", "bottom","left bottom", "left", "center"
     * @param {type} [offset]
     */
    notificationWarning = function (message: string, position?: string, offset?: string) {
        DevExpress.ui.notify(this.getToast(message, 3, position, offset));
    };


    private getToast(msg, type, position, offset) {
        var typeDesc
        switch (type) {
            case 1:
                typeDesc = 'success';
                break;
            case 2:
                typeDesc = 'error'
                break;
            case 3:
                typeDesc = 'warning'
                break;
            case 4:
                typeDesc = 'info'
                break;
        }
        var toastSettings = {
            message: msg,
            type: typeDesc,
            displayTime: 3000,
            position: {
                at: position || 'center',
            },
            offset: offset || '0 0',
            minWidth: 200,
            width: function () { return "auto"; }
        }

        return toastSettings;
    }
}

export const messageShowService: MessageShowService = new MessageShowService();

