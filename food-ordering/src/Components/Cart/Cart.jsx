import React, { useContext } from 'react'
import classes from "./Cart.module.css";
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/Cart-Context/Cart-Context';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }
    
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem(item);
    }

    const CartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onAdd={cartItemAddHandler.bind(null,item)}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                />
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart