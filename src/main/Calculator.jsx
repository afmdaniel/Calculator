import React from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'

function Calculator(props) {
    function clearMemory() {
        console.log('limpar')
    }

    function setOperation(operation) {
        console.log(operation)
    }

    function addDigit(digit) {
        console.log(digit)
    }
    
    return (
        <div className="calculator">
            <Display value={0} />
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
