export class DnsEditRecordByDomainAndId{
    public id:number;
    public secretApiKey:string;
    public apikey:string;
    public name?:string;
    public type:string;
    public content:string;
    public ttl?:string;
}

export class DnsEditRecordByDomainAndIdResponse {
    public status:string;
}