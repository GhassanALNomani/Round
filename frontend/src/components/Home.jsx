
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon , MDBRow, MDBCol, MDBAlert, MDBContainer } from 'mdbreact';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import NavBar from './NavBar';


export default function Home(props) {

    const [places , setPlaces] = useState([])
    const [category , setCategory] = useState([])
    const [selectPlaces , setSelectPlace] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/place")
        .then(res =>{     
            setPlaces(res.data.result)
            console.log("Places info:", places)
            setSelectPlace(res.data) 
          
        })
    }, []) 

     console.log("place" , selectPlaces)
    const  allplaces = places.map(place =>{

        return (
            <MDBCol style={{ maxWidth: "40rem" }}>
            <MDBCard reverse>
                <MDBCardImage cascade style={{ height: '20rem' }} src={place.image} />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>{place.name}</MDBCardTitle>
                    <a href='#!' className='black-text d-flex justify-content-end'>
                        <h5>
                            Read more
                            <MDBIcon icon='angle-double-right' className='ml-2' />
                        </h5>
                    </a>
                </MDBCardBody>
            </MDBCard>
    </MDBCol>
      
            
        )
        
    })  
      

 let allSelect = category.map(ele => <option value={ele}>{ele}</option>)

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

