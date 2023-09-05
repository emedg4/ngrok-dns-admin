import { CreateScriptResponse, DeleteScriptResponse, GetOneScriptResponse, GetScriptResponse, ModifyScriptResponse } from "../dto/scriptsResponse.dto";

export default interface IScriptModuleService {
    getScripts():Promise<GetScriptResponse>;
    getOneScript():Promise<GetOneScriptResponse>;
    createScript():Promise<CreateScriptResponse>;
    deleteScript():Promise<DeleteScriptResponse>;
    modifyScript():Promise<ModifyScriptResponse>;
}