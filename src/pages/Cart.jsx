import CartCart from "../components/CartCart"

function Cart() {
 
    return (
      <section style={{display: "flex", flexWrap: "wrap", width: "80%", marginInline: "auto", padding: "2em", gap: "2em"}}>
        <CartCart/>
      </section>
    )
  }
  
  export default Cart