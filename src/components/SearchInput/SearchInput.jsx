import React from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchInput = () => {
	return (
		<Form>
			<FormControl
				type="text"
				name="search"
				placeholder="Type here to search"
			/>
		</Form>
	);
};

export default SearchInput;
