import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <>
      <h2 className="mt-2">Change Password</h2>
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. :
      </p>
      <Container>
        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group>
                <Form.Label>Current Password:</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Form.Group>
                <Form.Label>New Password:</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <button
                style={{ borderRadius: "10px" }}
                className="mt-3"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangePassword;
