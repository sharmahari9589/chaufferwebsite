import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Container
      fluid
      className=" "
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Row style={{ position: "absolute", width: "100%", padding: "0px" }}>
        <Header />
      </Row>
      <Row style={{ flex: 1, padding: "0px" }}>
        <Outlet />
      </Row>
      <Row style={{ padding: "0px" }}>
        <Footer />
      </Row>
    </Container>
  );
};

export default Main;
