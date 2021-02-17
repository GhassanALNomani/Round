import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBListGroupItem, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer, MDBListGroup } from 'mdbreact';
import axios from "axios";
export default function OneItemList(props) {
    // const [place, setPlaces] = useState([]) // you won't need the whole array of places when you get one place, and set the state "selectPlace" with its data
    // const [place, setPlace] = useState(selectPlace);
    // const [userTovisit, setUserTovisit]=useState()
    return (
        <div>
            <br/>
            <MDBContainer>
                <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem><table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">category</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{props.onePlace.name}</td>
                                <td>{props.onePlace.category}</td>
                                <td><MDBIcon far icon="trash-alt" onClick={() => props.deleteplace(props.onePlace._id)} /> </td>
                            </tr>
                        </tbody>
                    </table>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBContainer>
        </div>
    )
    }
    
