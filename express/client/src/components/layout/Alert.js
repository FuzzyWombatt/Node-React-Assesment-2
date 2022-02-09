import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AlertContext from '../../context/alert/alertContext';

//need to refactor into a util component
const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div className='self-center bg-gray-100 pt-2 pb-2 pl-2 text-left text-gray-600 w-full'>
                <FontAwesomeIcon icon='info-circle' /> {alert}
            </div>
        )
    );
};

export default Alert;
