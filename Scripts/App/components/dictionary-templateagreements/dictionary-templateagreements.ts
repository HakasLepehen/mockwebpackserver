import { MainViewModelBase } from "../../base/mainviewmodelbase";
import { MessageBus } from "../../base/messagebus";
// import { Enums } from "../../base/enums";
import { DevExtremeView } from "../../base/devextremeview";
import {UserVM} from "./userVM";
// import { PersonService, service as personService } from "../../servicets/personservice";
// import { Utils } from "../../base/utils";
// import { StatusVMItem } from "../../itemviewmodelts/statusvmitem";
// import { PersonVMItem } from "../../itemviewmodelts/personvmitem";
// import { SelectBoxVMItem } from "../../itemviewmodelts/selectboxvmitem";
// import { RolesApprovingPSDService, service as rolesApprovingPSDService } from "../../servicets/rolesapprovingpsdservice";

interface ITemplateAgreements {
}

interface ITemplateAgreementsSettings {
}

class TemplateAgreements extends MainViewModelBase<ITemplateAgreements>
{
    constructor(settings: ITemplateAgreementsSettings) {
        super();
        this.initialization();
    }

    templateCollection = ko.observableArray([]);
    // personCollection = ko.observableArray<PersonVMItem>([]);
    // roleCollection = ko.observableArray<SelectBoxVMItem>([]);
    personId = ko.observable(null);
    roleId = ko.observable(null);
    model: KnockoutObservable<UserVM> = ko.observable(new UserVM());
    searching = ko.observable(false);
    templateName = ko.observable(null);
    afterRender() {
        super.afterRender();
    }

    getHistoryState(): ITemplateAgreements {
        return null;
    }

    loadHandler(state: ITemplateAgreements) {

    }

    getNameModule(): string {
        return TemplateAgreements.name;
    }

    initializationModule() {     
        // personService.getAllGips().then((data) => {
        //     this.personCollection.removeAll();
        //     var dataVm = [];
        //     data.forEach(function (item) {
        //         dataVm.push(new PersonVMItem(item));
        //     });
        //     this.personCollection.pushAll(dataVm);
        //     this.personCollection.sort(function (left, right) {
        //         let lft = left.DisplayName;
        //         let rght = right.DisplayName;
        //         return lft == rght ? 0 : (lft < rght ? -1 : 1)
        //     });
        // }).catch((q) => {
        //     this.showError(q);
        // });
        // rolesApprovingPSDService.getRolesApprovingPSDList().then((data) => {
        //     this.roleCollection.removeAll();
        //     var dataVm = [];
        //     data.forEach(function (item) {
        //         dataVm.push(new SelectBoxVMItem(item));
        //     });
        //     this.roleCollection.pushAll(dataVm);
        //     this.roleCollection.sort(function (left, right) {
        //         let lft = left.Name();
        //         let rght = right.Name();
        //         return lft == rght ? 0 : (lft < rght ? -1 : 1)
        //     });
        // }).catch((q) => {
        //     this.showError(q);
        // });
    }



    initView(view: any) {
        view.buttonSearch = new DevExtremeView.Button(this.searchCommand, 'Поиск');
        // view.personSelectBox = new DevExtremeView.SelectBox<number, PersonVMItem>(this.personId, this.personCollection, 'Id', 'DisplayName');
        // view.roleSelectBox = new DevExtremeView.SelectBox<number, SelectBoxVMItem>(this.roleId, this.roleCollection, 'Id', 'Name');
        view.templateNameTextBox = new DevExtremeView.TextBox(this.model().Name);
    }


    searchCommand = (): void => {
        console.log(this.model().getDirtyModel())
    }
    // searchCommand: KoPlus.Command<Promise<void>> = ko.command({
    //     action: () => {
            // this.searching(true);
            // let searchDTO = {
            //     AgreementDictionaryName: this.templateName(),
            //     PersonId: this.personId(),
            //     RolePSDId: this.roleId()
            // };
            // rolesApprovingPSDService.searchAgreementDicRoleMethod(searchDTO).then((data) => {
            //     this.templateCollection.removeAll();
            //     this.templateCollection.pushAll(data);
            //     this.searching(false);
            // }).catch((q) => {
            //     this.searching(false);
            //     this.showError(q);
            // });
        // },
        // canExecute: () => {
        //     return !this.searchCommand.isRunning();
        // }
    // });

    loadPersons = (roleId) => {
        // return rolesApprovingPSDService.getagreementDicRolePersonSubPersonDTO(roleId);
    }
}

export default { viewModel: TemplateAgreements, template: require('./dictionary-templateagreements.html') };
