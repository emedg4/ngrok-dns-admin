import { Controller, Logger, Get, Post, Put, Delete } from "@nestjs/common";
import DNS from "./dto/DNS.Dto";

@Controller()
export default class DnsAdminController {
    private logger: Logger;
    constructor(){
        this.logger = new Logger(DnsAdminController.name)
    }

    @Get()
    public async getDns():Promise <DNS[]> {
        try {
            const response: DNS[] = 
            console.log("t4esting")
        } catch (error) {
            
        }
    }

    @Get()
    public async getOneDns(){}

    @Post()
    public async createDns(){}

    @Put()
    public async modifyDns(){}

    @Delete()
    public async deleteDns(){}

}