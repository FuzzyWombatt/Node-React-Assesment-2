import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import RecycleContext from './recycleContext';
import RecycleReducer from './recycleReducer';
import { GET_ITEM, SET_LOADING, SET_ITEMS, SEARCH_ITEMS, DELETE_ITEM, ADD_ITEM, MODIFY_ITEM } from './types';

const RecycleState = (props) => {
    const initialState = {
        items: [],
        item: {},
        loading: false,
    };

    const [state, dispatch] = useReducer(RecycleReducer, initialState);

    useEffect(() => {
        getInitial();
        // eslint-disable-next-line
    }, []);

    //set initial items for homepage
    const getInitial = async () => {
        setLoading();
        const res = await axios.get(`http://localhost:4000/itemsIntake`);
        console.log(res);
        dispatch({ type: SET_ITEMS, payload: res.data.items });
    };

    const searchItems = async (text) => {
        setLoading();
        const res = await axios.get(`http://localhost:4000/itemsIntake?name=${text}`);

        dispatch({ type: SEARCH_ITEMS, payload: res.data.items });
    };

    const getItem = async (id) => {
        setLoading();
        const res = await axios.get(`http://localhost:4000/itemsIntake/${id}`);

        dispatch({ type: GET_ITEM, payload: res.data.item });
    };

    const deleteItem = async (id) => {
        setLoading();
        const res = await axios.delete(`http://localhost:4000/itemsIntake/${id}`);

        dispatch({ type: DELETE_ITEM, payload: res.data.items });
    };

    const addItem = async (obj) => {
        setLoading();
        const res = await axios.post(`http://localhost:4000/itemsIntake`, obj);
        console.log(res)
        dispatch({ type: ADD_ITEM, payload: res.data });
    }

    const modifyItem = async (obj, id) => {
        setLoading();
        const res = await axios.put(`http://localhost:4000/itemsIntake/${id}`, obj);

        dispatch({ type: MODIFY_ITEM, payload: res.data });
        //currently needs to be called to re-render items when hit back to search and update
        getInitial();
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <RecycleContext.Provider
            value={{
                items: state.items,
                item: state.item,
                loading: state.loading,
                getInitial,
                getItem,
                searchItems,
                deleteItem,
                addItem,
                modifyItem
            }}>
            {props.children}
        </RecycleContext.Provider>
    );
};

export default RecycleState;
