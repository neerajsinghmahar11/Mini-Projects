import React, { Fragment } from 'react'
import mealsImage from "../../../Assets/meals.jpg";
import Classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <Fragment>
        <header className={Classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={Classes["main-image"]}>
            <img  src={mealsImage} alt='A table dull of delicious food!'></img>
        </div>
    </Fragment>
    )
}

export default Header