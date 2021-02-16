import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer,MDBAlert, MDBIcon, MDBInput, MDBCard, MDBAnimation, MDBCardBody} from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




export default function Create(props) {
console.log(props)
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());


    const [placetFields, setPlaceFields] = useState({
      name: "",
      description: "",
      image: "",
      category: "Choose the place",
      location: "",
      workingHours : "",
    
  });


    const handleOnChangeDate = (date) => {

      setStartDate(date)

      setPlaceFields((prevState)=>({
        ...prevState, date: date  
      }))
    }


    const onSubmit = (e) => {
        console.log(placetFields);
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/place/create", placetFields)
            .then((res) => {

                const place = res.data;

                console.log("response data: ", res.data)

                if (place) {
                        
                      history.push("/profile");
                    } else {
                      alert("Error! check your information and try again")
                    }
            })
            .catch((err) => console.log(err));

        
    }


    const onChangeInput = (event) => {
      const { name, value } = event.target;
      setPlaceFields({
          ...placetFields,
          [name]: value,
      });
      console.log(placetFields)
  };


  

    return (
<>

{ props.user != null && props.user.email == "admin@admin.com"?      
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
                        // label='Image'
                        name = "image"
                        // onChange={(e) =>uploadImageHundler(e)} 
                        // type="file"
                        onChange={(e) => onChangeInput(e)}
                        />
 
                       <MDBInput
                        /* className='white-text'
                        iconClass='white-text' */
                        label='Location'
                        name = "location"
                        onChange={(e) => onChangeInput(e)}
                      /> 
                   

                        <MDBInput
                        /* className='white-text'
                        iconClass='white-text' */
                        label='working Hours'
                        name = "workingHours"
                        onChange={(e) => onChangeInput(e)}
                      
                      />     
                      

                       <DatePicker 
                       name = "date"
                       selected={startDate}
                       onChange={(date)=>handleOnChangeDate(date)} /> 
                       
                             <br/><br/>
                        
                        <select className="browser-default custom-select" name="category" onChange={(e) => onChangeInput(e)}>   
                          <option >Choose the place</option>
                          <option>cafe</option>
                          <option >restaurant</option>
                          <option >entertainment</option>
                          <option >concert</option>
                        
                        </select>

                      <div className='text-center mt-4 black-text'>
                        <MDBBtn gradient="blue" type="submit" onClick={(e) => onSubmit(e)}>Submit</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
              </MDBContainer>
        </div>
        : <div>
        <MDBContainer>
            <p className="text-justify">Only the admin can access this page</p>
        </MDBContainer>
         </div>}
         </>
    )
} 

