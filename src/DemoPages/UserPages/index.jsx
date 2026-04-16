import { Fragment, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from '../../Layout/AppMain/SuspenseFallback';

const Login = lazy(() => import('./Login/'));
const LoginBoxed = lazy(() => import('./LoginBoxed/'));
const Register = lazy(() => import('./Register/'));
const RegisterBoxed = lazy(() => import('./RegisterBoxed/'));
const ForgotPassword = lazy(() => import('./ForgotPassword/'));
const ForgotPasswordBoxed = lazy(() => import('./ForgotPasswordBoxed/'));

const UserPages = () => (
  <Fragment>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="login-boxed" element={<LoginBoxed />} />
        <Route path="register" element={<Register />} />
        <Route path="register-boxed" element={<RegisterBoxed />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password-boxed" element={<ForgotPasswordBoxed />} />
      </Routes>
    </Suspense>
  </Fragment>
);

export default UserPages;
