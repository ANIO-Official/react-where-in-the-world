import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import DetailedCountryPage from "./pages/DetailedCountryPage/DetailedCountryPage";

function App() {
  return (
    <div id="application">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/country/:name/:cca3/detailed-view"
          element={<DetailedCountryPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
