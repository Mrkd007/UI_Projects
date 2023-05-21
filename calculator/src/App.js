import { useState } from "react";
import "./App.css";
import InputBox from "./components/inputbox/InputBox";
import Buttons from "./components/buttons/Buttons";
import { flushSync } from "react-dom";

function App() {
	const buttonArray = [
		{
			name: "ac",
			value: "AC",
		},
		{
			name: "clear",
			value: "C",
		},
		{
			name: "percentage",
			value: "%",
		},
		{
			name: "operation",
			value: "/",
		},
		{
			name: "number",
			value: "7",
		},
		{
			name: "number",
			value: "8",
		},
		{
			name: "number",
			value: "9",
		},
		{
			name: "operation",
			value: "*",
		},
		{
			name: "number",
			value: "4",
		},
		{
			name: "number",
			value: "5",
		},
		{
			name: "number",
			value: "6",
		},
		{
			name: "operation",
			value: "-",
		},
		{
			name: "number",
			value: "1",
		},
		{
			name: "number",
			value: "2",
		},
		{
			name: "number",
			value: "3",
		},
		{
			name: "operation",
			value: "+",
		},
		{
			name: "number",
			value: "00",
		},
		{
			name: "number",
			value: "0",
		},
		{
			name: "number",
			value: ".",
		},
		{
			name: "result",
			value: "=",
		},
	];

	const [inputVal, setInputVal] = useState(0);
	const [lastInputVal, setLastInputVal] = useState(0);

	const calculateresult = (inputStr) => {
		console.log(inputStr);
		let result;
		if (inputStr === "" || inputStr === 0) {
			result = 0;
		} else {
			let val1 = 0;
			let val2 = "";
			let operation = "";
			for (let i = 0; i < inputStr.length; i++) {
				const elm = inputStr[i];
				if (elm === "-" || elm === "+" || elm === "*" || elm === "/") {
					if (operation === "") {
						operation = elm;
						val1 = parseFloat(val2);
						val2 = "";
					} else {
						val2 = parseFloat(val2);
						if (operation === "-") {
							result = val1 - val2;
						} else if (operation === "+") {
							result = val1 + val2;
						} else if (operation === "*") {
							result = val1 * val2;
						} else if (operation === "/") {
							result = val1 / val2;
						}
						operation = elm;
						val1 = result;
						val2 = "";
					}
				} else if (elm === "=") {
					if(val2 === '') {
						return false;
					}
					val2 = parseFloat(val2);
					if (operation === "-") {
						result = val1 - val2;
					} else if (operation === "+") {
						result = val1 + val2;
					} else if (operation === "*") {
						result = val1 * val2;
					} else if (operation === "/") {
						result = val1 / val2;
					}
					val1 = val2 = 0;
				} else {
					val2 += "" + elm;
				}
			}
		}
		let tempResult = result.toString();
		if (tempResult.indexOf(".") > -1) {
			tempResult = tempResult.split(".");
			tempResult[1] = tempResult[1].substr(0, 5);
			result = tempResult[0] + "." + tempResult[1];
		}
		result = result.toString();
		console.log("result -> ", result);
		setInputVal(result);
		setLastInputVal(result[result.length - 1]);
	};

	const onButtonClick = (value, type) => {
		const acceptedOperationValue = "+-*/%.";
		if (type === "number") {
			setInputVal(inputVal + "" + value);
			setLastInputVal(value[value.length - 1]);
		} else if (
			type === "operation" &&
			!(
				acceptedOperationValue.indexOf(lastInputVal) > -1 &&
				acceptedOperationValue.indexOf(value) > -1
			)
		) {
			setInputVal(inputVal + "" + value);
			setLastInputVal(value[value.length - 1]);
		} else if (type === "ac") {
			setInputVal("");
			setLastInputVal("");
		} else if (type === "clear") {
			console.log(inputVal);
			setInputVal(inputVal.substr(0, inputVal.length - 1));
			setLastInputVal(inputVal.substr(inputVal.length - 2, 1));
		} else if (type === "percentage") {
		} else if (type === "result") {
			calculateresult(inputVal + "=");
		}
	};

	const onChangeTagInput = (e) => {
		const data = e.nativeEvent.data;
		const acceptedValue = "+-*/%.0987654321";
		const acceptedOperationValue = "+-*/%.";
		let enteredData = e.target.value;
		if (
			inputVal.length < 1 &&
			acceptedOperationValue.indexOf(data) > -1 &&
			data !== "-"
		) {
			enteredData = "";
		}
		enteredData =
			(acceptedValue.indexOf(data) > -1 &&
				!(
					acceptedOperationValue.indexOf(lastInputVal) > -1 &&
					acceptedOperationValue.indexOf(data) > -1
				)) ||
			data === null
				? enteredData
				: inputVal;
		setLastInputVal(data);
		setInputVal(enteredData);
	};

	return (
		<div className='App app-container'>
			<div className='calculator-container'>
				<h3 className='calculator-header'>Web Calculator</h3>
				<InputBox inputVal={inputVal} onChangeTagInput={onChangeTagInput} calculateresult={calculateresult} />
				<div className='calculator-button-container'>
					{buttonArray.map((elm, i) => (
						<Buttons data={elm} key={i} onButtonClick={onButtonClick} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
