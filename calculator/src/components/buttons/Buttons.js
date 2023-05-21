import React, { useState } from "react";

const Buttons = ({ data, onButtonClick }) => {
	const [clikedDown, setClickedDown] = useState(false);
	return (
		<div
			className={
				"calculator-buttons" +
				(data?.type === "double"
					? " double"
					: data?.type === "hidden"
					? " hidden"
					: "") +
				(clikedDown ? " clicked-down" : "")
			}
			onMouseDown={() => {
				setClickedDown(true);
			}}
			onMouseUp={() => {
				setClickedDown(false);
			}}
      onClick={(e) => {onButtonClick(data.value, data.name)}}
		>
			{data.value}
		</div>
	);
};

export default Buttons;
