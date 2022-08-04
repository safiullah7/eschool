import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "../pages/Form/ForgetPassword";
import ResetPassword from "../pages/Form/ResetPassword";
import UserLogin from "../pages/Form/UserLogin";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import FormLayout from "./FormLayout";

function CustomRoutes({ darkMode, setDarkMode }: any) {
  return (
    <Box className="container">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
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
