import Navbar from "./components/Navbar";
export default function App() {

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
