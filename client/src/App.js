import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/join" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
);

export default App;
