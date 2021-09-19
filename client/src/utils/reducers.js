import { ACTIVE_LOGIN_PLATE, HEADER_ACTIVE } from "./actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIVE_LOGIN_PLATE:
            return {
                ...state,
                isLoginPlate: !state.isLoginPlate,
            };
        case HEADER_ACTIVE:
            return {
                ...state,
                isActive: !state.isActive,
            };

        default:
            return state;
    }
};
export function useUiReducer(initialState) {
    return useReducer(reducer, initialState);
}
