import "./style/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import Register from "./components/Register";
import Home from "./pages/Home";
import BookView from "./components/BookView";
import PreLoader from "./components/PreLoader";
import { useEffect } from "react";
import { preLoaderAnim } from "./animation/Index";

function App() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <PreLoader />
      <BrowserRouter>
        <Routes>
          <Route path="/imk-uas/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/bookview" element={<BookView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
