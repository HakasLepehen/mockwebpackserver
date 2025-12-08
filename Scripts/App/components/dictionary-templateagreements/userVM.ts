import { ItemViewModelEditBase } from "../../base/itemViewModeleditBase";
import { UserPermissionGroupRoleNodeModel } from "./userpermissiongrouprolenodemodel";


export class UserVM extends ItemViewModelEditBase<UserPermissionGroupRoleNodeModel> {

    constructor(model: UserPermissionGroupRoleNodeModel = new UserPermissionGroupRoleNodeModel()) {
        super(model);
        this.initialization();
    }  

    //#region Properties

    Id: KnockoutObservable<number>;
    Name: KnockoutObservable<string> = this.Name || ko.observable<string>('');
        
    protected initValidation() {
       
    }

    protected initSubscribes() {

    }

    protected initView(view: any) {
        
    }
    
}

