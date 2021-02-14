import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBCard, MDBAnimation, MDBCardBody} from 'mdbreact';
import NavBar from './NavBar';
//import NavBar from './components/NavBar';




export default function Create(props) {

    const history = useHistory();

    const [placetFields, setPlaceFields] = useState({
      name: "",
      description: "",
      image: "",
      category: "Choose the place"
  });


  const uploadImageHundler = (e) => {
    var format = new FormData()
    format.append("image",  e.target.files[0])
    axios.post("https://api.imgur.com/3/image/", format, { headers: { "Authorization": "Client-ID 69b46cb86f4a61f" } })

      .then(data => {
        setPlaceFields({
            ...placetFields,
            ["image"]: data.data.data.link,
        })
        console.log("placetFields: ",placetFields)
        //console.log(data.data.result.image)
      })
      .catch(err => console.log(err))
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
                    if (place.category === "cafe") {
                        history.push("/cafe");
                    } else if (place.category === "restaurant"){
                        history.push("/restaurant");
                    }else if (place.category === "entertainment")
                    {
                        history.push("/entertainment")
                    }else
                    {
                        history.push("/concert")
                    }
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


  /*   const onChangeSelect = ({ target: { name }, option }) => {
      setPlaceFields({ ...placetFields, [name]: option });
        console.log(placetFields);

    }; */


   // if (props.auth.currentUser.userType === "admin") {

    return (
      
        <div className="classicformpage">
          <NavBar/>
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
                        label='Image'
                        name = "image"
                        /* onChange={(e) =>uploadImageHundler(e)} type="file" *//>

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