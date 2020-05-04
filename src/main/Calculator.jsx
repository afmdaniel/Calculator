import React, { useState } from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndex: 0
};

function Calculator(props) {
    const [memory, setMemory] = useState(initialState);

    function clearMemory() {
        setMemory(initialState);
    }

    function setOperation(operation) {
        let operationResolved = false;
        const values = [ ...memory.values ];
        console.log(values)
        if (memory.currentIndex !== 0) {
            const currentOperation = memory.operation;
            
            switch(currentOperation) {
                case "%":
                    values[0] *= values[1] / 100;
                    break;
                case "÷":
                    values[0] /= values[1];
                    break;
                case "x":
                    values[0] *= values[1];
                    break;
                case "+":
                    values[0] += values[1];
                    break;
                case "-":
                    values[0] -= values[1];
                    break;
                default:
            }
            
            operationResolved = operation === '=';
            values[1] = 0
            console.log(values)
        }
            
        setMemory({ 
            displayValue: values[0].toString(),
            clearDisplay: true,
            operation: operationResolved ? null : operation,
            values,
            currentIndex: operationResolved ? 0 : 1
        });
    }

    function addDigit(digit) {
        if (digit === '.' && memory.displayValue.includes('.')) {
            return;
        }

        const values = [...memory.values];
        let currentValue;
        let displayValue;
        
        if (digit === "±" && memory.displayValue !== "0") {
            currentValue = memory.displayValue;
            displayValue = currentValue.indexOf('-') === -1 ? "-" + currentValue : currentValue.replace('-','');
        } else {
            const clearDisplay = memory.displayValue === '0' || memory.clearDisplay;
            currentValue = clearDisplay ? '' : memory.displayValue;
            displayValue = currentValue + digit;
        }
        
        if (digit !== '.') {
            const i = memory.currentIndex;
            const newValue = parseFloat(displayValue);
            values[i] = newValue;
        }
        
        setMemory({ ...memory, values, displayValue, clearDisplay: false });
    }
    
    return (
        <div className="calculator">
            <Display value={memory.displayValue} />
            <Button click={clearMemory} label="AC" />
            <Button click={addDigit} label="±" />
            <Button click={setOperation} label="%" />
            <Button className="operation" click={setOperation} label="÷" />
            <Button click={addDigit} label="7" />
            <Button click={addDigit} label="8" />
            <Button click={addDigit} label="9" />
            <Button className="operation" click={setOperation} label="x" />
            <Button click={addDigit} label="4" />
            <Button click={addDigit} label="5" />
            <Button click={addDigit} label="6" />
            <Button className="operation" click={setOperation} label="-" />
            <Button click={addDigit} label="1" />
            <Button click={addDigit} label="2" />
            <Button click={addDigit} label="3" />
            <Button className="operation" click={setOperation} label="+" />
            <Button className="double" click={addDigit} label="0" />
            <Button click={addDigit} label="." />
            <Button className="operation" click={setOperation} label="=" />
        </div>
    )
}

export default Calculator;
