import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {
	Row,
	Col,
	FormGroup,
	ControlLabel,
	FormControl,
} from "react-bootstrap";

const FieldGroup = ({ className, id, label, error, ...props }) => {
	const [delayedErrorMsg, setDelayedErrorMsg] = useState("");

	useEffect(() => {
		if (error) {
			setDelayedErrorMsg(error);
		} else {
			setTimeout(() => {
				setDelayedErrorMsg(error);
			}, 150);
		}
	}, [error]);

	return (
		<FormGroup className={classNames("field-group", className)} controlId={id}>
			<Row>
				<Col componentClass={ControlLabel} xs={12} sm={2}>
					{label}
				</Col>
				<Col xs={12} sm={10}>
					<FormControl
						className={classNames("field-group__input", {
							"field-group__input--error": !!error,
						})}
						{...props}
					/>
				</Col>
				<Col xs={12} sm={10} smOffset={2}>
					<div
						className={classNames("field-group__error", {
							"field-group__error--visible": !!error,
						})}
					>
						{delayedErrorMsg}
					</div>
				</Col>
			</Row>
		</FormGroup>
	);
};

export default FieldGroup;
