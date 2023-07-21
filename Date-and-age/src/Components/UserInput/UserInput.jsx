import React, { useState } from 'react'
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './UserInput.module.css';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const UserInput = ({ onSubmit }) => {
    let [error, setError] = useState();
    const [inputData, setInputData] = useState({
        name: "",
        age: "",
        id: "",
    })

    const InputHandler = (input, value) => {
        setInputData((prev) => {
            return {
                ...prev,
                [input]: value,
            }
        })
    }

    const getData = (event) => {
        event.preventDefault()
        if (inputData.name === "" || inputData.age === "") {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)",
            });
        } else if (+inputData.age < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age (>0)",
            });
        }
        else {
            onSubmit(inputData)
        }
        setInputData((prev) => {
            return {
                ...prev,
                age: "",
                name: "",
                id: "",
            }
        })
    }

    const errorHandler=()=>{
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <div>
                    <form onSubmit={getData}>
                        <label className={classes.label}>Username</label>
                        <br />
                        <input type="text" value={inputData.name} onChange={(e) => InputHandler("name", e.target.value)} />
                        <br />
                        <label className={classes.label}>Age (Years)</label>
                        <br />
                        <input type="number" value={inputData.age} onChange={(e) => InputHandler("age", e.target.value)} />
                        <br />
                        <Button type="submit">Add User</Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default UserInput