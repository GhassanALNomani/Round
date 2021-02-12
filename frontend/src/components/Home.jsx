import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow } from "mdbreact";



export default function Home() {

    const [places , setPlaces] = useState([])
    const [types , setTypes] = useState([])
    const [selectPlaces , setSelectPlace] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/place")
        .then(res =>{     
            setPlaces(res.data)
            setSelectPlace(res.data) 
            let types = res.data.map(ele => ele.type ) 
            types.unshift('All') 
            setTypes(Array.from(new Set(types))) 
        })
    }, [])

    const  allplaces = selectPlaces.map(place =>{
        
       // return <Show place= {place} setSelectPlace= {props.setSelectPlace} />
      }) 


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
    return (
        <div>
<h1 className='mt-5  d-flex justify-content-center align-items-center'>Welcome</h1>
<MDBDropdown 
style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
className='mt-5  d-flex justify-content-center align-items-center'
>
      <MDBDropdownToggle caret color="primary" className="mt-5" >
        Where 2 Go 
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem header>Jeddah Places</MDBDropdownItem>
        <MDBDropdownItem onChange ={onChangeHandler}> {allSelect}</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
            
    <MDBRow>
    {allplaces}
        </MDBRow>

        </div>
    )
}
