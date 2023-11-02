import "./App.css";
import { Routes, Route } from "react-router-dom";
import Card from "./pages/Card";
import OurTeam from "./pages/OurTeam";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import Tailwind from "./pages/Tailwind";
import Navbar from "./components/Navbar";
import BgChanger from "./pages/BgChanger";

function App() {
  let username = [
    { name: "Dipeeka Padukon", age: 40 },
    { name: "Priyanka  Padukon", age: 45 },
    { name: "Rani Mukharji ", age: 47 },
    { name: "Dipeeka Sharma", age: 40 },
  ];

  return (
    <div className="App">
      <header>
        <h1 className="text-center m-2 text-slate-600">
          Al Habibi Come To Dubai
        </h1>
        <Navbar />
        {/* <BgChanger /> */}
      </header>

      <Routes>
        <Route path="/" element={<OurTeam usernames={username} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/bgChanger" element={<BgChanger />} />

        <Route
          path="/*"
          element={
            <div className="text-center m-5"> Page Not Found 404 Error</div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
