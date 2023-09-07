import { PorkBunAuthentication } from "./auth.dto";
import { DnsEditRecordByDomainAndIdResponse } from "./dnsEditRecordByDomainAndId.dto";

export class DnsDeleteRecordByDomainAndId extends PorkBunAuthentication {}

export class DnsDeleteRecordByDomainAndIdResponse extends DnsEditRecordByDomainAndIdResponse {}