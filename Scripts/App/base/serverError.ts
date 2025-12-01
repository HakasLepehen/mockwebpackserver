export class ServerError extends Object {

    public static getMessageForUser = (er) => {
        if (er) {
            if (typeof er === "string") {
                return er;
            }
            else {
                return new ServerError(er).getMessageForUser();
            }
        }
    };

    constructor(error?: any) {
        super();
        if (error) {
            //Object.assign(this, error);
            //$.extend(this, error);
            let names = Object.getOwnPropertyNames(error);
            for (var prop of names)
                this[prop] = error[prop];
        }

    }
    name: string;
    message: string;
    Message: string;
    ExceptionMessage: string;
    error: string;
    error_description: string;
    innerException: ServerError;
    stackTrace: string;
    hResult: string;

    getMessageForUser = () => {
        let result: string = "";
        if (this.error) {
            result += `${this.error}\n${this.error_description}\n`;
        }
        if (this.Message) {
            result += this.Message + "\n";
        }
        if (this.ExceptionMessage) {
            result += this.ExceptionMessage + "\n";
        }
        if (!result) {
            result += JSON.stringify(this);
        }
        console.log(JSON.stringify(this));
        return result;
    }

}
