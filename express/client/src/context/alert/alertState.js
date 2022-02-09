import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { FRONTEND_SET_ALERT, BACKEND_SET_ALERT, REMOVE_ALERT } from './types';

const AlertState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //set frontend alert
    const setFrontendAlert = (msg) => {
        dispatch({ type: FRONTEND_SET_ALERT, payload: msg });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 1000);
    };
    //set alert if recieved from backend
    const setBackendAlert = (msg) => {
        dispatch({ type: BACKEND_SET_ALERT, payload: msg });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 1000);
    };

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setFrontendAlert,
                setBackendAlert,
            }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
