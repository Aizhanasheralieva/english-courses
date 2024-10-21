import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import EnglishCourses from "./containers/EnglishCourses/EnglishCourses.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <EnglishCourses />
    </BrowserRouter>
  </StrictMode>,
);
