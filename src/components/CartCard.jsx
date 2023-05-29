import { useDispatch } from "react-redux"
import { decrementCartCounter, incrementCartCounter, remove } from "../store/CartSilcer"
import { decrementProductCartCounter, incrementProductCartCounter, resetCartProductCounter } from "../store/ProductSilcer"

// eslint-disable-next-line react/prop-types
function CartCard({ id, image, title, price, cartCounter }) {

  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch(remove(id))
    dispatch(resetCartProductCounter(id))
  }

  function handleIncrement(id){
    dispatch(incrementProductCartCounter(id))
    dispatch(incrementCartCounter(id))
  }

  function handleDecrement(id){
    
    if(cartCounter === 1){
      dispatch(remove(id))
      dispatch(resetCartProductCounter(id))
    }else{

      dispatch(decrementProductCartCounter(id))
      dispatch(decrementCartCounter(id))
    }
  }

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <h3>Price: ${price}</h3>
        <div className="cart_incre_decre">
          <button onClick={()=>handleIncrement(id)}>➕</button>
          <span>{cartCounter}</span>
          <button onClick={()=>handleDecrement(id)}>➖</button>
        </div>
      </div>
      <button onClick={() => handleRemove(id)} className="removeBtn">Remove</button>
    </div>
  )
}

export default CartCard