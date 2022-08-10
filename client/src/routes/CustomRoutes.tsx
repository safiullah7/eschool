import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "../pages/Form/ForgetPassword";
import ResetPassword from "../pages/Form/ResetPassword";
import UserLogin from "../pages/Form/UserLogin";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import FormLayout from "./FormLayout";
import Questions from "../pages/Questions";
import Create from "../pages/Create";

function CustomRoutes({ darkMode, setDarkMode }: any) {
  return (
    <Box>
      <Routes>
        <Route
          element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/create" element={<Create />} />
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
