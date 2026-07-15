function ProductCard({product, addToCart}){
	
	return (
	
	<div className="card"> 
	<img src={product.image} alt={product.name} />
	<h2> {product.name} </h2>
	<h3> {product.price} </h3>
	<p> {product.category} </p>
	<button onClick={() => 	addToCart(product)}> Add TO CART  </button>
	
	</ div>
	);
}

export default ProductCard;