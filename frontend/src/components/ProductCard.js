function ProductCard({Product}){
    return (
        <div className="card">
            <img src={product.image} alt={product.name}/>
            <h2> {Product.name} </h2>
            <h3> {prodct.price} </h3>
            <p>  {product.category} </p>
            <button> ADD TO CART </button>
        </div>
    );
}

export default ProductCard;