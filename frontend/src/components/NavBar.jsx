import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router-dom';


export default function NavBar(props) {
    const bgPink = { backgroundColor: '' }
    const history = useHistory();

    const logOut = () => {

        console.log("Logging Out!");
        localStorage.removeItem("jwtToken");
        props.loginCallback();
        history.push('/home');

    }
    return (
        <div>
            <header>
                <MDBNavbar style={bgPink} dark expand="md"  >
{/*                 scrolling fixed="top"
 */}                    <MDBNavbarBrand href="/">
                        <strong></strong>
                    </MDBNavbarBrand>

                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/home"><MDBIcon icon="home" /> Home</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/about"> <MDBIcon icon="info" /> About us</MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>

                    <MDBNavbarNav right>

                        <MDBNavItem>
                            <MDBNavLink to="/profile"><MDBIcon far icon="user" /> Profile</MDBNavLink>
                        </MDBNavItem>

                       
                        <MDBNavItem>
                            <MDBNavLink to="/logout"> <MDBIcon icon="sign-out-alt" />Logout</MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>

                    {/*        {props.auth.isLoggedIn && props.auth.currentUser.userType == "admin" ?

                        <MDBNavbarNav right>

                            <MDBNavItem>
                                <MDBNavLink to="/profile"><MDBIcon far icon="user" /> Profile</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="/create"> <MDBIcon icon="plus-circle" /> Create</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="/logout"> <MDBIcon icon="sign-out-alt" />Logout</MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>


                        :

                        props.auth.isLoggedIn ?
                            <MDBNavbarNav right>

                                <MDBNavItem>
                                    <MDBNavLink to="/profile"><MDBIcon far icon="user" /> Profile</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem onClick={() => logOut()}>
                                    <MDBNavLink to="/logout" > <MDBIcon icon="sign-out-alt" />Logout</MDBNavLink>
                                </MDBNavItem>

                            </MDBNavbarNav>

                            :

                            <MDBNavbarNav right>

                                <MDBNavItem>
                                    <MDBNavLink to="/signup"><MDBIcon icon="user-plus" /> Signup</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/login"> <MDBIcon icon="sign-in-alt" />Login</MDBNavLink>
                                </MDBNavItem>

                            </MDBNavbarNav>
                    } */}
                </MDBNavbar>
            </header>
        </div>
    )
}
