import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {

    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Navigate replace to="/posts" />} />
                    <Route path="/posts" exact element={<Home />} />
                    <Route path="/posts/search" exact element={<Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;