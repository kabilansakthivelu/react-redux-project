import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import './Form.css';

const Form = () => {

    const dispatch = useDispatch();

    const formSubmit = (e) =>{
        e.preventDefault();

        let variable = variableRef.current.value;
        let opr = operationRef.current.value;
        let val = valueRef.current.value;

        if((variable === "A") && (opr === "Add")){
           dispatch({
               type: "ADD_TO_A",
               payload: {
                   value: Number(val),
                   comment: `A is incremented by ${val}`
               }
           })
        }

        if((variable === "A") && (opr === "Minus")){
           dispatch({
               type: "SUBTRACT_FROM_A",
               payload: {
                   value: Number(val),
                   comment: `A is decremented by ${val}`
               }
           })
        }

        if((variable === "B") && (opr === "Add")){
           dispatch({
               type: "ADD_TO_B",
               payload: {
                   value: Number(val),
                   comment: `B is incremented by ${val}`
               }
           })
        }

        if((variable === "B") && (opr === "Minus")){
           dispatch({
               type: "SUBTRACT_FROM_B",
               payload: {
                   value: Number(val),
                   comment: `B is decremented by ${val}`
               }
           })
        }

        variableRef.current.value = null;
        operationRef.current.value = null;
        valueRef.current.value = "";
    }

    const variableRef = useRef();
    const operationRef = useRef();
    const valueRef = useRef();

    return (
        <div>

            <h1 className="sectionHeading">Modify the variable values:</h1>

            <form className="form" onSubmit={formSubmit}>

            <select ref={variableRef} name="variable" id="variable" className="inputField">
                <option value="null">Select a variable</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>


            <select ref={operationRef} name="operation" id="operation" className="inputField">
                <option value="null">select a operation</option>
                <option value="Add">Add</option>
                <option value="Minus">Minus</option>
            </select>


            <input ref={valueRef} type="number" name="" id="number" className="inputField" placeholder="Enter the number"/>

            <button className="submitBtn">Apply</button>


            </form>
        </div>
    )
}

export default Form
