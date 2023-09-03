import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ScriptsModule } from "./entities/scriptsModule.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DnsScriptsModuleRepository{
    private logger: Logger;
    constructor(
        @InjectRepository(ScriptsModule)
        private scriptsModule: Repository<ScriptsModule>){ 
        this.logger = new Logger(DnsScriptsModuleRepository.name)
    }

    public async getOne(){
        
    }

}