import React from "react";
import illustrations from "./illustrationRegistry";

const Illustration = ({ className, name }) => {
	const SelectedIllustration = illustrations[name];

	console.log(SelectedIllustration);
	if (!SelectedIllustration) {
		throw new Error(
			`No Illustion with name "${name}" was found. Please, use a name among [${Object.keys(
				illustrations
			).join(", ")}]`
		);
	}

	return <SelectedIllustration className={className} />;
};

export default Illustration;
