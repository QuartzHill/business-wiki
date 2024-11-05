import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/business-wiki" element={<Home />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
