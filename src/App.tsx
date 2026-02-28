// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom"; // updated import
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Notifications } from "./pages/Notifications";
import "./App.css";

export default function App() {
  // detect the browser's language
  const defaultLocale = navigator.language.split("-")[0] || "en";
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${defaultLocale}`} replace />}
          />{" "}
          {/* redirect to default locale */}
          <Route path="/:locale" element={<Home />} />
          <Route path="/:locale/about" element={<About />} />
          <Route path="/:locale/contact" element={<Contact />} />
          <Route path="/:locale/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
