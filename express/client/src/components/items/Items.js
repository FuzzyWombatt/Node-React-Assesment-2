import React, { Fragment, useContext } from 'react';
import RenderItem from './RenderItem';
import Spinner from '../layout/Spinner';
import RecycleContext from '../../context/recycle/recycleContext';
import AddItem from './AddItem';


const Items = () => {
    const recycleContext = useContext(RecycleContext);

    const { loading, items } = recycleContext;

    if (loading) {
        return (
            <Spinner className='md:col-span-2 lg:col-span-3 xl:col-span-4' />
        );
    } else {
        return (
            <Fragment>
            <AddItem />
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mr-4 ml-4 mb-2 w-11/12 self-center'>
                {items.map((item) => (
                    <RenderItem key={item._id} item={item} />
                ))}
            </div>
            </Fragment>
        );
    }
};

export default Items;
