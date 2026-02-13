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
import FacebookAdsPage from "./services/Facebook.Service";
import GoogleAdSensePage from "./services/Google.Service";
import InfluencerMarketing from "./services/Insta.Service";
import AppPromotion from "./services/AppPromotion.service";
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
          <Route path="services/Facebook.Service" element={<FacebookAdsPage />} />
          <Route path="services/Google.Service" element={<GoogleAdSensePage />} />
          <Route path="services/Insta.Service" element={<InfluencerMarketing />} />
          <Route path="services/AppPromotion.Service" element={<AppPromotion />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
