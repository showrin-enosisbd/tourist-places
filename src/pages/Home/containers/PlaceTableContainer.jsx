import React, { useEffect, useState } from "react";

import PlaceTable from "../components/PlaceTable";
import { NO_PLACES_HERE } from "../../../utils/constants";
import useFetchPlacesApi from "../../../api/hooks/useFetchPlacesApi";
import useDeletePlaceApi from "../../../api/hooks/useDeletePlaceApi";

const PlaceTableContainer = ({
	className,
	pageNo,
	sortDirection,
	onSortDirectionChange,
	searchKeyword,
	setTotalPages,
}) => {
	const [emptyTableMsg, setEmptyTableMsg] = useState("");
	const { data, callApi: callFetchPlacesApi } = useFetchPlacesApi();
	const {
		status: deletePlaceApiStatus,
		callApi: callDeletePlacesApi,
	} = useDeletePlaceApi();
	const totalPages = data ? data.total_pages : 0;
	const places = data ? data.results : [];

	const deletePlace = (id) => {
		callDeletePlacesApi(id);
	};

	useEffect(() => {
		setTotalPages(totalPages);
	}, [totalPages]);

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
		const queryParams = {
			q: searchKeyword,
			sort_direction: sortDirection,
			sort_by: "rating",
			page: pageNo,
		};

		callFetchPlacesApi(queryParams);
	}, [searchKeyword, sortDirection, pageNo]);

	useEffect(() => {
		callFetchPlacesApi();
	}, []);

	return (
		<PlaceTable
			className={className}
			places={places}
			emptyTableMsg={emptyTableMsg}
			deletePlace={deletePlace}
			sortDirection={sortDirection}
			onSortDirectionChange={onSortDirectionChange}
		/>
	);
};

export default PlaceTableContainer;
