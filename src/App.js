import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
