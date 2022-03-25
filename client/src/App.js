import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

const App = () => (

    <BrowserRouter>
        <Container maxwidth="xl">
            <Navbar />
            <Routes>
                <Route path="/" exact element={() => <Redirect to="/posts" />} />
                <Route path="/posts" exact element={<Home />} />
                <Route path="/posts/search" exact element={<Home />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/auth" exact element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>

)

export default App;