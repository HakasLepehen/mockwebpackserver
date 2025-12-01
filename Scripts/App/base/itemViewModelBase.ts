/// <reference types="knockout.mapping" />

import { messageShowService } from "../servicets/messageshowservice";
import { DevExtremeView } from "./devextremeview";



export abstract class ItemViewModelBase<TModel extends Object>  {

    protected model: TModel;
    protected dirtyModelHold: TModel;
    private constrModel: new () => TModel;
    private propNamesModel: string[];
    private eventPostBox: KnockoutSubscription[] = new Array<KnockoutSubscription>();
    private eventPropertyKo: KnockoutSubscription[] = new Array<KnockoutSubscription>();
    protected messageShowService = messageShowService;

    constructor(model: TModel) {
        this.constrModel = model.constructor as new () => TModel;
        this.model = model;
        this.propNamesModel = Object.getOwnPropertyNames(this.model);
        this.createObservableProperties();
        this.holdDirtyModel();
    }

    readonly view: any = {};

    protected initView(view: any) {

    }


    publish<T>(topic: string, value?: T) {
        ko.postbox.publish<T>(topic, value);
    }

    subscribe<T>(topic: string, handler: (value: T) => void, target?: any) {
        var subs = ko.postbox.subscribe(topic, handler, target || this);
        this.eventPostBox.push(subs);
    };

    dispose() {
        for (let event of this.eventPostBox) {
            event.dispose();
        }
        this.eventPostBox.splice(0, this.eventPostBox.length);
        for (let event of this.eventPropertyKo) {
            event.dispose();
        }
        this.eventPropertyKo.splice(0, this.eventPropertyKo.length);
    };

    /**
     * 
     * @param {any} ex - error in JSON format
     */
    protected showWarning(ex): string {
        this.messageShowService.warning(ex);
        return ex;
    };
    /**
     * 
     * @param {any} ex - error in JSON format or instance of Error
     */
    protected showError(ex): string {
        let res = ex;
        if (ex.getMessageForUser) {
            res = ex.getMessageForUser();
        }

        if (ex instanceof Error) res = ex.message;

        this.messageShowService.error(res);
        return res;
    };

    /**
     * уведомление об успещной операции
     * @param {string} message
     */
    protected showSuccess(message: string): void {
        this.messageShowService.notificationSuccess(message);
    };

    protected initSubscribes() {

    };

    protected mapVM<TM, TVM extends ItemViewModelBase<TM>>(models: TM[], ctorVM: { new (m: TM): TVM }): Array<TVM> {
        return models.map((q) => new ctorVM(q));
    }

    subscribeChangedProperty<T>(property: KnockoutObservable<T>, handler: (value: T) => void, target?: any) {
        let sub = property.subscribe(handler, target || this);
        this.eventPropertyKo.push(sub);
    };

    protected initialization() {
        this.initSubscribes();
        this.initView(this.view);
    }

    protected mappingSetting(): any {
        return {};
    }

    protected getMappingDate(): any {
        return {
            create: (options) => {
                if (options.data) {
                    let date = (new Date(options.data)).withoutTime();
                    return ko.observable(date);
                }
                else {
                    return ko.observable(options.data);
                }
            },
            update: (options) => {
                if (options.data) {
                    let date = (new Date(options.data)).withoutTime();
                    return date;
                }
                else {
                    return options.data;
                }
            }
        };
    }

    private createObservableProperties() {
        ko.mapping.fromJS(this.model, this.mappingSetting(), <any>this);
    }

    getDirtyModel(): TModel {

        let model = new this.constrModel();
        let dirtyModel = ko.mapping.toJS(this);
        Object.assign(model, dirtyModel);
        return model;
    }

    holdDirtyModel(): void {

        let model = new this.constrModel();
        let dirtyModel = ko.mapping.toJS(this);
        Object.assign(model, dirtyModel);
        this.dirtyModelHold = model;
    }

    protected generateViewControl(view: any, isReadOnly: boolean): void {
        let self = this;
        console.log(self.constructor.name);
        Object.getOwnPropertyNames(this.model).forEach((name) => {
            let prop = self.model[name];
            if (prop == null)
            {
                console.log(`  -${name}`);
            }
            if (prop instanceof Date || (self[name] && ko.unwrap(self[name]) instanceof Date)) {
                view[name] = new DevExtremeView.DateBox(self[name], { readOnly: isReadOnly });
            }
            else if (typeof prop === "string") {
                view[name] = new DevExtremeView.TextBox(self[name], { readOnly: isReadOnly });
            }
            else if (typeof prop === "number") {
                view[name] = new DevExtremeView.NumberBox(self[name], { readOnly: isReadOnly });
            }
        });
    }

}
