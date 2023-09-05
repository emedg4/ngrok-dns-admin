import DNS from "../dto/DNS.Dto";

export default interface IDnsAdminService {
    getDns():Promise<DNS[]>;
    getOneDns():Promise<DNS[]>;
    createDns():Promise<DNS>;
    deleteDns(): {
    }
}