import React from "react";

const InputBox = ({inputVal, onChangeTagInput,  calculateresult}) => {

	return (
		<div className='text-input-conatiner'>
			<input
				className='text-input-area'
				value={inputVal}
        onPaste={e => e.preventDefault()}
				onChange={(e) => {
					onChangeTagInput(e);
				}}
				onKeyDown={(e) => {
					if(e.key === 'Enter') {
						console.log(e.key)
						calculateresult(inputVal + '=')
					}
				}}
			/>
		</div>
	);
};

export default InputBox;
