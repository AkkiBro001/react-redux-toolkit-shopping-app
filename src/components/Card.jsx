
function Card(product) {
  const {image, price, title} = product
 
  return (
    <div className="card">
        <img src={image} alt="" />
        <div className="cardDetails">
            <h3>{title}</h3>
            <h4>Price: ${price}</h4>
        </div>
        <button>Add To Cart</button>
    </div>
  )
}

export default Card