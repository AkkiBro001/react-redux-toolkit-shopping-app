import { useSelector } from "react-redux"
import CartCard from "../components/CartCard"


function Cart() {

    const cartItems = useSelector(state => state.cart)

    return (
      <section style={{display: "flex", flexWrap: "wrap", width: "80%", marginInline: "auto", padding: "2em", gap: "2em"}}>
        {
          cartItems.map(product => <CartCard key={product.id} {...product}/>)
        }
        
      </section>
    )
  }
  
  export default Cart