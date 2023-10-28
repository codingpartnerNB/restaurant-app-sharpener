import React, { useState, useContext } from 'react';
import styles from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
//   const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;
  const [amount, setAmount] = useState(props.quantity);
  const onRemoveHandler = ()=>{
    let amt = amount;
    setAmount(--amt); 
    // if(amt>0){
    //     let totalAmt = cartCtx.totalAmount;
    //     console.log(Number(totalAmt) - Number(price));
    //     cartCtx.updateTotalAmount(totalAmt -= price);
    // }
  }
  const onAddHandler = ()=>{
    let amt = amount;
    setAmount(++amt);
    // let totalAmt = cartCtx.totalAmount;
    // cartCtx.updateTotalAmount(totalAmt += price);
  }


  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;