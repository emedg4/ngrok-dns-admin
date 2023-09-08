import { Injectable, Logger } from "@nestjs/common";
import IPorkBunService from "./interfaces/porkbunService.interface";
import { DnsCreateRecordDto, DnsCreateRecordResponseDto } from "./dto/dnsCreateRecord.dto";
import { CreateRecordResponseDto, EditRecordByDomainAndIdResponse } from "./dto/porkbunServiceResponses.dto";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { CREATE_RESPONSE, OK_RESPONSE } from "./constants/porkbunConstants";
import { firstValueFrom } from 'rxjs';
import { DnsEditRecordByDomainAndId } from "./dto/dnsEditRecordByDomainAndId.dto";


@Injectable()
export default class PorkBunService implements IPorkBunService {
    private logger: Logger;
    constructor(private configService:ConfigService,
                private readonly httpService:HttpService){
        this.logger = new Logger(PorkBunService.name)
    }

    public async createDomain(data:DnsCreateRecordDto):Promise<CreateRecordResponseDto>{
        try {
            const url:string = this.configService.get("porkbun.create");
            const createRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(createRecordResponse.status == CREATE_RESPONSE || OK_RESPONSE){
                const response:CreateRecordResponseDto = new CreateRecordResponseDto();
                response.meta.date = Date();
                response.meta.error = null;
                response.meta.httpCode = createRecordResponse.status;
                response.data = createRecordResponse.data;
                return response;
            }
        } catch (error) {
            console.log(error)
        } 
    }
    public async editDomain(data:DnsEditRecordByDomainAndId):Promise<EditRecordByDomainAndIdResponse> {
        try {
            const uri:string = this.configService.get("porkbun.edit");
            const domain:string = this.configService.get("porkbun.domain");
            const url:string = uri + domain;
            const editRecordResponse = await firstValueFrom(this.httpService.put(url, data))
            if(editRecordResponse.status == OK_RESPONSE){
                const response:EditRecordByDomainAndIdResponse = new EditRecordByDomainAndIdResponse();
                response.meta.date = Date();
                response.meta.error = null;
                response.meta.httpCode = OK_RESPONSE;
                response.data = editRecordResponse.data;
                return response;
            }
        } catch (error) {
            console.log(error)
        }
    }

}