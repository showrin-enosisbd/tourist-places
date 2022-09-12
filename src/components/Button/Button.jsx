import React from "react";
import classNames from "classnames";
import { Button as BsButton } from "react-bootstrap";

const Button = ({ className, children, bsStyle, ...props }) => {
	return (
		<BsButton
			className={classNames(
				"button",
				{
					"button--primary": bsStyle === "primary",
					"button--danger": bsStyle === "danger",
					"button--warning": bsStyle === "warning",
					"button--success": bsStyle === "success",
				},
				className
			)}
			bsStyle={bsStyle}
			{...props}
		>
			{children}
		</BsButton>
	);
};

export default Button;
