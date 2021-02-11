import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBCard, MDBAnimation, MDBCardBody} from 'mdbreact';




export default function Create(props) {

    const history = useHistory();

    const [place, setPlace] = useState({});


    const onSubmit = (e) => {
        console.log(place);
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/place/create", place)
            .then((res) => {

                const place = res.data;

                console.log("response data: ", res.data)

                if (place) {
                    if (place.placeType === "Coffee") {
                        history.push("/coffee");
                    } else {
                        history.push("/restaurant");
                    }
                } else {
                    alert("Error! check your information and try again")
                }
            })
            .catch((err) => console.log(err));
    }


    const onChangeInput = ({ target: { name, value } }) => {
        setPlace({ ...place, [name]: value });
       console.log(place);
    };


    const onChangeSelect = ({ target: { name }, option }) => {
        setPlace({ ...place, [name]: option });
        console.log(place);

    };


   // if (props.auth.currentUser.userType === "admin") {

    return (
        <div>
            <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
            >
             <MDBCol md='6' xl='5' className='mb-4'>
             <h1 className='text-center'> <MDBIcon icon='' /> Create place</h1>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text'>
                     
                     
                      <hr className='hr-light' />
                    
                      <MDBInput
                        /* className='white-text'
                        iconClass='white-text' */
                        label='name'
                        name = "name"
                        onChange={(e) => onChangeInput(e)}
                      />
                      <MDBInput
                     /*    className='white-text'
                        iconClass='white-text' */
                        label='Description'
                        name = "description"
                        onChange={(e) => onChangeInput(e)}/>

                      <MDBInput
                        label='Image Url'
                        name = "image"
                        onChange={(e) => onChangeInput(e)}/>

                  <select className="browser-default custom-select"  onChange={(e) => onChangeSelect(e)}>   
                    <option>Choose the place</option>
                    <option value="1">Coffee</option>
                    <option value="2">restaurant</option>
                  
                 </select>

                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo' onClick={(e) => onSubmit(e)}>Submit</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
              </MDBContainer>
        </div>
    )
} 
/* else {
    return(
        <div>
  <MDBContainer>
      <p className="text-justify">Only the admin can access this page</p>
    </MDBContainer>
        </div>
    )
    }
}
 */