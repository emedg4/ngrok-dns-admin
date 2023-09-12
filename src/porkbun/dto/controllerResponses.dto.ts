import { DnsCreateRecordResponseDto } from "./dnsCreateRecord.dto";
import { DnsDeleteRecordByDomainAndIdResponse } from "./dnsDeleteRecord.dto";
import { DnsEditRecordByDomainAndIdResponse } from "./dnsEditRecordByDomainAndId.dto";
import { GetDomainNamesResponseDto, DnsRetrieveRecordsByDomainResponseDto } from "./domainGetNameServers.dto";

export class CreateDomainResponse {
   public data:DnsCreateRecordResponseDto
   public httpcode:number;
}

export class EditDomainResponse {
    public data:DnsEditRecordByDomainAndIdResponse;
    public httpcode:number;
}

export class GetDomainResponse {
    public data:GetDomainNamesResponseDto
    public httpcode:number;
}

export class DeleteRecordByDomainAndIdResponse {
    public data:DnsDeleteRecordByDomainAndIdResponse;
    public httpcode:number;
}

export class RetrieveRecordsByDomain {
    public data:DnsRetrieveRecordsByDomainResponseDto
    public httpcode:number;
}