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
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBView, MDBAlert } from 'mdbreact';
import axios from "axios";
import API_URL from "../../apiConfig";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validtionSchima = Yup.object({
  name: Yup.string().required("Enter your Name please"),
  email: Yup.string().required("Enter your email please").email("example@example.com"),
  password: Yup.string().required("Enter your passwor please!!").min(8, "must be more than 8").max(20, "whatEver")
})

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g
const whiteSpace = /\s/g

export default function Signup() {



  const history = useHistory();
  //const [register, setRegister] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState([])
  const onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  function valid() {

    let errors = []
  
    
    for (var key in user) {
      if (key == "email" && user['email'] != "") {
        console.log('check email regex', emailRegex.test(user['email']))
        console.log('check email regex', emailRegex.test('ali@ali.com'))
        if(emailRegex.test(user['email'])){
          errors.filter(err=>err.name == "email")
        }else{
          errors.push({name: "email", msg: "Please enter a valid Email"})
        }
      }
      if(user[key] == ""){
        errors.push({name: key, msg: "Please fill this field"})
      }else{
        errors.filter(err=>err.name == key)
      }
    }
    setFormErrors(errors)
    return errors
  }


  const onSubmit = (event) => {
    console.log(user)
    event.preventDefault(); 
    console.log(valid())
    valid()
    console.log(user)
    let errors = valid()
    if (errors.length > 0) {
      

    } else {
      axios
        .post("http://localhost:5000/api/user/signup", user)
        .then((res) => {
          const user = res.data.user;
          if (user) {
            history.push("/home");
          } else {
            alert("Error! check your information and try again")
            // setTimeout(() => {
            //   setRegister(false);
            // }, 1000);
          }
        })
        .catch((err) => console.log(err));
    }
  }



  return (
    <>


      <div>
        <MDBView>
          {/* <FormikForm> */}
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
            className=' d-flex justify-content-center align-items-center'
          >

            <MDBCol md='6' xl='5' className='mb-4'>
              <MDBAnimation type='fadeInRight' delay='.3s'>
                <MDBCard id='classic-card'>
                  <h1 className='text-center mt-5' >
                    𝕊𝕀𝔾ℕ 𝕌ℙ
                      </h1>
                  <MDBCardBody className='white-text'>

                    {/*                       <hr className='hr-light' />
 */}
                    <MDBInput
                      /* className='white-text'
                      iconClass='white-text' */
                      // as={Field}
                      label='Enter your name'
                      icon='user'
                      name="name"
                      onChange={(e) => onChangeInput(e)}
                    />
                    {formErrors.map(error => {
                      if(error.name == "name")
                      return <p key={error.name} style={{color: "red"}}>{error.msg}</p>
                    })}
                    
                    
                    {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}

                    <MDBInput
                      /*    className='white-text'
                         iconClass='white-text' */
                      // as={Field}
                      label='Enter your email'
                      icon='envelope'
                      name="email"
                      onChange={(e) => onChangeInput(e)} />
                      {formErrors.map(error => {
                      if(error.name == "email")
                      return <p key={error.name} style={{color: "red"}}>{error.msg}</p>
                    })}
                    {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}

                    <MDBInput
                      // as={Field}
                      label='Enter your password'
                      icon='lock'
                      type='password'
                      name="password"
                      onChange={(e) => onChangeInput(e)} />
                      {formErrors.map(error => {
                      if(error.name == "password")
                      return <p key={error.name} style={{color: "red"}}>{error.msg}</p>
                    })}
                    {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}

                    <div className='text-center mt-4 black-text'>

                      <MDBBtn gradient="deep-blue" onClick={(e) => onSubmit(e)}>Sign Up</MDBBtn>

                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

          </MDBContainer>
          {/* </FormikForm> */}
        </MDBView>


      </div>
      {/* </Formik> */}
    </>
  )
}

