import {
    ACTIVE_LOGIN_PLATE,
    HEADER_ACTIVE,
    ACTIVE_LOGIN_PAGE,
    GET_ROOM_COUNT,
    CHECK_IN,
    CURRENT_TAB,
    MODAL_PROPS
} from "./actions";
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
                isLoginPage: !state.isLoginPage,
            };
        case GET_ROOM_COUNT:
            return {
                ...state,
                roomsAvailable: action.roomsAvailable,
            };
        case CHECK_IN:
            return {
                ...state,
                checkedInGuests: [action.checkedInGuests],
            };
        case CURRENT_TAB:
            return {
                ...state,
                currentTab: action.currentTab,
            };
        case MODAL_PROPS:
            return {
                ...state,
                modalOpen: action.modalOpen,
                modalProps: action.modalProps,
            };

        default:
            return state;
    }
};
export function useUiReducer(initialState) {
    return useReducer(reducer, initialState);
}
