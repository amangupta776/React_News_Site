import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import News2 from "./news2";
import News3 from "./news3";
import IndianNews from "./indianNews";
const Navigation = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndianNews />} />
          <Route path="/news2" element={<News2 />} />
          <Route path="/news3" element={<News3 />} />
          <Route path="/news4" element={<App />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
