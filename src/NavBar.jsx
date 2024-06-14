import './NavBar.css'

export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Ian Foster</a>
        <ul>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/playground">Playground</CustomLink>
            <CustomLink href="/Resume">Resume</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}