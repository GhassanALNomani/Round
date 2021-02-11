import React, { useEffect, useState } from 'react'
import Axios from 'axios'



export default function home() {

    const [places , setPlace] = useState([])
    const [selectPlaces , setSelectPlaces] = useState([])




    useEffect(() => {
        Axios
        .get('', places)
        .then(res =>{     
            setPlace(res.data);
             setSelectPlace(res.data)
         
        })
    }, [])

    const allplaces = selectPlaces.map(place =>{

        return <PlaceCard place= {place} />
      }) 






    return (
        <div>
              
              
                <br />

                <div className="placeContainer">

                {allplaces}

                </div>

            </div>

       
    )
}
