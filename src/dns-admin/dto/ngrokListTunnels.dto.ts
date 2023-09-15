export class NGrokListTunnelsDto {
    public ngrokTunnels:NGrokListOneTunnelDto[]
}

export class NGrokListOneTunnelDto {
    public id:string;
    public public_url:string;
    public started_at:string;
    public proto:string;
    public region:string;
    public tunnel_session:TunnelSessionDto;
    public endpoint:TunnelEndpointDto;
    public forwards_to:string;
}

class TunnelSessionDto {
    public id:string;
    public uri:string;
}

class TunnelEndpointDto extends TunnelSessionDto {}