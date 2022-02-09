import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemForm from '../utils/ItemForm';

const AddItem = () => {
    const [showModal, setModal] = useState(false);

    const handleClick = () => {
        if (showModal) {
            setModal(false);
        } else {
            setModal(true);
        }
    };

    return (
        <Fragment>
            {showModal ? (
                <button
                    className='text-white bg-gray-600 mb-4 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black w-11/12 self-center '
                    onClick={() => handleClick()}>
                    Cancel Add Item
                    <FontAwesomeIcon icon='window-close' className='ml-2' />
                </button>
            ) : (
                <button
                    className='text-white bg-gray-600 mb-4 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black w-11/12 self-center '
                    onClick={() => handleClick()}>
                    Add Item
                    <FontAwesomeIcon icon='folder-plus' className='ml-2' />
                </button>
            )}
            <div
                style={showModal ? {} : { display: 'none' }}
                className='w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 mb-4 self-center'>
                <ItemForm
                    button='Add Item'
                    icon='folder-plus'
                    type='add'
                    title='Add Item Form'
                />
            </div>
        </Fragment>
    );
};

export default AddItem;
