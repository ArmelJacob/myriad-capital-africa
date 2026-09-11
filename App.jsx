import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./ui.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Partners from "./pages/Partners.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return window.localStorage.getItem("myriad-lang") || "fr";
    } catch {
      return "fr";
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("myriad-lang", lang);
    } catch { /* noop */ }
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Routes>
      <Route element={<Layout lang={lang} setLang={setLang} />}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/a-propos" element={<About lang={lang} />} />
        <Route path="/metiers" element={<Services lang={lang} />} />
        <Route path="/partenaires" element={<Partners lang={lang} />} />
        <Route path="/equipe" element={<Team lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="*" element={<Home lang={lang} />} />
      </Route>
    </Routes>
  );
}
