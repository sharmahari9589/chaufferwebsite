import "./Pages.css";

import { Col, Container, Modal, Row } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Otp = () => {
  // do not navigate until you get user Data.

  const [otp, setOtp] = useState("");
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  return (
    <Container fluid className="layout">
      <Row className="align-items-center">
        <Col style={{ textAlign: "center" }} lg={6} md={12} sm={12}>
          <div
            className="right d-flex justify-content-center align-items-center otpscreenpadding  "
            style={{
              padding: "3rem 2rem 1rem 2rem",
              height: "100%",
              gap: "20px",
            }}
          >
            <div className=" ">
              <div style={{ width: "100%" }}>
                <h1 className="welcome">Forgot Password</h1>
                <p className="p" style={{ width: "100%", margin: " 12px 0px" }}>
                  We have send a code to your email:
                </p>
              </div>

              <form className="otp-screen-form" onSubmit={handleSubmit()}>
                <OtpInput
                  containerStyle="otp-input"
                  inputStyle="otp-style  signup-otp-style"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  // inputType=""zzzz
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <p>
                  Didn’t receive code?
                  <span style={{ cursor: "pointer" }}>Resend</span>
                </p>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                    width: "80%",
                    justifyContent: "center",
                  }}
                  type="submit"
                  className="login-button button-container"
                >
                  {"Confrim"}
                </button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
      {/* <CustomModal show={modal} /> */}
    </Container>
  );
};

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="confirmpass-body-modal">
        <img src={MailSuccess} alt="" />
        <p className="">
          We have Re-send a code to your email:&nbsp;
          {props.mail}
        </p>
      </div>
    </Modal>
  );
};

export default Otp;
