import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './UserInput.module.css';

const UserInput = ({ onSubmit }) => {

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
        if (inputData.name === "" || +inputData.age < 1) {
            alert("fill all the details");
        } else {
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

    return (
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
    )
}

export default UserInput