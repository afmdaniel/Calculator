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
        console.log(operation);
    }

    function addDigit(digit) {
        if (digit === '.' && memory.displayValue.includes('.')) {
            return
        }

        const clearDisplay = memory.displayValue === '0' || memory.clearDisplay
        const currentValue = clearDisplay ? '' : memory.displayValue
        const displayValue = currentValue + digit
        setMemory({ displayValue, clearDisplay: false })
    }
    
    return (
        <div className="calculator">
            <Display value={memory.displayValue} />
            <Button click={clearMemory} label="AC" />
            <Button click={setOperation} label="±" />
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
