import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import RecycleContext from '../../context/recycle/recycleContext';

const Navbar = ({ title, icon }) => {
    const recycleContext = useContext(RecycleContext);
    
    const handleClick = () => {
        recycleContext.getInitial();
    }

    return (
        <nav className='bg-pink-400 p-3 text-white flex flex-row mb-2 font-Equinox-bold'>
            <FontAwesomeIcon
                size='2x'
                color='white'
                icon={icon}
                className='mr-4 self-center'
            />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <ul className='flex flex-row flex-1 justify-end'>
                <li className='self-center m-2'>
                    <Link className='hover:text-gray-300' to='/'>
                        <span onClick={() => handleClick()}>Home</span>
                    </Link>
                </li>
                <li className='self-center m-2'>
                    <Link className='hover:text-gray-300' to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Recycle Finder',
    icon: 'recycle',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
