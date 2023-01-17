import "./Sidebar.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className="nav">
        {/* <nav> */}
            <ul>
                <CustomLink to="/Projektmanagement">Sidebar1</CustomLink>
                <CustomLink to="/Kontakt">Sidebar2</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }: {to: string, children: string}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    // console.log(resolvedPath)
    console.log(resolvedPath.pathname)
    console.log(isActive)

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
}