import CartIcon from "../../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../../store/Cart-Context/Cart-Context";
import { useContext } from "react";

const HeaderCartButton = ({ShowCart}) => {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems= cartCtx.items.reduce((acc,el)=>{
      return acc+el.amount;
  },0)
  console.log(cartCtx.items)
  return (
    <button onClick={ShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;