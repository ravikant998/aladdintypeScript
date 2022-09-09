import React,{useState} from "react";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../api/index";
import { userlogin } from "../../api/endPoints";
import { useAppDispatch } from "../../store/Hooks";
import { LoginType } from "../../allDataTypes/LoginType";
import { login } from "../../store/LoginSlice";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const schema = yup.object().shape({
  email: yup
  .string()
  .required("Please enter  valid email id"),
  
  password: yup
  .string()
  .required("Please enter password"),

   privacyPolicy:yup
   .bool().oneOf([true], "Please check the privacy policy"),
});

const SignIn = () => {
  const dispatch=useAppDispatch()
  const [passwordType, setPasswordType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:LoginType) => {
    dispatch(login(data));
    toast.success("You logged in your account successfully!");
     setTimeout(() => (window.location.href = "/user/dashbaord"), 300);
    // const payload = {
    //   email: e.email,
    //   password: e.password,
    // };
    // Api.post(userlogin, payload).then((res) => {
    //   if (res.data.data.token) {
    //     localStorage.setItem("loginData", res.data.data.token);
    //     navigate("/user/dashbaord");
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 500);
    //   }
    // });
  };
  return (
    <div>
      <section className="sign-in">
        <div className="">
          <div className="Toastify">
              <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
          </div>
        </div>
        <div className="container">
          <div className="card">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-block">
                <label htmlFor="user-id" className="show-star">
                  Email or phone number
                </label>

                <div className="input-wrap">
                  <div
                    className={`input-wrap ${errors.email ? "has-error" : ""}`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email or Phone"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="input-block">
                <label htmlFor="password" className="show-star">
                  Password
                </label>
                <div className="input-wrap">
                  
                    <input
                      type={passwordType}
                      className="form-control"
                      placeholder="***********"
                      {...register("password")}
                    />
                 
                 
                  <div className="toggle-wrap">
                    <button className="toggle-btn hide" type="button">
                       <i
                        onClick={() => {
                          setPasswordType(
                            passwordType === "password" ? "text" : "password"
                          );
                        }}
                        className={`icon-eye ${
                          passwordType === "password" ? "" : "show"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2 mb-md-0">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                       {...register("privacyPolicy")}
                    />
                    <label className="form-check-label">
                      Keep me signed in
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-2 mb-md-0 text-md-end">
                  <a className="forgot-link" href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="btn-wrap">
                <button type="submit" className="btn w-100">
                  Sign In
                </button>
              </div>
            </form>
            <div className="signin-with">or continue with</div>
            <div className="signin-options text-center">
              <a className="google-login" href="/sign-in">
                <i className="icon-google"></i>
                <span className="text">Google</span>
              </a>
              <a className="fb-login" href="/sign-in">
                <i className="icon-fb"></i>
                <span className="text">Facebook</span>
              </a>
            </div>
          </div>
          <div className="card text-center">
            <div className="signup-wrap">
              Don’t have an account?
              <Link className="signup-link" to="/create-account">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
