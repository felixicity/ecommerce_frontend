import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem,increaseQuantity , decreaseQuantity} from '../features/cart/cartSlice'
import { FaTimes } from 'react-icons/fa'

const Cart = ({toggleCart}) => {

  const {cartItems,total,amount} = useSelector(state => state.cart)
  const dispatch = useDispatch()


  if(cartItems.length < 1) {
      return (
        <section className='cart'>
            <FaTimes className='icon' onClick ={toggleCart}/>
            <h3>Your Cart</h3>
            <p>is currently Empty</p>
        </section>
      )
  }



  return (
    <section className='cart'>
        <FaTimes className='icon' onClick ={toggleCart}/>
        <h3>Your Cart</h3>
        <div className="cart-items">
        {
          cartItems.map(item => 
          <div className="cart-item" key={item.id}>
              <div className="item">
                    <img src={item.img} alt="" className="item-img" />
                    <div className="item-desc">
                      <p className="item-name">{item.title}</p>
                      <p className="item-price">${item.price}</p>
                      <button className='item-cta' onClick ={() => {
                          dispatch(removeItem(item.id))}
                        }>
                        remove Item</button>
                    </div>
              </div>
              <div className="item-quantity">
                    <span className="subtract" onClick = {() =>{
                      if(item.amount == 1){
                         dispatch(removeItem(item.id))
                         return;
                      }
                      dispatch(decreaseQuantity(item.id))
                      }}>
                      -
                    </span>
                    <span className="quantity">
                      {item.amount}
                    </span>
                    <span className="add" onClick = { ()=>(dispatch(increaseQuantity(item.id)))}>
                      +
                    </span>
              </div>   
          </div>  )
        }
       </div>

        <div className="sub-total wrapper">
            <p className="total-quantity">Total Quantity : {amount}</p>
            <hr />
            <div className="total">
                <p className="subtotal">SubTotal</p>
                <p className="total-price">${`${total.toFixed(2)}`}</p>
            </div>
            <button className="checkout">CheckOut</button>
        </div>
</section> 
         
  )
}

export default Cart