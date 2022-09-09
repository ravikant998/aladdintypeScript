import { get } from 'immer/dist/internal'
import React, { useEffect, useState } from 'react'
import { GetCartDetailsType } from '../../allDataTypes/GetCartDataType'
import LeftCardDetails from '../../components/cartDetails/LeftCardDetails'
import RightCardDetails from '../../components/cartDetails/RightCardDetails'
import { useAppSelector } from '../../store/Hooks'

const CartDetails = () => {
  // Get Cart
const getCart=useAppSelector((state)=>state.GetCartSliceReducer)
// console.log("getCart",getCart)
const [checkedAll,setCheckedAll]=useState<GetCartDetailsType>([])

useEffect(()=>{
  setCheckedAll(getCart)
},[])

const handleChange=(e:any)=>{
const {serviceTitle,checkedAll}=e.target;
}
  return (
    <div>
        <section className="cart">
          <div className="">
            <div className="Toastify"></div>
          </div>
          <div className="container">
            {
              getCart.length>0 ?(
                <h1>Cart {getCart.length} </h1>
              )
              :null
            }
            <form>
              {
               getCart.length >0 ?( 
                <div className="select-all">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="selectAll" 
                  onChange={handleChange}
                 
                  />
                  <label className="form-check-label">Select All</label>
                </div>
              </div> 
               )
               :null
              }
              <div className="cart-wrap">
              {
                  getCart.map((items, index) => {
                    return <LeftCardDetails dataList={items} key={index} />;
                  })
                }

                {
                  getCart.length ?(
                    <RightCardDetails />
                  )
                  :null
                }
              
              </div>
            </form>
          </div>
        </section>
  
    <section className="cart">
    <div className="">
      <div className="Toastify"></div>
    </div>
    <div className="container">
      <form>
        <div className="cart-wrap">
          <div className="left-block"></div>
          <div className="image-wrap">
            <img src="/static/media/emptyCart.d82015371d42e9b8f96a.png" />
          </div>
        </div>
        <h1>Your cart is empty!</h1>
      </form>
    </div>
  </section>
 
       
    

    </div>
  )
}

export default CartDetails