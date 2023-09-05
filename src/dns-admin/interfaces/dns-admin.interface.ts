import { GetDnsResponse, GetOneDnsResponse,CreateDnsResponse,DeleteDnsResponse,ModifyDnsResponse } from "../dto/DNSIPResponse.dto";

export default interface IDnsAdminService {
    getDns():Promise<GetDnsResponse>;
    getOneDns():Promise<GetOneDnsResponse>;
    createDns():Promise<CreateDnsResponse>;
    deleteDns():Promise<DeleteDnsResponse>;
    mofidyDns():Promise<ModifyDnsResponse>;
}