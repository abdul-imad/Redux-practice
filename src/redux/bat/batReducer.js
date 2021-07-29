let state = {
	bat: 4,
};

function batReducer(initialState = state, action) {
	switch (action.type) {
		case "buy_bat":
			return {
				...initialState,
				bat: initialState.bat - action.payload,
			};
		default:
			return initialState;
	}
}

export default batReducer;
