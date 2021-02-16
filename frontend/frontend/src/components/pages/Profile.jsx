import React, { useEffect, useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { NavLink, Link } from 'react-router-dom';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBContainer, MDBCardTitle, MDBRow, MDBMask } from "mdbreact";

import axios from 'axios'

const Profile = (props) => {
    const [places, setPlaces] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/place`)
            .then(res => {
                setPlaces(res.data.result)
                console.log("place info:", places)

            })
    }, [flag])

    const handleDelete = (placeId) => {
        console.log("Delete", placeId)
        axios.delete(`http://localhost:5000/api/place/${placeId}`) ///${props.user._id}
            .then(data => {
                console.log("delete data ", data)
                alert("Deleted successfully")

            })
            .catch((err) => console.log(err));
        setFlag(pre => !pre)
    }


    const allplaces = places.map(place => {
        return (

            <MDBCol className='' md="4" style={{ maxWidth: "40rem" }}>
                <MDBCard reverse className="cardPadding">
                    <MDBCardImage cascade style={{ height: '20rem', width: "100%" }} src={place.image} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>{place.name}</MDBCardTitle>
                        <Link to={`/edit/${place._id}`}>
                        <MDBBtn style={{ fontSize: "15px", fontWeight: "bold", color: "black" }} gradient="deep-blue">
                            <MDBIcon icon="edit" className="iconsStyle " />
                            Edit
                        </MDBBtn>
                        </Link>
                        <MDBBtn onClick={() => handleDelete(place._id)} style={{ fontSize: "15px", fontWeight: "bold", color: "black" }} gradient="deep-blue">
                            <MDBIcon icon="trash-alt" className="iconsStyle " /> Delete
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        )
    })





    return (
        <>
            <MDBContainer>
                {props.user.email === "admin@admin.com" ? <>
                    <h2 className="headerStyleAdmin">
                        <MDBIcon icon="user-secret" className="iconsStyle mb-3" />
                            Admin Profile
                    </h2>

                    <MDBRow className="styleProfile">
                        <NavLink to="/create" activeClassName="activeClass" style={{ fontSize: "40px" }} style={{ color: "#a9dceb" }} className="createHover">
                            <MDBIcon far icon="plus-square" className="iconsStyle fixPadding iconsCreateStyle" />
                            <span className="iconsCreateStyle">Create</span>
                        </NavLink>
                    </MDBRow>
                    <MDBRow>
                        {allplaces}
                    </MDBRow>
                </> : <>
                        <h2 className="headerStyleAdmin">
                            <MDBIcon icon="user-circle" className="iconsStyle mb-3" />
                            User Profile : {props.auth.currentUser.name}
                        </h2>
                        <MDBRow className="styleProfile stylePaddingUser">
                            <NavLink to="/tables" activeClassName="activeClass" style={{ fontSize: "40px" }} style={{ color: "#a9dceb" }} className="createHover styleBorder">
                                <MDBIcon fab icon="gratipay" className="iconsStyle fixPadding iconsCreateStyle" />
                                <span className="iconsCreateStyle styleText">Favorite Place</span>
                            </NavLink>
                            <NavLink to={`/edituserinfo/${props.user._id}`} activeClassName="activeClass" style={{ fontSize: "40px" }} style={{ color: "#a9dceb" }} className="createHover">
                                <MDBIcon icon="user-edit" className="iconsStyle fixPadding iconsCreateStyle" />
                                <span className="iconsCreateStyle">Edit User Information</span>
                            </NavLink>
                        </MDBRow>
                    </>}
            </MDBContainer>
        </>
    );
}
export default Profile;