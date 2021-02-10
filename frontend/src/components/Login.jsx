import React from 'react'
import {MDBAnimation, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput,MDBContainer,MDBBtn,MDBLink  } from 'mdbreact';
export default function Signup() {
    return (
        <div className='backg'>
   <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
            >
      <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                  <h3 className='text-center'>
                       Log In
                      </h3>
                    <MDBCardBody className='white-text'>
                

                      <hr className='hr-light' />
                  
                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        label='Your email'
                        icon='envelope'
                      />
                      <MDBInput
                        label='Your password'
                        icon='lock'
                        type='password'
                      />
                                    <div className='text-center mt-4 black-text '>
                <MDBBtn color='indigo'> Log In</MDBBtn>
              </div>
              <div className='text-center'>
              <MDBLink to='#'  >
                      forget password?
                    </MDBLink>
              </div>
              <div className='text-center'>

              <h4>New User?</h4>
              <MDBLink to='#'  >
                      Sign Up
                    </MDBLink>
              </div>



                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>

              </MDBContainer>
</div>
    )
}