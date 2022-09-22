import React, { useEffect, useState } from "react";

import PlaceTable from "../components/PlaceTable";
import { NO_PLACES_HERE } from "../../../utils/constants";
import useFetchPlacesApi from "../../../api/hooks/useFetchPlacesApi";
import useDeletePlaceApi from "../../../api/hooks/useDeletePlaceApi";

const PlaceTableContainer = ({ className }) => {
	const [emptyTableMsg, setEmptyTableMsg] = useState("");
	const { data, callApi: callFetchPlacesApi } = useFetchPlacesApi();
	const {
		status: deletePlaceApiStatus,
		callApi: callDeletePlacesApi,
	} = useDeletePlaceApi();
	const places = data ? data.results : [];

	const deletePlace = (id) => {
		callDeletePlacesApi(id);
	};

	useEffect(() => {
		if (places.length === 0) {
			setEmptyTableMsg(NO_PLACES_HERE);
		}
	}, [places]);

	useEffect(() => {
		if (deletePlaceApiStatus === 204) {
			callFetchPlacesApi();
		}
	}, [deletePlaceApiStatus]);

	useEffect(() => {
		callFetchPlacesApi();
	}, []);

	return (
		<PlaceTable
			className={className}
			places={places}
			emptyTableMsg={emptyTableMsg}
			deletePlace={deletePlace}
		/>
	);
};

export default PlaceTableContainer;
