import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items.forEach((item)=>{
        quantity = quantity + Number(item.quantity);
    });

    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{quantity}</span>
    </button>
}

export default HeaderCartButton;