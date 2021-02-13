import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow } from "mdbreact";
import NavBar from './NavBar';
import ShowPage from './ShowPage';


export default function Home(props) {

    const [places , setPlaces] = useState([])
    const [types , setTypes] = useState([])
    const [selectPlaces , setSelectPlace] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/place")
        .then(res =>{     
            setPlaces(res.data)
            setSelectPlace(res.data) 
            let types = res.data.map(ele => ele.category) 
            types.unshift('All') 
            setTypes(Array.from(new Set(types))) 
        })
    }, []) 

     const  allplaces = selectPlaces.map(place =>{

        return <ShowPage place= {place} setSelectPlace= {props.setSelectPlace} />
      })  


 let allSelect = types.map(ele => <option value={ele}>{ele}</option>)

//function to filtet the place by the type 
const onChangeHandler = (e) =>{
    let value = e.target.value

    if (value == "All") { 
        setSelectPlace(places)
    }else {
        setSelectPlace(places.filter(place => place.category == value))
    }
 
}

    return (
        
        <div className="home">
            <NavBar/>
            <br/>
            <br/>
           
<h1 className='white-text mt-3  d-flex justify-content-center align-items-center '>𝕎𝔼𝕃ℂ𝕆𝕄𝔼</h1>
<MDBDropdown 
style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
className='mt-5  d-flex justify-content-center align-items-center '
>
      <MDBDropdownToggle caret gradient="blue" className="mt-5" >
        Where - 2 -Go 
      </MDBDropdownToggle>

      <MDBDropdownMenu basic>
        <MDBDropdownItem header>Jeddah Places</MDBDropdownItem>

    <MDBDropdownItem onChange ={onChangeHandler}>{allSelect}</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
            
    <MDBRow>
       {allplaces}
       </MDBRow>

        </div>
    )
}
