import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return <nav className="nav">
        {/* <Link to="/" className="site-title">Ian Foster</Link> */}
        <Link to="/" className="site-title">Ian Foster</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/playground">Playground</CustomLink>
            <CustomLink to="/Resume">Resume</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) // end means match the whole path, no partial matches
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}