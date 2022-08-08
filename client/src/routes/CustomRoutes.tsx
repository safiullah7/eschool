import { Box } from "@mui/material";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "../pages/Form/ForgetPassword";
import ResetPassword from "../pages/Form/ResetPassword";
import UserLogin from "../pages/Form/UserLogin";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import FormLayout from "./FormLayout";
import Questions from "../pages/Questions";
import Create from "../pages/Questions/Create";
import Section from "../pages/Questions/Section";
import Question from "../pages/Questions/Question";

function CustomRoutes({ darkMode, setDarkMode }: any) {
  const [test, setTest] = useState({});

  const handleChange = (e: any) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };
  console.log(test);

  return (
    <Box>
      <Routes>
        <Route
          element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route
            path="/create"
            element={<Create handleChange={handleChange} />}
          />
          <Route
            path="/create/section"
            element={<Section handleChange={handleChange} />}
          />
          <Route
            path="/create/section/question"
            element={<Question handleChange={handleChange} />}
          />
        </Route>
        <Route
          element={<FormLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route path="/login" element={<UserLogin />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/forget" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default CustomRoutes;
