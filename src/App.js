import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar.js";
import HomePage from "./component/HomePage.js";
import About from "./component/About.js";
import Portofolio from "./component/Portofolio.js";
import Certificate from "./component/certificate.js";
import Contact from "./component/Contact.js";
// import DetailContent from "./component/DetailContent.js";
import CertificateDetail from "./component/CertificateDetail.js";
import PortofolioDetail from "./component/PortofolioDetail.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/portofolio/:id" element={<PortofolioDetail />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/certificate/:id" element={<CertificateDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer>
            <p>Created by Matahari Pradipta @2023</p>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
