import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import RecycleContext from '../../context/recycle/recycleContext';

import Header from '../utils/Header';

const RenderItem = ({ item: { name, recyclable, quantity, _id } }) => {
    const recycleContext = useContext(RecycleContext);

    const handleClick = () => {
        recycleContext.deleteItem(_id);
    };
    return (
        <div className='border-2'>
            <Header title={`Item: ${_id}`} padding={'p-1'}/>
            <div className='grid grid-cols-2 pr-4 pl-4'>
                <section className='mr-2 text-center'>
                    <h3>Recyclable</h3>
                    {recyclable ? (
                        <FontAwesomeIcon
                            className='text-green-700'
                            size='3x'
                            icon='check-circle'
                        />
                    ) : (
                        <FontAwesomeIcon
                            className='text-red-700'
                            size='3x'
                            icon='times-circle'
                        />
                    )}
                </section>
                <section className='flex flex-col justify-center'>
                    <p className='mb-2'>Name: {name}</p>
                    <p>Quantity(lbs): {quantity}</p>
                </section>
            </div>
            <div className='mt-2 w-full grid grid-cols-2 gap-x-4 pr-4 pl-4 pb-4'>
                <Link
                    className='bg-gray-600 text-center text-white border-2 hover:bg-gray-200 hover:text-black block pt-1 pb-1'
                    to={`/itemsIntake/${_id}`}>
                    More <FontAwesomeIcon icon='arrow-right' className='ml-2' />
                </Link>
                <button
                    className='bg-gray-600 text-center text-white border-2 hover:bg-gray-200 hover:text-black block pt-1 pb-1'
                    onClick={() => handleClick()}>
                    Delete <FontAwesomeIcon icon='trash-alt' className='ml-2' />
                </button>
            </div>
        </div>
    );
};
RenderItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default RenderItem;
