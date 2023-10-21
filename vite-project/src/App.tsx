import Card from "./components/Card";
import OurTeam from "./components/OurTeam";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Tailwind from './components/Tailwind'
import {Routes, Route} from 'react-router-dom'





function App() {
  let username = [
    { name: "Dipeeka Padukon", age: 40 },
    { name: "Priyanka  Padukon", age: 45 },
    { name: "Rani Mukharji ", age: 47 },
    { name: "Dipeeka Sharma", age: 40 },
  ];

  return (
    <>
      {/* <Navbar />
      <SignUp />
      <SignIn />
      <Login />
      <OurTeam usernames={username} />
      <Card />
      <Form />
      <Tailwind/> */}

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ourteam" element={<OurTeam usernames={username} />} />
        <Route path="/card" element={<Card />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
      
    </>
  );
}

export default App;
