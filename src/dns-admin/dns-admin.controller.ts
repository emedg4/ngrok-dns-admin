import { Controller, Logger } from "@nestjs/common";

@Controller()
export default class DnsAdminController {
    private logger: Logger;
    constructor(){
        this.logger = new Logger(DnsAdminController.name)
    }

}