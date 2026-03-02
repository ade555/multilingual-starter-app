import "./Notifications.css";
import { useLingoContext } from "@lingo.dev/compiler/react";

import en from "../../i18n/en.json";
import es from "../../i18n/es.json";
import de from "../../i18n/de.json";
import fr from "../../i18n/fr.json";

const translations = { en, es, de, fr };

const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
});

export function Notifications() {
  const { locale } = useLingoContext();
  const notifications = Object.values(
    translations[locale as keyof typeof translations],
  );

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <ul className="notification-list">
        {notifications.map((a) => (
          <li key={a.id} className="notification-item">
            <div className="notification-avatar">
              {a.user === "System" ? "S" : a.user[0]}
            </div>
            <div className="notification-body">
              <p>
                <strong>{a.user}</strong> {a.action}
              </p>
              <span className="notification-date">
                {dateFormatter.format(new Date(a.date))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
