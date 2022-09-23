import React, { useEffect, useState } from "react";

import PlaceTable from "../components/PlaceTable";
import { NO_PLACES_HERE } from "../../../utils/constants";
import useFetchPlacesApi from "../../../api/hooks/useFetchPlacesApi";
import useDeletePlaceApi from "../../../api/hooks/useDeletePlaceApi";
import { connect } from "react-redux";

const PlaceTableContainer = ({
	className,
	user,
	pageNo,
	sortDirection,
	onSortDirectionChange,
	searchKeyword,
	setTotalPages,
	setPageNo,
}) => {
	const [emptyTableMsg, setEmptyTableMsg] = useState("");
	const { data, callApi: callFetchPlacesApi } = useFetchPlacesApi();
	const {
		status: deletePlaceApiStatus,
		callApi: callDeletePlacesApi,
	} = useDeletePlaceApi();
	const totalPages = data ? data.total_pages : 1;
	const places = data ? data.results : [];
	const queryParams = {
		q: searchKeyword,
		sort_direction: sortDirection,
		sort_by: "rating",
		page: pageNo,
	};

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
			if (places.length === 1) {
				// If we are deleting the last item of a page
				// we have set the page cursor to the previous page
				// otherwise it'll give invalid page response
				setPageNo(totalPages - 1);
			} else {
				callFetchPlacesApi(queryParams);
			}
		}
	}, [deletePlaceApiStatus]);

	useEffect(() => {
		callFetchPlacesApi(queryParams);
	}, [searchKeyword, sortDirection, pageNo]);

	return (
		<PlaceTable
			className={className}
			user={user}
			places={places}
			emptyTableMsg={emptyTableMsg}
			deletePlace={deletePlace}
			sortDirection={sortDirection}
			onSortDirectionChange={onSortDirectionChange}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(PlaceTableContainer);
