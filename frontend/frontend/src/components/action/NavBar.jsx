
import "../../App.css"
import React, { useEffect, useState } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router-dom';
export default function NavBar(props) {
    const bgPink = { backgroundColor: '#a9dceb' }
    const history = useHistory();


    const logOut = () => {
        console.log("Logging Out!");
        localStorage.removeItem("jwtToken");
        props.loginCallback();
        history.push('/');
    }




    return (
        <div>
            <header>
                <MDBNavbar style={"#a9dceb"} dark expand="md"  >
                    {/*                 scrolling fixed="top"
 */}                    <MDBNavbarBrand href="/">
                        <strong></strong>
                    </MDBNavbarBrand>
                    <MDBNavbarNav left style={{ fontSize: "25px" }}>
                        <MDBNavItem active>
                            <MDBNavLink to="/" style={{ color: "black" }}><MDBIcon icon="home" /> βπ ππ</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/aboutus" style={{ color: "black" }}> <MDBIcon icon="info" /> πΈππ π¦π₯ π¦π€</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    {!props.isLoggedIn ? <>

                        <MDBNavbarNav right style={{ fontSize: "25px" }}>
                            <MDBNavItem>
                                <MDBNavLink to="/signup" style={{ color: "black" }}><MDBIcon icon="user-plus" /> πππππ¦π‘ </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/login" style={{ color: "black" }}> <MDBIcon icon="sign-in-alt" /> ππ πππ </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </> : <>
                            <MDBNavbarNav right style={{ fontSize: "25px" }}>
                                <MDBNavItem>
                                    <MDBNavLink to="/profile" style={{ color: "black" }}><MDBIcon far icon="user" /> βπ£π ππππ </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem onClick={() => logOut()}>
                                    <MDBNavLink to="/logout" style={{ color: "black" }}> <MDBIcon icon="sign-out-alt" /> ππ ππ π¦π₯ </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </>}


                </MDBNavbar>

            </header>

        </div>

    )
}
