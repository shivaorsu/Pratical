import { useContext, useState } from "react";
import CartContext from "./CartContext";


const CartProvider = (props) => {
    const CartCntx = useContext(CartContext);
  const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items, item]);
    }
    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;