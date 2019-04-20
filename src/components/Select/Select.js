import React from "react";
import PropTypes from "prop-types";

import "./select.scss";

export const Select = props => {
    const { errorClass, extraClass, onChange, initial, options } = props;

	const extra = extraClass ? extraClass : "";
	const error = errorClass ? errorClass : "";

    return (
        <select 
            className={`c-select ${extra} ${error}`}  
            onChange={onChange}>
			    <option>{initial}</option>
                {options.map((value, index) => 
                    <option key={index}> {value} </option>
                )}
		</select>
    )
}

Select.propTypes = {
    errorClass: PropTypes.string,
    extraClass: PropTypes.string,
    initial: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};