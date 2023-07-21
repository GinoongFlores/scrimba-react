export default function Header() {
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