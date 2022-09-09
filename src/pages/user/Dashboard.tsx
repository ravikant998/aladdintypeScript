import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      {localStorage.getItem("loginData") ? (
        <section className="user-dashboard">
          <div className="container">
            <h2>Your Account</h2>
            <div className="dashboard-wrapper">
              <div className="dashboard-card card">
                <Link to="/user/profile">
                  <div className="wrap-icon">
                    <i className="icon-person"></i>
                  </div>
                  <h4 className="service-name">Your Profile</h4>
                  <div className="service-details">
                    Edit or add profile information
                  </div>
                </Link>
              </div>
              <div className="dashboard-card card">
                <Link to="/user/your-orders">
                  <div className="wrap-icon">
                    <i className="icon-bag"></i>
                  </div>
                  <h4 className="service-name">Your Orders</h4>
                  <div className="service-details">
                    View your current, past and cancelled orders
                  </div>
                </Link>
              </div>
              <div className="dashboard-card card">
                <Link to="/user/messages">
                  <div className="wrap-icon">
                    <i className="icon-comment"></i>
                  </div>
                  <h4 className="service-name">Your Messages</h4>
                  <div className="service-details">
                    View your seller messages
                  </div>
                </Link>
              </div>
              <div className="dashboard-card card">
                <a href="/user/my-addresses">
                  <div className="wrap-icon">
                    <i className="icon-home"></i>
                  </div>
                  <h4 className="service-name">Your Addresses</h4>
                  <div className="service-details">
                    Edit addresses for orders
                  </div>
                </a>
              </div>
              <div className="dashboard-card card">
                <a href="/user/login-and-security">
                  <div className="wrap-icon">
                    <i className="icon-lock"></i>
                  </div>
                  <h4 className="service-name">Login &amp; Security</h4>
                  <div className="service-details">
                    Edit login, name and mobile number
                  </div>
                </a>
              </div>
              <div className="dashboard-card card">
                <a href="/">
                  <div className="wrap-icon">
                    <i className="icon-card"></i>
                  </div>
                  <h4 className="service-name">Payment Options</h4>
                  <div className="service-details">
                    Edit or add payment methods
                  </div>
                </a>
              </div>
              <div className="dashboard-card card">
                <a href="/faq">
                  <div className="wrap-icon">
                    <i className="icon-question"></i>
                  </div>
                  <h4 className="service-name">Help (FAQ)</h4>
                  <div className="service-details">
                    Browse questions and help topics
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Dashboard;
