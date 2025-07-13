import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header>
        <a href="" className='logo'>My Blog</a>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    )
}