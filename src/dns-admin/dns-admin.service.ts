import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as child from 'child_process';
import { NGrokListTunnelsDto } from "./dto/ngrokListTunnels.dto";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export default class DnsAdminService {
    private readonly logger: Logger;
    private ngrokAuth:string;
    constructor(private readonly httpService: HttpService,
                private readonly configService: ConfigService){
        this.logger = new Logger(DnsAdminService.name);
        this.ngrokAuth = this.configService.get("ngrok.apiKey");
    }

    @Cron('* 1 * * * *')
    private retryNgrokServices():void {
    this.logger.log("se ejecuta el cronjob")        
        return
    }

    public async listTunnels():Promise<NGrokListTunnelsDto>{
        const auth:string = `Bearer ${this.ngrokAuth}`;
        const config = {headers:{
            "Authorization":auth
            }
        }
        const tunnelsResponse:NGrokListTunnelsDto = await axios.get(this.configService.get("ngrok.url.tunnels"), config);
        console.log(tunnelsResponse)
        return
    }

}