import React from 'react'
import { Breadcrumb, Tabs, Tab } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Company from '../components/becomeSeller/Company';
import Freelancer from '../components/becomeSeller/Freelancer';
const BecomeSeller = () => {
  return (
    <div>
     <section className="become-seller">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Become an Aladyyn Seller</Breadcrumb.Item>
        </Breadcrumb>
        <div className="section-header">
          <h1>Become an Aladyyn Seller</h1>
          <div className="btn-wrap">
            <Link className="btn" to="/seller-sign">
              Seller panel login
            </Link>
          </div>
        </div>
        <Tabs
          defaultActiveKey="company"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="company" title="Company">
            <Company />
          </Tab>
          <Tab eventKey="freelancer" title="Freelancer">
            <Freelancer />
          </Tab>
        </Tabs>
      </div>
    </section>
    </div>
  )
}

export default BecomeSeller
