import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useHistory, useParams } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBCard, MDBAnimation, MDBCardBody, MDBAlert } from 'mdbreact';
import DatePicker from "react-datepicker";



export default function EditPlace(props) {
  const { placeId } = useParams();
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [flag, setFlag] = useState(false)
  const handleOnChangeDate = (date) => {

    setStartDate(date)

    setPlaceFields((prevState) => ({
      ...prevState, date: date
    }))
  }

  const [placetFields, setPlaceFields] = useState({
    name: "",
    description: "",
    image: "",
    category: "Choose the place",
    location: "",
    workingHours: "",

  });

  const getPlace = () => {
    console.log(placeId);
    axios
      .get(`http://localhost:5000/api/place/${placeId}`)
      .then(data => {
        setPlaceFields(data.data.pros);
        console.log(data.data.pros)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPlace();
  }, [flag])

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    setPlaceFields({
      ...placetFields,
      [name]: value,
    });
  };

  const handleEdit = (placeId) => {
    axios.put(`http://localhost:5000/api/place/${placeId}`, placetFields)
      .then(response => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    alert("Edited successfully");
    history.push("/profile");
    setFlag(pre => !pre)
  }


  return (
    <div className="classicformpage">

      <MDBContainer
        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
        className='mt-5  d-flex justify-content-center align-items-center'
      >
        <MDBCol md='6' xl='5' className='mb-4' >
          <MDBAnimation type='fadeInRight' delay='.3s'>
            <MDBCard id='classic-card'>
              <h1 className='text-center mt-5' ><MDBIcon icon='' />
                        𝔼𝕕𝕚𝕥
                      </h1>
              <MDBCardBody className='white-text'>

                <hr className='hr-light' />

                <MDBInput
                  /* className='white-text'
                  iconClass='white-text' */
                  label='Name'
                  name="name"
                  onChange={(e) => onChangeInput(e)}
                  value={placetFields.name}
                />
                <MDBInput
                  /*    className='white-text'
                     iconClass='white-text' */
                  label='Description'
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                  value={placetFields.description}
                />

                <MDBInput
                  label='Image'
                  name="image"
                  value={placetFields.image}
                  /* onChange={(e) =>uploadImageHundler(e)} type="file" */
                  onChange={(e) => onChangeInput(e)}

                />

                <MDBInput
                  /* className='white-text'
                  iconClass='white-text' */
                  label='Location'
                  name="location"
                  onChange={(e) => onChangeInput(e)}
                  value={placetFields.location}
                />


                <MDBInput
                  /* className='white-text'
                  iconClass='white-text' */
                  label='working Hours'
                  name="workingHours"
                  value={placetFields.workingHours}
                  onChange={(e) => onChangeInput(e)}

                />


                <DatePicker
                  name="date"
                  selected={startDate}
                  value={placetFields.date}
                  onChange={(date) => handleOnChangeDate(date)} />

                <br /><br />

                <select className="browser-default custom-select" name="category" value={placetFields.category} onChange={(e) => onChangeInput(e)}>
                  <option >Choose the place</option>
                  <option>cafe</option>
                  <option >restaurant</option>
                  <option >entertainment</option>
                  <option >concert</option>

                </select>

                <div className='text-center mt-4 black-text'>
                  <MDBBtn onClick={() => handleEdit(placeId)}>Edit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBContainer>
    </div>
  )
}
