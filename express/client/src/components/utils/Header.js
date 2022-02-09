import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, padding }) => {
    return (
        <header className={`bg-pink-400 ${padding} text-white mb-2 font-Equinox-bold text-center`}>
            {title}
        </header>
    );
};

export default Header;

Header.defaultProps = {
    title: 'Header',
    padding: 'p-3',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
};
