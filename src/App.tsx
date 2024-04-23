import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Fight from "./pages/Fight/Fight";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Recruit from "./pages/Recruit/Recruit";
import TWNavbar from "./components/containers/TWNavbar";

export default function App() {
  return (
    <div>
      <TWNavbar></TWNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Recruit" element={<Recruit />}></Route>
          <Route path="Fight" element={<Fight />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
