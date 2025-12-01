/// <reference types="knockout.postbox" />
/// <reference types="jquery" />

import { MessageBus } from "./messagebus";
import { messageShowService } from "../servicets/messageshowservice";
import { ItemViewModelBase } from "./itemviewmodelbase";


export abstract class MainViewModelBase<TStateHistory> {

    public static readonly listNameModules = {
        TemplateProject: "TemplateProject",
        DictionaryAgreement: "DictionaryAgreement"
    }

    private eventPostBox: KnockoutSubscription[] = new Array<KnockoutSubscription>();
    private eventPropertyKo: KnockoutSubscription[] = new Array<KnockoutSubscription>();

    private _initHistoryState = false;
    protected messageShowService = messageShowService;



    constructor(settings?: any) {
        var self = this;
        if (settings && settings.pushHistory !== undefined) {
            this.pushHistory = !!settings.pushHistory;
        }
        this.subscribe<MessageBus.HistoryStateModule.IHistoryStateModule>(MessageBus.HistoryStateModule.NAME, (notifObj: { callback: (val: any) => void }) => {
            var result = {};
            var state = self.getHistoryState();
            if (state) {
                var nameModule = self.getNameModule();
                result[nameModule] = state;
                notifObj.callback(result);
            }
        });
    }

    protected initialization() {
        this.initSubscribes();
        this.initializationModule();
        this.initView(this.view);
        ko.computed(() => this.initChangeView(this.view))();


    }

    protected mapVM<TM, TVM extends ItemViewModelBase<TM>>(models: TM[], ctorVM: { new (m: TM): TVM }): Array<TVM> {
        return models.map((q) => new ctorVM(q));
    }

    readonly view: any = {};

    pushHistory: boolean = true;
    isLoading = ko.observable(true);
    countModule = ko.observable(1);

    protected initSubscribes() {

    };

    protected abstract initializationModule();

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
        if (ex) {
            let res = ex;
            if (ex.getMessageForUser instanceof Function) {
                res = ex.getMessageForUser();
            }

            if (ex instanceof Error) res = ex.message;

            this.messageShowService.error(res);
            return res;
        }
        return null;
    };

    /**
     * уведомление об успещной операции
     * @param {string} message
     */
    protected showSuccess(message: string): void {
        this.messageShowService.notificationSuccess(message);
    };

    public afterRender() {
        this.countModule(this.countModule() - 1);
        if (this.countModule() === 0) {
            this.isLoading(false);
            window.addEventListener('popstate', this.historyHandler.bind(this));
            var state = null;
            var nameModule = this.getNameModule();
            var params = location.search.slice(1);
            if (params) {
                var genericState = $.deparam(params);
                if (genericState) {
                    state = genericState[nameModule];
                }
            }
            this._initHistoryState = true;
            this.loadHandler(state);
            this._initHistoryState = false;
        }
    }


    protected initView(view: any) {


    }

    protected initChangeView(view: any) {


    }


    protected historyHandler(event: PopStateEvent) {

        if (event && event.state) {
            this._initHistoryState = true;
            var nameModule = this.getNameModule();
            this.loadHandler(event.state[nameModule]);
            this._initHistoryState = false;
        }
    }

    abstract getNameModule(): string

    protected loadHandler(state: TStateHistory) {

    }

    dispose() {
        this.eventPostBox.forEach(function (item) {
            item.dispose();
        });
        this.eventPostBox.splice(0, this.eventPostBox.length);
        for (let event of this.eventPropertyKo) {
            event.dispose();
        }
        this.eventPropertyKo.splice(0, this.eventPropertyKo.length);

    }

    getHistoryState(): TStateHistory {
        return null;
    }

    protected subscribeChangedProperty<T>(property: KnockoutObservable<T>, handler: (value: T) => void, target?: any) {
        let sub = property.subscribe(handler, target);
        this.eventPropertyKo.push(sub);
    };


    protected subscribe<T>(topic: string, action: (valie: T) => void, target?: any) {
        var subs = ko.postbox.subscribe<T>(topic, action, target || this);
        this.eventPostBox.push(subs);
    }

    protected publish<T>(topic: string, value?: T) {
        ko.postbox.publish<T>(topic, value);
    }
    /**
     * Собирает состояние всех моделей на страницы и фиксирует их в урле
     * @param {string} title? название новой страницы
     */
    historyPushState(title?: string) {
        if (!this._initHistoryState && this.pushHistory) {
            var genericState = {};
            this.publish<MessageBus.HistoryStateModule.IHistoryStateModule>(MessageBus.HistoryStateModule.NAME, {
                callback: (state: any) => {
                    Object.getOwnPropertyNames(state).forEach(function (item) {
                        genericState[item] = state[item];
                    });
                }
            });
            var url = '?' + $.param(genericState);
            window.history.pushState(genericState, title, url);
        }
    }

    getHistoryStateByModule<T>(nameModule: string): T {
        if (!this._initHistoryState) {
            var params = location.search.slice(1);
            if (params) {
                var genericState = $.deparam(params);
                if (genericState) {
                    return genericState[nameModule];
                }
            }
        }
        return null;
    }

}
