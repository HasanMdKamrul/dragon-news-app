import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Header from "../page/Shared/Header/Header/Header";
import LeftSideNav from "../page/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../page/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="2">
            <div className=" d-lg-block d-none">
              <LeftSideNav />
            </div>
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
