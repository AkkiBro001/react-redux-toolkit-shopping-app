import { useState, useEffect } from "react"
import Card from "../components/Card"

function Home() {
  const [products, setProducts] = useState([])
   
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/")
    .then(result => result.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      {
        products.map(product => <Card key={product.id} {...product}/>)
      }
    
    </div>
  )
}

export default Home