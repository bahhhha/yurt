// /redux/store.js

import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false, // Set your initial state to false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LOGGED_IN":
			return {
				...state,
				isLoggedIn: true,
			};
		case "SET_LOGGED_OUT":
			return {
				...state,
				isLoggedIn: false,
			};
		default:
			return state;
	}
};

export const store = configureStore({
	reducer,
});
