import { Box } from "@mui/material";
import React from 'react'
import { Outlet , NavLink} from 'react-router-dom'
import { routePath } from "../../routerPath";

function AppLayout() {
  return (
    <div className="min-vh-100">
    <header className=" text-white  bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h4 className="text-dark">SynalTech</h4>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
           
            {/* <Link to="/">
                <Icon icon="ph:dev-to-logo-light" height={50} color="black" />
              </Link> */}
            <ul className="navbar-nav  col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-decoration-none">
              <li>
                {/* <NavLink
                  to={routePath.app.homepage}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                  className="nav-link px-xl-2 text-decoration-none mx-0 mx-xl-2"
                >
                  Home
                </NavLink> */}
              </li>
              <li>
                <NavLink
                  to={routePath.auth.companylist}
                  className="nav-link px-xl-2 text-decoration-none"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  Company List
                </NavLink>
              </li>
            </ul>

            <form className="col-12 col-sm-auto col-md-5 col-lg-6 col-xl-auto mb-3 mb-lg-0  ">
              <input
                type="search"
                className="form-control "
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            {/* 
              <div className="text-end">
                <button type="button" className="btn btn-outline-dark me-2">
                  Login
                </button>
                <button type="button" className="btn btn-success">
                  Sign-up
                </button>
              </div> */}
          </div>
        </nav>
      </div>
    </header>
    <div className="container min-vh-100">
      <Outlet />
    </div>
    <footer className="bg-light p-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-auto">
            <div className="copyright text-center text-lg-start">
              Copyright © {new Date().getFullYear()},&nbsp;
              <NavLink to="" className="">
                synaltech
              </NavLink>
     
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>


    // <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
    //   <Outlet />
    // </Box>
  )
}

export default AppLayout