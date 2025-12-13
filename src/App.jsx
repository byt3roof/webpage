import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from './pages/Services';
import { ERP } from './pages/ERP';

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/erp" element={<ERP />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
