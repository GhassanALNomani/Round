import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
import API_URL from "../../apiConfig";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validtionSchima = Yup.object({
  name: Yup.string().required("Enter your Name please"),
  email: Yup.string().required("Enter your email please").email("example@example.com"),
  password: Yup.string().required("Enter your passwor please!!").min(8, "must be more than 8").max(20, "whatEver")
})

export default function Signup(props) {
  const history = useHistory();
  const [user, setUser] = useState({ name: "", lastName: "", image: "", email: "", password: "" }); // user info
  const [register, setRegister] = useState(true); // to show aleart
  //to add the input inside user
  // to add the user info to database
  const onSubmit = (values) => {
    // values.preventDefault();
    axios
      .post(`${API_URL}/api/user/signup`, values)
      .then((res) => {
        const user = res.data.user;
        if (user) {
          history.push("/login");
        } else {
          setRegister(false);
          setTimeout(() => {
            setRegister(true);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };
  return (

    <>
      {!register && (
        <Alert variant={"danger"}>
          The email is already in use. Please change the email
        </Alert>
      )}
      <Formik
        initialValues={user}
        validationSchema={validtionSchima}
        onSubmit={values => onSubmit(values)}
      >
        <FormikForm className="mt-5">
          <Container style={{ width: "1000px", margin: "0 auto" }}>
            <Row className="justify-content-center mt-5">
              <Col md={8}>
                <Form.Row>
                  <Col md={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      as={Field}
                      placeholder="Enter Your Name"
                      name="name"
                    />
                    <ErrorMessage name="name" render={(msg) => <Alert variant={"danger"}>
                      {msg}
                    </Alert>} />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      as={Field}
                      placeholder="Enter Your Email"
                      name="email"
                    />
                    <ErrorMessage name="email" render={(msg) => <Alert variant={"danger"}>
                      {msg}
                    </Alert>} />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col md={6}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      as={Field}
                      placeholder="Enter Your Password"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage name="password" render={(msg) => <Alert variant={"danger"}>
                      {msg}
                    </Alert>} />
                  </Col>
                </Form.Row>

                <Button
                  variant="info"
                  type="submit"
                  style={{ textAlign: "center" }}
                // onClick={(e) => onSubmit(e)}
                >
                  Submit
            </Button>
              </Col>
            </Row>
          </Container>
        </FormikForm>
      </Formik>
    </>
  );
}
