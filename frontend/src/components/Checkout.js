import { useState } from "react";

import API from "../services/api";

function Checkout({cart , clearCart}) {
    const [customerName, setCustomerName] = useState("");
    const [phone , setPhone ] = useState("");
    const [address , setAddress] = useState("");
    const placeOrder  = async () => {
        const total  = cart.reduce ( (sum , item) => sum + item.price , 
        0
    );
        await API.post("/orders" , {
            customerName,
            phone,
            address,
            products : cart.map(item => ({

                name: item.name,
                quantity: 1,
                price: item.price


            })),
            totalAmount : total

        });

        alert ("Order Placed Sucessfully ");
        clearCart();
        setCustomerName("");
        setPhone("");
        setAddress("");
    };

    return (
        <div className="checkout">
            <h2>Checkout Page </h2>
            <input placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}

            />

            <input placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />



            <textarea 
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />



            <button onClick={placeOrder}>
                Place Order 
            </button>



        </div>



    );
}

export default Checkout;