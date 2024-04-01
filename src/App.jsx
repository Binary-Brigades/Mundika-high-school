import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AlumniPage from "./Pages/AlumniPage";
import Discover from "./Pages/DiscoverPage";
import Academics from "./Pages/AcademicsPage";
import AdministrationPage from "./Pages/AdministrationPage";
import ActivitiesPage from "./Pages/ActivitiesPage";
import NewsAndEventsPage from "./Pages/NewsAndEventsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/academis" element={<Academics />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/newsandevents" element={<NewsAndEventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
