import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AuthLayout from "./components/layouts/authLayout";
import {routePath} from "./routerPath";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import AppLayout from "./components/layouts/appLayout";
import { CompanyProvider } from "./context/CompanyContext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Login = lazy(() => import("./screens/auth/Login"));
const Register = lazy(() => import("./screens/auth/Register"));
const DeviceList = lazy(() => import("./screens/deviceList"));

const CompanyDetails = lazy(() => import("./screens/deviceList/CompanyDetails"));

// const CompanyList = lazy(() => import("./screens/company"));

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <CompanyProvider>
              <ThemeProvider theme={theme}>
                 <CssBaseline/>
                  <Routes>
                     <Route path={routePath.auth.home} element={<AuthLayout/>}>
                        <Route path={routePath.auth.login} element={<Suspense fallback={null}><Login/></Suspense>}/>
                        <Route path={routePath.auth.register}>
                            <Route index element={<Suspense fallback={null}><Register /></Suspense>} />
                            <Route path=":register" element={<Suspense fallback={null}><Register /></Suspense>} />
                        </Route>
                    </Route>
                    <Route path={routePath.home} element={<AppLayout/>}>
                        <Route index element={<Suspense fallback={null}><DeviceList/></Suspense>}/>
                        <Route path = {routePath.app.companydetails} element={<Suspense fallback={null}><CompanyDetails/></Suspense>}/>
                        {/* <Route index element={<Suspense fallback={null}><CompanyList/></Suspense>}/> */}
                    </Route>
                </Routes>
              </ThemeProvider>
            </CompanyProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
