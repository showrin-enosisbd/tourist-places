import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { DEFAULT_FORM_FIELDS } from "../utils/constants";
import PlaceForm from "../components/PlaceForm";
import useUpdatePlaceApi from "../api/hooks/useUpdatePlaceApi";
import useCreatePlaceApi from "../api/hooks/useCreatePlaceApi";

const PlaceFormContainer = ({
	placeToEdit,
	history: browserHistory,
	placeId,
}) => {
	const [defaultFormFields, setDefaultFormFields] = useState(
		DEFAULT_FORM_FIELDS
	);
	const {
		status: updatePlaceApiStatus,
		isLoading: isUpdating,
		error: updatePlaceApiError,
		callApi: callUpdatePlaceApi,
	} = useUpdatePlaceApi({ id: placeId });
	const {
		status: createPlaceApiStatus,
		isLoading: isCreating,
		error: createPlaceApiError,
		callApi: callCreatePlaceApi,
	} = useCreatePlaceApi();
	const isEditing = !!placeId;

	const onSubmit = (values) => {
		if (isEditing) {
			callUpdatePlaceApi(values);
		} else {
			callCreatePlaceApi(values);
		}
	};

	useEffect(() => {
		if (updatePlaceApiStatus === 200) {
			browserHistory.push("/");
		}
	}, [updatePlaceApiStatus]);

	useEffect(() => {
		if (createPlaceApiStatus === 201) {
			browserHistory.push("/");
		}
	}, [createPlaceApiStatus]);

	useEffect(() => {
		if (!!placeToEdit) {
			setDefaultFormFields({
				name: placeToEdit.name,
				address: placeToEdit.address,
				rating: placeToEdit.rating,
				type: placeToEdit.type,
				picture: {
					file: null,
					base64String: placeToEdit.picture,
				},
			});
		}
	}, [placeToEdit]);

	return (
		<PlaceForm
			isLoading={isUpdating || isCreating}
			apiError={updatePlaceApiError.detail || createPlaceApiError.detail}
			defaultFormFields={defaultFormFields}
			onSubmit={onSubmit}
		/>
	);
};

export default withRouter(PlaceFormContainer);
