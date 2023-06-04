

export interface LoginReq {
    userName:string;
    passwordMd5:string;
}

export interface TokenResp {
    data:string;
}

export interface CommResp {
    code:number;
    data:TokenResp;
}