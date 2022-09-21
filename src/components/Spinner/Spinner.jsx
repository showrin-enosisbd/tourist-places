import React from "react";
import classNames from "classnames";

const Spinner = ({ className }) => {
	return <div className={classNames("spinner", className)} />;
};

export default Spinner;
