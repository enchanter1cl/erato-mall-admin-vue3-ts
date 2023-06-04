import {defineStore} from "pinia";
import {CommResp, LoginReq} from "@/api/user/userTypeVo";
import {reqLogin} from "@/api/user";


const useUserStore = defineStore("User", {
    state: () => {
        return {

            token: localStorage.getItem("TOKEN")
        }
    },

    actions: {
        userLogin: async (loginReq:LoginReq) => {
            let resp:CommResp = await reqLogin(loginReq);

            console.log("commResp,", resp);
            console.log("resp.data", resp.data);
        }
    },

    getters: {}
})

export default useUserStore;