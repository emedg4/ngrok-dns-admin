import { Injectable, Logger } from "@nestjs/common";
import IPorkBunService from "./interfaces/porkbunService.interface";
import { DnsCreateRecordDto, DnsCreateRecordResponseDto } from "./dto/dnsCreateRecord.dto";
import { CreateRecordResponseDto } from "./dto/porkbunServiceResponses.dto";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { CREATE_RESPONSE, OK_RESPONSE } from "./constants/porkbunConstants";
import { firstValueFrom } from 'rxjs';


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
                response.data = createRecordResponse.data;
                return response;
                console.log("nada")
            }
        } catch (error) {
            
        }
        
    }
}