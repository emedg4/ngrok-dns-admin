import { Controller, Delete, Get, Logger, Post, Put } from "@nestjs/common";

@Controller()
export default class ScriptsController {
    private logger: Logger;
    constructor(){
        this.logger = new Logger(ScriptsController.name);
    }

    @Get()
    public async getScripts(){}

    @Get()
    public async getOneScript(){}

    @Post()
    public async createScript(){}

    @Put()
    public async modifyScript(){}

    @Delete()
    public async deleteScript(){}
}