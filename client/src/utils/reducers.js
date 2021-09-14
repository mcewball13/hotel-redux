import {
    UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES
} from "./actions"
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            }
            case UPDATE_CATEGORIES:
                return {
                    ...state,
                    categories: [...action.categories]
                }
            case UPDATE_CURRENT_CATEGORY:
                return {
                    ...state,
                    currentCategory: action.currentCategory
                }
            
        default:
            return state;
    }
}
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }