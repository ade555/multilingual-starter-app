import "./Notifications.css";

const notifications = [
  {
    id: 1,
    user: "Alice Martin",
    action: "joined the team",
    date: new Date("2025-11-03"),
  },
  {
    id: 2,
    user: "Bob Chen",
    action: "left a comment on your post",
    date: new Date("2025-11-05"),
  },
];

const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
});
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
