import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from "./MainPage"
import Header from "./Header"
import Footer from "./Footer"

// The Page component is the parent component. 
function App() {
    return (
        <>
            {/* The Header, MainPage and Footer are the child components. */}
            <Header />
            <MainPage />
            <Footer />
        </>
    )
}


// Other way of creating a ReactDOM instance
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)