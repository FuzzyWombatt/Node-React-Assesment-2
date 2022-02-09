import { FRONTEND_SET_ALERT, BACKEND_SET_ALERT, REMOVE_ALERT } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case FRONTEND_SET_ALERT:
            return action.payload;
        case BACKEND_SET_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }
};
