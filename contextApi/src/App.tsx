
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import NoPages from "./pages/NoPages";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Home" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/*" element={<NoPages />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
