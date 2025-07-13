import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
        <Link to ="/" className='logo'>My Blog</Link>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    )
}