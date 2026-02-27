import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MyApp</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
