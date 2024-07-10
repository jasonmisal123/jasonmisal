import React from "react";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function AppNavbar() {
  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );
  return (
    <Navbar className="py-4 px-1 mt-5">
      <Container className="px-5 ms-auto">
        <Navbar.Brand>
          <p className="f fw-bold mb-0 pb-0 text-success">All rights reserved 2024</p>
        </Navbar.Brand>
        <Navbar.Brand className="d-flex">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Facebook")}
          >
            <Nav.Link href="https://web.facebook.com" target="_blank">
              <i className="bi bi-facebook fs-4 mx-2 text-primary"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "GitHub")}
          >
            <Nav.Link href="https://www.github.com" target="_blank">
              <i className="bi bi-github fs-4 mx-2 text-dark"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Instagram")}
          >
            <Nav.Link href="https://www.instagram.com" target="_blank">
              <i className="bi bi-instagram fs-4 mx-2 text-danger"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Tiktok")}
          >
            <Nav.Link href="https://www.tiktok.com" target="_blank">
              <i className="bi bi-tiktok fs-4 mx-2 text-dark"></i>
            </Nav.Link>
          </OverlayTrigger>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
