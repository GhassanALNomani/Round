import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput,  MDBView  } from 'mdbreact';
import axios from "axios";
//import signup from '../assets/signup.jpg'
<<<<<<< HEAD


export default function Signup() {



    const history = useHistory();
    const [register, setRegister] = useState(true);
    const [user, setUser] = useState({});

=======
export default function Signup() {
    const history = useHistory();
    const [register, setRegister] = useState(true);
    const [user, setUser] = useState({});
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
    const onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        console.log(user);
    };
<<<<<<< HEAD


    const onSubmit = (event) => {
        console.log(user)
        event.preventDefault();

=======
    const onSubmit = (event) => {
        console.log(user)
        event.preventDefault();
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
        axios
        .post("http://localhost:5000/api/user/signup", user)
        .then((res) => {
          const user = res.data.user;
          if (user) {
            history.push("/login");
          } else {
            alert("Error! check your information and try again")
            // setTimeout(() => {
            //   setRegister(false);
            // }, 1000);
          }
        })
        .catch((err) => console.log(err));
<<<<<<< HEAD

    }


    return (
        
        <div className='classicformpage'>

=======
    }
    return (
        
        <div className='classicformpage'>
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
<MDBView>
<MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
            >
    
      <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text'>
<<<<<<< HEAD

=======
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
                      <h3 className='text-center'> <MDBIcon icon='user' /> Register: </h3>
                     
                      <hr className='hr-light' />
                    
                      <MDBInput
                        /* className='white-text'
                        iconClass='white-text' */
                        label='Enter your name'
                        icon='user'
                        onChange={(e) => onChangeInput(e)}
                      />
                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        label='Enter your email'
                        icon='envelope'
                        onChange={(e) => onChangeInput(e)}/>
                      <MDBInput
                        label='Enter your password'
                        icon='lock'
                        type='password'
                        onChange={(e) => onChangeInput(e)}/>
<<<<<<< HEAD

=======
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo' onClick={(e) => onSubmit(e)}>Sign Up</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
        
              </MDBContainer>
              </MDBView>
<<<<<<< HEAD

</div>

      
    )
}

=======
</div>
      
    )
}
>>>>>>> a6d6536f95fd65b306e59a025bef17bd77756faf
