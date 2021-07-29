const initialState = {
	list: [],
	value: "",
};

function todoReducer(state = initialState, action) {
	switch (action.type) {
		case "add_todo":
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case "input_val":
			return {
				...state,
				value: action.payload,
			};
		default:
			return state;
	}
}

export default todoReducer;
