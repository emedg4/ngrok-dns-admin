import { PorkBunAuthentication } from "./auth.dto";
import RecordsDto from "./records.dto";

export class GetDomainNamesDto extends PorkBunAuthentication {}

export class GetDomainNamesResponseDto {
    public status:string;
    public ns: [string];
}

export class DnsRetrieveRecordsByDomainDto extends PorkBunAuthentication {}

export class DnsRetrieveRecordsByDomainResponseDto {
    public status:string;
    public records:[RecordsDto];
}

