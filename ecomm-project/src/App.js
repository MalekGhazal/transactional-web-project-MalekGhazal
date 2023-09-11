import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./pages/Home/Home";
import FAQ from "./components/FAQ/FAQ";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <About />
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
