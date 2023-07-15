import React, { useState } from 'react';
import "./InputForm.css";

const InputForm = ({ onSubmitForm }) => {
    const [formData, setFormData] = useState({
        currentSavings: "",
        yearlyContribution: "",
        expectedReturn: "",
        duration: "",
    })
    const submitHandler = (event) => {
        event.preventDefault();
        onSubmitForm(formData)
    }

    const resetHandler = () => {
        setFormData((prev) => {
            return {
                ...prev,
                currentSavings: "",
                yearlyContribution: "",
                expectedReturn: "",
                duration: "",
            }
        })
    }

    const getInputData = (input, value) => {
        setFormData((prev) => {
            return {
                ...prev,
                [input]: value,
            }
        })
    }
    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" value={formData.currentSavings} onChange={(e) => getInputData("currentSavings", e.target.value)} id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number"  value={formData.yearlyContribution}  onChange={(e) => getInputData("yearlyContribution", e.target.value)} id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number"  value={formData.expectedReturn}  onChange={(e) => getInputData("expectedReturn", e.target.value)} id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number"  value={formData.duration}  onChange={(e) => getInputData("duration", e.target.value)} id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InputForm