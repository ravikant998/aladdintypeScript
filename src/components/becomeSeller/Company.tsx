import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyDataType } from '../../allDataTypes/CompanyType';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { sellerenquirydata } from '../../store/becomseller/SellerEnquirySlice';
import { statename } from '../../store/GetStateSlice';
import { citynamedata } from '../../store/GetCityNameSlice';
import { countrylist } from '../../store/CountryListSlice';

const schema = yup.object().shape({

  firstName: yup
    .string()
    .required("Please enter First Name")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please enter Last Name")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid last name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use the correct email"
    ),
  businessName: yup
    .string()
    .required("Please enter Business Name")
    .min(2, "Business name must be at least 2 characters")
    .max(50, "Business name must be at most 50 characters"),
  primaryContactPerson: yup
    .string()
    .required("Please enter Primary Contact Person")
    .min(2, "Primary contact person must be at least 2 characters")
    .max(20, "Primary contact person must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid primary contact person"),
  companyRegistrationNumber: yup
    .string()
    .required("Please enter Company Register Number")
     .min(4)
    .matches(/^[0-9a-zA-Z]+$/, "Company Register Number is not valid"),
  vat: yup.string(),
  phone: yup.string().required("Please enter mobile").min(7),
  addressLine1: yup
    .string()
    .required("Please enter Address")
    .min(2, "Address must be at least 2 characters")
    .max(60, "Address must be at most 20 characters")
    .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Please enter valid Address"),
  addressLine2: yup.string(),
  countryId: yup.string().required("Please enter country"),
  stateId: yup.string().required("Please enter state"),
  cityId: yup.string(),
  postcode: yup
    .string()
    .required("Please enter Zip")
    .matches(/^[0-9a-zA-Z]+$/, "Zip code is not valid")
    .min(3),
  // .max(6),
  comment: yup.string().required("Please enter Comment").min(2).max(300),
  privacyPolicy: yup.bool().oneOf([true], "Please check the privacy policy"),
});


const Company = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDataType>({
    resolver: yupResolver(schema),
  });

  const [countryname, setCountryname] = useState<string>("");
 
  const countrynamelist = useAppSelector((state) => state.countrydata);
  // console.log("countrynamelist", countrynamelist)

  const statelist = useAppSelector((state) => state.state)
  // console.log("statelist", statelist)
  const citylist = useAppSelector((state) => state.city)
  // console.log("city", JSON.stringify(citylist))
