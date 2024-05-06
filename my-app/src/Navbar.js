function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site-title">My Website</a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contacts">Contacts</a>
                </li>
            </ul>

        </nav>
    )
}
export default Navbar