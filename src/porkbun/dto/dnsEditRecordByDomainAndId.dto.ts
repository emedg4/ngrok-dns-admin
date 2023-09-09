import { DnsCreateRecordDto } from "./dnsCreateRecord.dto";

export class DnsEditRecordByDomainAndId extends DnsCreateRecordDto {
    id:number;
}

export class DnsEditRecordByDomainAndIdResponse {
    public status:string;
}