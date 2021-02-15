import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput,  MDBView  } from 'mdbreact';
import axios from "axios";
//import signup from '../assets/signup.jpg'


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
        
        <div>
<MDBView>
<MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
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
                        label='Enter your name'
                        icon='user'
                        name = "name"
                        onChange={(e) => onChangeInput(e)}
                      />
                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        label='Enter your email'
                        icon='envelope'
                        name = "email"
                        onChange={(e) => onChangeInput(e)}/>
                      <MDBInput
                        label='Enter your password'
                        icon='lock'
                        type='password'
                        name = "password"
                        onChange={(e) => onChangeInput(e)}/>
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn gradient="blue" onClick={(e) => onSubmit(e)}>Sign Up</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
        
              </MDBContainer>
              </MDBView>

</div>

      
    )
}

