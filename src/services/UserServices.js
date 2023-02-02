import { baseServices } from "./baseServices";

export class UserServices extends baseServices {
    SignUp = (thongTinDangKy) => {
        return this.post(`api/Users/signup`, thongTinDangKy);
    };
    SignIn = (thongTinDangNhap) => {
        return this.post(`api/Users/signin`, thongTinDangNhap);
    };
}

export const userServices = new UserServices();