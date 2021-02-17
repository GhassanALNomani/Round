import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBCard, MDBAnimation, MDBCardBody } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Profile from "../pages/Profile"
import API_URL from "../../apiConfig";


function valid(object) {
  let flag = true
  for (var key in object) {
    if (object[key] == " ") {

      flag = false
    }
  }
  return flag
}

export default function Create(props) {
  console.log(props)
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());


  const [placeFields, setPlaceFields] = useState({
    name: " ",
    description: " ",
    image: " ",
    category: "Choose the place",
    location: " ",
    workingHours: " ",

  });



  const handleOnChangeDate = (date) => {

    setStartDate(date)

    setPlaceFields((prevState) => ({
      ...prevState, date: date
    }))
  }


  const onSubmit = (e) => {
    console.log(placeFields);
    e.preventDefault();
    console.log(valid(placeFields))
    if (!valid(placeFields)) {
      alert("somting is missing ! ")

    } else {

      axios
        .post(`${API_URL}/api/place/create`, placeFields)
        .then((res) => {

          const place = res.data;

          console.log("response data: ", res.data)

          if (place) {
            alert("Place added successfully")
            history.push("/");
          } else {
            alert("Error! check your information and try again")
          }
        })
        .catch((err) => console.log(err));
    }

  }


  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setPlaceFields({
      ...placeFields,
      [name]: value,
    });
    console.log(placeFields)
  };





  return (
    <>
      { props.user != null && props.user.email == "admin@admin.com" ?
        <div className="classicformpage">
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
          >
            <MDBCol md='6' xl='5' className='mb-4' >
              <MDBAnimation type='fadeInRight' delay='.3s'>
                <MDBCard id='classic-card'>
                  <h1 className='text-center mt-5' ><MDBIcon icon='' />
                       ℂℝ𝔼𝔸𝕋𝔼
                      </h1>
                  <MDBCardBody className='white-text'>

                    <hr className='hr-light' />

                   

                    <MDBInput
                      /* className='white-text'
                      iconClass='white-text' */
                      label='Name'
                      name="name"
                      onChange={(e) => onChangeInput(e)}
                    />

                    <MDBInput
                      /*    className='white-text'
                         iconClass='white-text' */
                      label='Description'
                      name="description"
                      onChange={(e) => onChangeInput(e)} />

                    <MDBInput
                      label='Image'
                      name="image"
                      /* onChange={(e) =>uploadImageHundler(e)} type="file" */
                      onChange={(e) => onChangeInput(e)} />


                    <MDBInput
                      /* className='white-text'
                      iconClass='white-text' */
                      label='Location'
                      name="location"
                      onChange={(e) => onChangeInput(e)}
                    />


                    <MDBInput
                      /* className='white-text'
                      iconClass='white-text' */
                      label='working Hours'
                      name="workingHours"
                      onChange={(e) => onChangeInput(e)}
                    />

                    <DatePicker
                      name="date"
                      selected={startDate}
                      onChange={(date) => handleOnChangeDate(date)} />

                    <br /><br />

                    <select className="browser-default custom-select" name="category" onChange={(e) => onChangeInput(e)}>
                      <option >Choose the place</option>
                      <option>cafe</option>
                      <option >restaurant</option>
                      <option >entertainment</option>
                      <option >concert</option>
                    </select>


                    <div className='text-center mt-4 black-text'>
                      <MDBBtn gradient="blue" onClick={(e) => onSubmit(e)} >Submit</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBContainer>
        </div>
        : <div>
          <MDBContainer>
            <h1 className="text-justify" style={{ fontSize: "25px" }}>Only the admin can access this page</h1>
          </MDBContainer>
        </div>}
    </>
  )
}
