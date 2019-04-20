import React from "react";
import PropTypes from "prop-types";

import "./checkbox.scss";

export const Checkbox = props => {
    const { errorClass, extraClass, id, isChecked, onChange, text } = props;

	const extra = extraClass ? extraClass : "";
    const error = errorClass ? errorClass : "";

    return (
        <div className={`c-checkbox ${extra} ${error}`}>
            <input 
                className='c-checkbox__input' 
                type='checkbox' 
                id={id}
                checked={isChecked}
                onChange={onChange} />

            <label 
                className='c-checkbox__label' 
                htmlFor={id}>
                {text}
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    errorClass: PropTypes.string,
    extraClass: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};