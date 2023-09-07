import { CreateRecordResponseDto, 
         DeleteRecordByDomainAndIdResponse,
         EditRecordByDomainAndIdResponse,
         GetDomainNamesResponse,
         RetrieveRecordsByDomainDto } from "../dto/porkbunServiceResponses.dto";

export default interface IPorkBunService {
    createDomain:Promise<CreateRecordResponseDto>;
    editDomain:Promise<EditRecordByDomainAndIdResponse>;
    getDomain:Promise<GetDomainNamesResponse>;
    retrieveRecordsByDomain:Promise<RetrieveRecordsByDomainDto>;
    retrieveDomainById:Promise<RetrieveRecordsByDomainDto>;
    deleteRecordByDomainAndId:Promise<DeleteRecordByDomainAndIdResponse>;
}