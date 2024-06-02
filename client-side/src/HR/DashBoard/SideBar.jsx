import React, { createContext } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavBar from "./NavBar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export const UserContext = createContext();

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <UserContext.Provider value={setShow}>
      <NavBar/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>HR Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column m-4 gap-3">
            <Link to={"/login"}>Login</Link>
            <Link to={"/registartion"}>RegistrationPage</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/dashBoard"}>DashBoard</Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </UserContext.Provider>
  );
};

export default Sidebar;
