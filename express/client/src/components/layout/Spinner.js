import React, { Fragment } from 'react';
import spinner from '../../resources/images/spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                alt='Loading...'
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </Fragment>
    );
};

export default Spinner;
