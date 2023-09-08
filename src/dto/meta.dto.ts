export default class Meta {
    public date:string | null;
    public httpCode:number;
    public error:Error | Error[] | null;
}
class Error {
    name:string;
    description:string
    componentWhoSendError:string;
}