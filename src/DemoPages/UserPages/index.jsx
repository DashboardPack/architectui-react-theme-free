import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// USER PAGES

import Login from "./Login/";
import LoginBoxed from "./LoginBoxed/";
import Register from "./Register/";
import RegisterBoxed from "./RegisterBoxed/";
import ForgotPassword from "./ForgotPassword/";
import ForgotPasswordBoxed from "./ForgotPasswordBoxed/";

const UserPages = () => (
  <Fragment>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="login-boxed" element={<LoginBoxed />} />
      <Route path="register" element={<Register />} />
      <Route path="register-boxed" element={<RegisterBoxed />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route
        path="forgot-password-boxed"
        element={<ForgotPasswordBoxed />}
      />
    </Routes>
  </Fragment>
);

export default UserPages;
