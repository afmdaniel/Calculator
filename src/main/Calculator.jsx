import React from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'

function Calculator(props) {
    return (
        <div className="calculator">
            <Display value={0} />
            <Button label="AC" />
            <Button label="±" />
            <Button label="%" />
            <Button className="operation" label="÷" />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button className="operation" label="x" />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button className="operation" label="-" />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button className="operation" label="+" />
            <Button className="double" label="0" />
            <Button label="." />
            <Button className="operation" label="=" />
        </div>
    )
}

export default Calculator;
