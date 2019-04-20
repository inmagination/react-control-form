import React from 'react';
import PropTypes from "prop-types";

import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Button = (props) => {       
    const { extraClass, size, icon, text, onClick } = props;  

    const sizeClass = size ? `c-button--${size}` : '';
    const extra = extraClass ? extraClass : '';
    const iconClass = icon ? icon : '';

    return (
        <button
            className={`c-button ${sizeClass} ${extra}`} 
            onClick={onClick}>
            {iconClass 
                ? <FontAwesomeIcon
                    icon={iconClass}
                    className="c-button__icon" />
                : '' }            
            {text}
        </button>
      );    
};


Button.propTypes = { 
    extraClass: PropTypes.string,   
    size: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};