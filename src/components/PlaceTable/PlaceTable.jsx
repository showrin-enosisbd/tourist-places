import React from "react";
import { Table } from "react-bootstrap";

const PlaceTable = ({ className }) => {
	return (
		<Table
			className={`place-table ${className}`}
			// bordered
		>
			<thead>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>Rating</th>
					<th>Picture</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Address</td>
					<td>Rating</td>
					<td>Picture</td>
					<td>Action</td>
				</tr>
				<tr>
					<td>Name</td>
					<td>Address</td>
					<td>Rating</td>
					<td>Picture</td>
					<td>Action</td>
				</tr>
				<tr>
					<td>Name</td>
					<td>Address</td>
					<td>Rating</td>
					<td>Picture</td>
					<td>Action</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default PlaceTable;
