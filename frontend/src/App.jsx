import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Blogs from "./pages/Blogs";
import Services from "./components/Services_new";
import Careers from "./pages/Carrears";
import Contact from "./components/Contact";
import Github from "./pages/Github";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="github" element={<Github />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
