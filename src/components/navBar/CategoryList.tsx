import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {  useAppSelector } from '../../store/Hooks'

type Props = {
    listMenuBar: (state: boolean) => void
}
const CategoryList = (props:Props) => {
    const hideList = props.listMenuBar;
    
    const catageoryList=useAppSelector((state)=>state.categoryList)
const closecategoryMenu=()=>{
    hideList(false)
}
   
  return (
    <div>
        <div className="navigation active">
    <div className="menu-wrapper">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          maxWidth: "360px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0px",
            overflow: "scroll",
            marginRight: "-15px",
            marginBottom: "-15px",
          }}
        >
          <ul className="category-list">
            {catageoryList
              ? catageoryList?.map((items,index) => {
                  return (
            
                      <Link to={`/category/${items.slug}`}
                       key={index} 
                       onClick={closecategoryMenu}>
                        
                        {items.name}
                      </Link>
                    
                  );
                })
              : null}
          </ul>
        </div>
        <div
          style={{
            position: "absolute",
            height: "6px",
            right: "2px",
            bottom: "2px",
            left: "2px",
            // borderRradius: "3px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "block",
              height: "100%",
              cursor: "pointer",
              borderRadius: "inherit",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              width: "0px",
            }}
          ></div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default CategoryList