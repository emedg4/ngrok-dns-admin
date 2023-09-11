import RecordsDto from "./records.dto";

export class GetDomainNamesDto {
    public secretapikey: string;
    public apikey: string;
}

export class GetDomainNamesResponseDto {
    public status:string;
    public ns: [string];
}

export class DnsRetrieveRecordsByDomainDto{
    public secretapikey: string;
    public apikey: string;
}

export class DnsRetrieveRecordsByDomainResponseDto {
    public status:string;
    public records:[RecordsDto];
}

