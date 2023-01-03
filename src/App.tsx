import Footer from "layout/Footer";
import NavBar from "layout/NavBar";
import Home from "pages/Home";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course/:id"></Route>
        <Route path="*"></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
