import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
