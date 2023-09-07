import Meta from "src/dto/meta.dto";
import { AuthenticationResponse } from "./auth.dto";
import { DnsCreateRecordResponseDto } from "./dnsCreateRecord.dto";
import { DnsDeleteRecordByDomainAndIdResponse } from "./dnsDeleteRecord.dto";
import { DnsEditRecordByDomainAndIdResponse } from "./dnsEditRecordByDomainAndId.dto";
import { DnsRetrieveRecordsByDomainResponseDto, GetDomainNamesResponseDto } from "./domainGetNameServers.dto";

export class AuthResponse {
    public meta:Meta;
    public data:AuthenticationResponse;
}

export class CreateRecordResponseDto {
    public meta:Meta;
    public data:DnsCreateRecordResponseDto;
}

export class DeleteRecordByDomainAndIdResponse {
    public meta:Meta;
    public data:DnsDeleteRecordByDomainAndIdResponse;
}

export class EditRecordByDomainAndIdResponse {
    public meta:Meta;
    public data:DnsEditRecordByDomainAndIdResponse;
}

export class RetrieveRecordsByDomainDto {
    public meta:Meta;
    public data:DnsRetrieveRecordsByDomainResponseDto;
}

export class GetDomainNamesResponse {
    public meta:Meta;
    public data:GetDomainNamesResponseDto;
}

