import "../../appInit"
import {MainViewModelBase} from "../base/mainviewmodelbase";

ko.components.register('dictionary-templateagreements', require('../components/dictionary-templateagreements/dictionary-templateagreements').default);

class TreeProjectEditMain extends MainViewModelBase<any>
{
    getNameModule(): string {
        return TreeProjectEditMain.name;
    }

    initializationModule() {
    }
}
ko.applyBindings(new TreeProjectEditMain());