import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// the naming convention for creating a custom function component is PascalCase rather than camelCase

function MainPage() {
    return (
        <>
            <div className='first-pager'>
                {/* <img src='./logo192.png' width="80" alt='logo' /> */}
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Power thousands of enterprise apps, including mobile apps</li>
                </ul>

                <br />
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>For Upskilling</li>
                    <li>Create a React Dashboard</li>
                    <li>It's a popular library, so I'll be
                        able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                        if I know React</li>
                </ol>
            </div>
        </>
    )
}

function Header() {
    return (
        <header>
            <nav className="header-nav">
                <img src="./logo192.png" className='img-logo' alt="img-logo" />
                {/* we used className as JSX elements turn into JavaScript objects or native DOM. */}
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className='footer'>
            <small> © 2023 Flores development. All rights reserved.</small>
        </footer>
    )
}


// The Page component is the parent component. 
function Page() {
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
root.render(<Page />)

// Shorter way in one-line
// ReactDom.createRoot(document.getElementById("root")).render(navbar)