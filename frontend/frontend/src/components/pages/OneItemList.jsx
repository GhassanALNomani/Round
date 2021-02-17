import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCardImage, MDBListGroupItem, MDBCard, MDBCol, MDBIcon, MDBContainer, MDBListGroup, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';
import axios from "axios";
export default function OneItemList(props) {
    // const [place, setPlaces] = useState([]) // you won't need the whole array of places when you get one place, and set the state "selectPlace" with its data
    // const [place, setPlace] = useState(selectPlace);
    // const [userTovisit, setUserTovisit]=useState()
    return (
        <div>
            <br/>
            <MDBCol style={{ maxWidth: "20rem" }}>
                <MDBCard reverse className="cardPadding">
                    <MDBCardImage cascade style={{ height: '20rem', width: "100%" }} src={props.onePlace.image} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>{props.onePlace.name}</MDBCardTitle>
                        <MDBCardTitle>{props.onePlace.category}</MDBCardTitle>
                        <MDBBtn onClick={() => props.deleteplace(props.onePlace._id)} style={{ fontSize: "15px", fontWeight: "bold", color: "black" }} gradient="deep-blue">
                            <MDBIcon icon="trash-alt" className="iconsStyle " /> Delete
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
    }
    
