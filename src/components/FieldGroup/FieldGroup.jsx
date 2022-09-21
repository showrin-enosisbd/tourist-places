import React from "react";
import classNames from "classnames";
import {
	Row,
	Col,
	FormGroup,
	ControlLabel,
	FormControl,
} from "react-bootstrap";

const FieldGroup = ({ className, id, label, error, required, ...props }) => {
	return (
		<FormGroup
			className={classNames(
				"field-group",
				{
					"field-group--required": required,
				},
				className
			)}
			controlId={id}
		>
			<Row>
				<Col componentClass={ControlLabel} xs={12} sm={2}>
					{label}
				</Col>
				<Col xs={12} sm={10}>
					<FormControl
						className={classNames("field-group__input", {
							"field-group__input--error": !!error,
						})}
						required={required}
						{...props}
					/>
				</Col>
				<Col xs={12} sm={10} smOffset={2}>
					<div
						className={classNames("field-group__error", {
							"field-group__error--visible": !!error,
						})}
					>
						{error}
					</div>
				</Col>
			</Row>
		</FormGroup>
	);
};

export default FieldGroup;
