import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        DEV@Deakin
      </Link>
      <input
        type="text"
        className="search"
        placeholder="Search..." />
      <div className="links">
        <Link to="/post">Post</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>);}
export default Navbar;