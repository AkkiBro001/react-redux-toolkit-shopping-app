import { Link } from "react-router-dom"


function NavBar() {
  
  return (
    <nav>
        <h2>Redux Toolkit Store</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        <span>
            {/* Here we use length (Array Length) of products to show how many products in cart. */}
            Cart Items : {0}
        </span>
    </nav>
  )
}

export default NavBar