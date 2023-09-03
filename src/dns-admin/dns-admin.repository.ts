import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DNSIP } from "./entities/dns-ips.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DnsAdminRepository {
    private logger: Logger;
    constructor(
        @InjectRepository(DNSIP)
        private dnsip : Repository<DNSIP>){
        this.logger = new Logger(DnsAdminRepository.name)
    }

    public async getOne(){

    }

    

}