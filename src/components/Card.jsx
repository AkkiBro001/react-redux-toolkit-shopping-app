import { useDispatch } from "react-redux"
import { add } from "../store/CartSilcer"


function Card(product) {
  const {image, price, title} = product
  const dispatch = useDispatch()

  function handleCart(product){
    dispatch(add(product))
  }

  return (
    <div className="card">
        <img src={image} alt="" />
        <div className="cardDetails">
            <h3>{title}</h3>
            <h4>Price: ${price}</h4>
        </div>
        <button onClick={()=>handleCart(product)}>Add To Cart</button>
    </div>
  )
}

export default Card