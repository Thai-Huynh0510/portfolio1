import Home from "./components/Home";
import Navbar from "./components/Navbar";
import School from "./components/School";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <School/>
      <Skill />
      <Project />
      <Contact/>

    </div>
  );
}

export default App;
