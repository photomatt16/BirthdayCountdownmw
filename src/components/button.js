import React from 'react';

const Button = (title) => {
    return (
        <button className="button" onCLick={callback}>
             {title}
        </button>    
    )
} 
export default Button;