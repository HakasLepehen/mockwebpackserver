// import { Enums } from "./enums";
// import { ProjectVMItem } from "../itemviewmodelts/projectvmitem";
// import { SubjectVMItem } from "../itemviewmodelts/subjectvmitem";
// import { StageVMItem } from "../itemviewmodelts/stagevmitem";
// import { SectionVMItem } from "../itemviewmodelts/sectionvmitem";
// import { SchemeVMItem } from "../itemviewmodelts/schemevmitem";
// import { ProductionWorkTaskScheduleVMItem } from "../itemviewmodelts/productionworktaskschedulevmitem";
// import { ProjectEPZTextBlockModel } from "../modelts/projectepz/projectepztextblockmodel";
// import {Interfaces} from "./interfaces";
// import { SelectBoxModel } from "../modelts/selectboxmodel";

export namespace MessageBus {
    export namespace MessageInformation {
        export const NAME = "MessageInformation";
        export interface IMessageInformation {
            message: string
        }
    }

    export namespace CustomMessage {
        export const NAME = "CustomMessage";
        export interface ICustomMessage {
            title: string,
            message: string
        }
    }
    export namespace MessageWarning {
        export const NAME = "MessageWarning";
        export interface IMessageWarning {
            message: string
        }
    }
    export namespace MessageError {
        export const NAME = "MessageError";
        export interface IMessageError {
            message: string
        }
    }
    export namespace MessageQuestionYesNo {
        export const NAME = "MessageQuestionYesNo";
        export interface IMessageQuestionYesNo {
            message: string,
            callback: (result: boolean) => void
        }
    }
    export namespace MessageQuestionYesNoCancel {
        export const NAME = "MessageQuestionYesNoCancel";
        export interface IMessageQuestionYesNoCancel {
            message: string,
            callback: (result: boolean | null) => void
        }
    }
    export namespace MessageDangerQuestionYesNo {
        export const NAME = "MessageDangerQuestionYesNo";
        export interface IMessageDangerQuestionYesNo {
            message: string,
            callback: (result: boolean) => void
        }
    }
    export namespace MessageDangerQuestionYesNoCancel {
        export const NAME = "MessageDangerQuestionYesNoCancel";
        export interface IMessageDangerQuestionYesNoCancel {
            message: string,
            callback: (result: boolean | null) => void
        }
    }
    export namespace MessageSuperDangerQuestionYesNo {
        export const NAME = "MessageSuperDangerQuestionYesNo";
        export interface IMessageSuperDangerQuestionYesNo {
            messageFirstRow: string,
            messageSecondRow: string,
            callback: (result: boolean | null) => void
        }
    }
    export namespace HistoryStateModule {
        export const NAME = "HistoryStateModule";
        export interface IHistoryStateModule {
            callback: <T>(valie: T) => void
        }
    }

}

