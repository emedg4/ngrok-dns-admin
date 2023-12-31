import { HttpCode, Injectable, Logger } from "@nestjs/common";
import IPorkBunService from "./interfaces/porkbunService.interface";
import { DnsCreateRecordDto } from "./dto/dnsCreateRecord.dto";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { CREATE_RESPONSE, OK_RESPONSE } from "./constants/porkbunConstants";
import { firstValueFrom } from 'rxjs';
import { DnsEditRecordByDomainAndId } from "./dto/dnsEditRecordByDomainAndId.dto";
import { DnsDeleteRecordByDomainAndId } from "./dto/dnsDeleteRecord.dto";
import { GetDomainNamesDto, DnsRetrieveRecordsByDomainDto } from "./dto/domainGetNameServers.dto";
import { CreateDomainResponse, EditDomainResponse, GetDomainResponse, DeleteRecordByDomainAndIdResponse, RetrieveRecordsByDomain } from "./dto/controllerResponses.dto";
import { HTTPCodes } from "src/constants/httpcodes";


@Injectable()
export default class PorkBunService implements IPorkBunService {
    private logger: Logger;
    constructor(private configService:ConfigService,
                private readonly httpService:HttpService){
        this.logger = new Logger(PorkBunService.name)
    }

    public async createDomain(data:DnsCreateRecordDto):Promise<CreateDomainResponse>{
        try {
            const url:string = this.configService.get("porkbun.create");
            const createRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(createRecordResponse.status == CREATE_RESPONSE || OK_RESPONSE){
                const response:CreateDomainResponse = new CreateDomainResponse();
                response.data = createRecordResponse.data;
                response.httpcode = HTTPCodes.OK;
                return response;
            }
        } catch (error) {
            this.logger.log(error)
        } 
    }
    public async editDomain(data:DnsEditRecordByDomainAndId):Promise<EditDomainResponse> {
        try {
            const uri:string = this.configService.get("porkbun.edit");
            const domain:string = this.configService.get("porkbun.domain");
            const id:number = data.id;
            const url:string = uri + domain + "/" + id;
            const editRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(editRecordResponse.status == OK_RESPONSE){
                const response:EditDomainResponse = new EditDomainResponse();
                response.data = editRecordResponse.data;
                response.httpcode = HTTPCodes.OK;
                return response;
            }
        } catch (error) {
            this.logger.log(error)
        }
    }

    public async getDomain(data:GetDomainNamesDto):Promise<GetDomainResponse> {
        try {
            const uri:string = this.configService.get("porkbun.get");
            const domain:string = this.configService.get("porkbun.domain");
            const url:string = uri + domain;
            const getRecordResponse = await firstValueFrom(this.httpService.post(url, data))
            if(getRecordResponse.status == OK_RESPONSE) {
                const response:GetDomainResponse = new GetDomainResponse();
                response.data = getRecordResponse.data;
                response.httpcode = HTTPCodes.OK;
                return getRecordResponse.data;
            }

        } catch (e) {
            this.logger.log(e);
        }
    }

    public async retrieveRecordsByDomain(data:DnsRetrieveRecordsByDomainDto):Promise<DeleteRecordByDomainAndIdResponse> {
        try {
            const uri:string = this.configService.get("porkbun.retrieve");
            const domain:string = this.configService.get("porkbun.domain");
            const url:string = uri + domain;
            const retrieveRecordResponse = await firstValueFrom(this.httpService.post(url, data))  ;
            if(retrieveRecordResponse.status == OK_RESPONSE){
                const response:DeleteRecordByDomainAndIdResponse = new DeleteRecordByDomainAndIdResponse();
                response.data = retrieveRecordResponse.data;
                response.httpcode = HTTPCodes.OK;
                return retrieveRecordResponse.data;
            }         
        } catch (e) {
            this.logger.log(e);
        }
    }

    public async deleteRecordByDomainAndId(data:DnsDeleteRecordByDomainAndId):Promise<RetrieveRecordsByDomain> {
        try {
            const uri:string = this.configService.get("porkbun.delete");
            const domain:string = this.configService.get("porkbun.domain");
            const id:number = data.id;
            const url:string = uri + domain + "/" + id;
            const deleteRecordResponse = await firstValueFrom(this.httpService.post(url, data));
            if(deleteRecordResponse.status == OK_RESPONSE) {
                const response:RetrieveRecordsByDomain = new RetrieveRecordsByDomain();
                response.data = deleteRecordResponse.data;
                response.httpcode = HTTPCodes.OK;
                return deleteRecordResponse.data;
            }
        } catch(e) {
            this.logger.log(e);
        }

    }


}