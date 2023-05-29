import { useEffect } from "react"
import Card from "../components/Card"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsWithThunks } from "../store/ProductSilcer"
import { STATUS } from "../store/ProductSilcer"

function Home() {
  const dispatch = useDispatch()
  const {data: products, status} = useSelector(state => state.product) 
  
  useEffect(()=>{
    if(products.length > 0) return
    dispatch(fetchProductsWithThunks())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(status === STATUS.LOADING){
    return (
      <h1>Loading....</h1>
    )
  }


  if(status === STATUS.ERROR){
    return (
      <h1>Somthing Went Wrong !!!!</h1>
    )
  }

  return (
    <div className="container">
      {
        products.map(product => <Card key={product.id} {...product}/>)
      }
    
    </div>
  )
}

export default Home