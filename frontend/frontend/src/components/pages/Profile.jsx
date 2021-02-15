import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink, Link } from 'react-router-dom';
import Create from "../action/Create"


const Profile = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <MDBListGroup className="list-group-flush">
                <NavLink to="/create" activeClassName="activeClass">
                    <MDBListGroupItem>
                        Create
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/edit" activeClassName="activeClass">
                    <MDBListGroupItem>
                        Edit
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}
export default Profile;