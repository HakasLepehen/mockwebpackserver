export namespace DevExtremeView {

    export namespace ColorUI {
        export const ADD = 'GreenYellow';
        export const EDIT = 'yellow';
        export const REMOVE = 'red';
        export const PERMISSION_TYPICALGROUP = 'lightgrey';
    }

    export class Button {
        constructor(onClick: KoPlus.Command<any> | Function, text: string, settings?: DevExpress.ui.dxButton.Properties) {
            let self = this;
            this["onClick"] = onClick;
            this["text"] = text;
            this.width = 200;
            this.hint = text;
            if ((<KoPlus.Command<any>>onClick).canExecute) {
                this["disabled"] = ko.pureComputed(() => { return !(<KoPlus.Command<any>>onClick).canExecute() });
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
            settings
        }
        width: number;
        hint: string;
    }

    export class TextBox<T> {
        constructor(prop: KnockoutObservable<T>, settings?: DevExpress.ui.dxTextBox.Properties) {
            let self = this;
            this.value = prop;
            this.showClearButton = true;
            if (!prop) {
                throw new Error("Свойство TextBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        value: KnockoutObservable<T>;
        showClearButton: boolean;
    }

    export class TextArea<T> {
        constructor(prop: KnockoutObservable<T>, settings?: DevExpress.ui.dxTextAreaOptions) {
            let self = this;
            this.value = prop;
            if (!prop) {
                throw new Error("Свойство TextBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        value: KnockoutObservable<T>;
    }

    export class NumberBox {
        constructor(prop: KnockoutObservable<number>, settings?: DevExpress.ui.dxNumberBoxOptions) {
            let self = this;
            this.value = prop;
            this.showSpinButtons = true;
            this.showClearButton = true;
            if (!prop) {
                throw new Error("Свойство NumberBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        value: KnockoutObservable<number>;
        showSpinButtons: boolean;
        showClearButton: boolean;
    }

    export class CheckBox {
        constructor(prop: KnockoutObservable<boolean>, text?: string, settings?: DevExpress.ui.dxCheckBoxOptions) {
            let self = this;
            this.value = prop;
            if (!prop) {
                throw new Error("Свойство CheckBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
            if (text) {
                this.text = text;
            }
        }
        value: KnockoutObservable<boolean>;
        text: string;
    }

    export class DateBox {
        constructor(prop: KnockoutObservable<Date>, settings?: DevExpress.ui.dxDateBoxOptions) {
            let self = this;
            this.value = prop;
            this.showClearButton = true;
            this.displayFormat = "dd.MM.yyyy";
            if (!prop) {
                throw new Error("Свойство DateBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        value: KnockoutObservable<Date>;
        showClearButton: boolean;
        displayFormat: string;
        dateSerializationFormat = "yyyy-MM-dd";

    }

    export class TreeView<T> {
        constructor(dataSource: KnockoutObservableArray<T>, settings?: DevExpress.ui.dxTreeViewOptions) {
            let self = this;
            this.dataSource = dataSource;
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        dataSource: KnockoutObservableArray<T>;
    }

    export class CustomSelectedItemTreeView<T> {

        constructor(dataSourceTree: KnockoutObservableArray<T>, selectedSource: KnockoutObservableArray<T>, key: string, syncSelect?: string) {
            let self = this;
            this.Source = dataSourceTree;
            this.Bind = selectedSource;
            this.SyncSelect = syncSelect;
            this.Key = key;
        }
        Source: KnockoutObservableArray<T>;
        Bind: KnockoutObservableArray<T>;
        SyncSelect: string;
        Key: string
    }

    export class CustomSelectedItemDataGrid<T> {

        constructor(dataSourceTree: KnockoutObservableArray<T>, selectedSource: KnockoutObservableArray<T>, key: string, syncSelect?: string) {
            let self = this;
            this.Source = dataSourceTree;
            this.Bind = selectedSource;
            this.SyncSelect = syncSelect;
            this.Key = key;
        }
        Source: KnockoutObservableArray<T>;
        Bind: KnockoutObservableArray<T>;
        SyncSelect: string;
        Key: string
    }
    export class ButtonWithDataGridAction<T> {

        constructor(selector: string, actionNameDataGrid: string, afterAction?: () => void) {

            this.selector = selector;
            this.action = actionNameDataGrid;
            this.afterAction = afterAction;
        }
        selector: string;
        action: string;
        afterAction: () => void;
    }


    export class DataGrid<TVM> {

        private dataGridInstane: any;
        private dataGridSettings: any;

        constructor(dataSource: KnockoutObservableArray<TVM>, settings?: DevExpress.ui.dxDataGridOptions) {
            let self = this;
            self.dataGridSettings = settings;
            this.dataSource = dataSource;
            (<any>this).filterRow = { visible: true };
            (<any>this).headerFilter = {
                visible: true
            };
            (<any>this).groupPanel = { visible: true };
            (<any>this).rowAlternationEnabled = true;
            //dateSerializationFormat = "yyyy-MM-dd";
            (<any>this).paging = {
                enabled: false,
                pageIndex: 0
            };
            (<any>this).pager = {
                visible: false
            };
            (<any>this).wordWrapEnabled = true;

            if (settings && settings.editSupport) {
                this.onInitNewRow = (row) => {
                    row.data._original = settings.editSupport.factoryNewRow();
                };
                this.onRowInserting = (row) => {
                    let orig = row.data._original;
                    if (!settings.editSupport.initValidate) {
                        Object.getOwnPropertyNames(row.data).forEach((nameProp) => {
                            let prop = orig[nameProp];
                            if (prop && ko.isObservable(prop)) {
                                prop(row.data[nameProp]);
                            }
                        });
                    }
                    row.data = orig;
                    if (settings.editSupport.onInserting) {
                        row.cancel = settings.editSupport.onInserting(<TVM>orig);
                    }
                };
                this.onRowInserted = (row) => {
                    dataSource.valueHasMutated();
                };
                this.onRowRemoved = (row) => {
                    dataSource.valueHasMutated();
                };
                if (settings.editSupport.onUpdating) {
                    this.onRowUpdating = (e) => {
                        Object.getOwnPropertyNames(e.newData).forEach((q) => {
                            (<TVM>e.oldData)[q](e.newData[q]);
                        });
                        e.cancel = settings.editSupport.onUpdating(<TVM>e.oldData);
                    };
                }
                if (settings.editSupport.onRemoving) {
                    this.onRowRemoving = (e) => {
                        e.cancel = settings.editSupport.onRemoving(<TVM>e.data);
                    };
                }
                if (settings.editSupport.onCancel) {
                    this.onCellPrepared = (e) => {
                        if (e.column.command === 'edit' && e.rowType === 'data')
                            var item = e.row.data;
                        e.cellElement.find('.dx-link.dx-link-cancel').on('click', function () {
                            e.component.cancelEditData();
                            settings.editSupport.onCancel(<TVM>item);
                        });
                    };
                }
                if (settings.editSupport.initValidate) {
                    this.onRowValidating = (e) => {
                        let vmItem = e.oldData;
                        if (!vmItem && e.newData._original) {
                            vmItem = e.newData._original;
                        }
                        else if (vmItem && vmItem.model && vmItem.constructor && !e.newData._original) {
                            vmItem = new vmItem.constructor(vmItem.model)
                        }
                        Object.getOwnPropertyNames(e.newData).forEach((nameProp) => {
                            let prop = vmItem[nameProp];
                            if (prop && ko.isObservable(prop)) {
                                prop(e.newData[nameProp]);
                            }
                        });
                        if (vmItem) {
                            e.isValid = vmItem.isValid();
                            if (!e.isValid) {
                                e.errorText = vmItem.brokenRulesMessage;
                            }
                        }
                    }
                }
            }

            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });

                if (settings.isLoadingDataSource === true) {
                    this.loadPanel = {
                        enabled: true
                    };
                    let isLoad = true;
                    if (ko.isObservable(dataSource)) {
                        let subs = dataSource.subscribe((q) => {
                            if (isLoad) {
                                isLoad = false;
                                subs.dispose();
                                if (self.dataGridInstane) {
                                    self.dataGridInstane.endCustomLoading();
                                }
                            }
                        });
                    }
                }
                self.onToolbarPreparing = (e) => {
                    if (!(settings.filterRow && settings.filterRow.visible == false)) {
                        let toolbarItems = e.toolbarOptions.items;

                        toolbarItems.unshift({
                            widget: "dxButton",
                            options: {
                                hint: "Сбросить все фильтры", icon: "filter", onClick: () => {
                                    if (this.dataGridSettings.stateStoring != null && this.dataGridSettings.stateStoring.enabled === true) {
                                        localStorage.removeItem(this.dataGridSettings.stateStoring.storageKey);
                                    }
                                    e.component.instance().clearFilter();
                                    //e.component.instance().clearGrouping();
                                    e.component.instance().clearSorting();
                                    e.component.instance().clearSelection();
                                }
                            },
                            location: "after"
                        });
                    }
                    if (settings.onToolbarPreparing) {
                        settings.onToolbarPreparing(e);
                    }
                };
            }
        }

        loadPanel: any;
        //dataGrid: DevExpress.ui.dxDataGrid;
        //onInitialized: Function;
        onInitNewRow: (q) => void;
        onRowValidating: (q) => void;
        onRowInserting: (q) => void;
        onRowInserted: (q) => void;
        onRowUpdating: (q) => void;
        onRowRemoving: (q) => void;
        onRowRemoved: (q) => void;
        onCellPrepared: (q) => void;
        onInitialized = (e) => {
            this.dataGridInstane = e.component;
            if (this.dataGridSettings.isLoadingDataSource === true) {
                this.dataGridInstane.beginCustomLoading();
            }
        };
        onToolbarPreparing: (e) => void;
        dataSource: KnockoutObservableArray<TVM>;
        selectedRowKeys: KnockoutObservableArray<TVM>;
    }

    export class DataGridColumn implements DevExpress.ui.dxDataGridColumn {
        constructor(dataField: string, dataType: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime', caption: string, settings?: DevExpress.ui.dxDataGridColumn) {
            let self = this;
            (<DevExpress.ui.dxDataGridColumn>this).dataField = dataField;
            (<DevExpress.ui.dxDataGridColumn>this).caption = caption;
            if (dataType) {
                (<DevExpress.ui.dxDataGridColumn>this).dataType = dataType;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }

        //headerCellTemplate = (q, w) => {
        //    q.addClass('text-center').append(w.column.caption);
        //};
        //dataField: string;
        //caption: string;
        //dataType: string;
    }

    export class SelectBox<T, T2> {
        constructor(prop: KnockoutObservable<T>, dataSource: KnockoutObservableArray<T2>, valExpr: string, dispExpr: string, settings?: DevExpress.ui.dxSelectBox.Properties) {
            let self = this;
            this.value = prop;
            this.dataSource = dataSource;
            this.showClearButton = true;
            this.searchEnabled = true;
            if (valExpr) {
                this.valueExpr = valExpr;
            }
            this.displayExpr = dispExpr;
            if (!prop) {
                throw new Error("Свойство SelectBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop && prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    if (name == "onSelectionChanged") {
                        self[name] = (e) => {
                            if (dataSource().length) {
                                settings[name](e);
                            }
                        }
                    }
                    else {
                        self[name] = settings[name];
                    }
                });
            }

        }
        value: KnockoutObservable<T>;
        dataSource: KnockoutObservableArray<T2>;
        showClearButton: boolean;
        searchEnabled: boolean;
        valueExpr: string;
        displayExpr: string;

    }

    export class DropDownBox<T, T2> {
        constructor(prop: KnockoutObservable<T>, dataSource: KnockoutObservableArray<T2>, valExpr: string, dispExpr: string, settings?: DevExpress.ui.dxDropDownBoxOptions) {

            //value: gridBoxValue,
            //    valueExpr: "ID",
            //        placeholder: "Select a value...",
            //            displayExpr: function(item) {
            //                return item && item.CompanyName + " <" + item.Phone + ">";
            //            },
            //showClearButton: true,
            //    dataSource: gridDataSource,

            let self = this;
            this.value = prop;
            this.dataSource = dataSource;
            this.showClearButton = true;
            // this.searchEnabled = true;
            if (valExpr) {
                this.valueExpr = valExpr;
            }
            this.displayExpr = dispExpr;
            if (!prop) {
                throw new Error("Свойство DropDownBox не проинициализированно в модели, поэтому его нет во ViewModel")
            }
            if (prop.dxValidator) {
                this["isValid"] = prop.dxValidator.isValid;
                this["validationError"] = prop.dxValidator.validationError;
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        value: KnockoutObservable<T>;
        dataSource: KnockoutObservableArray<T2>;
        showClearButton: boolean;
        searchEnabled: boolean;
        valueExpr: string;
        displayExpr: string;

    }

    export class TreeList<TVM> {

        private dataGridInstane: any;

        constructor(dataSource: KnockoutObservableArray<TVM>, settings?: DevExpress.ui.dxTreeListOptions) {
            let self = this;
            this.dataSource = dataSource;

            //this.onInitialized = (e) => {
            //    this.dataGrid = e.component;
            //};
            if (settings.editSupport) {
                this.onInitNewRow = (row) => {
                    row.data._original = settings.editSupport.factoryNewRow();
                };
                this.onRowInserting = (row) => {
                    let orig = row.data._original;
                    if (!settings.editSupport.initValidate) {
                        Object.getOwnPropertyNames(row.data).forEach((nameProp) => {
                            let prop = orig[nameProp];
                            if (prop && ko.isObservable(prop)) {
                                prop(row.data[nameProp]);
                            }
                        });
                    }
                    row.data = orig;
                    if (settings.editSupport.onInserting) {
                        row.cancel = settings.editSupport.onInserting(<TVM>orig);
                    }
                };
                this.onRowInserted = (row) => {
                    dataSource.valueHasMutated();
                };
                this.onRowRemoved = (row) => {
                    dataSource.valueHasMutated();
                };
                if (settings.editSupport.onUpdating) {
                    this.onRowUpdating = (e) => {
                        e.cancel = settings.editSupport.onUpdating(<TVM>e.oldData);
                    };
                }
                if (settings.editSupport.onRemoving) {
                    this.onRowRemoving = (e) => {
                        e.cancel = settings.editSupport.onRemoving(<TVM>e.data);
                    };
                }
                if (settings.editSupport.onCancel) {
                    this.onCellPrepared = (e) => {
                        if (e.column.command === 'edit' && e.rowType === 'data')
                            var item = e.row.data;
                        e.cellElement.find('.dx-link.dx-link-cancel').on('click', function () {
                            e.component.cancelEditData();
                            settings.editSupport.onCancel(<TVM>item);
                        });
                    };
                }
                if (settings.editSupport.initValidate) {
                    this.onRowValidating = (e) => {
                        let vmItem = e.oldData;
                        if (!e.oldData && e.newData._original) {
                            vmItem = e.newData._original;
                            Object.getOwnPropertyNames(e.newData).forEach((nameProp) => {
                                let prop = vmItem[nameProp];
                                if (prop && ko.isObservable(prop)) {
                                    prop(e.newData[nameProp]);
                                }
                            });
                            e.isValid = e.newData._original.isValid();
                        }
                        if (vmItem) {
                            e.isValid = vmItem.isValid();
                            if (!e.isValid) {
                                e.errorText = vmItem.brokenRulesMessage;
                            }
                        }
                    }
                }
            }
            if (settings.isLoadingDataSource === true) {
                this.loadPanel = {
                    enabled: true
                };
                let isLoad = true;
                if (ko.isObservable(dataSource)) {
                    let subs = dataSource.subscribe((q) => {
                        if (isLoad) {
                            this.dataGridInstane.endCustomLoading();
                            isLoad = false;
                            subs.dispose();
                        }
                    });
                }
            }
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        loadPanel: any;
        //dataGrid: DevExpress.ui.dxDataGrid;
        //onInitialized: Function;
        onInitNewRow: (q) => void;
        onRowValidating: (q) => void;
        onRowInserting: (q) => void;
        onRowInserted: (q) => void;
        onRowUpdating: (q) => void;
        onRowRemoving: (q) => void;
        onRowRemoved: (q) => void;
        onCellPrepared: (q) => void;
        onInitialized = (e) => {
            this.dataGridInstane = e.component;
            this.dataGridInstane.beginCustomLoading();
        };
        dataSource: KnockoutObservableArray<TVM>;
        filterRow = { visible: true };
        headerFilter = {
            visible: true
        };
        rowAlternationEnabled: boolean = true;
        paging = {
            enabled: false,
            pageIndex: 0
        };
        pager = {
            visible: false
        };
        wordWrapEnabled = true;
    }

    export class TreeListColumn implements DevExpress.ui.dxTreeListColumn {
        constructor(dataField: string, dataType: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime', caption: string, settings?: DevExpress.ui.dxTreeListColumn) {
            let self = this;
            (<DevExpress.ui.dxTreeListColumn>this).dataField = dataField;
            (<DevExpress.ui.dxTreeListColumn>this).caption = caption;
            (<DevExpress.ui.dxTreeListColumn>this).dataType = dataType;
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        //dataField: string;
        //caption: string;
        //dataType: string;
    }

    export class Popup {
        constructor(title: string, contentTemplate: string | Function, visible: KnockoutObservable<boolean>, settings?: DevExpress.ui.dxPopup.Properties) {
            let self = this;
            this.title = title;
            this.contentTemplate = contentTemplate;
            this.visible = visible;
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        title: string;
        visible: KnockoutObservable<boolean>;
        contentTemplate: string | Function;
        dragEnabled = false;
        closeOnOutsideClick = true;
        showTitle = true;
        height = "auto";
    }

    export class TagBox<T> {
        constructor(items: KnockoutObservableArray<T>, selectedValues: KnockoutObservableArray<T>, dispExpr: string, settings?: DevExpress.ui.dxTagBoxOptions) {


            let self = this;
            this.items = items;
            this.value = selectedValues;
            //this.showClearButton = true;
            // this.searchEnabled = true;
            this.displayExpr = dispExpr;
            if (settings) {
                Object.getOwnPropertyNames(settings).forEach((name) => {
                    self[name] = settings[name];
                });
            }
        }
        items: KnockoutObservableArray<T>;
        value: KnockoutObservableArray<T>;
        //showClearButton: boolean;
        //searchEnabled: boolean;
        displayExpr: string;

    }


}
