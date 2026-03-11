import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";

function App() {

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>

    </div>
  );
}

export default App;