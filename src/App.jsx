import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Gallery from "./Gallery";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import NewPost from "./Newpost.jsx";
import "./App.css";
function Home() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Articles />
      <Tutorials />
      <Gallery />
      <Subscribe />
      <Contact />
    </>
  );}
function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  return (
    <BrowserRouter>
      <div className={!user ? "locked" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={setUser} />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={user ? <NewPost /> : <Navigate to="/" replace />} />
        </Routes>
        {user && <Footer />}
      </div>
      {!user && (
        <div className="login-overlay">
          <div className="login-popup">
            <button onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
            {showLogin ? (
              <Login onLogin={setUser} />
            ) : (
              <Register />)}
          </div>
        </div>
      )}
    </BrowserRouter>
  );}
export default App;
