import { Injectable, Logger } from "@nestjs/common";
import IPorkBunService from "./interfaces/porkbunService.interface";
import { DnsCreateRecordDto } from "./dto/dnsCreateRecord.dto";
import { CreateRecordResponseDto, DeleteRecordByDomainAndIdResponse, EditRecordByDomainAndIdResponse, GetDomainNamesResponse, RetrieveRecordsByDomainDto } from "./dto/porkbunServiceResponses.dto";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { CREATE_RESPONSE, OK_RESPONSE } from "./constants/porkbunConstants";
import { firstValueFrom } from 'rxjs';
import { DnsEditRecordByDomainAndId } from "./dto/dnsEditRecordByDomainAndId.dto";
import { DnsDeleteRecordByDomainAndId } from "./dto/dnsDeleteRecord.dto";
import { GetDomainNamesDto, DnsRetrieveRecordsByDomainDto } from "./dto/domainGetNameServers.dto";


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
                return response;
            }
        } catch (error) {
            this.logger.log(error)
        } 
    }
    public async editDomain(data:DnsEditRecordByDomainAndId):Promise<EditRecordByDomainAndIdResponse> {
        try {
            const uri:string = this.configService.get("porkbun.edit");
            const domain:string = this.configService.get("porkbun.domain");
            const id:number = data.id;
            const url:string = uri + domain + "/" + id;
            const editRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(editRecordResponse.status == OK_RESPONSE){
                const response:EditRecordByDomainAndIdResponse = new EditRecordByDomainAndIdResponse();
                return response;
            }
        } catch (error) {
            this.logger.log(error)
        }
    }

    public async getDomain(data:GetDomainNamesDto):Promise<GetDomainNamesResponse> {
        try {
            const uri:string = this.configService.get("porkbun.get");
            const domain:string = this.configService.get("porkbun.domain");
            const url:string = uri + domain;
            const getRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(getRecordResponse.status == OK_RESPONSE) {
                return getRecordResponse.data;
            }

        } catch (e) {
            this.logger.log(e);
        }
    }

    public async retrieveRecordsByDomain(data:DnsRetrieveRecordsByDomainDto):Promise<RetrieveRecordsByDomainDto> {
        try {
            const uri:string = this.configService.get("porkbun.retrieve");
            const domain:string = this.configService.get("porkbun.domain");
            const url:string = uri + domain;
            const retrieveRecordResponse = await firstValueFrom(this.httpService.post(url, data))  ;
            if(retrieveRecordResponse.status == OK_RESPONSE){
                return retrieveRecordResponse.data;
            }         
        } catch (e) {
            this.logger.log(e);
        }
    }

    public async deleteRecordByDomainAndId(data:DnsDeleteRecordByDomainAndId):Promise<DeleteRecordByDomainAndIdResponse> {
        try {
            const uri:string = this.configService.get("porkbun.delete");
            const domain:string = this.configService.get("porkbun.domain");
            const id:number = data.id;
            const url:string = uri + domain + "/" + id;
            const deleteRecordResponse = await firstValueFrom(this.httpService.post(url, data));
            if(deleteRecordResponse.status == OK_RESPONSE) {
                return deleteRecordResponse.data;
            }
        } catch(e) {
            this.logger.log(e);
        }

    }


}