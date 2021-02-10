import React from 'react'
import {MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBView  } from 'mdbreact';


export default function Signup() {
    return (
        <div className='classicformpage'>

<MDBView>
<MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
            >
    
      <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text'>
                      <h3 className='text-center'>
                        <MDBIcon icon='user' /> Register:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput
                        /* className='white-text'
                        iconClass='white-text' */
                        label='Enter your name'
                        icon='user'
                      />
                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        label='Enter your email'
                        icon='envelope'
                      />
                      <MDBInput
                        label='Enter your password'
                        icon='lock'
                        type='password'
                      />

                       <MDBInput
                        label='Confirm your password'
                        icon='lock'
                        type='password'
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo'>Sign Up</MDBBtn>
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

