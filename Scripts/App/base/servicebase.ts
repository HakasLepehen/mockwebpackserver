import { ServerError } from "./serverError";
import 'whatwg-fetch';
import { messageShowService } from "../servicets/messageshowservice";

InitAjaxSetup();

function InitAjaxSetup() {
    function ShowErrorMessage(data) {
        if (!data || data === "") {
            return;
        }
        var result = data;
        if (data.Errors !== undefined && Array.isArray(data.Errors)) {
            result = "";
            $.makeArray(data.Errors).forEach(function (val) {
                result += val + "\n";
            });
        }
        return ShowMessageBox(result);
    };

    function ShowMessageBox(data) {
        try {
            var msg = data.responseJSON || JSON.parse(data);
            var result = '';
            if (msg.ExceptionMessage) {
                result = msg.ExceptionMessage;
                while (msg.InnerException) {
                    msg = msg.InnerException;
                    result += "\n\r" + msg.ExceptionMessage;
                }
            }
            else if (msg.ModelState) {
                result = msg.Message
                for (var propertyName in msg.ModelState) {
                    msg.ModelState[propertyName].forEach(function (el) {
                        result += "<div>" + propertyName + ": " + el + ".</div>";
                    })
                }
            }
            else if (msg.Message) {
                result = msg.Message;
            }
            if (msg.Link) {
                result += " <div><ins><a onclick=\"{location.href = '" + msg.Link + "'; location.reload();}\" style=\"cursor: pointer; color: blue;\">Перейти к элементу состава проекта</a></ins></div>";
            }
            //$containerMessage.html(result);
            //messageShowServise.NotificationError(result);
            messageShowService.information(result);

        }
        catch (e) {
            messageShowService.information(data);
            //$containerMessage.html(data);
        }
        //return popupMessage.Show();
        //return alert(data)
    };
    $.ajaxSetup({
        error: function (xhr) {
            if (xhr.status === 401) {
                location.href = "/account/login/?returnUrl=" + encodeURIComponent(location.pathname + location.hash);
            }
            else {
                ShowErrorMessage(xhr.responseText);
            }
        }
    });
};


export abstract class ServiceBase {


    protected deleteJson<T>(url: string, body: T): Promise<void> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        return fetch(url, {
            headers: headers,
            method: 'delete',
            credentials: 'same-origin',
            body: JSON.stringify(body)
        }).then<void | ServerError>(response => {
            if (response.ok) {
                return;
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as void);

    }

    protected getJson<TModel>(url: string): Promise<TModel> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        url = this.checkProxy(url);


        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}

        return fetch(url, {
            headers: headers,
            method: 'get',
            credentials: 'same-origin'
        }).then<TModel | ServerError>(response => {
            if (response.ok) {
                return response.json<TModel>();
            }
            else {
                return this.setError(response);
                //response.json<ServerError>().then((q) => {
                //    throw new ServerError(q);
                //});
            }

        }).then((q) => q as TModel);
    }

    protected postJsonWithoutBody<TModelResponse>(url: string): Promise<TModelResponse> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'post',
            credentials: 'same-origin'
        }).then<TModelResponse | ServerError>(response => {
            if (response.ok) {
                return response.json<TModelResponse>();
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as TModelResponse);

    }


    protected postJsonWithoutBodyWithoutResponse(url: string): Promise<void> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'post',
            credentials: 'same-origin'
        }).then<void | ServerError>(response => {
            if (response.ok) {
                return;
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as void);

    }

    protected putJsonWithoutBodyWithoutResponse(url: string): Promise<void> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'put',
            credentials: 'same-origin'
        }).then<void | ServerError>(response => {
            if (response.ok) {
                return;
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as void);

    }

    protected putJsonWithoutBody<TModelResponse>(url: string): Promise<TModelResponse> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'put',
            credentials: 'same-origin'
        }).then<TModelResponse | ServerError>(response => {
            if (response.ok) {
                return response.json<TModelResponse>();
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as TModelResponse);

    }

    protected postJson<TModelResponse, TModelRequest>(url: string, dto: TModelRequest): Promise<TModelResponse> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(dto)
        }).then<TModelResponse | ServerError>(response => {
            if (response.ok) {
                return response.json<TModelResponse>();
            }
            else {
                return this.setError(response);
            }

        }).then((q) => q as TModelResponse);

    }


    protected postJsonWithoutResponse<TModelRequest>(url: string, dto: TModelRequest): Promise<void> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}
        return fetch(url, {
            headers: headers,
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(dto)
        }).then<void | ServerError>(response => {
            if (!response.ok) {
                return this.setError(response);
                //return response.json<ServerError>().then((q) => {
                //    throw new ServerError(q);
                //});
            }
        }).then((q) => q as void);
    }

    protected post(url: string): Promise<any> {
        url = this.checkProxy(url);
        return fetch(url, {
            method: 'post',
            credentials: 'same-origin'
        }).then<any | ServerError>(response => {
            if (!response.ok) {
                return this.setError(response);
                //throw Error(response.statusText);
            }
            return response.json;
        });
    }

    protected downloadFile(url: string): void {
        url = this.checkProxy(url);
        window.open(url, '_blank');
    }

    protected getJsonany(url: string): Promise<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        url = this.checkProxy(url);
        //if (autorize) {
        //    headers.append("Authorization", this.getAccessToken());
        //}

        return fetch(url, {
            headers: headers,
            method: 'get',
            credentials: 'same-origin'
        }).then<any | ServerError>(response => {
            if (!response.ok) {
                return this.setError(response);
                //response.json<ServerError>().then((q) => {
                //    throw new ServerError(q);
                //});
            }

        }).then((q) => q as any);
    }

    protected postFormWithoutResponse<TModelRequest>(url: string, dto): Promise<void> {
        return fetch(url, {
            method: 'post',
            body: dto
        }).then<void | ServerError>(response => {
            if (!response.ok) {
                return this.setError(response);
            }
        }).then((q) => q as void);
    }

    protected postForm<TModelResponse>(url: string, dto): Promise<TModelResponse> {
        return fetch(url, {
            method: 'post',
            body: dto
        }).then<TModelResponse | ServerError>(response => {
            if (response.ok) {
                return response.json<TModelResponse>();
            }
            else {
                return this.setError(response);
            }
        }).then((q) => q as TModelResponse);
    }

    protected setError(response: Response): Promise<ServerError> {
        if (response.headers.get('Content-Type').indexOf('application/json') != -1) {
            return response.json<ServerError>()
                .then((q) => {
                    if (q) {
                        throw new ServerError(q);
                    }
                    return q;
                }).then(q => q as ServerError);
        }
        else {
            return response.text().then<ServerError>((q) => {
                messageShowService.error(q);
                throw null;
            });
        }
    }

    //protected getAccessToken(): string {
    //    if (appStore.appState.authTokens && appStore.appState.authTokens.access_token) {
    //        return "Bearer " + appStore.appState.authTokens.access_token;
    //    }
    //    //else {
    //    //    throw new Error("you are not login");
    //    //    //appStore.deleteUser();
    //    //    //appStore.gotoUrl("/account/login/");
    //    //}
    //}

    protected checkProxy(url: string): string {
        if (location.pathname.indexOf('/proxy/') > -1) {
            var param1 = location.pathname.replace('/proxy/', '');
            var branch = param1.substr(0, param1.indexOf('/'));
            url = '/proxy/' + branch + url;
        }
        //console.log(url);
        return url;
    }
}
