import { useEffect , useState } from "react";

import API from "../services/api"

import ProductCard from "./ProductCard"


function ProductList ({addToCart}) {

    const [ products , setProducts ] = useState([]);
    
    const [search , setSearch] =useState("");

    const fetchProducts = async() => {
        const response = await API.get("/products");
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    } , [] );

    const deleteProduct = async(id) => {
        await API.delete("/products" + id );
        fetchProducts();

    };

    const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
    );
    



    
    return (
          <>
        <input className="search"
        placeholder="Search Prodcuts ...."
        value={search}
        onChange={(e) => setSearch(e.target.value)

        }
        />
        <div className="product-grid">
            {filtered.map( (product) => (

                <div key={product._id} >
                    <ProductCard 
                    product={product}
                    addToCart={addToCart} />

                <button className="delete" onClick={()=> deleteProduct._id} >

                    DELETE

                </button>



                </div>
            )) 
            } 


        </div>
            </>
    );
}

export default ProductList;