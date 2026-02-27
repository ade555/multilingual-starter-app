import "./Notifications.css";

const notifications = [
  {
    id: 1,
    user: "Alice Martin",
    action: "joined the team",
    date: new Date("2025-11-03"),
    meta: null,
  },
  {
    id: 2,
    user: "Bob Chen",
    action: "left a comment on your post",
    date: new Date("2025-11-05"),
    meta: null,
  },
  {
    id: 3,
    user: "System",
    action: "Monthly report ready",
    date: new Date("2025-11-08"),
    meta: { type: "number", value: 1240 },
  },
  {
    id: 4,
    user: "System",
    action: "Subscription renewed",
    date: new Date("2025-11-10"),
    meta: { type: "currency", value: 49.99 },
  },
  {
    id: 5,
    user: "Diana Müller",
    action: "shared a file with you",
    date: new Date("2025-11-12"),
    meta: null,
  },
];

const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
});

const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: "currency",
  currency: "USD",
});

const numberFormatter = new Intl.NumberFormat(navigator.language);

export function Notifications() {
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
                {a.meta && (
                  <span className="notification-meta">
                    {" — "}
                    {a.meta.type === "currency"
                      ? currencyFormatter.format(a.meta.value)
                      : numberFormatter.format(a.meta.value) + " items"}
                  </span>
                )}
              </p>
              <span className="notification-date">
                {dateFormatter.format(a.date)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
