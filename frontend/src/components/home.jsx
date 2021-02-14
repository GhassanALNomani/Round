import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow } from "mdbreact";

export default function Home() {
    const [places , setPlaces] = useState([])
    const [types , setTypes] = useState([])
    const [selectPlaces , setSelectPlace] = useState([])
    
    let allSelect = types.map(ele => <option value={ele}>{ele}</option>)
    //function to filtet the place by the type 
    const onChangeHandler = (e) =>{
        let value = e.target.value
        if (value == "All") { 
            setSelectPlace(places)
        }else {
            setSelectPlace(places.filter(place => place.type == value))
        }
    }

    //get all information
    useEffect(() => {
        axios.get(`http://localhost:5000/api/place`)
          .then(res => {
            setPlaces(res.data.pros)
            console.log("place info", places)
          })
    }, [])



    return (
        <div>
        <h1 className='mt-5  d-flex justify-content-center align-items-center'>Welcome</h1>
        <MDBDropdown 
        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
        className='mt-5  d-flex justify-content-center align-items-center'
        >
        <MDBDropdownToggle caret color="primary" className="mt-5" >
            Where -2 -Go 
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
            <MDBDropdownItem header>Jeddah Places</MDBDropdownItem>
            <MDBDropdownItem onChange ={onChangeHandler}> {allSelect}</MDBDropdownItem>
            
        </MDBDropdownMenu>
        </MDBDropdown>
            
        <MDBRow>
        {/* {allplaces} */}
        </MDBRow>
        </div>
    )
}
