import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/Appbar";
import Tour from "./pages/Tour";
function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </Router>
  );
}

export default App;
