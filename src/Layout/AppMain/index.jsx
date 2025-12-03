import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

const UserPages = lazy(() => import("../../DemoPages/UserPages"));
const Applications = lazy(() => import("../../DemoPages/Applications"));
const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));

const Widgets = lazy(() => import("../../DemoPages/Widgets"));
const Elements = lazy(() => import("../../DemoPages/Elements"));
const Components = lazy(() => import("../../DemoPages/Components"));
const Charts = lazy(() => import("../../DemoPages/Charts"));
const Forms = lazy(() => import("../../DemoPages/Forms"));
const Tables = lazy(() => import("../../DemoPages/Tables"));


const AppMain = () => {

    return (
        <Fragment>
            <Routes>
                {/* Components */}
                <Route path="/components/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse-rise"/>
                                </div>
                                <h6 className="mt-5">
                                    Please wait while we load all the Components examples
                                    <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Components />
                    </Suspense>
                } />

                {/* Forms */}
                <Route path="/forms/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse-rise"/>
                                </div>
                                <h6 className="mt-5">
                                    Please wait while we load all the Forms examples
                                    <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Forms />
                    </Suspense>
                } />

                {/* Charts */}
                <Route path="/charts/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-rotate"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Charts examples
                                    <small>Because this is a demonstration we load at once all the Charts examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Charts />
                    </Suspense>
                } />

                {/* Tables */}
                <Route path="/tables/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse-rise"/>
                                </div>
                                <h6 className="mt-5">
                                    Please wait while we load all the Tables examples
                                    <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Tables />
                    </Suspense>
                } />

                {/* Elements */}
                <Route path="/elements/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="line-scale"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Elements examples
                                    <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Elements />
                    </Suspense>
                } />

                {/* Dashboard Widgets */}
                <Route path="/widgets/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse-sync"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Dashboard Widgets examples
                                    <small>Because this is a demonstration we load at once all the Dashboard Widgets examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Widgets />
                    </Suspense>
                } />

                {/* Pages */}
                <Route path="/pages/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="line-scale-party"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Pages examples
                                    <small>Because this is a demonstration we load at once all the Pages examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <UserPages />
                    </Suspense>
                } />

                {/* Applications */}
                <Route path="/apps/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Applications examples
                                    <small>Because this is a demonstration we load at once all the Applications examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Applications />
                    </Suspense>
                } />

                {/* Dashboards */}
                <Route path="/dashboards/*" element={
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-grid-cy"/>
                                </div>
                                <h6 className="mt-3">
                                    Please wait while we load all the Dashboards examples
                                    <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div>
                    }>
                        <Dashboards />
                    </Suspense>
                } />

                {/* Default redirect */}
                <Route path="/" element={<Navigate to="/dashboards/crm" replace />} />
            </Routes>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;
