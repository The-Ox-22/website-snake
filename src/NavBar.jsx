import './NavBar.css'

export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Ian Foster</a>
        <ul>
            <li className="active">
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/playground">Playground</a>
            </li>
            <li>
                <a href="/Resume">Resume</a>
            </li>
        </ul>
    </nav>
}