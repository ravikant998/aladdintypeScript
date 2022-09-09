import React,{useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupType } from "../../allDataTypes/SignUpType";
import { signupuser } from "../../store/SignupSlice";
import { useAppDispatch } from "../../store/Hooks";

const numberRegex = /^[0-9]+$/;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter first name")
		.min(4, "First name must be at least 4 characters")
		.max(20, "First name must be at most 20 characters")
		.matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),

  lastName: yup
    .string()
    .required("Please enter last name")
		.min(4, "Last name must be at least 4 characters")
		.max(20, "Last name must be at most 20 characters")
		.matches(/^[A-Za-z ]+$/i, "Please enter valid last name"),

  phone: yup
  .string()
		.required("Please enter mobile")
		.min(7)
    .max(14),

  email:yup
  .string()
   .required("Please enter email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use correct email"
    ),

  password: yup
    .string()
    .required("Please enter the password")
		.min(8, "Password length should be greater than 8"),

  re_password:yup
  .string()
  .required("Please enter confirm password")
  .oneOf(
      [yup.ref("password"), null],
      "Confirm password must be same as password"
    ),

  privacyPolicy:yup
  .bool().oneOf([true], "Please check the privacy policy"),
});


const SignUp = () => {
   const [passwordType, setPasswordType] = useState("password");
   const [conpasswordType, setConpasswordType] = useState("password");

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: yupResolver(schema),
  });

  const submithnadler = (data: SignupType) => {
    data.type="User"
    dispatch(signupuser(data));
     
  };
   
  return (
    <div>
      <section className="create-account">
        <div className="Toastify"></div>
        <div className="container">
          <div className="card">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit(submithnadler)}>
              <div className="row inputs-wrapper">
                <div className="col-md-6 pr-fix input-block">
                  <div className="input-wrapper required">
                    <label>First Name</label>

                    <div
                      className={`input-wrap ${
                        errors.firstName ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        maxLength={20}
                        {...register("firstName")}
                      />
                    </div>

                    {errors.firstName && (
                      <span className="error">{errors.firstName.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6 pl-fix input-block">
                  <div className="input-wrapper required">
                    <label>Last Name</label>

                    <div className={`input-wrap ${
                        errors.lastName ? "has-error" : ""
                      }`}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        maxLength={20}
                        {...register("lastName")}
                      />
                    </div>
                    {errors.lastName && (
                      <span className="error">{errors.lastName.message}</span>
                    )}
                  </div>
                </div>
                   <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="user-id">Mobile Number</label>
                    <div className={`input-wrap ${
                        errors.phone ? "has-error" : ""
                      }`}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        maxLength={14}
                        {...register("phone")}
                      />
                       </div>
                    
                    {errors.phone && (
                      <span className="error">{errors.phone.message}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row inputs-wrapper">
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="user-id">Email Address</label>
                    <div className={`input-wrap ${
                        errors.email ? "has-error" : ""
                      }`}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="password">Password</label>
                    <div className={`input-wrap ${
                        errors.password ? "has-error" : ""
                      }`}>
                      <input
                        type={passwordType}
                        className="form-control"
                        placeholder="***********"
                        {...register("password")}
                      />
                      <div className="input-group-btn">
                     
                    </div>
                      <div className="toggle-wrap">
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
                    </div>
                    </div>
                    {errors.password && (
                      <span className="error">{errors.password.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="password">Confirm Password</label>
                    <div className={`input-wrap ${
                        errors.re_password ? "has-error" : ""
                      }`}>

                      <input
                        type={conpasswordType}
                        className="form-control"
                        placeholder="************"
                        {...register("re_password")}
                      
                      />
                      <div className="toggle-wrap">
                       <i
                        onClick={() => {
                          setConpasswordType(
                            conpasswordType === "password"
                              ? "text"
                              : "password"
                          );
                        }}
                        className={`icon-eye ${
                          conpasswordType === "password" ? "" : "show"
                        }`}
                      ></i>
                       
                      </div>
                    </div>
                  {errors.re_password && (
                      <span className="error">{errors.re_password.message}</span>
                    )}
                  </div>
                </div>
             
              </div>
              <div className="row">
                <div className="col-12 mb-2 mb-md-0">
                  <div className="form-check contain-checkbox">
                  
                    <input
                      type="checkbox"
                      id="selectCheckbox"
                      // className="form-check-input"
                       className={`form-check-input ${
                    errors.privacyPolicy ? "is-invalid" : ""
                    }`}
                      {...register("privacyPolicy")}
                      />
                    <label className="form-check-label">
                      By signing in you agree to the
                      <a href="/user-terms-conditions" target="_blank">
                        Terms and Conditions
                      </a>
                      of Aladyyn
                    </label>
                    <div className="invalid-feedback"></div>
                
                  </div>
                  {errors.privacyPolicy && (<span style={{ color:"red"}}>{errors.privacyPolicy.message}</span>)}
                </div>
              </div>
              <div className="btn-wrap">
                <button type="submit" className="btn w-100">
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div className="card text-center">
            <div className="signin-wrap">
              Already have an account?
              <a className="signin-link" href="/signin">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
