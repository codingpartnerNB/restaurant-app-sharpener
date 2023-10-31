import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props)=>{
    const [btnIsHighlighted, setBtnIsHightlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    //Lean approach

    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    // Not lean approach
    // let quantity = 0;
    // cartCtx.items.forEach((item)=>{
    //     quantity = quantity + Number(item.quantity);
    // });

    

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHightlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHightlighted(false);
        }, 300);
        return ()=>{
            clearTimeout(timer);
        }
    },[items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;