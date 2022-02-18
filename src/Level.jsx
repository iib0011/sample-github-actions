import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import {calculate, getOperationArray, isSame, runGame} from './utils'
import ButtonNice from "react-button-nice";
import {btnDefaultStyle, marginStyle} from "./styles";
const degreeMapping = {
    0: {
        operandsCount: 2,
        operandMax: 10,
        operators: ["+", "-"]

    },
    1: {
        operandsCount: 3,
        operators: ["+", "-", "/", "*"],
        operandMax: 20
    }
}
const Level = (props) => {
    const degree = props.location.state.detail;
    const selectedOperators = {};

    const settings = degreeMapping[degree];
    for (let i = 0; i < settings.operandsCount - 1; i++) {
        selectedOperators[i] = settings.operators[0]
    }
    const [operands, trueOperators, result] = runGame(settings);

    function handleSubmit() {
        if (calculate(operands, Object.values(selectedOperators)) === result || isSame(Object.values(selectedOperators), trueOperators)) {
           alert("You won");
        } else {
           alert("You lost " + getOperationArray(operands, trueOperators).join("") + "=" + result);
        }
    }

    function handleChange(event) {
        selectedOperators[event.target.id] = event.target.value;
    }

    return (
        <div style={{margin:20}}>
            <h1>Guess the operators </h1>
            <h2>It should return {result}</h2>
            <div className={"row"} style={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                {operands.map((operand, index) => {
                    return <div style={{margin:10}}>
                       <div> {operand} </div>
                        {(index + 1 !== operands.length) && <select onChange={handleChange} id={index}>
                            {settings.operators.map((op) =>
                                <option>{op}</option>
                            )}
                        </select>}
                    </div>
                })}
            </div>
            <ButtonNice alpha={0.3} style={marginStyle}>
                <button
                    style={{
                        ...btnDefaultStyle,
                        backgroundColor: "#843CC7"
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </ButtonNice>
        </div>
    );
};

export default Level;
