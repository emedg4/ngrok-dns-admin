import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DNSIP } from "./entities/dns-ips.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import CreateDNSIP from "./dto/createDNSIP.dto";
import UpdateDNSIP from "./dto/updateDNSIP.dto";

@Injectable()
export default class DnsAdminRepository {
    private logger: Logger;
    constructor(
        @InjectRepository(DNSIP)
        private dnsip : Repository<DNSIP>){
        this.logger = new Logger(DnsAdminRepository.name);
    }

    public async getOne(id:number): Promise<DNSIP>{
        return await this.dnsip.findOneBy({id:id});
    }

    public async getAll():Promise<DNSIP[]>{
        return await this.dnsip.find();
    }

    public async create(createDNSIP: CreateDNSIP):Promise<DNSIP>{
        return this.dnsip.create(createDNSIP);
    }

    public async update(updateDNSIP: UpdateDNSIP):Promise<UpdateResult>{
        return await this.dnsip.update({id:updateDNSIP.id}, updateDNSIP);
    }

    public async delete(id:number):Promise<DeleteResult> {
        return await this.dnsip.delete(id);
    }
}