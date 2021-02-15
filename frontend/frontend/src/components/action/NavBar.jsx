import React, {useState, useEffect} from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBFormInline, MDBCol } from 'mdbreact';
import { useHistory } from 'react-router-dom';
export default function NavBar(props) {
    const bgPink = { backgroundColor: '' }
    const history = useHistory();


    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [place, setPlace] = useState([])

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
       // console.log("target", e.target.value)
    };

        useEffect(() => {
      const results = place.filter(place =>

        place.toLowerCase().includes(searchTerm)
      );

      setSearchResults(results);
      
    }, [searchTerm]);


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
 */}                  
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/"><MDBIcon icon="home" /> Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/aboutus"> <MDBIcon icon="info" /> About us</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    {!props.isLoggedIn ? <> 
                        
                        <MDBNavbarNav right>
                        <MDBCol md="6">
                <form className="form-inline mt-2 mb-2">
                    <MDBIcon icon="search" type="submit"/>
               <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"  value={searchTerm} onChange={(e) => onChangeHandler(e)}  />
               <ul>
                  {searchResults.map(item => (
                        <li>{item}</li> ))}
                </ul>
                  </form>
                 </MDBCol>
                                <MDBNavItem>
                                    <MDBNavLink to="/signup"><MDBIcon icon="user-plus" /> Signup</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/login"> <MDBIcon icon="sign-in-alt" />Login</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                           </> : <>
                            <MDBNavbarNav right>
                            <MDBCol>
                        <form className="form-inline mt-2 mb-2">
                         <MDBIcon icon="search" />
                       <input className="form-control form-control-sm ml-3 w-60" type="text" placeholder="Search" aria-label="Search" />
                         </form>
                        </MDBCol>
                                <MDBNavItem>
                                    <MDBNavLink to="/profile"><MDBIcon far icon="user" /> Profile</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem onClick={() => logOut()}>
                                    <MDBNavLink to="/logout" > <MDBIcon icon="sign-out-alt" />Logout</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            </>}
                        
                    
                </MDBNavbar>
                
            </header>
            
        </div>
        
    )
}
