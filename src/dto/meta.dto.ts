export default class Meta {
    public date:Date | null;
    public httpCode:number;
    public error:Error | Error[] | null;
}
class Error {
    name:string;
    description:string
    componentWhoSendError:string;
}