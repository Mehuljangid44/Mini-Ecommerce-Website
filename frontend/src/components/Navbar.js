function Navbar( {cartCount}){
	return (
	<nav className="navbar">
	
	<h1> 🛒  Mini - E - Commerce Store  </h1>
	
	<div className="cart-count">
	 Cart ({cartCount})
	</div>
	
	</nav>
	
	
	);
	
}

export default Navbar;