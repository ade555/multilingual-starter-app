import { Link, useParams } from "react-router-dom";
import { useLingoContext } from "@lingo.dev/compiler/react";
import "./Navbar.css";
import { LanguageSwitcher } from "./LanguageSwircher";

export function Navbar() {
  const { locale } = useLingoContext();

  return (
    <nav className="navbar">
      <Link to={`/${locale}`} className="logo">
        MyApp
      </Link>
      <ul>
        <li>
          <Link to={`/${locale}`}>Home</Link>
        </li>
        <li>
          <Link to={`/${locale}/about`}>About</Link>
        </li>
        <li>
          <Link to={`/${locale}/contact`}>Contact</Link>
        </li>
        <li>
          <Link to={`/${locale}/notifications`}>Notifications</Link>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
