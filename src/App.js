import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/index";
import ScrollToTop from "./Components/Utils/scrollToTop";
import PlaceToStay from "./Pages/placeToStay";
import NavBar from "./Sections/myNavBar";
import Footer from "./Sections/myFooter";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </Router>
  );
}
