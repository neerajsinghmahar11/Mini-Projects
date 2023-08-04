import CartIcon from "../../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../../store/Cart-Context/Cart-Context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = ({ ShowCart }) => {
  const [bump, setBump] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((acc, el) => {
    return acc + el.amount;
  }, 0)

  const btnClasses = `${classes.button} ${bump && classes.bump}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    };
  }, [items])
  return (
    <button onClick={ShowCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;