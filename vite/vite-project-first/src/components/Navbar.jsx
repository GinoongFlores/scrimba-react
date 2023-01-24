import logo from '../assets/react.svg'

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} className="nav--logo" />

                <h1 className='nav--logo_text'>ReactFacts</h1>
                <h3 className='nav--title'>React Course - Project 1</h3>
            </nav>
        </>
    )
}