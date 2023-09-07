import { Controller, Logger } from "@nestjs/common";

@Controller()
export default class PorkBunController {
    private logger:Logger;
    constructor(){
        this.logger = new Logger(PorkBunController.name)
    }
}