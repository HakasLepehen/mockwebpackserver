import { ItemViewModelBase } from "./itemviewmodelbase";
import { Utils } from "./utils";

export interface IValidationRule {
    message: string,
    type: 'compare' | 'custom' | 'email' | 'numeric' | 'pattern' | 'range' | 'required' | 'stringLength',
}

export interface IEditableObject {
    isValid: KnockoutComputed<boolean>;
    isEdit: KnockoutComputed<boolean>;

    beginEdit(): void;

    cancelEdit(): void;

    endEdit(modelEnd: any)
}


export abstract class ItemViewModelEditBase<TModel> extends ItemViewModelBase<TModel> implements IEditableObject {

    protected isUpdating = ko.observable(false);

    private _isValid = ko.pureComputed(() => {
        return this.algorithmValidation();
    });
    private _isNew = ko.pureComputed(() => {
        return this.algorithmNew();
    });

    constructor(model: TModel) {
        super(model);
    }

    @Utils.enumerable(false)
    get isValid(): KnockoutComputed<boolean> {
        return this._isValid;
    }

    @Utils.enumerable(false)
    get brokenRulesMessage(): string {
        let result = DevExpress.validationEngine.validateModel(this);
        var message = '';
        result.brokenRules.forEach(function (el) {
            message += el.message + '\n';
        });
        return message;
    }

    @Utils.enumerable(false)
    get brokenRulesArray(): any[] {
        let result = DevExpress.validationEngine.validateModel(this);
        return result.brokenRules;
    }

    @Utils.enumerable(false)
    get isEdit(): KnockoutComputed<boolean> {
        return this._isEdit;
    }

    @Utils.enumerable(false)
    get isNew(): KnockoutComputed<boolean> {
        return this._isNew;
    }

    /**
     * Определяет механизм валидации, переопределить для проверки полного графа
     */
    protected algorithmValidation() {
        let self = this;
        let needValid = false;
        Object.getOwnPropertyNames(this).forEach((name) => {
            if (self[name] && self[name].dxValidator) {
                ko.unwrap(self[name]);
                needValid = true;
            }
        });
        if (needValid) {
            let result = DevExpress.validationEngine.validateModel(this);
            return result.isValid;
        }
        else {
            return true;
        }
    }

    private removeValidation() {
        let self = this;  
        DevExpress.validationEngine.unregisterModelForValidation(this);
        Object.getOwnPropertyNames(this).forEach((name) => {
            if (self[name] && self[name].dxValidator) {
                delete self[name].dxValidator
            }
        });       
    }

    protected algorithmNew() {
        return ko.isObservable(this['Id']) && this['Id']() == 0
    }

    private _isEdit = ko.pureComputed(() => {
        let result = false;
        Object.getOwnPropertyNames(this.model).forEach((name) => {
            let valVm = ko.unwrap(self[name]);
            let valModel = this.model[name];
            if (!result) {
                if (!Array.isArray(valModel) && !Array.isArray(valVm)) {
                    result = (valVm !== valModel);
                }
            }
        });
        return result;
    });

    beginEdit() {
        this.isEdit();
    }

    cancelEdit() {
        this.isUpdating(true);
        ko.mapping.fromJS(this.model, this.mappingSetting(), <any>this);
        this.isUpdating(false);
        // this.isEdit();
    }

    endEdit(modelEnd: TModel) {
        this.isUpdating(true);
        this.updateObj(modelEnd, this.model);
        ko.mapping.fromJS(this.model, this.mappingSetting(), <any>this);
        this.dirtyModelHold = null;
        this.isUpdating(false);
        //this.isEdit();
    }

    returnHoldDirtyModel() {
        this.isUpdating(true);
        ko.mapping.fromJS(this.dirtyModelHold, this.mappingSetting(), <any>this);
        this.isUpdating(false);
        //this.isEdit();
    }

    isDirty() {        
        let result = false;
        Object.getOwnPropertyNames(this.model).forEach((name) => {
            let valVm = ko.unwrap(this[name]);
            let valModel = this.model[name];
            if (!result) {
                if (!Array.isArray(valModel) && !Array.isArray(valVm)) {
                    result = (valVm !== valModel);
                }
            }
        });
        return result;
    };

    protected AddValidation<T>(prop: KnockoutObservable<T>, rules: Array<IValidationRule>) {
        if (!prop) {
            return;
            //throw new Error("Свойство не проинициализированно в модели, поэтому его нет во ViewModel")
        }
        if (!prop.dxValidator) {
            prop.extend({
                dxValidator: {
                    validationRules: rules
                }
            });
        }
    }


    protected initValidation() {

    }

    protected changeValidation() {
        this.removeValidation();
        this.initValidation();
        this.initView(this.view);
        DevExpress.validationEngine.registerModelForValidation(this);
    };

    protected initialization() {
        this.initValidation();
        super.initialization();
        DevExpress.validationEngine.registerModelForValidation(this);
        this.isValid();
        this.isEdit();
    }

    private updateObj(objNew: Object, oldObj: Object) {
        if (objNew === null || oldObj === null) {
            return;
        }
        Object.getOwnPropertyNames(objNew).forEach((propName) => {
            let newVal = objNew[propName];
            let oldVal = oldObj[propName];
            if (Array.isArray(newVal)) {
                if (oldVal) {
                    if (Array.isArray(oldVal)) {
                        oldVal.splice(0, oldVal.length);
                        oldVal.push.apply(oldVal, newVal);
                    }
                    else {
                        oldObj[propName] = newVal;
                    }
                }
                else {
                    oldObj[propName] = newVal;
                }
            }
            else if (typeof newVal === "object" && typeof oldVal === "object" && !(newVal instanceof Date)) {
                this.updateObj(newVal, oldVal);
            }
            else {
                oldObj[propName] = newVal;
            }

        });
    }

}

