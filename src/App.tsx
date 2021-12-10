import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from "./components/Home";
import Header from "./components/Header";
import Collection from "./components/Collection";
import { useWallet } from "./hooks/useWallet";

function App() {
    const { currentAccount, setCurrentAccount } = useWallet();
    return (
        <Router>
            <Header
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
            />
            <Routes>
                <Route path='/' element={<Home currentAccount={currentAccount} />} />
                <Route
                    path='/my-token'
                    element={<Collection
                        currentAccount={currentAccount}
                    />}
                />
            </Routes>
        </Router>
    );
}

export default App;
