import { combineReducers } from "redux";
import * as types from "../types";


const currentMonth = (state = '', action) => {
  switch (action.type) {
    case types.SET_CURRENT_MONTH:
      return action.payload;

    default:
      return state;
  }
};
const currentDay = (state = '', action) => {
  switch (action.type) {
    case types.SET_CURRENT_DAY:
      return action.payload;

    default:
      return state;
  }
};
const currentWeek = (state = '', action) => {
  switch (action.type) {
    case types.SET_CURRENT_WEEK:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  currentMonth,
  currentDay,
  currentWeek
});
