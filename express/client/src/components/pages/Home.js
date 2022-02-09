import React, { Fragment } from 'react';
import Items from '../items/Items';
import Search from '../items/Search';


const Home = () => {
    return (
        <Fragment>
            <Search />
            <Items />
        </Fragment>
    );
};

export default Home;
