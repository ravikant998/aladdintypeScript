import React from 'react'
import FilterLeftSidebar from './FilterLeftSidebar'
import FilterRightSidebar from './FilterRightSidebar'

const Particular = () => {
  return (
    <div>
       <section className="sub-category-block">
        <div className="container">
          <nav aria-label="breadcrumb" className="w-100">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/user/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/category/61c1de0dee489740f70f9b74/Beauty">Beauty</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Face
              </li>
            </ol>
          </nav>
         
        <FilterLeftSidebar/>
        <FilterRightSidebar/>
        </div>
      </section>
    </div>
  )
}

export default Particular
