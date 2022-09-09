import React from "react";
import {
	Row,
	Col,
	FormGroup,
	ControlLabel,
	FormControl,
	HelpBlock,
} from "react-bootstrap";

const FieldGroup = ({ id, label, help, ...props }) => {
	return (
		<FormGroup controlId={id}>
			<Row>
				<Col
					componentClass={ControlLabel}
					sm={2}
				>
					<ControlLabel>{label}</ControlLabel>
				</Col>
				<Col sm={10}>
					<FormControl {...props} />
				</Col>
				<Col sm={12}>{help && <HelpBlock>{help}</HelpBlock>}</Col>
			</Row>
		</FormGroup>
	);
};

export default FieldGroup;
