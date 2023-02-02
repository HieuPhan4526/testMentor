import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { SignUpAction } from "../../redux/Actions/UserAction";
export default function SignUp() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      //Các hàm validation của từng trường dữ liệu
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Email không đúng định dạng"
        ),
      phoneNumber: Yup.string().required("PhoneNumber is required"),
      passWord: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(SignUpAction(values));
    },
  });
  return (
    <div className="SignUp">
      <div className="Sign-content">
        <h1>Register CyberBugs</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-user"></i>
            </span>
            <input
              placeholder="Name"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="errors-Vali">{formik.errors.name}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errors-Vali">{formik.errors.email}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-phone"></i>
            </span>
            <input
              placeholder="Phone number"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="errors-Vali">{formik.errors.phoneNumber}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-lock"></i>
            </span>
            <input
              placeholder="Password"
              id="passWord"
              name="passWord"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.passWord}
            />
          </div>
          {formik.touched.passWord && formik.errors.passWord ? (
            <div className="errors-Vali">{formik.errors.passWord}</div>
          ) : null}
          <p>
            Already have an account?
            <span>
              <NavLink to="/signin">Login Now</NavLink>
            </span>
          </p>
          <button type="submit" className="button-Sign">
            Register
          </button>
        </form>
        <div className="icon-contact">
          <span>
            <i className="fab fa-facebook"></i>
          </span>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
