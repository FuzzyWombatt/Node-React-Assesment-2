import React, { useState, useContext } from 'react';
import RecycleContext from '../../context/recycle/recycleContext';
import AlertContext from '../../context/alert/alertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../layout/Alert';

const Search = () => {
    const recycleContext = useContext(RecycleContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');
    const [alert, setAlert] = useState(false)

    const onChange = (eve) => {
        setText(eve.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert(true)
            alertContext.setFrontendAlert('Please enter a valid search query');
            setTimeout(()=>setAlert(false), 1000)
        } else {
            recycleContext.searchItems(text);
            setText('');
        }
    };

    return (
        <div className='self-center flex flex-col w-11/12'>
            {alert ? <Alert /> : null}
            <form className='flex flex-col' onSubmit={onSubmit}>
                <input
                    className='border-2 mb-4 mt-4'
                    type='text'
                    name='text'
                    placeholder='Search Items by name...'
                    value={text}
                    onChange={onChange}></input>
                <button
                    className='text-white bg-gray-600 mb-4 border-2 p-1 cursor-pointer hover:bg-gray-200 hover:text-black'
                    type='submit'>
                    Search <FontAwesomeIcon icon='search' className='ml-2' />
                </button>
            </form>
        </div>
    );
};

export default Search;
