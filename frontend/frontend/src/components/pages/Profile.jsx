import React ,{ useEffect, useState }from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { NavLink, Link } from 'react-router-dom';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow } from "mdbreact";

import axios from 'axios'

const Profile = (props) => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/place`)
            .then(res => {
                setPlaces(res.data.result)
                console.log("place info:", places)
                
            })
    }, [])

    const handleDelete = (placeId) => {
        console.log("Delete", placeId)
        axios.delete(`http://localhost:5000/api/place/${placeId}`) ///${props.user._id}
          .then(data => {
            console.log("delete data ", data)
          })
          .catch((err) => console.log(err));
      }


    const allplaces = places.map(place => {
        return (
            
            <MDBCol className='' md="4" style={{ maxWidth: "40rem" }}>
                <MDBCard reverse>
                    <MDBCardImage cascade style={{ height: '20rem' }} src={place.image} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>{place.name}</MDBCardTitle>
                        <Link to={`/edit/${place._id}`}>
                        <MDBBtn>
                            Edit
                        </MDBBtn>
                        </Link>
                        <MDBBtn onClick={() => handleDelete(place._id)}>
                            Delete
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            
        )
    })














    return (
        <div className="sidebar-fixed position-fixed">
            <MDBListGroup className="list-group-flush">
                {props.user.email === "admin@admin.com" ? <>
                <NavLink to="/create" activeClassName="activeClass">
                    <MDBListGroupItem>
                        Create
                    </MDBListGroupItem>
                </NavLink>
                <MDBRow className="placesCard">
                    {allplaces}
                </MDBRow>
                </> : <>

                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        Favorite Place
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to={`/edituserinfo/${props.user._id}`} activeClassName="activeClass">
                    <MDBListGroupItem>
                        Edit User Information
                    </MDBListGroupItem>
                </NavLink>
                </> }
            </MDBListGroup>
        </div>
    );
}
export default Profile;