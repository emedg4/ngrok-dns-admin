import { CreateRecordResponseDto, EditRecordByDomainAndIdResponse } from "./porkbunServiceResponses.dto";

export class CreateDomainResponse {
   public data:CreateRecordResponseDto;
   public httpcode:number;
}

export class EditDomainResponse {
    public data:EditRecordByDomainAndIdResponse;
    public httpcode:number;
}