import { CreateRecordResponseDto, EditRecordByDomainAndIdResponse, GetDomainNamesResponse } from "./porkbunServiceResponses.dto";

export class CreateDomainResponse {
   public data:CreateRecordResponseDto;
   public httpcode:number;
}

export class EditDomainResponse {
    public data:EditRecordByDomainAndIdResponse;
    public httpcode:number;
}

export class GetDomainResponse extends GetDomainNamesResponse {
    public httpcode:number;
}