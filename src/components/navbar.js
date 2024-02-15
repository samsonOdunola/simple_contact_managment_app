import { Link } from "react-router-dom"
const Navbar = () => {
    return <nav>
        <ul>
            <li><Link className="nav-link" to='/'>Home</Link></li>
            <li><Link className="nav-link" to='/create_contact'>Create Contact</Link></li>
            <li><Link className="nav-link" to='/edit_contact'>Edit Contact</Link></li>
        </ul>
    </nav>
}

export default Navbar