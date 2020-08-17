import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

function NavigationBar(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/listuser" style={{ color: "wheat" }}>
          Click to list out data
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link style={{ color: "white" }} as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "white" }} as={Link} to="/listuser">
                List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "white" }} as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {isLoggedIn ? (
                <Nav.Link style={{ color: "white" }} as={Link} to="/logout">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link style={{ color: "white" }} as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(NavigationBar);
