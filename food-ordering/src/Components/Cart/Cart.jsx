import React from 'react'
import classes from "./Cart.module.css";
import Modal from '../UI/Modal/Modal';

const Cart = (props) => {

    const CartItems = (
        <ul className={classes['cart-items']}>
            {
            [{
                id: "C1",
                name: "sushi",
                amount: 2,
                price: "12.99",
            }].map((item) => (
                <li key={item.id} >{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>

            <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart