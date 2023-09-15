import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as child from 'child_process';

@Injectable()
export default class DnsAdminService {
    private readonly logger: Logger;
    constructor(){
        this.logger = new Logger(DnsAdminService.name);
    }

    @Cron('* 1 * * * *')
    private void retryNgrokServices(){
        

    }

}