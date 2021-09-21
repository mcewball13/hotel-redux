import { ACTIVE_LOGIN_PLATE, HEADER_ACTIVE, ACTIVE_LOGIN_PAGE } from "./actions";
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
            case ACTIVE_LOGIN_PAGE:
                return {
                    ...state,
                    isLoginPage: !state.isLoginPage
                }

        default:
            return state;
    }
};
export function useUiReducer(initialState) {
    return useReducer(reducer, initialState);
}
