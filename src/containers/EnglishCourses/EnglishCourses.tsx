import React from "react";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const EnglishCourses: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default EnglishCourses;
