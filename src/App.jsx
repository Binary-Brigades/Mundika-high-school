import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AlumniPage from "./Pages/AlumniPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
    </Router>
  );
}

export default App;
