import { useLingoContext } from "@lingo.dev/compiler/react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLingoContext();
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(newLocale: string) {
    setLocale(newLocale);
    const rest = location.pathname.replace(/^\/[a-z]{2}/, "") || "/";
    navigate(`/${newLocale}${rest}`);
  }

  return (
    <div>
      <label>Language:</label>
      <select value={locale} onChange={(e) => handleChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
