import "./Dashboard.css";

const user = {
  name: "Jane Doe",
  role: "Product Designer",
  joinDate: new Date("2022-11-03"),
  lastActive: new Date(),
};

const stats = [
  { label: "Total revenue", value: 48295.5 },
  { label: "Active users", value: 12473 },
  { label: "Avg. order value", value: 84.99 },
  { label: "Refund rate", value: 0.023 },
];

const transactions = [
  {
    id: "TXN-001",
    customer: "Alice Martin",
    amount: 120.0,
    date: new Date("2025-09-01"),
  },
  {
    id: "TXN-002",
    customer: "Bob Chen",
    amount: 49.99,
    date: new Date("2025-09-03"),
  },
  {
    id: "TXN-003",
    customer: "Carlos Rivera",
    amount: 310.5,
    date: new Date("2025-09-05"),
  },
  {
    id: "TXN-004",
    customer: "Diana Müller",
    amount: 75.0,
    date: new Date("2025-09-08"),
  },
  {
    id: "TXN-005",
    customer: "Ethan Park",
    amount: 199.99,
    date: new Date("2025-09-10"),
  },
];

export function Dashboard() {
  const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const percentFormatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
  });

  const numberFormatter = new Intl.NumberFormat("en-US");

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p className="last-active">
            Last active: {timeFormatter.format(user.lastActive)}
          </p>
        </div>
        <div className="profile-pill">
          <div className="avatar">JD</div>
          <div>
            <span className="profile-name">{user.name}</span>
            <span className="profile-meta">
              Member since {dateFormatter.format(user.joinDate)}
            </span>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-label">{s.label}</span>
            <span className="stat-value">
              {s.label === "Active users"
                ? numberFormatter.format(s.value)
                : s.label === "Refund rate"
                  ? percentFormatter.format(s.value)
                  : currencyFormatter.format(s.value)}
            </span>
          </div>
        ))}
      </div>

      <div className="transactions">
        <h2>Recent transactions</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td className="txn-id">{t.id}</td>
                <td>{t.customer}</td>
                <td>{currencyFormatter.format(t.amount)}</td>
                <td>{dateFormatter.format(t.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
