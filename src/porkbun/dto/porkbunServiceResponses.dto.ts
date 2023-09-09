import Meta from "src/dto/meta.dto";
import { AuthenticationResponse } from "./auth.dto";
import { DnsCreateRecordResponseDto } from "./dnsCreateRecord.dto";
import { DnsDeleteRecordByDomainAndIdResponse } from "./dnsDeleteRecord.dto";
import { DnsEditRecordByDomainAndIdResponse } from "./dnsEditRecordByDomainAndId.dto";
import { DnsRetrieveRecordsByDomainResponseDto, GetDomainNamesResponseDto } from "./domainGetNameServers.dto";

export class AuthResponse {
    public data:AuthenticationResponse;
}

export class CreateRecordResponseDto {
    public data:DnsCreateRecordResponseDto;
}

export class DeleteRecordByDomainAndIdResponse {
    public data:DnsDeleteRecordByDomainAndIdResponse;
}

export class EditRecordByDomainAndIdResponse {
    public data:DnsEditRecordByDomainAndIdResponse;
}

export class RetrieveRecordsByDomainDto {
    public data:DnsRetrieveRecordsByDomainResponseDto;
}

export class GetDomainNamesResponse {
    public data:GetDomainNamesResponseDto;
}

