import ProductItem from "./ProductItem"


const Product = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>

    </div>
  )
}

export default Product