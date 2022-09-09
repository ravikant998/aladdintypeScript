import React from "react";
import "./App.css";
import "./assets/scss/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./components/homePage/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/Footer";
import Dashboard from "./pages/user/Dashboard";
import Particular from "./pages/categoryDetails/Particular";
import BecomeSeller from "./pages/BecomeSeller";
import CustomerService from "./components/navBar/CustomerService";
import Subcategory from "./pages/Subcategory";
import ServiceDetails from "./pages/ServiceDetails";
import CartDetails from "./pages/user/CartDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/user/dashbaord" element={<Dashboard />} />
          <Route path ="/category/particular/:catSlug/:subCatSlug" element={<Particular/>}/>
          <Route path="/become-seller" element={<BecomeSeller/>}/>
          <Route path="/customer-service" element={<CustomerService/>}/>
          <Route path="/category/:catSlug" element={<Subcategory/>}/>
          <Route path="/service-detail/:serviceId/:sellerId" element={<ServiceDetails/>}/>
          <Route path="/user/cart" element={<CartDetails/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
