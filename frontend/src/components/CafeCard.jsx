import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon , MDBRow, MDBCol, MDBAlert, MDBContainer } from 'mdbreact';

export default function CafeCard(props) {

    let cafee = props.cafe.image
    let image = <img src={cafee} className="cafe" alt="card" />

    return (
        <div>
       <MDBContainer
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='mt-5  d-flex justify-content-center align-items-center'
            >
                <MDBRow>
                    <MDBCol style={{ maxWidth: "40rem" }}>
                        <MDBCard reverse>
                            <MDBCardImage cascade style={{ height: '20rem' }} src={image} />
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>{props.cafe.name}</MDBCardTitle>
                             
                                <a href='#!' className='black-text d-flex justify-content-end'>
                                    <h5>
                                          Read more
                                     <MDBIcon icon='angle-double-right' className='ml-2' />
                                     </h5>
                               </a>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </div>
    )
}
