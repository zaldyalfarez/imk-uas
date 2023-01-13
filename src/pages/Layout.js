import React from "react";
import BookList from "../components/BookList";
import Intro from "../components/Intro";
import NavigationBar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="homebg">
        <NavigationBar />
        <Intro />
        <BookList />
      </div>
    </>
  );
};

export default Layout;
