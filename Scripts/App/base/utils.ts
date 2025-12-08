import { Enums } from "./enums";

type IncomeDateParams = {
    beginDate: Date,
    endDate: Date,
    checkingRange: number
}

export namespace Utils {

    export function enumerable(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.enumerable = value;
        };
    }

    export function timeZoneConvertDate(date: string) {
        var timezoneOffset = (new Date(date)).getTimezoneOffset() * 60000;
        var parsed = Date.parse(date + 'Z');
        return new Date(parsed + timezoneOffset);
    }

    export function copyToClipboard(text: string) {
        window.prompt("Скопировать в буфер: Ctrl+C, Enter", text);
    };

    export function getNodeId(typeNode: Enums.TypeNode, id: number) {
        return Enums.TypeNode[typeNode] + id;
    };

    export function getComplectId(nodeId: string) {
        return +nodeId.substr(nodeId.indexOf('_') + 1);
    };

    export const NumberPref = /^[-/.]{1}/;

    export function RegexSpecialCharAndLength(text: string) {
        var regex = new RegExp(/[:<>/\\|""*?]/g);
        var result = text.replace(regex, " ");
        if (result && result.length > 47) {
            result = result.substring(0, 47) + '...';
        }
        return result;
    }

    export function RegexNumberPref(text: string) {
        var regex = new RegExp(/^[-/.]{1}/g);
        var result = text.replace(regex, "");
        return result;
    }

    export function GetGUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };


    export function GetTypeNode(nodeId: string) {
        let type = nodeId.replace(/[0-9]/g, '');
        return Enums.TypeNode[type];
    };

    export function GetNodeName(nodeId: string) {
        return nodeId.replace(/[0-9]/g, '');
    }

    export function GetId(nodeId: string) {
        if (nodeId.indexOf("_") > -1) {
            nodeId = nodeId.substr(0, nodeId.indexOf('_'));
        }
        let id = nodeId.match(/(\d+)/g);
        return +id;
    };

    export function GetNumberFromString(str: string) {
        return str.replace(new RegExp('\\D', 'g'), '');
    };


    export function GroupBy(xs: Array<any>, key: string) {
        return xs.reduce((rv, x) => {
            (rv[ko.unwrap(x[key])] = rv[ko.unwrap(x[key])] || []).push(x);
            return rv;
        }, {});
    };


    export function getUrlVars(url): any {
        var hash;
        var myJson = {};
        var hashes = url.slice(url.indexOf('?') + 1).split('&');

        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            myJson[hash[0]] = hash[1];
        }
        return myJson;
    }

    export function checkExistName(listName: Array<string>, checkName: string): string {
        let num: number = 1;
        if (!listName.length || !listName.includes(checkName)) return checkName;


        while (listName.includes(checkName.concat(`(${ num })`))) {
            ++num;
        }
        return checkName.concat(`(${ num })`);
    }

    export function isPermittedEditAction(action: number): boolean {

        return (action & Enums.PermittedAction.Edit)===Enums.PermittedAction.Edit
    };

    export function gotoNodeId(nodeId: string) {
        window.open(`/projectTree/Edit?TreeProject%5BselNodeId%5D=${ nodeId }&CardTreeProject%5BmodeView%5D=${ Enums.ModeView.None }`, '_blank');
    }
    export function gotoOG(projectId: number) {
        window.open(`/ProjectTree/EditObjectGraph?idProject=${projectId}`, '_blank');
    }
    export function gotoKG(projectId: number, cshId: number) {
        window.open(`/ProjectTree/Edit/?TreeProject%5BselNodeId%5D=Project${projectId}&CardTreeProject%5BmodeView%5D=13&cshId=${cshId}`, '_blank');
    }

    export function getFileName(str: string): string {
        let arrName = str.split('.');

        arrName.pop();

        return arrName.length > 1 ? arrName.join('.'):arrName.join('');
    }

    export function getExtension(str): string {
        let arrName = str.split('.');

        return arrName.pop();
    }


    export function RegexOGRNIP(text: string) {
        var regex = new RegExp(`^\\d{15}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexEmailEPZ(text: string) {
        var regex = new RegExp(`^[a-zA-Zа-яА-Я0-9_.-]{1,}[@]{1}[a-zA-Zа-яА-Я0-9_.-]{1,}[.]{1}[a-zA-Zа-яА-Я]{2,}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexOrgOGRN(text: string) {
        var regex = new RegExp(`^\\d{13}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexOrgINN(text: string) {
        var regex = new RegExp(`^\\d{10}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexOrgKPP(text: string) {
        var regex = new RegExp(`^\\d{9}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexPostIndex(text: string) {
        var regex = new RegExp(`^\\d{6}$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexSNILS(text: string) {
        // согласно требований https://gitlab.competentit.ru/electronsv/easupd/pm/-/issues/3105
        const regex = /^(\d{3}-\d{3}-\d{3} \d{2}|\*{11} \*\*)$/;
        return regex.test(text);
    }

    export function RegexFunctionsClass(text: string) {
        var regex = new RegExp(`(^([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,3}.[0-9]{1,3})$)|(^([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,3})$)`);
        var result = regex.test(text);
        return result;
    }

    export function RegexFunctionsClassGroup(text: string) {
        var regex = new RegExp(`^([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,3})$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexFunctionsClassOKS(text: string) {
        var regex = new RegExp(`^([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,3}.[0-9]{1,3})$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexFunctionsClassCenterDG(text: string) {
        var regex = new RegExp(`(^[0-9]{1,2}.[0-9]{1,2}.[0-9]{1,3}.[0-9]{1,3}$)`);
        var result = regex.test(text);
        return result;
    }

    export function RegexCadastralNumber(text: string) {
        var regex = new RegExp(`^\\d+:\\d+:\\d+:\\d+$`);
        var result = regex.test(text);
        return result;
    }

    export function RegexNOPRIZ(text: string): boolean {
        const regex: RegExp = new RegExp(`^(П|ПИ|И)-\\d{6}$`);
        return regex.test(text);
    }

    //export function groupBy(xs, key) {
    //    return xs.reduce(function (rv, x) {
    //        (rv[x[key]] = rv[x[key]] || []).push(x);
    //        return rv;
    //    }, {});
    //};

    /**
     * Функция для перехода на карточку тома
     * @param idTome {number} - идентификатор тома
     * @param idComplect {number} - идентификатор комплекта, в котором находится том
     */
    export function goToTome(idTome: number, idComplect: number): void {
        let url = new URL(window.location.origin + `/ProjectTree/Edit/?TreeProject%5BselNodeId%5D=Scheme${ idTome }_${ idComplect }&CardTreeProject%5BmodeView%5D=0`)
        window.open(url.href, '_blank');
    }

    export function gotToSchemeFileManager(idTome: number, idComplect: number): void {
        let url = new URL(window.location.origin + `/ProjectTree/Edit/?TreeProject%5BselNodeId%5D=Scheme${ idTome }_${ idComplect }&CardTreeProject%5BmodeView%5D=5`)
        window.open(url.href, '_blank');
    }

    /**
     * Функция для перехода на карточку комплекта ГГЭ в режиме для чтения
     * @param ip {string} - урл на который необходимо произвести редирект
     * @param idComplect {number} - идентификатор комплекта, в котором находится том
     */
    export function gotToComplectGGE(ip: string, idComplect: number): void {
        let url = new URL(ip + `/ProjectTree/Edit/?TreeProject%5BselNodeId%5D=Subject${ idComplect }&CardTreeProject%5BmodeView%5D=2`)
        window.open(url.href, '_blank');
    }

    export function downloadFile (url, config?: { data?: any, method?: string }): Promise<void> {
        let data, method;

        if (config) {
            data = config.data;
            method = config.method
        }

        if (url) {
            return fetch(url, {
                method: method || 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data || null
            })
                .then(response => {
                    if (response.ok) {
                        const disposition = response.headers.get('Content-Disposition');
                        const decodedDisposition = decodeURIComponent(disposition);
                        const matches = /filename\*?=['"]?(?:UTF-8['"]*)?([^;\r\n"']*)['"]?;?/i.exec(decodedDisposition);
                        const filename = matches && matches[1] ? matches[1]:'download'; // Значение по умолчанию, если имя файла не найдено

                        return response.blob().then(blob => ({ blob, filename }));
                    } else {
                        return response.json().then(errorData => {
                            throw new Error(errorData.Message || 'Непредвиденная ошибка сервера (500)');
                        });
                    }
                })
                .then(({ blob, filename }) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename; // Устанавливаем имя файла для скачивания
                    a.click();
                    URL.revokeObjectURL(url);
                })
        }
    }

    /**
     * Проверка на принадлежность типа события той или иной категории
     * @param type - тип LogActionType
     */
    export function isSubcontractLogactionType(type: number): boolean {
        let logactionType: Array<number> = [
            Enums.LogActionType.SubcontractorOwnerChangeNewSubcontractWorkTaskStatus,
            Enums.LogActionType.SubcontractorExecuterChangeNewSubcontractWorkTaskStatus,
            Enums.LogActionType.SetGIPNewSubcontractWorkTask,
            Enums.LogActionType.ChangeGIPNewSubcontractWorkTask,
            Enums.LogActionType.AddingFilesForSubcontract,
            Enums.LogActionType.TransferNewSubcontractWorkTaskWithoutChangeStatus,
        ];
        return (logactionType.indexOf(type) > -1);
    }

    export function getDateWithoutTime(date = new Date()) {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    }


    // \u0000 -\u001F    # Базовые управляющие символы
    // \u007F -\u009F    # Расширенные управляющие символы
    // \u200B -\u200F    # Символы форматирования(zero - width и directional)
    // \u2028 -\u202F    # Разделители и directional formatting
    // \u2060 -\u206F    # Дополнительные невидимые символы
    // \uFEFF            # BOM(Byte Order Mark)
    // \u2215            # DIVISION SLASH(∕)
    export function containsUnicodeSpecialCharacters(filename) {
        // Более строгая проверка на различные служебные символы
        const forbiddenChars = /[\u0000-\u001F\u007F-\u009F\u200B-\u200F\u2028-\u202F\u2060-\u206F\uFEFF\u2215]/;
        return forbiddenChars.test(filename);
    }

}
