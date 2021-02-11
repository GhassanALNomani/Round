import { MDBCard, MDBCardBody,MDBBtn, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon,MDBContainer } from 'mdbreact';
import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'


export default function ShowPage(props) {

        const {id} = useParams()
        const selectPlace = props.selectPlace;
        const [added, setadded] = useState(true);
     
        const addPlace = () =>{
            console.log("bookId = " , selectPlace._id)
        console.log("userId = " ,props.user._id )
        axios.post('http://localhost:4000/api/books/toread' , {bookId :selectPlace._id ,  userId :props.user._id  })
        .then(data =>{
            props.setAuth(pre =>({...pre , currentUser : {...pre.currentUser , favoriteBooks : data.data.favoriteBooks }}))
            console.log(data)
        })
    }
    return (
        <div>
             <MDBContainer
        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
        className='mt-5  d-flex justify-content-center align-items-center'
      >
            <MDBRow>
      <MDBCol style={{ maxWidth: "40rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem' }} src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>My adventure</MDBCardTitle>
            <h5 className="indigo-text"><strong>Photography</strong></h5>
            <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam.</MDBCardText>
              <MDBBtn outline color="dark">Add To List</MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  

    </MDBContainer>
        </div>
    )
}
