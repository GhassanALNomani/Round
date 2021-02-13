/* import { MDBAnimation, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBContainer, MDBBtn, MDBLink,MDBAlert } from 'mdbreact';
import axios from "axios";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import NavBar from './NavBar'



import { useHistory,Link } from "react-router-dom";


export default function Login(props) {
  // const history = useHistory();
  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [register, setRegister] = useState(true); // to show aleart

  // const onChangeInput = (event) => {
  //   const { name, value } = event.target;
  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // };


  // const onSubmit = (event) => {

  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/user/login", credentials)
  //     .then((res) => {
  //       console.log("Express backend /login response", res);

  //       const token = res.data.token;
  //       const msg = res.data.msg;

  //       if (token) {
  //         localStorage.setItem("jwtToken", token);
  //         props.loginCallback();

  //         history.push("/home");

  //       } else {
  //         console.log("Login error: ", msg);
  //         setRegister(false)
  //       }

  //     });
  // }
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/api/user/login", credentials)
            .then((res) => {
                console.log("Express backend /login response", res);

                const token = res.data.token;
                const msg = res.data.msg;

                if (token) {
                    localStorage.setItem("jwtToken", token);
                    props.loginCallback();
                    history.push("/home"); // /profile
                } else {
                    console.log("Login error: ", msg);
                    setRegister(false)
                }
            });
    };

  return (
   
    <>
     <NavBar/>
    {!register && (
      <MDBAlert color="danger">
        The email address or password is incorrect. Please retry...
      </MDBAlert>
    )}
    <div className='backg' >
      <MDBContainer
        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
        className='mt-5  d-flex justify-content-center align-items-center'
      >
        <MDBCol md='6' xl='5' className='mb-4'>
          <MDBAnimation type='fadeInRight' delay='.3s'>
            <MDBCard id='classic-card'>

              <h3 className='text-center mt-5'>
                 𝕃𝕆𝔾 𝕀ℕ
                      </h3>
              <MDBCardBody className='white-text'>


                <hr className='hr-light' />

                <MDBInput
                  /*    className='white-text'
                     iconClass='white-text' */
                /*   label='Enter your email'
                  icon='envelope'
                  type='email'
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />
                <MDBInput
                  label='Enter your password'
                  icon='lock'
                  type='password'
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                />
                <div className='text-center mt-4 black-text '>
                  <MDBBtn gradient="blue" onClick={(e) => onSubmit(e)}> Log In</MDBBtn>
                 
                </div>
                {/* <div className='text-center'>
                  <MDBLink to='#'  >
                    forget password?
                    </MDBLink>
                </div> */
              /*}
                 <div className='text-center'>

                  <h4>New User?</h4>
                  <MDBLink to='/signup'  >
                 
                    Sign Up
                    </MDBLink>
                </div>



              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBContainer>
    </div>
    </>
  )
}
  */