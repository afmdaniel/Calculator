import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button 
            className={`button ${props.className}`}
            onClick={e => props.click(props.label)}  
        >
            {props.label}
        </button>
    )
}

export default Button;