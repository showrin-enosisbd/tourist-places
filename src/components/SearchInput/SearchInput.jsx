import React from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchInput = ({ value, onChange }) => {
	return (
		<Form>
			<FormControl
			className="search-input"
				type="text"
				name="search"
				value={value}
				onChange={onChange}
				placeholder="Type here to search"
			/>
		</Form>
	);
};

export default SearchInput;
