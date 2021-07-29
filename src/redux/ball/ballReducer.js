let state = {
	balls: 5,
};

function ballReducer(initialState = state, action) {
	switch (action.type) {
		case "buy_ball":
			return {
				balls: initialState.balls - 1,
			};
		case "sell_ball":
			return {
				balls: initialState.balls + 1,
			};
		default: {
			return initialState;
		}
	}
}

export default ballReducer