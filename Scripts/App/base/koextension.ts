ko.bindingHandlers.loadAjaxHtmlFileManager = new function () {
    var self = this;
    this.Upd = true;
    this.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var val = valueAccessor();
        var url = val.Url;
        var params = ko.unwrap(val.Params);
        var cb = val.Callback;
        self.Upd = false;
        (<any>window).$.get(url, params).done(function (data) {
            (<any>window).$(element).html(data);
            if (typeof cb === 'function') {
                cb();
                ko.applyBindings(bindingContext.$data, (<any>window).$(element).children()[0]);
            }
            self.Upd = true;
        });
    };
    this.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var val = valueAccessor();
        var url = val.Url;
        var cb = val.Callback;
        var params = ko.unwrap(val.Params);
        if (self.Upd) {
            element.innerHTML = null;
            (<any>window).$.get(url, params).done(function (data) {
                element.innerHTML = data;
                if (typeof cb === 'function') {
                    cb();
                    ko.applyBindings(bindingContext.$data, (<any>window).$(element).children()[0]);
                }
            });
        }
    };
};

ko.bindingHandlers.cssHtml = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        let data = valueAccessor();

        var ob = new MutationObserver(() => {
            Object.getOwnPropertyNames(data).forEach(q => {
                let val = data[q];
                if (ko.isObservable(val)) {
                    if (element.className.split(' ').some(w => w === q)) {
                        val(true);
                    }
                    else {
                        val(false);
                    }
                }

            });
        });
        ob.observe(element, {
            attributes: true,
            attributeFilter: ["class"]
        });
    }
    //,
    //update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    //}
};

ko.bindingHandlers.dxButtonDataGridAction = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        let control = GetInstanceControl(allBindings(), element, 'dxButtonDataGridAction');
        if (control) {
            let val = valueAccessor();
            let afterAct = val.afterAction || function () { };
            let $gridElement = $(val.selector);
            if ($gridElement.length !== 0) {
                control.option().onClick.then(function () {
                    var grid = $gridElement['dxDataGrid']('instance');
                    if (grid) {
                        grid[val.action]();
                    }
                }).then(afterAct);
            }
        }
    }
};

ko.bindingHandlers.afterHtmlRender = {
    update: function (element, valueAccessor, allBindings) {
        // check if element has 'html' binding
        if (!allBindings().html) return;
        // get bound callback (don't care about context, it's ready-to-use ref to function)
        var callback = valueAccessor();
        // fire callback with new value of an observable bound via 'html' binding
        callback(allBindings().html());
    }
}

ko.bindingHandlers.htmlBinding = {
    //'init': function() {
    //  return { 'controlsDescendantBindings': true }; // this line prevents parse "injected binding"
    //},
    update: function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};

// extenders

ko.observableArray.fn.pushAll = function (valuesToPush) {
    var underlyingArray = this();
    this.valueWillMutate();
    ko.utils.arrayPushAll(underlyingArray, valuesToPush);
    this.valueHasMutated();
    return this;
};

//ko.extenders.loadOnDemand = <TModel, TViewModelItem>(target: KnockoutObservableArray<TViewModelItem>, option: { loadCommand: KoPlus.Command<TModel[]>, factory: (model: TModel) => TViewModelItem }): KnockoutObservableArray<TViewModelItem> => {
//    if (!option.loadCommand.completed()) {
//        option.loadCommand().then((q) => {
//            target.removeAll();
//            target.pushAll(q.map((m) => option.factory(m)));
//        });
//    }
//    return target;
//};



