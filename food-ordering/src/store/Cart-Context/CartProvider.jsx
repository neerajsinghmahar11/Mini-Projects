import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

    const cartReducer=(state,action)=>{
        if(action.type==="ADD"){
            const updatedItems=state.items.concat(action.item);
            const updatedTotalAmount=state.totalAmount+action.item.price *action.item.amount;
            return {
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }
        }
    }
    const defaultCartState={
        items:[],
        totalAmount:0
    }

const CartProvider = (props) => {
   const [cartState,dispatchCartAction] =useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item});
    }
    const removeItemToCartHandler=(id)=>{
        dispatchCartAction({type:'ADD',id:id});
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider