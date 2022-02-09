import React, { useEffect, Fragment, useContext, useState } from 'react';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecycleContext from '../../context/recycle/recycleContext';
import ItemForm from '../utils/ItemForm';
import Header from '../utils/Header';

const Item = () => {
    const recycleContext = useContext(RecycleContext);
    const { _id } = useParams();

    useEffect(() => {
        recycleContext.getItem(_id);
        //eslint-disable-next-line
    }, []);

    const { item, loading } = recycleContext;

    const {
        name,
        description,
        recyclable,
        quantity,
        price,
        dateAdded,
        dateModified,
        datesModified,
    } = item;
    




    if (loading) return <Spinner />;

    return (
        <Fragment>
            <div className='w-11/12 self-center'>
                <div className='w-full mb-4 mt-2'>
                    <Link
                        to='/'
                        className=' bg-gray-600 pt-2 pb-2 pr-6 pl-6 text-center text-white border-2 hover:bg-gray-200 hover:text-black'>
                        <FontAwesomeIcon icon='arrow-left' /> Back to search
                    </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4'>
                    <div className='mb-4'>
                        <ItemForm
                            title='Item Modification Form'
                            type='modify'
                            button='Modify Item'
                            id={_id}
                            icon='exchange-alt'
                        />
                    </div>
                    <div className='flex flex-col border-2 mb-4 col-span-2'>
                        <Header
                            title='Item Description'
                            className='col-span-2'
                        />
                        <div className='grid grid-cols-3 h-full'>
                            <div className='flex flex-col text-center items-center col-span-1 justify-center '>
                                <h1 className='mb-4 lg:text-3xl'>
                                    Recyclable:
                                </h1>
                                {recyclable ? (
                                    <FontAwesomeIcon
                                        className='text-green-700 text-7xl lg:text-9xl'
                                        size='3x'
                                        icon='check-circle'
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        className='text-red-700 text-7xl lg:text-9xl'
                                        size='3x'
                                        icon='times-circle'
                                    />
                                )}
                            </div>
                            <div className='flex flex-col pl-8 col-span-2 justify-center'>
                                <p className='lg:text-xl mb-3'>Id: {_id}</p>
                                <p className='lg:text-xl mb-3'>Name: {name}</p>
                                <p className='lg:text-xl mb-3'>
                                    Description: {description}
                                </p>
                                <p className='lg:text-xl mb-3'>
                                    Quantity: {quantity}
                                </p>
                                <p className='lg:text-xl mb-3'>
                                    Price: {price}
                                </p>
                                <p className='lg:text-xl mb-3'>
                                    Date Added: {dateAdded}
                                </p>
                                <p className='lg:text-xl mb-3'>
                                    Last Modified:{' '}
                                    {dateModified ? dateModified : 'None'}
                                </p>
                                <p className='lg:text-xl mb-3'>
                                    {/*has to be conditional render due to async nature */}
                                    Times Modified: {datesModified ? datesModified.length : null}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Item;
