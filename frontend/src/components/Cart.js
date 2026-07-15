function Cart ({cart , removeFromCart}){
	
	const total = cart.reduce ( (sum, item ) => sum + item.price,
	    0
	
	);
	
	return (
	
	<div className="cart">
	    <h2> Shopping Cart </h2>
    	{
           cart.length === 0
            ?
            <p> cart is empty </p>
           :
           cart.map((item, index) => (
            
            <div className="cart-item" key = {index}> 
            
            <span>
                {item.name}
            </span>
            <span>
		        ₹ {item.price}
		
		    </span>
		
		    <button onClick={() => removeFromCart(index)} > 
		        REMOVE 
		
		    </button>
		
		
		</div>
		))
	}
    <h3> TOTAL :₹ {total} </h3>
	</div>
	
	);
	
	
}

export default Cart;