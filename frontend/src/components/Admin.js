import { useState } from "react";
import API from "../services/api"

function Admin({ refreshProducts }){

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
        stock: ""
    });

    const handelChange = (e) => {

        setProduct ( {
            ...product,
            [e.target.name]: e.target.value

        });


    };

    const addProduct = async (e) => {

        e.preventDefault();

        await API.post("/products",product );
        alert ("Product Added Successfully");
        setProduct ({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
            stock: ""
        });
        refreshProducts();
        
    };
    return (
        <div className="admin">
            <h2> Add Product  </h2>
            <form onSubmit={addProduct}>
                <input name="name" placeholder="Product NAme"
                value={product.name} onChange={handelChange} />

                <input name="price" placeholder="Price of Product"
                value={ product.price} 
                onChange={handelChange} />

                <input name="category" placeholder="Category"
                value={product.category} onChange={handelChange} />


                <input name="image" placeholder="Image URL" 
                value={ product.image} onChange={handelChange} />


                <textarea name="description" placeholder="Description"
                value={product.description} onChange={handelChange} />

                <input name="stock" placeholder="Stock"
                value={product.stock} onChange={handelChange} />

                <button type="submit" > ADD PRODUCT  </button>


            </form>
        </div>

    );
}


export default Admin;