import React, { useState } from "react";
import { connect } from "react-redux";

function Bat(props) {
	const [value, setValue] = useState("");
	return (
		<div>
			<h1>Number of Bats: {props.bat}</h1>
			<input
				type="number"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				onClick={() => {
					setValue("");
					props.setBat(value);
				}}
			>
				Buy Bat
			</button>
		</div>
	);
}

const mapStateToProps = (store) => {
	console.log(store);
	return store.bat;
};

const mapDispatchToProps = (dispatch) => {
	return {
		setBat: (value) => {
			return dispatch({ type: "buy_bat", payload: value });
		},
	};
    
};

const higherOrderFunc = connect(mapStateToProps, mapDispatchToProps)(Bat);
export default higherOrderFunc;
