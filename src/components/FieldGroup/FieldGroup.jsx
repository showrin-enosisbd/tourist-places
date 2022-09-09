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
					xs={12}
					sm={2}
				>
					{label}
				</Col>
				<Col
					xs={12}
					sm={10}
				>
					<FormControl {...props} />
				</Col>
				<Col
					xs={12}
					sm={10}
					smOffset={2}
				>
					{help && <HelpBlock>{help}</HelpBlock>}
				</Col>
			</Row>
		</FormGroup>
	);
};

export default FieldGroup;
