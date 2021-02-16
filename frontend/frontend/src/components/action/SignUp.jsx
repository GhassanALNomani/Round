import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput,  MDBView , MDBAlert  } from 'mdbreact';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import axios from "axios";
//import signup from '../assets/signup.jpg'

import * as Yup from 'yup';
const validtionSchima = Yup.object({
  name: Yup.string().required("Enter your Name please"),
  email: Yup.string().required("Enter your email please").email("example@example.com"),
  password: Yup.string().required("Enter your passwor please!!").min(8, "must be more than 8").max(20, "whatEver")
})

export default function Signup() {



    const history = useHistory();
    const [register, setRegister] = useState(true);
    const [user, setUser] = useState({});

    const onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        console.log(user);
    };


     const onSubmit = (event) => {
        console.log(user)
        event.preventDefault();

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
 

    return (
    <>
      {/* {!register && (
        <MDBAlert variant={"danger"}>
          The email is already in use. Please change the email
          </MDBAlert>
      )}
      <Formik
        initialValues={user}
        validationSchema={validtionSchima}
        onSubmit={values => onSubmit(values)}
      > */}
        
        <div>
<MDBView>
{/* <FormikForm> */}
<MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-2  d-flex justify-content-center align-items-center'
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
                        name = "name"
                        onChange={(e) => onChangeInput(e)}
                      />
                      {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}

                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        // as={Field}
                        label='Enter your email'
                        icon='envelope'
                        name = "email"
                        onChange={(e) => onChangeInput(e)}/>
                        {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}
                      
                      <MDBInput
                      // as={Field}
                        label='Enter your password'
                        icon='lock'
                        type='password'
                        name = "password"
                        onChange={(e) => onChangeInput(e)}/>
                        {/* <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" variant={"danger"}>
                          {msg}
                        </MDBAlert>} /> */}
                        
                      <div className='text-center mt-4 black-text'>

                        <MDBBtn gradient="blue" onClick={(e) => onSubmit(e)}>Sign Up</MDBBtn>
                        
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

