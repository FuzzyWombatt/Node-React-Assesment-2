import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowLeft,
    faArrowRight,
    faCheckCircle,
    faExchangeAlt,
    faFolderPlus,
    faInfoCircle,
    faRecycle,
    faSearch,
    faTimesCircle,
    faTrashAlt,
    faUndoAlt,
    faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Item from './components/items/Item';

import RecycleState from './context/recycle/recycleState';
import AlertState from './context/alert/alertState';

library.add(
    faRecycle,
    faCheckCircle,
    faInfoCircle,
    faTimesCircle,
    faArrowRight,
    faArrowLeft,
    faTrashAlt,
    faSearch,
    faFolderPlus,
    faExchangeAlt,
    faWindowClose,
    faUndoAlt
);

const App = () => {
    return (
        <RecycleState>
            <AlertState>
                <Router>
                    <Navbar />
                    <div className='flex flex-col'>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/about' element={<About />} />
                            <Route exact path='/itemsIntake/:_id' element={<Item />}/>
                            <Route element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </RecycleState>
    );
};

export default App;
