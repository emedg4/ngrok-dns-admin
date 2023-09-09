import { PorkBunAuthentication } from "./auth.dto";
import { DnsEditRecordByDomainAndIdResponse } from "./dnsEditRecordByDomainAndId.dto";

export class DnsDeleteRecordByDomainAndId extends PorkBunAuthentication {
    id:number;
}

export class DnsDeleteRecordByDomainAndIdResponse extends DnsEditRecordByDomainAndIdResponse {}