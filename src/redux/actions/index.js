import * as types from "../types";

export const setCurrentMonth = (string) => ({
    type: types.SET_CURRENT_MONTH,
    payload: string
})

export const setCurrentDay = (string) => ({
    type: types.SET_CURRENT_DAY,
    payload: string
})

export const setCurrentWeek = (string) => ({
    type: types.SET_CURRENT_WEEK,
    payload: string
})


