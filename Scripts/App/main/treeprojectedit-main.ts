import {MainViewModelBase} from "../base/mainViewModelBase";

console.log('ite works')
class TreeProjectEditMain extends MainViewModelBase<any>
{
    getNameModule(): string {
        return TreeProjectEditMain.name;
    }

    initializationModule() {
    }
}
ko.applyBindings(new TreeProjectEditMain());