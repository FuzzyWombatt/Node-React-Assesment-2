import {
    SET_ITEMS,
    SET_LOADING,
    GET_ITEM,
    DELETE_ITEM,
    SEARCH_ITEMS,
    ADD_ITEM,
    MODIFY_ITEM
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false,
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case SEARCH_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
                loading: false,
            };
        case MODIFY_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
