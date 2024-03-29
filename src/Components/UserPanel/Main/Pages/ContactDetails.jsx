import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import "./Pages.css";
import { BaseUrl } from "../../../../Env";

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const token = Cookies.get("token");
  const [profileData, setprofileData] = useState([]);

  async function getProfileData() {
    try {
      const response = await axios.get(`${BaseUrl}/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setprofileData(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  const onSubmit = async (formBody) => {
    try {
      const url = `${BaseUrl}/update-profile`;
      const response = await axios.post(url, formBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);

  var currebtdate = profileData.dateOfBirth;
  // Create a Date object from the input string
  var inputDateString = currebtdate;

  let formattedDateObject = inputDateString?.split("T")[0];
  // Display the formatted date

  return (
    <>
      <Container>
        <Row style={{ marginLeft: "30px" }}>
          <div className="contact-details">
            <h2 className="mt-2">Contact Details</h2>
            {/* <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. :
        </p> */}
          </div>
          <Col lg={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Full name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue={profileData.fullName}
                  {...register("fullName", { required: true })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  defaultValue={profileData.email}
                  {...register("email", { required: true })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  defaultValue={formattedDateObject?.toString()}
                  {...register("dateOfBirth", { required: true })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  defaultValue={profileData.phone}
                  {...register("phone", { required: true })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Zip Code:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  defaultValue={profileData.zipCode}
                  {...register("zipCode", { required: true })}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder=""
                  row="2"
                  defaultValue={profileData.address}
                  {...register("address", { required: true })}
                />
              </Form.Group>

              <button
                style={{ borderRadius: "10px" }}
                className="mt-3"
                variant="primary"
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

export default ContactDetails;
