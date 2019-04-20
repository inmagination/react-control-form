import React from "react";
import PropTypes from "prop-types";

import "./input.scss";

export const Input = props => {
	const { type, placeholder, errorClass, extraClass, onKeyUp } = props;

	const inputType = type ? type : "text";
	const extra = extraClass ? extraClass : "";
	const error = errorClass ? errorClass : "";

	return (
		<input
			className={`c-input ${extra} ${error}`}
			type={inputType}
			placeholder={placeholder}
			onKeyUp={onKeyUp} />
	);
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  errorClass: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired
};
