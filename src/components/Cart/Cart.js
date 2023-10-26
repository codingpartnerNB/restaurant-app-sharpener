import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props)=>{
    const cartItems = <ul className={styles['cart-items']}>{[{id: "c1", name: "Sushi", amount: 2, price: 200}].map((item)=> <li>{item.name}</li>)}</ul>;
    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>Rs 2000</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;