import {CommResp, LoginReq} from "@/api/user/userTypeVo";
import axios from "@/utils/axios";


export const reqLogin = (loginReq: LoginReq) => {
    return axios.post<any, CommResp>("/adminUser/login", loginReq);
}