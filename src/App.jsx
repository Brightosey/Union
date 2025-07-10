import HomePage from "./page/HomePage/HomePage";
import Policy from "./page/Policy/Policy";
import LegalNotice from "./page/LegalNotice/LegalNotice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hook/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/legal" element={<LegalNotice />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
