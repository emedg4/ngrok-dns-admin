import { DnsCreateRecordDto } from "../dto/dnsCreateRecord.dto";
import { DnsDeleteRecordByDomainAndId } from "../dto/dnsDeleteRecord.dto";
import { DnsEditRecordByDomainAndId } from "../dto/dnsEditRecordByDomainAndId.dto";
import { GetDomainNamesDto, DnsRetrieveRecordsByDomainDto } from "../dto/domainGetNameServers.dto";
import { CreateRecordResponseDto, 
         DeleteRecordByDomainAndIdResponse,
         EditRecordByDomainAndIdResponse,
         GetDomainNamesResponse,
         RetrieveRecordsByDomainDto } from "../dto/porkbunServiceResponses.dto";

export default interface IPorkBunService {
    createDomain(data:DnsCreateRecordDto):Promise<CreateRecordResponseDto>;
    editDomain(data:DnsEditRecordByDomainAndId):Promise<EditRecordByDomainAndIdResponse>;
    getDomain(data:GetDomainNamesDto):Promise<GetDomainNamesResponse>;
    retrieveRecordsByDomain(data:DnsRetrieveRecordsByDomainDto):Promise<RetrieveRecordsByDomainDto>;
    retrieveDomainById(data:DnsRetrieveRecordsByDomainDto):Promise<RetrieveRecordsByDomainDto>;
    deleteRecordByDomainAndId(data:DnsDeleteRecordByDomainAndId):Promise<DeleteRecordByDomainAndIdResponse>;
}