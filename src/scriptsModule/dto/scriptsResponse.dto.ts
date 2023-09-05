import Meta from "src/dto/meta.dto";
import { DeleteResult, UpdateResult } from "typeorm";
import Script from "./script.dto";

export class GetScriptResponse {
    meta:Meta;
    data: Script[];
}

export class GetOneScriptResponse {
    meta:Meta;
    data: Script;
}

export class CreateScriptResponse {
    meta:Meta;
    data: Script;
}

export class DeleteScriptResponse {
    meta:Meta;
    data:DeleteResult;
}

export class ModifyScriptResponse {
    meta:Meta;
    data:UpdateResult;
}

