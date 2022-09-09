import React, { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/Hooks";
import { userdetails } from "../../store/UserDetailprofileSlice";
import { Userdata } from "../../allDataTypes/GetHomePageDataType";
import { countrylist } from "../../store/CountryListSlice";
import { CountryListDataType } from "../../allDataTypes/CountryListtype";
import { categorylistdata } from '../../store/CategoryListSlice'
import CategoryList from "../navBar/CategoryList";
import { getcartActions } from "../../store/GetCartSlice";

export type LengthType={
  length:string
}

const Header = () => {
  const dispatch = useAppDispatch();
 const [isOpen, setIsOpen] = useState(false);
  const dropdownref=useRef<HTMLDivElement>(null);
  let countryName=JSON.parse(localStorage.getItem("country_name") || "")
  const [selectedCountry, setSelectedCountry] = useState(countryName)
  const [countrydropdown, setCountrydropdown] = useState(false)
  const[categoryNav,setCategoryNav]=useState(false)
   //show and hide category list 
   const [showCategoryList, setShowCategoryList] = useState<boolean>(false)
 const userprofiledetails: Userdata = useAppSelector(
    (state) => state.userprofiledetails
  );
// Get Cart
const getcart=useAppSelector((state)=>state.GetCartSliceReducer)

// Cart Length
let cartlength= getcart?.length > 0  ? getcart?.length : null;

  const countryname:CountryListDataType=useAppSelector((state)=>state.countrydata);
  const updateCart=useAppSelector((state)=>state.UpdateCartSliceReducers);

 useEffect(() => {
    let token = localStorage.getItem("loginData");
    if (token) {
      dispatch(userdetails());
    }
  }, [dispatch]);

  useEffect(() => {
    let token = localStorage.getItem("loginData");
    if (token) {
      dispatch(getcartActions())
    }
  }, [dispatch,updateCart]);
  
  useEffect(() => {
    dispatch(countrylist())
      
  }, [dispatch])

 const profiledropdown = () => {
    setIsOpen(!isOpen);
  };

const handleClickOutSideDropdown=(e:any)=>{
      if(isOpen && !dropdownref.current?.contains(e.target)){
        setIsOpen(false)
    }
    }
    window.addEventListener("click",handleClickOutSideDropdown)

  const logout = () => {
        localStorage.removeItem("loginData");
        setTimeout(() => (window.location.href = "/"), 300);
      };

 const selectCountryHandler = (items) => {
    setSelectedCountry(items.name)
    localStorage.setItem("country_name", JSON.stringify(items));
    window.location.reload();
  };

  const onClickHandler = () => {
    setCountrydropdown(x=>!x);
   
  };
  // category list
 const showallcategory = () => {
  dispatch(categorylistdata())
  setCategoryNav((prev)=>!prev)
    setShowCategoryList(x => !x)
  };

  return (
    <div>
  
      <header className="header logged-in" >
        <div className="primary-header">
          <div className="container">
            <div className="logo">
              <a href="/">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-wrapper" style={{ position: "relative" }}>
              <form>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="btn-wrap">
                    <button type="submit" className="btn">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <div
                  style={{
                    height: "200px",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "1px solid rgb(211, 211, 211)",
                    width: "100%",
                    position: "absolute",
                    zIndex: 9999,
                    display: "none",
                    overflow: "auto",
                  }}
                ></div>
              </div>
            </div>
            <div className="header-right">
              <div className="cart-wrap">
                <Link to="/user/cart">
                  <i className="icon-cart"></i>
                  <div className="item-counter">{cartlength}</div>
                </Link>
              </div>
              <div className="notification-wrap">
                <button>
                  <i className="icon-mail">hhh</i>
                  <div className="item-counter"></div>
                </button>
              </div>
              {localStorage.getItem("loginData") ? (
                <div className="profile-dropdown" ref={dropdownref}>
                  <div className="show dropdown">
                    <button
                      aria-expanded="true"
                      type="button"
                      className="dropdown-toggle btn btn-primary"
                      onClick={profiledropdown}
                    >
                      {userprofiledetails[0]?.firstName}
                    </button>
                    {isOpen ? (
                      <div
                        x-placement="bottom-end"
                        aria-labelledby=""
                        className="dropdown-menu show dropdown-menu-end"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                        style={{
                          position: "absolute",
                          inset: "0px 0px auto auto",
                          transform: "translate(0px, 42px)",
                        }}
                      >
                        <Link
                          to={"/user/dashbaord"}
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          role="button"
                          // tabIndex="0"
                        
                        >
                          Your Account
                        </Link>
                        <Link
                          to="#"
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          role="button"
                          // tabIndex="0"
                        >
                          Notifications
                        </Link>
                        <Link
                          to={`/wishlist`}
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          My Wishlist
                        </Link>
                        <Link
                          to="/"
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                          role="button"
                          // tabIndex="0"
                          onClick={logout}
                        >
                          Sign Out
                        </Link>
                      </div>
                    ) : null}
                  </div>
                 
                </div>
              ) : (
                <div className="signin-btn">
                  <Link to={"/sign-in"} className="btn">
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="secondary-header">
          <div className="container">
            <div className="header-left">
              <button type="button" 
                className={categoryNav ?"menu-btn active" :"menu-btn"}
                onClick={showallcategory}>

                <div className="ham-burger">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <div className="text-wrap">All Categories</div>  
              </button> 
              {showCategoryList && <CategoryList  listMenuBar={setShowCategoryList} />}
              
            </div>
          
            <nav className="nav">
              <ul className="w-100">
                <li>
                  <a href="/customer-service">Customer Service</a>
                </li>
                <li>
                  <a>Best Sellers</a>
                </li>
                <li>
                  <a href="/become-seller">Become a Seller</a>
                </li>
              </ul>
            </nav>
          
            
      <div className="country-select">
         <div className="custom-select" onClick={onClickHandler}>
          <div className="custom-select_header">
            <i className="icon-location"></i>
            <span className="custom-select_text d-flex" >
                <span
                style={{ 
                  whiteSpace: 'nowrap',
                  maxWidth: '90px',
                  overflow: 'hidden',
                  textOverflow:'ellipsis'
                }}>
                  </span>
                  {selectedCountry.name} | {selectedCountry.currency}
                  </span>
            
              <i className={`icon-down ${countrydropdown ? "showing-options" : ""}`}></i>
          </div>
          {countrydropdown ? (
            <ul className="custom-select_options custom-scroll">
             {countryname
                  && countryname?.data.map((item, index) => {
                  return (
                <li
                  className="custom-select_option"
                  key={index}
                  onClick={() => selectCountryHandler(item)}
                  >
                    <h6>{item.name}</h6>
                </li>
                   );
                    })
                  }                                             
          </ul>
          )
          :null
        }
         
        </div>
      </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
