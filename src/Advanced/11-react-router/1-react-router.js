import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import People from './Pages/People'
import Person from './Pages/Person'
import Navbar from './Pages/Navbar'

const ReactRouterSetup = () => {
    return (
        <div className={'container'}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/person/:id" element={<Person/>}/>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default ReactRouterSetup;