// useEffect(()=>{
//   dispatch(countrylist())
// },[dispatch])


  const getStateHandler = (e: any) => {
    let val = e.target.value;
    setCountryname(val)
    const payload = {
      countryId: val,
    }
    dispatch(statename(payload))
  }
  const getCityHandler = (e: any) => {
    const payload = {
      countryId: countryname,
      stateId: e.target.value,
    };
    dispatch(citynamedata(payload))
  }

  const submithnadler = (data) => {
    data.type = "Company"
    dispatch(sellerenquirydata(data))
  }

  return (
    <div>
      <div className="tab-content">
        <div
          id="uncontrolled-tab-example-tabpane-company"
          aria-labelledby="uncontrolled-tab-example-tab-company"
          className="tab-pane active"
        >
          <div className="company-tab">
            <div className="Toastify"></div>
            <form onSubmit={handleSubmit(submithnadler)}>
              <div className="card inputs-wrapper">
                <div className="row input-block">
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required">First name</label>
                    <div className={`imput-wrap ${errors.firstName ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={20}
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                    </div>
                    {errors.firstName && (
                      <span className="error">{errors.firstName.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required">Last name</label>
                    <div className={`imput-wrap ${errors.lastName ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        maxLength={20}
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                    </div>
                    {errors.lastName && (
                      <span className="error">{errors.lastName.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required">Email address</label>
                    <div className={`input-wrap ${errors.email ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        {...register("email")}
                        placeholder="example@aladyyn.pro"
                      />
                    </div>
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </div>
                </div>
                <div className="inputs-heading">Business Information</div>
                <div className="row input-block margin-fix">
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required">Business Name</label>
                    <div className={`input-wrap ${errors.businessName ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        {...register("businessName")}
                        placeholder="Business Name"
                      />
                    </div>
                    {errors.businessName && (
                      <span className="error">{errors.businessName.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required">Primary Contact Person</label>
                    <div className={`input-wrap ${errors.primaryContactPerson ? "has-error" : ""}`}>
                      <input
                        type="text"
                        {...register("primaryContactPerson")}
                        className="form-control"
                        placeholder="Primary Person"
                      />
                    </div>
                    {errors.primaryContactPerson && (
                      <span className="error">{errors.primaryContactPerson.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 col-lg-4 input-wrapper required">
                    <label className="input-label required"
                    >Company Registration Number</label
                    >
                    <div className={`input-wrap ${errors.companyRegistrationNumber ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        {...register("companyRegistrationNumber")}
                        maxLength={20}
                        placeholder="Company Registration Number"
                      />
                    </div>
                    {errors.companyRegistrationNumber && (
                      <span className="error">{errors.companyRegistrationNumber.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 col-lg-4 input-wrapper">
                    <label className="input-label"
                    >VAT Number
                      <span className="text-lowercase">(if applicable)</span></label
                    >
                    <div className="input-wrap" >
                      <input
                        type="text"
                        {...register("vat")}
                        className="form-control"
                        maxLength={15}
                        placeholder="Vat number"
                      />
                    </div>

                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="input-wrapper required">
                      <label className="input-label required">Phone Number</label>
                      <div className={`input-wrap ${errors.phone ? "has-error" : ""}`}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                          maxLength={14}
                          {...register("phone")}
                        // value={number}
                        // onChange={numberChangeHandler}
                        />
                      </div>
                      {errors.phone && (
                        <span className="error">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="inputs-heading">Registered Business Address</div>
                <div className="row input-block">
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label required">address line 1</label>
                    <div className={`input-wrap ${errors.addressLine1 ? "has-error" : ""}`}>
                      <input
                        type="text"
                        className="form-control"
                        {...register("addressLine1")}
                        placeholder="Address"
                      /><span className="input-info">Building number and Street</span>
                    </div>
                    {errors.addressLine1 && (
                      <span className="error">{errors.addressLine1.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 input-wrapper">
                    <label className="input-label">address line 2</label>
                    <div className={`input-wrap ${errors.addressLine2 ? "has-error" : ""}`}>
                      <input
                        type="text"
                        {...register("addressLine2")}
                        className="form-control"
                        placeholder="Address"
                      /><span className="input-info">Room/Block/Apartments</span>
                    </div>
                    {errors.addressLine2 && (
                      <span className="error">{errors.addressLine2.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label">Country</label>
                    <div className={`input-wrap ${errors.countryId ? "has-error" : ""}`}>
                      <select
                        {...register("countryId")}
                        className="form-control drop-down"
                        id="countryId"
                        onBlur={getStateHandler}
                      >
                        <option value="">Please select country</option>
                        {countrynamelist &&
                          countrynamelist.data.map((cname, index) => (
                            <option value={cname._id} key={index}>
                              {cname.name}
                            </option>
                          ))}

                      </select>
                    </div>
                    {errors.countryId && (
                      <span className="error">{errors.countryId.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label">State / Region</label>
                    <div className={`input-wrap ${errors.stateId ? "has-error" : ""}`}>
                      <select className="form-control drop-down"
                        onClick={getCityHandler}
                        {...register("stateId")}
                      >
                        <option value="" >Please select state</option>
                        {statelist
                          ? statelist.map((sname, index) => {
                            return (
                              <option value={sname._id} key={index}>
                                {sname.name}
                              </option>
                            );
                          })
                          : null}
                      </select>
                    </div>
                    {errors.stateId && (
                      <span className="error">{errors.stateId.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 input-wrapper">
                    <label className="input-label">City</label>
                    <div className={`input-wrap ${errors.cityId ? "has-error" : ""}`}>
                      <select className="form-control drop-down" name="cityId">
                        <option value="">Please select city</option>
                        {citylist
                          ? citylist.map((cname, index) => {
                            return (
                              <option value={cname._id} key={index}>
                                {cname.name}
                              </option>
                            );
                          })
                          : null}
                      </select>
                    </div>
                    {errors.cityId && (
                      <span className="error">{errors.cityId.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label required">ZIP / Postal Code</label>
                    <div className={`input-wrap ${errors.postcode ? "has-error" : ""}`}>
                      <input
                        type="text"

                        {...register("postcode")}
                        className="form-control"
                        //   autocomplete="off"
                        placeholder="Zip Code"
                      />
                    </div>
                    {errors.postcode &&(<span className='error'>{errors.postcode.message}</span>)}
                  </div>

                </div>
                <div className="row input-block">
                  <div
                    className="col-12 input-wrapper required mb-0 textarea-info-wrapper"
                  >
                    <label className="input-label required">Comment</label>
                    <div className={`input-wrap ${errors.comment ? "has-error" : ""}`}>
                      <textarea
                        className="form-control"
                        {...register("comment")}
                        placeholder="Tell us more about the services you provide"
                      ></textarea>
                    </div>
                    {errors.comment && (
                      <span className="error">{errors.comment.message}</span>
                    )}
                    <label
                      className="textarea-info input-label input-info position-static"
                    >Comment should not exceed 300 characters.</label
                    >
                  </div>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    id="selectCheckbox"
                    className="form-check-input"
                  /><label
                    //  for="privacyPolicy"
                    className="form-check-label"
                  >Please accept our
                    <a
                      className="term-conditions"
                      href="/terms-and-conditions"
                      target="_blank"
                    >terms and conditions</a
                    ></label
                  >
                  <div className="invalid-feedback"></div>
                </div>
              </div>
              <div className="btn-wrap">
                <input className="btn" type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Company
