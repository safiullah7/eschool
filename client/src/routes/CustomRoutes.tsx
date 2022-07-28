import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginRegister from '../pages/LoginRegister';

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
      </Routes>
    </>
  )
}

export default CustomRoutes
