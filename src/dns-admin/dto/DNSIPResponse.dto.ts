import Meta from "src/dto/meta.dto";
import DNS from "./DNS.Dto";
import { DeleteResult, UpdateResult } from "typeorm";

export class GetDnsResponse {
    meta:Meta;
    data: DNS[];
}

export class GetOneDnsResponse {
    meta:Meta;
    data: DNS;
}

export class CreateDnsResponse {
    meta:Meta;
    data: DNS;
}

export class DeleteDnsResponse {
    meta:Meta;
    data:DeleteResult;
}

export class ModifyDnsResponse {
    meta:Meta;
    data:UpdateResult;
}

