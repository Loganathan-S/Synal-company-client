import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import AuthLayout from "./components/layouts/authLayout";
import {routePath} from "./routerPath";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import AppLayout from "./components/layouts/appLayout";

const Login = lazy(() => import("./screens/auth/Login"));
const Register = lazy(() => import("./screens/auth/Register"));
const DeviceList = lazy(() => import("./screens/deviceList"));

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route path={routePath.auth.home} element={<AuthLayout/>}>
                        <Route path={routePath.auth.login} element={<Suspense fallback={null}><Login/></Suspense>}/>
                        <Route path={routePath.auth.register}
                               element={<Suspense fallback={null}><Register/></Suspense>}/>
                    </Route>
                    <Route path={routePath.home} element={<AppLayout/>}>
                        <Route index element={<Suspense fallback={null}><DeviceList/></Suspense>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
