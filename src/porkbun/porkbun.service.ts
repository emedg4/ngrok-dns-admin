import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export default class PorkBunService {
    private logger: Logger;
    constructor(){
        this.logger = new Logger(PorkBunService.name)
    }
}