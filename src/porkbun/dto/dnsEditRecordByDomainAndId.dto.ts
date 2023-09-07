import { DnsCreateRecordDto } from "./dnsCreateRecord.dto";

export class DnsEditRecordByDomainAndId extends DnsCreateRecordDto {}

export class DnsEditRecordByDomainAndIdResponse {
    public status:string;
}