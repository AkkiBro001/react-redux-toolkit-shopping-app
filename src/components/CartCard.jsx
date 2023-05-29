import { useDispatch } from "react-redux"
import { remove } from "../store/CartSilcer"


// eslint-disable-next-line react/prop-types
function CartCard({id, image, title, price}) {

  const dispatch = useDispatch()

  function handleRemove(id){
      dispatch(remove(id))
  }
  
  return (
    <div className="cartCard">
        <img src={image} alt="" />
        <div>
            <h2>{title}</h2>
            <h3>Price: ${price}</h3>
        </div>
        <button onClick={()=>handleRemove(id)}>Remove</button>
    </div>
  )
}

export default CartCard