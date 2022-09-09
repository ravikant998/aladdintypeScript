import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetCartDataType } from '../../allDataTypes/GetCartDataType'
import { useAppDispatch, useAppSelector } from '../../store/Hooks'

const RightCardDetails = () => {
const dispatch=useAppDispatch()
 const getCartData=useAppSelector((state)=>state.GetCartSliceReducer)
// console.log("getCartData>>>",getCartData)
  //total sum price
  let sum = 0;
  getCartData?.forEach((element) => {
    sum = sum + Number(element.price) * element.quantity; 
  });

  return (
    <div className="right-block">
    <div className="cart-heading">Total Cost</div>
    {getCartData
          ? getCartData.map((items, index) => {
              return (
                <ul className="added-items" key={index}>
                  <li>
                    <div className="added-item">
                      <div className="item-name">
                        <Link to="">{items.serviceTitle}</Link>
                      </div> 
                    </div>
                    <div className="item-price">
                      $ {Number(items.price) * items.quantity}
                    </div>
                  </li>
                </ul>
              );
            })
          : null}
    <div className="total-wrap">
        <div className="text-wrap">Total Price</div>
        <div className="amount-wrap">${sum}</div>
    </div>
    <div className="btn-wrap">
        <button type="submit" className="btn">Book</button></div>
</div>
  )
}

export default RightCardDetails