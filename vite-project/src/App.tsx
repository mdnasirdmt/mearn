import Card from "./components/Card";
import OurTeam from "./components/OurTeam";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Tailwind from './components/Tailwind'
import PysicsWallah from './components/PysicsWallah'
// import ToDoList from './components/ToDoList'
// import '../../public/stylesheet/todo.css'

function App() {
  let username = [
    { name: "Dipeeka Padukon", age: 40 },
    { name: "Priyanka  Padukon", age: 45 },
    { name: "Rani Mukharji ", age: 47 },
    { name: "Dipeeka Sharma", age: 40 },
  ];

  return (
    <>
      <Navbar />
      <SignUp />
      <SignIn />
      <Login />
      <OurTeam usernames={username} />
      <Card />
      <Form />
      <Tailwind/>
      <PysicsWallah/>
      {/* <ToDoList /> */}
    </>
  );
}

export default App;
