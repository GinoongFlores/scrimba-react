import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// the naming convention for creating a custom function component is PascalCaRe rather than camelCase

function MainPage() {
    return (
        <div className='first-pager'>
            <img src='./logo192.png' width="80" alt='logo' />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
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
root.render(<MainPage />)

console.log(MainPage)

// Shorter way in one-line
// ReactDom.createRoot(document.getElementById("root")).render(navbar)
