import React, { useEffect, useState } from 'react'
import {Link, BrowserRouter } from "react-router-dom";
import Axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon, MDBRow, MDBCol, MDBAlert, MDBContainer, MDBBtn } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import ShowOnePlace from './ShowOnePlace';

export default function Home(props) {

    const [places, setPlaces] = useState([])
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [filterPlaces, setFilterPlaces] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/place")
            .then(res => {
                setPlaces(res.data.result)
                setFilterPlaces(res.data.result)
                console.log("Places info:", places)          
                let categories = res.data.result.map(place => place.category)
                categories.unshift('All Places')
                setCategory(Array.from(new Set(categories)))
            })
    }, [])


    const filteredPlaces = filterPlaces.map(place => {

        return (
            <Link to={`/show/${place._id}`}>
            <MDBCol className='placeItem' md="4" style={{ maxWidth: "20rem" }}>
                <MDBCard reverse>
                    <MDBCardImage className="cardPhoto" cascade style={{ height: '20rem', width: "100%" }} src={place.image} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>{place.name}</MDBCardTitle>
                            <p>
                                Read more
                            <MDBIcon icon='angle-double-right' className='ml-2' />
                            </p>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </Link>
        )
    })


    //function to filter the place by the type 
    const onChangeHandler = (e) => {
        console.log("onChangeHandler")
        let value = e

        console.log(value)
        setSelectedCategory(value)
        if (value == 'All Places') {
            setFilterPlaces(places)
        } else {
            let filter = places.filter(place => place.category == value)
            setFilterPlaces(filter)
        }
    }

    let allSelect = category.map(ele => <MDBDropdownItem onClick={() => onChangeHandler(ele)}>{ele}</MDBDropdownItem>)




    return (
        <div className="home">
            <br />
            <br />
            <h1 className='dark-text mt-3  d-flex justify-content-center align-items-center '>ℝ𝕆𝕌ℕ𝔻</h1>
            <MDBDropdown
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='mt-5  d-flex justify-content-center align-items-center '
            >
                <MDBDropdownToggle caret className="mt-3" gradient="deep-blue"  style={{color: "black"}}>
                    Where - 2 - Go
         </MDBDropdownToggle>
                <MDBDropdownMenu basic  >
                    <MDBDropdownItem header > Jeddah Places</MDBDropdownItem>
                    {allSelect}
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBRow className="placesContainer" style={{margin: "0 auto"}}>
                {filteredPlaces}
            </MDBRow>
        </div>
    )
}
