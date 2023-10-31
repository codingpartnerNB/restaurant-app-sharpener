import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    updateTotalAmount: ()=>{},
    addItem: (item)=>{},
    removeItem: (id)=>{}
});

export default CartContext;