import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBListGroupItem, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer, MDBListGroup } from 'mdbreact';
export default function OneItemList() {
        const [selectPlace, setSelectPlace] = useState(props.selectPlace)
        const [place, setPlace] = useState(selectPlace);
        return (
            <div>
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
                                    <td>{place.name}</td>
                                    <td>{place.category}</td>
                                    <td><MDBIcon far icon="trash-alt" onClick={deletePlace} /> </td>
                                </tr>
                            </tbody>
                        </table></MDBListGroupItem>
                    </MDBListGroup>
                </MDBContainer>
            </div>
        )
    }
Collapse