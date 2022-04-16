import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Form from "./components/Signup_form/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
