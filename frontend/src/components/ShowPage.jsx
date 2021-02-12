import { MDBCard, MDBCardBody, MDBBtn, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBAlert, MDBContainer } from 'mdbreact';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
 import axios from 'axios'



export default function ShowPage(props) {
    const [place, setPlaces] = useState({})
    const { id } = useParams()
    const selectPlace = props.selectPlace;
    const [added, setadded] = useState(true);

    const addPlace = () => {
        console.log("placeId = ", selectPlace._id)
        console.log("userId = ", props.user._id)
        axios.post('http://localhost:5000/place/tovisit', { placeId: selectPlace._id, userId: props.user._id })
            .then(data => {
                props.setAuth(pre => ({ ...pre, currentUser: { ...pre.currentUser, placesToVisit: data.data.placesToVisit } }))
                console.log(data)
            })
    }
    // git data
    useEffect(() => {
        axios.get(`http://localhost:5000/api/place/${id}`)
          .then(res => {
            setPlaces(res.data.pros)
            console.log("place info", place)
          })
    }, [])


    const add = () => {
        setadded(false);
        setTimeout(() => {
            setadded(true);
        }, 3000);
    }

    return (
        <div>
            {!added && (
                <MDBAlert color="danger">
                    adedd to place List
                </MDBAlert>
            )}
            <MDBContainer
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='mt-5  d-flex justify-content-center align-items-center'
            >
                <MDBRow>
                    <MDBCol style={{ maxWidth: "40rem" }}>
                        <MDBCard reverse>
                            <MDBCardImage cascade style={{ height: '20rem' }} src={place.image} />

                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>{place.name}</MDBCardTitle>

                                <h5 className="indigo-text"><strong>{place.category}</strong></h5>

                                <MDBCardText>{place.description}</MDBCardText>

                                <MDBBtn outline color="dark" onClick ={()=> 
                            { addPlace();
                                add();}}> Add To List</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </div>
    )
}
