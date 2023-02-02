import axios from "axios";
import { domain, token } from "../ultill/setting";
export class baseServices {
    get = (url) => {
        return axios({
            method: "get",
            url: `${domain}/${url}`,
            headers: {
                "TokenCybersoft": token
            }
        });
    };
    post = (url, data) => {
        return axios({
            method: "POST",
            url: `${domain}/${url}`,
            data: data,
            headers: {
                "TokenCybersoft": token
            }
        });
    };
}