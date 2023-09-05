import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ScriptsModule } from "./entities/scriptsModule.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import CreateScriptDto from "./dto/createScript.dto";
import UpdateScript from "./dto/updateScript.dto";

@Injectable()
export default class DnsScriptsModuleRepository{
    private logger: Logger;
    constructor(
        @InjectRepository(ScriptsModule)
        private scriptsModule: Repository<ScriptsModule>){ 
        this.logger = new Logger(DnsScriptsModuleRepository.name)
    }

    public async getOne(id:number): Promise<ScriptsModule>{
        return await this.scriptsModule.findOneBy({id:id});
    }

    public async getAll():Promise<ScriptsModule[]>{
        return await this.scriptsModule.find();
    }

    public create(createScript:CreateScriptDto):ScriptsModule{
        return this.scriptsModule.create(createScript)
    }

    public async update(updateScript: UpdateScript): Promise<UpdateResult>{
        return await this.scriptsModule.update({id: updateScript.id}, updateScript);
    }

    public async delete(id:number): Promise<DeleteResult>{
        return await this.scriptsModule.delete(id)
    }
}