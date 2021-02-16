import {useState, useEffect} from 'react'
import { MDBNavbar, MDBNavbarBrand,MDBRow, MDBNavbarNav, MDBNavbarToggler, MDBListGroupItem, MDBNavItem, MDBNavLink, MDBIcon,MDBContainer,MDBListGroup } from 'mdbreact';
import axios from "axios";




export default function UserList(props) {
  const [placesToVisit, setPlacesToVisit] = useState([]) // Contains all fave books form user
  const { _id } = props.auth.currentUser;
  const getplace = async () => {
    let getUser = await axios.get(`http://localhost:5000/api/users/profile/${props.auth.currentUser._id}`)
    console.log('get profile', getUser)
    axios.get(`http://localhost:5000/api/place/`)
      .then(res => {
        console.log(">>>>>>> props.user.placesToVisit: ", getUser.data.user.placesToVisit)
        const tovisit = res.data.filter(book => getUser.data.user.placesToVisit.includes(book._id));
        setPlacesToVisit(tovisit)
      })
  }
  useEffect(
    getplace
    , [])
     const deletePlace = (placeId) => {
        console.log("myyyyyyyyyy")
        let userId = _id
         axios.delete(`http://localhost:5000/api/place/${placeId}/${userId}`)
           .then(data => {
             const userData = localStorage.getItem("userData");
             // 1. update (userData), add fav, delete or whatever then 2. do the setItem
             // localStorage.setItem("userData", userData)
            const user = JSON.parse(userData);
            localStorage[_id] = JSON.stringify(data.data.placesToVisit)
            console.log(localStorage[_id])
            console.log('deleted book', data.data.placesToVisit)
            // setChangeuseEffect(!changeuseEffect)
            setPlacesToVisit(placesToVisit.filter(place =>{
              return place._id != placeId
            }))
          })
       }
       let MyPlace = placesToVisit.map((onePlace, i) => {
        return (
          <OneItemList onePlace={onePlace} deletePlace={deletePlace} delete={true} />
        )
      });
      return (
        <>
              
              <div className='padding'>
    
                    <MDBRow className="justify-content-md-center">  
                    
                        {MyPlace}
                    </MDBRow>
              </div>
        </>
      )
      }
