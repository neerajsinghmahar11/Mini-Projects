import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length !== 6;


const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        postalCode: true,
        Street: true,
        City: true,
    })


    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);
        const enteredCityIsValid = !isFiveChars(enteredCity);

        setFormInputValidity({
            name:enteredNameIsValid,
            postalCode: enteredPostalCodeIsValid,
            Street: enteredStreetIsValid,
            City: enteredCityIsValid,
        })
        const formIsValid = enteredStreetIsValid && enteredPostalCodeIsValid && enteredNameIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input ref={streetInputRef} type='text' id='street' />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalCodeInputRef} type='text' id='postal' />
                {!formInputValidity.postalCode && <p>Please enter a valid postal code (6 digit long code) !</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
        
        </form>
    );
};

export default Checkout;