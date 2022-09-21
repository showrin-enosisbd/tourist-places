import React from "react";
import classNames from "classnames";
import { Button as BsButton } from "react-bootstrap";
import Spinner from "../Spinner";

const Button = ({ className, children, bsStyle, isLoading, ...props }) => {
	return (
		<BsButton
			className={classNames(
				"button",
				{
					"button--primary": bsStyle === "primary",
					"button--danger": bsStyle === "danger",
					"button--warning": bsStyle === "warning",
					"button--success": bsStyle === "success",
					"button--loading": isLoading,
				},
				className
			)}
			bsStyle={bsStyle}
			disabled={isLoading}
			{...props}
		>
			<span
				className={classNames("button__spinner", {
					"button__spinner--visible": isLoading,
				})}
			>
				<Spinner />
			</span>
			<span
				className={classNames("button__children", {
					"button__children--visible": !isLoading,
				})}
			>
				{children}
			</span>
		</BsButton>
	);
};

export default Button;
