import { Body, Controller, Logger, Post, Put } from "@nestjs/common";
import PorkBunService from "./porkbun.service";
import { CreateDomainResponse, DeleteRecordByDomainAndIdResponse, EditDomainResponse, GetDomainResponse } from "./dto/controllerResponses.dto";
import { DnsCreateRecordDto } from "./dto/dnsCreateRecord.dto";
import { DnsEditRecordByDomainAndId } from "./dto/dnsEditRecordByDomainAndId.dto";
import { DnsRetrieveRecordsByDomainDto, GetDomainNamesDto, GetDomainNamesResponseDto } from "./dto/domainGetNameServers.dto";

@Controller("pork")
export default class PorkBunController {
    private logger:Logger;
    constructor(private porkBunService:PorkBunService){
        this.logger = new Logger(PorkBunController.name)
    }
    @Post("create")
    public async createDomain(@Body() body:DnsCreateRecordDto):Promise<CreateDomainResponse>{
        try {
            //TODO Verificar si el body es del tipo que esta establecido
            // investigar pipes
            const porkbunServiceResponse:CreateDomainResponse = await this.porkBunService.createDomain(body);
            const response:CreateDomainResponse = new CreateDomainResponse()
            response.data = porkbunServiceResponse.data;
            response.httpcode = 200;
            //TODO, CREAR MANEJADOR DE ESTADOS HTTP
            return response;
        } catch (e) {
            this.logger.error(e);
            return e;
        }
    }
    
    @Put("edit")
    public async editDomain(@Body() body:DnsEditRecordByDomainAndId):Promise<EditDomainResponse>{
        try {
            //the last commit was made with another account, was a mistake.
            const porkbunServiceResponse:EditDomainResponse = await this.porkBunService.editDomain(body)
            const response:EditDomainResponse = new EditDomainResponse();
            response.data = porkbunServiceResponse.data;
            response.httpcode = 200;
            return response
        } catch (e) {
            this.logger.error(e);
            return e;         
        }
    }

    @Post("getDomain")
    public async getDomain(@Body() body:GetDomainNamesDto){
        try {
            const porkbunServiceResponse:GetDomainNamesResponseDto = (await this.porkBunService.getDomain(body)).data;
            const response:GetDomainResponse = new GetDomainResponse();
            response.data = porkbunServiceResponse;
            response.httpcode = 200;
            return response;
        } catch (e) {
            this.logger.error(e);
            return e;    
        }
    
    }
    @Post("retrieve")
    public async RetrieveRecordsByDomain(@Body() data:DnsRetrieveRecordsByDomainDto):Promise<DeleteRecordByDomainAndIdResponse>{
        try {
            const porkbunServiceResponse:DeleteRecordByDomainAndIdResponse = await this.porkBunService.retrieveRecordsByDomain(data);
            const response:DeleteRecordByDomainAndIdResponse = new DeleteRecordByDomainAndIdResponse();
            response.data = porkbunServiceResponse.data
            response.httpcode = 200;
            return response;
        } catch (e) {
            this.logger.error(e)
            return e
        }
    }
    
}