//devextreme custom special bindings
ko.bindingHandlers.dxCustomSelectedItemTreeView = new function () {
    var self = this;
    this.Upd = true;
    this.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var control = GetInstanceControl(allBindings(), element, 'dxCustomSelectedItemTreeView');
        if (control) {
            var val = valueAccessor();
            if (val && val.SyncSelect === undefined && ko.isObservable(val.Bind)) {
                control.on("itemClick", function (e) {
                    var sel = e.itemData;
                    if (val.keepFocus) {
                        treeItemClick(e, element);
                    }
                    var objSelVm = val.Bind();
                    if (sel) {
                        if (!objSelVm || objSelVm[val.Key] !== sel[val.Key]) {
                            val.Bind(sel);
                        }
                    }
                    else {
                        if (objSelVm !== null || objSelVm !== undefined) {
                            var find = $(element).find("li[data-item-id='" + objSelVm[val.Key] + "']");
                            control.selectItem(find);
                        }
                    }
                });
                return;
            }
            if (val && val.SyncSelect !== undefined && ko.isObservable(val.Bind) && ko.isObservable(val.Source)) {
                if (val.SyncSelect !== '') {
                    val.Source().forEach(function (el) {
                        el[val.SyncSelect].subscribe(function (newValue) {
                            if (typeof newValue === 'boolean') {
                                if (newValue) {
                                    var valBind = val.Bind();
                                    var exist = valBind.some(function (item) {
                                        return item[val.Key] == el[val.Key];
                                    });
                                    if (!exist) {
                                        val.Bind.push(el);
                                    }
                                }
                                else {
                                    val.Bind.remove(el);
                                }
                            }
                        });
                    });
                }
                control.on("itemClick", function (e) {
                    if (val.keepFocus) {
                        treeItemClick(e, element);
                    }
                });
                control.on("selectionChanged", function (e) {
                    var selKeys = [];
                    var sel = [];
                    function getSelKeys(node) {
                        if (node && node.selected) {
                            selKeys.push(node.key);
                            sel.push(node.itemData);
                        }
                        node.children.forEach(function (item) {
                            getSelKeys(item);
                        });
                    };
                    control.getNodes().forEach(function (item) {
                        getSelKeys(item);
                    });
                    var targetArray = val.Bind();
                    if (sel.length !== 0) {
                        var dif = targetArray.filter(function (el) {
                            return selKeys.includes(ko.unwrap(el[val.Key]));
                        });
                        if (dif.length !== 0 || dif.length !== sel.length) {
                            self.Upd = false;
                            targetArray.splice(0, targetArray.length);
                            val.Bind.pushAll(sel);
                            if (val.SyncSelect !== '') {

                                dif.forEach(function (el) {
                                    if (!selKeys.includes(ko.unwrap(el[val.Key]))) {
                                        el[val.SyncSelect](false);
                                    }
                                });
                                sel.forEach(function (el) {
                                    el[val.SyncSelect](true);
                                });

                            }
                            self.Upd = true;
                        }
                    }
                    else {
                        if (sel.length !== targetArray.length) {
                            self.Upd = false;
                            var copyTargetArray = targetArray.splice(0);
                            val.Bind.removeAll();
                            if (val.SyncSelect !== '') {
                                copyTargetArray.forEach(function (el) {
                                    el[val.SyncSelect](false);
                                });

                            }
                            self.Upd = true;
                        }
                    }
                });
                return;
            }
        }
    };
    this.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var val = valueAccessor();
        //var sel = ko.unwrap(val.Bind);
        var source = ko.unwrap(val.Source);
        if (!self.Upd) {
            return;
        }
        var control = GetInstanceControl(allBindings(), element, 'dxCustomSelectedItemTreeView');
        if (control) {
            control.unselectAll();
        }
    };
};

