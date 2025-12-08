//import "./app/base/polifills";
import "babel-polyfill";
import 'knockout-mapping';
import 'knockout-postbox';
//import 'knockout-amd-helpers';
import './lib/ko-plus-promise/ko.plus';
import './app/base/koextension';
//import 'jqueryExtend';
import './lib/devextremewebpack/dx.custom.config.js';
import './webpack-component-loader';
import 'bootstrap';

//css vendor
import 'bootstrap/dist/css/bootstrap.css';
import './lib/ko-plus-promise/ko.plus.css';
import '../styles/lib/jquery-ui/jquery-ui.css';
import '../styles/lib/jquery-ui/jquery-ui.structure.css';
import '../styles/lib/jquery-layout/layout-default.css';
import '../styles/lib/jquery.mb.extruder-master/mbextruder.css';
import '../styles/lib/devextremewebpack/dx.common.css';
import '../styles/lib/devextremewebpack/dx.light.css';
import '../styles/lib/devextremewebpack/gantt/dx-gantt.css';
import '../styles/lib/font-awesome-4.7.0/css/font-awesome.css';
import './lib/jstree/style.css';
import './lib/knockout-plus/ko.plus.css'

//css site
// import '../Styles/App/site.css';
// import '../Styles/App/common.css';

//deconstruct 




//ko.components.register('contract-view-popup', require('bundle-loader?lazy!./app/components/contract-view-popup/contract-view-popup'));
//ko.components.register('cpstage-view-popup', require('bundle-loader?lazy!./app/components/cpstage-view-popup/cpstage-view-popup'));
//ko.components.register('contractmanual-view-popup', require('bundle-loader?lazy!./app/components/contractmanual-view-popup/contractmanual-view-popup'));
//ko.components.register('cpstagemanual-view-popup', require('bundle-loader?lazy!./app/components/cpstagemanual-view-popup/cpstagemanual-view-popup'));
//ko.components.register('customer-view-popup', require('bundle-loader?lazy!./app/components/customer-view-popup/customer-view-popup'));
//ko.components.register('person-view-popup', require('bundle-loader?lazy!./app/components/person-view-popup/person-view-popup'));
//ko.components.register('projectarchive-create', require('bundle-loader?lazy!./app/components/projectarchive-create/projectarchive-create'));





















//});

//ko.amdTemplateEngine.defaultPath = "app/views";
//ko.amdTemplateEngine.defaultSuffix = ".tmpl.html";
//ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
//ko.bindingHandlers.module.baseDir = "app";
//ko.bindingHandlers.module.templateProperty = 'TemplateModule';
//ko.bindingHandlers.module.disposeMethod = 'Dispose';

ko.postbox.serializer = function (val) {
    return '';
};

ko.postbox.defaultComparer = function (newValue: any, cacheItem: any) {
    return cacheItem && newValue === cacheItem.value;
};



$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    if (location.pathname.indexOf('/proxy/') > -1) {
        var param1 = location.pathname.replace('/proxy/', '');
        var branch = param1.substr(0, param1.indexOf('/'));
        options.url = '/proxy/' + branch + options.url;
    }
    //console.log(options);
});

//$(window).on("beforeunload", function (e) {
//    $.ajax({
//        type: 'POST',
//        async: false,
//        url: '/api/profile/user/profilesettings/lastplaceofwork',
//        data: { '': location.href }
//    });
//});

let baseToJSON = Date.prototype.toJSON;

Date.prototype.toJSON = function (key?: any) {
    //var d = new Date(Date.UTC(this.getUTCFullYear(), this.getUTCMonth(), this.getDate()));
    let _userOffset = this.getTimezoneOffset() * 60 * 1000;
    return baseToJSON.call(new Date(this.getTime() - _userOffset), key);
};

//if (typeof Date.prototype.withoutTime !== 'function') {
//    Date.prototype.withoutTime = (): Date => {
//        var d = new Date(this);
//        d.setHours(0, 0, 0, 0);
//        return d;
//    };
//}

AddHelpFunction(); 

function AddHelpFunction() {
    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function (str) {
            return this.slice(-str.length) === str;
        };
    }
    if (typeof String.prototype.startsWith !== 'function') {
        String.prototype.startsWith = function (str) {
            return this.slice(0, str.length) === str;
        };
    }
    if (typeof (<any>String.prototype).contains !== 'function') {
        (<any>String.prototype).contains = function (it) { return this.indexOf(it) !== -1; };
    }

    if (typeof Date.prototype.withoutTime !== 'function') {
        Date.prototype.withoutTime = function () {
            var d = new Date(this);
            d.setHours(0, 0, 0, 0);
            return d;
        };
    }
    if (typeof (<any>Date.prototype).maxTime !== 'function') {
        (<any>Date.prototype).maxTime = function () {
            var d = new Date(this);
            d.setHours(23, 59, 59, 999);
            return d;
        };
    }

    //if (Object.prototype) {
    (<any>Object).definePropertyIfNotExist = function (context, propName, getsetObject) {
        if (context && propName && getsetObject && context[propName] === undefined) {
            Object.defineProperty(context, propName, getsetObject);
        }
    };
    //}
}



(<any>$.fn).exists = function () {
    return this.length !== 0;
};


