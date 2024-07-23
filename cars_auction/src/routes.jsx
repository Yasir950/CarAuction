import React from 'react'
import LoginComponent from './component/auth/login';
import DashboardComp from './component/dashboard/dashboard';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotfoundComp from './component/misc/Notfound';
function RoutesComp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginComponent />}></Route>
        <Route path="/dashboard" element={<DashboardComp />}></Route>
        <Route path="*" element={<NotfoundComp />} />
      </Routes>
  </Router>
  )
}

export default RoutesComp
