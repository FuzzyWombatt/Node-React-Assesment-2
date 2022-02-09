import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecycleContext from '../../context/recycle/recycleContext';
import Header from './Header';
import Alert from '../layout/Alert';
import AlertContext from '../../context/alert/alertContext';

const ItemForm = ({ title, type, icon, button, id }) => {
    const recycleContext = useContext(RecycleContext);
    const alertContext = useContext(AlertContext);

    const [alert, setAlert] = useState(false);

    const [item, setItem] = useState({
        name: '',
        description: '',
        recyclable: true,
        quantity: 0,
        price: 0,
    });

    const { name, description, recyclable, quantity, price } = item;

    const handleChange = (eve) => {
        setItem({ ...item, [eve.target.name]: eve.target.value });
    };

    const handleReset = () => {
        setItem({
            name: '',
            description: '',
            recyclable: true,
            quantity: 0,
            price: 0,
        });
    };

    const handleSubmit = (eve) => {
        eve.preventDefault();

        if (type === 'add') {
            if(item.name === ''){
                setAlert(true);
                alertContext.setFrontendAlert('Please enter a name');
                setTimeout(()=>setAlert(false), 1000)
            }else{
                recycleContext.addItem(item);
            }
        } else if (type === 'modify') {
            recycleContext.modifyItem(item, id);
        }
    };

    return (
        <form
            className='flex flex-col border-2'
            onSubmit={(eve) => handleSubmit(eve)}
            onReset={() => handleReset()}>
            <Header title={title} />
            <label className='w-11/12 self-center'>Name:</label>
            <input
                className='w-11/12 self-center border-2 mb-3'
                type='text'
                placeholder='Enter a Name'
                name='name'
                value={name}
                onChange={(eve) => handleChange(eve)}
            />
            <label className='w-11/12 self-center'>Description:</label>
            <input
                className='w-11/12 self-center border-2 mb-3'
                type='text'
                placeholder='Enter a Description'
                name='description'
                value={description}
                onChange={(eve) => handleChange(eve)}
            />
            <h1 className='w-11/12 self-center mb-1'>Recyclable:</h1>
            <div className='w-11/12 self-center mb-3'>
                <input
                    className='form-radio'
                    type='radio'
                    name='recyclable'
                    value={true}
                    onChange={(eve) => handleChange(eve)}
                    checked={type === true}
                />{' '}
                True{' '}
                <input
                    className='ml-4 form-radio'
                    type='radio'
                    name='recyclable'
                    value={false}
                    onChange={(eve) => handleChange(eve)}
                    checked={type === false}
                />{' '}
                False{' '}
            </div>
            <label className='w-11/12 self-center'>Quantity:</label>
            <input
                className='w-11/12 self-center border-2 mb-3'
                type='number'
                placeholder='0'
                name='quantity'
                value={quantity}
                onChange={(eve) => handleChange(eve)}
            />
            <label className='w-11/12 self-center'>Price:</label>
            <input
                className='w-11/12 self-center border-2 mb-4'
                type='number'
                placeholder='0'
                name='price'
                value={price}
                onChange={(eve) => handleChange(eve)}
            />
            <div className='mb-4 self-center w-11/12'>
                {alert ? <Alert /> : null}
            </div>
            <button
                type='reset'
                className='text-white bg-gray-600 mb-4 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black w-11/12 self-center '>
                Clear <FontAwesomeIcon icon='undo-alt' className='ml-2' />
            </button>
            <button
                type='submit'
                className='text-white bg-gray-600 mb-4 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black w-11/12 self-center '>
                {button} <FontAwesomeIcon icon={icon} className='ml-2' />
            </button>
        </form>
    );
};

ItemForm.defaultProps = {
    title: 'Form',
};

ItemForm.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

export default ItemForm;
