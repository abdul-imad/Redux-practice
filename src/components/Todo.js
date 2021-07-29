import React from "react";
import { connect } from "react-redux";

function Todo(props) {
	return (
		<div>
			<input
				type="text"
				value={props.value}
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
			/>
            <button onClick={()=>{
                props.setValue("");
                props.setTodo(props.value)
            }}>
                Add
            </button>
			{props.list.map((eachList, id) => {
				return <li key={id}>{eachList}</li>;
			})}
		</div>
	);
}

const mapStateToProps = (store) => {
	console.log(store);
	return store.todo;
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTodo: (value) => {
			return dispatch({ type: "add_todo", payload: value });
		},
		setValue: (value) => {
			return dispatch({ type: "input_val", payload: value });
		},
	};
};

const higherOrderFunc = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default higherOrderFunc;
