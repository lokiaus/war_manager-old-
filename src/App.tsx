import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Fight from "./pages/Fight/Fight";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Recruit from "./pages/Recruit/Recruit";

export default function App() {
    return (
        <div>
            <Navbar></Navbar>
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
