import { useDispatch } from "react-redux"
import { add, incrementCartCounter, decrementCartCounter, remove} from "../store/CartSilcer"
import { incrementProductCartCounter, decrementProductCartCounter, resetCartProductCounter } from "../store/ProductSilcer"


function Card(product) {
  const {image, price, title, cartCounter} = product
  const dispatch = useDispatch()

  function handleCart(product){
    dispatch(add(product))
    dispatch(incrementProductCartCounter(product.id))
  }

  function handleIncrement(id){
    dispatch(incrementProductCartCounter(id))
    dispatch(incrementCartCounter(id))
  }

  function handleDecrement(id){
    
    if(product.id === id && cartCounter === 1){
      dispatch(remove(id))
      dispatch(resetCartProductCounter(id))
    }else{

      dispatch(decrementProductCartCounter(id))
      dispatch(decrementCartCounter(id))
    }
  }

  return (
    <div className="card">
        <img src={image} alt="" />
        <div className="cardDetails">
            <h3>{title}</h3>
            <h4>Price: ${price}</h4>
        </div>
        {cartCounter === 0 ? 
          <button onClick={()=>handleCart(product)}>Add To Cart</button>
        : <div className="cart_incre_decre">
          <button onClick={()=>handleIncrement(product.id)}>➕</button>
          <span>{cartCounter}</span>
          <button onClick={()=>handleDecrement(product.id)}>➖</button>
        </div>
        }
    </div>
  )
}

export default Card