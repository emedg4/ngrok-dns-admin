import { Body, Controller, Get, Logger, Put } from "@nestjs/common";
import PorkBunService from "./porkbun.service";
import { CreateDomainResponse, EditDomainResponse } from "./dto/controllerResponses.dto";
import { DnsCreateRecordDto } from "./dto/dnsCreateRecord.dto";
import { CreateRecordResponseDto, EditRecordByDomainAndIdResponse } from "./dto/porkbunServiceResponses.dto";
import { DnsEditRecordByDomainAndId } from "./dto/dnsEditRecordByDomainAndId.dto";

@Controller("pork")
export default class PorkBunController {
    private logger:Logger;
    constructor(private porkBunService:PorkBunService){
        this.logger = new Logger(PorkBunController.name)
    }
    @Get("create")
    public async createDomain(@Body() body:DnsCreateRecordDto):Promise<CreateDomainResponse>{
        try {
            //TODO Verificar si el body es del tipo que esta establecido
            // investigar pipes
            const porkbunServiceResponse:CreateRecordResponseDto = await this.porkBunService.createDomain(body);
            const response:CreateDomainResponse = new CreateDomainResponse()
            response.data = porkbunServiceResponse;
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
            const porkbunServiceResponse:EditRecordByDomainAndIdResponse = await this.porkBunService.editDomain(body)
            const response:EditDomainResponse = new EditDomainResponse();
            response.data = porkbunServiceResponse;
            response.httpcode = 200;
            return response
        } catch (e) {
            this.logger.error(e);
            return e;         
        }
    }
}