ko.bindingHandlers.dxCustomSelectedItem = new function () {
    var self = this;
    this.Upd = true;
    this.init = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var control = GetInstanceControl(allBindings(), element, 'dxCustomSelectedItem');
        if (control) {
            var val = valueAccessor();
            self.Upd = true;
            if (val && val.SyncSelect === undefined && ko.isObservable(val.Bind)) {
                control.on("selectionChanged", function (e) {
                    var sel = e.selectedRowsData;
                    var objSelVm = val.Bind();
                    if (sel.length !== 0) {
                        var selObjControl = sel[0];
                        if (!objSelVm || objSelVm[val.Key] !== selObjControl[val.Key]) {
                            val.Bind(selObjControl);
                        }
                    }
                    else {
                        if (objSelVm !== null || objSelVm !== undefined) {
                            val.Bind(null);
                        }
                    }
                });
                return;
            }
            if (val && val.SyncSelect !== undefined && ko.isObservable(val.Bind) && ko.isObservable(val.Source)) {
                //if (val.SyncSelect !== '') {
                //    val.Source().forEach(function (el) {
                //        el[val.SyncSelect].subscribe(function (newValue) {
                //            if (typeof newValue === 'boolean') {
                //                if (newValue) {
                //                    var valBind = val.Bind();
                //                    var exist = valBind.some(function (item) {
                //                        return item === el;
                //                    });
                //                    if (!exist) {
                //                        val.Bind.push(el);
                //                    }
                //                }
                //                else {
                //                    val.Bind.remove(el);
                //                }
                //            }
                //        });
                //    });
                //}
                control.on("selectionChanged", function (e) {
                    var selRowsData = e.selectedRowsData;
                    var sel = val.Source().filter(function (el) {
                        return selRowsData.some(function (it) {
                            return it[val.Key] === el[val.Key];
                        });
                    });
                    var targetArray = val.Bind();
                    if (sel.length !== 0) {
                        var dif = targetArray.filter(function (el) {
                            return !sel.some(function (it) {
                                return it === el;
                            });
                        });
                        if (dif.length !== 0 || dif.length !== sel.length) {
                            self.Upd = false;
                            targetArray.splice(0, targetArray.length);
                            val.Bind.pushAll(sel);
                            if (val.SyncSelect !== '') {
                                dif.forEach(function (el) {
                                    if (!sel.some(function (it) { return it === el; })) {
                                        el[val.SyncSelect](false);
                                    }
                                });
                                sel.forEach(function (el) {
                                    el[val.SyncSelect](true);
                                });
                            }
                            self.Upd = true;
                        }
                    }
                    else {
                        if (sel.length !== targetArray.length) {
                            self.Upd = false;
                            var copyTargetArray = targetArray.splice(0);
                            val.Bind.removeAll();
                            if (val.SyncSelect !== '') {
                                copyTargetArray.forEach(function (el) {
                                    el[val.SyncSelect](false);
                                });
                            }
                            self.Upd = true;
                        }
                    }
                });
            }
        }

    };
    this.update = function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var val = valueAccessor();
        var sel = ko.unwrap(val.Bind);
        var source = ko.unwrap(val.Source);

        if (val.SyncSelect !== undefined && val.SyncSelect !== '') {
            source.forEach((el) => {
                el[val.SyncSelect]();
            });
        }

        if (!self.Upd) {
            return;
        }
        var control = GetInstanceControl(allBindings(), element, 'dxCustomSelectedItem');
        if (control) {
            if (val && val.SyncSelect === undefined && ko.isObservable(val.Bind)) {
                sel = val.Bind();
                if (sel) {
                    control.selectRows(sel);
                }
                else {
                    control.deselectAll();
                }
                return;
            }
            if (val && val.SyncSelect !== undefined && ko.isObservable(val.Bind) && ko.isObservable(val.Source)) {
                //control.deselectAll();
                sel = val.Bind();
                var selSync = [];
                if (val.SyncSelect !== '') {
                    sel = [];
                    selSync = source.filter(function (item) {
                        return item[val.SyncSelect]() /*&& !sel.some(function (it) { return it === item; })*/;
                    });
                }
                var selKeys = sel.concat(selSync);
                if (selKeys.length !== 0) {
                    control.selectRows(selKeys);
                }
                else {
                    control.deselectAll();
                }
            }
        }
    };
};


ko.observable.fn.withPausing = function () {
    this.notifySubscribers = function () {
        if (!this.pauseNotifications) {
            ko.subscribable.fn.notifySubscribers.apply(this, arguments);
        }
    };

    this.sneakyUpdate = function (newValue) {
        this.pauseNotifications = true;
        this(newValue);
        this.pauseNotifications = false;
    };

    return this;
};

function GetInstanceControl(allBindings, element, nameCustomBindHandler) {
    var name = Object.getOwnPropertyNames(allBindings).find(function (el) {
        if (el.startsWith('dx') && el !== nameCustomBindHandler) {
            return true;
        }
    });
    return $(element)[name]('instance');
}

function treeItemClick(e, element) {
    $(element).find(".dx-treeview-item").removeClass("treeview-active-item");
    $(e.itemElement).addClass("treeview-active-item");
}
