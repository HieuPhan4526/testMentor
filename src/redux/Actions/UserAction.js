import { userServices } from "../../services/UserServices";
import { history } from "../../App";
import swal from 'sweetalert';

export const SignUpAction = (thongTinDangKy) => {
    return async dispatch => {
        try {
            let resuilt = await userServices.SignUp(thongTinDangKy);
            await swal("Sign Up Success!", "You clicked the button!", "success");
            await history.push("/signin");
        } catch (error) {
            console.log(error);
        }
    };
};
export const SignInAction = (thongTinDangNhap) => {
    return async dispatch => {
        try {
            let resuilt = await userServices.SignIn(thongTinDangNhap);
            await swal("Sign up Success!", "You clicked the button!", "success");
            await history.push("/getproject");
        } catch (error) {
            console.log(error);
            swal("Email or password is incorrect", "You clicked the button!", "error");
        }
    };
};
