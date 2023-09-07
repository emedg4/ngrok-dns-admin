export class DnsCreateRecordDto {
    //Your secret API key.
    public secretApiKey:string;
    public apikey:string;
    public name?:string;
    public type:string;
    public content:string;
    public ttl?:string;
}


export class DnsCreateRecordResponseDto {
    public status:string;
    public id:string;
}


/*
URI Endpoint: https://porkbun.com/api/json/v3/dns/create/DOMAIN


URI Endpoint Example: https://porkbun.com/api/json/v3/dns/create/borseth.ink


JSON Command Example

{
	"secretapikey": "YOUR_SECRET_API_KEY",
	"apikey": "YOUR_API_KEY",
	"name": "www",
	"type": "A",
	"content": "1.1.1.1",
	"ttl": "600"
}

JSON Response Example

{
	"status": "SUCCESS",
	"id": "106926659"
}
*/