import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from "./components/Home";
import Header from "./components/Header";
import Collection from "./components/Collection";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/my-token'
                    element={<Collection />}
                />
            </Routes>
        </Router>
    );
}

export default App;
