import React from "react";
import { connect } from "react-redux";

function Ball(props) {
	return (
		<div>
			<h1>Number of balls:{props.balls}</h1>
			<button onClick={props.buyBalls}>Buy Balls</button>
			<button onClick={props.sellBalls}>Sell Balls</button>
		</div>
	);
}

const mapStateToProps = (store) => {
	console.log(store);
	return store.balls;
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyBalls: () => {
			return dispatch({ type: "buy_ball" });
		},
		sellBalls: () => {
			return dispatch({ type: "sell_ball" });
		},
	};
};

const higherOrderFunc = connect(mapStateToProps, mapDispatchToProps)(Ball);
export default higherOrderFunc;
