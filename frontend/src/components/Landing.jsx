import React from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBLink, MDBCollapse, MDBDropdown,
    MDBFooter, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

export default function Landing() {
    return (
        <div>
            <MDBNavbar color="black" dark expand="md" style={{height:'100px'}}>
            <MDBNavbarBrand>
            <strong className="white-text" ><h2>NAME</h2></strong>
            </MDBNavbarBrand>

            <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBLink to="/home">Home</MDBLink>
            </MDBNavItem>
            </MDBNavbarNav >
            <MDBNavLink to="/login" color="light">
            <MDBIcon color="light" icon="user" style={{padding:'100px'}}/>
            </MDBNavLink>



            </MDBNavbar>
            <div className="bg" />;
            <MDBFooter color="black" className="font-small pt-4 mt-4" style={{height:'10vh'}}>

</MDBFooter>
            
        </div>
        
    )
}
