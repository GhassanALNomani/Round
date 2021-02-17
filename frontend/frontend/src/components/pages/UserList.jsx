import { useState, useEffect } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBRow, MDBAlert, MDBNavbarNav, MDBNavbarToggler, MDBListGroupItem, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer, MDBListGroup } from 'mdbreact';
import axios from "axios";
import { useParams } from "react-router-dom"
import OneItemList from '../pages/OneItemList'
export default function (props) {
  const [placesToVisit, setPlacesToVisit] = useState([]);
  const [userId, setUserId] = useState(props.auth.currentUser._id);
  const [change, setChange] = useState(false);



  useEffect(() => axios.get(`http://localhost:5000/api/tovisit/${userId}`)
    .then(data => {
      console.log("data.data.placesToVisit ----", data.data.placesToVisit)
      setPlacesToVisit(data.data.placesToVisit)
    })
    , [])

  const deleteplace = (plaicId) => {
    axios.delete(`http://localhost:5000/api/tovisit/${userId}/${plaicId}`)
      .then((res) => console.log(res))
      setChange(true)
      setPlacesToVisit(placesToVisit.filter(ele => ele._id != plaicId)
    )
  }

 

  return (
    <>
    {change && <MDBAlert color="danger" dismiss>deleted</MDBAlert>}  
    {placesToVisit.length > 0 ? (<div className='padding'>
        <MDBRow className="justify-content-md-center">
          {placesToVisit.map((onePlace, i) => {
            return (
              <OneItemList onePlace={onePlace} delete={true} deleteplace={() => deleteplace(onePlace._id)} />
            )
          })}
        </MDBRow>
      </div>) : <MDBAlert color="danger" dismiss>nothing here</MDBAlert>}

    </>
  )
}
