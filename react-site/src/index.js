import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from "./MainPage"
import Header from "./Header"
import Footer from "./Footer"

// the naming convention for creating a custom function component is PascalCase rather than camelCase

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


// const navbar = (

//     <nav className='navbar'>
//         <h1>Homepage</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>

// )

// const page = (
//     <div>
//         <h2>Hello Welcome to my page</h2>
//         <p>This section is...</p>
//         <li>
//             <li>The thing 1</li>
//             <li>The thing 2</li>
//             <li>The thing 3</li>
//         </li>
//     </div>
// )


// Other way of creating a ReactDOM instance
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

// Shorter way in one-line
// ReactDom.createRoot(document.getElementById("root")).render(navbar)