(<any>$).extend({
    getUrlVars: function (url) {
        var hash;
        var myJson = {};
        var hashes = url.slice(url.indexOf('?') + 1).split('&');

        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            //vars.push(hash[0]);
            //vars[hash[0]] = hash[1];
            myJson[hash[0]] = hash[1];
        }
        return myJson;
    },
    getUrlVar: function (name) {
        var array = (<any>$).getUrlVars();
        return array[name];
    },

    //DELETE: function (url, success, data, dataType, error) {
    //    var er = error || util.ErrorMessage;
    //    return $.ajax({
    //        type: "DELETE",
    //        url: url,
    //        data: JSON.stringify(data),
    //        success: success,
    //        contentType: "application/json; charset=utf-8",
    //        traditional: true,
    //        error: er,
    //        dataType: dataType
    //    });
    //},

    //POSTTraditional: function (url, data, success, error) {
    //    var er = error || util.ErrorMessage;
    //    return $.ajax({
    //        url: url,
    //        type: 'POST',
    //        data: JSON.stringify(data),
    //        contentType: "application/json; charset=utf-8",
    //        traditional: true,
    //        success: success,
    //        error: er
    //    });
    //},
    put: function (url, data) {
        return $.ajax({
            url: url,
            type: 'PUT',
            data: data
        });
    },

    download: function (url, data, method) {
        //url and data options required
        if (url && data) {
            //data can be string of parameters or array/object
            data = typeof data === 'string' ? data : jQuery.param(data, false);
            //split params into form inputs
            var inputs = '';
            jQuery.each(data.split('&'), function () {
                var pair = this.split('=');
                inputs += '<input type="hidden" name="' + pair[0] + '" value="' + pair[1] + '" />';
            });
            //send request
            jQuery('<form action="' + url + '" method="' + (method || 'post') + '">' + inputs + '</form>')
                .appendTo('body').submit().remove();
        }
    },
    downloadArrayParametr: function (url, data, method) {
        //url and data options required
        if (url && data) {
            //data can be string of parameters or array/object
            data = typeof data === 'string' ? data : jQuery.param(data, false);
            //split params into form inputs
            var inputs = '';
            jQuery.each(data.split('&'), function () {
                var pair = this.split('=');
                inputs += '<input type="hidden" name="' + '[]' + '" value="' + pair[1] + '" />';
            });
            //send request
            jQuery('<form action="' + url + '" method="' + (method || 'post') + '">' + inputs + '</form>')
                .appendTo('body').submit().remove();
        }
    }

});

(function ($) {
    // Creating an internal undef value is safer than using undefined, in case it
    // was ever overwritten.
    var undef;
    // A handy reference.
    var decode = decodeURIComponent;

    // Document $.deparam.
    var deparam = $.deparam = function (text, reviver) {
        // The object to be returned.
        var result = {};
        // Iterate over all key=value pairs.
        $.each(text.replace(/\+/g, ' ').split('&'), function (index, pair) {
            // The key=value pair.
            var kv = pair.split('=');
            // The key, URI-decoded.
            var key = decode(kv[0]);
            // Abort if there's no key.
            if (!key) { return; }
            // The value, URI-decoded. If value is missing, use empty string.
            var value = decode(kv[1] || '');
            // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
            // into its component parts.
            var keys = key.split('][');
            var last = keys.length - 1;
            // Used when key is complex.
            var i = 0;
            var current = result;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if (keys[0].indexOf('[') >= 0 && /\]$/.test(keys[last])) {
                // Remove the trailing ] from the last keys part.
                keys[last] = keys[last].replace(/\]$/, '');
                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat(keys);
                // Since a key part was added, increment last.
                last++;
            } else {
                // Basic 'foo' style key.
                last = 0;
            }

            if ($.isFunction(reviver)) {
                // If a reviver function was passed, use that function.
                value = reviver(key, value);
            } else if (reviver) {
                // If true was passed, use the built-in $.deparam.reviver function.
                value = (<any>deparam).reviver(key, value);
            }

            if (last) {
                // Complex key, like 'a[]' or 'a[b][c]'. At this point, the keys array
                // might look like ['a', ''] (array) or ['a', 'b', 'c'] (object).
                for (; i <= last; i++) {
                    // If the current key part was specified, use that value as the array
                    // index or object key. If omitted, assume an array and use the
                    // array's length (effectively an array push).
                    key = keys[i] !== '' ? keys[i] : (<any>current).length;
                    if (i < last) {
                        // If not the last key part, update the reference to the current
                        // object/array, creating it if it doesn't already exist AND there's
                        // a next key. If the next key is non-numeric and not empty string,
                        // create an object, otherwise create an array.
                        current = current[key] = current[key] || (isNaN(<any>keys[i + 1]) ? {} : []);
                    } else {
                        // If the last key part, set the value.
                        current[key] = value;
                    }
                }
            } else {
                // Simple key.
                if ($.isArray(result[key])) {
                    // If the key already exists, and is an array, push the new value onto
                    // the array.
                    result[key].push(value);
                } else if (key in result) {
                    // If the key already exists, and is NOT an array, turn it into an
                    // array, pushing the new value onto it.
                    result[key] = [result[key], value];
                } else {
                    // Otherwise, just set the value.
                    result[key] = value;
                }
            }
        });

        return result;
    };

    // Default reviver function, used when true is passed as the second argument
    // to $.deparam. Don't like it? Pass your own!
    (<any>deparam).reviver = function (key, value) {
        var specials = {
            'true': true,
            'false': false,
            'null': null,
            'undefined': undef
        };

        return (+value + '') === value ? +value // Number
            : value in specials ? specials[value] // true, false, null, undefined
                : value; // String
    };

}($));
