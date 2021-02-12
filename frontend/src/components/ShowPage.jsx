import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBAlert,
    MDBContainer,
    MDBInput,
    MDBIcon,
  } from "mdbreact";
  import React, { useState, useEffect } from "react";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  import ReactStars from 'react-stars';
  export default function ShowPage(props) {
    const [place, setPlaces] = useState({});
    const { id } = useParams();
    const selectPlace = props.selectPlace;
    const [errorRating, setErrorRating] = useState(false)
    const [score, setScore] = useState(5)
    const [added, setadded] = useState(true);
    const [comment, setComment] = useState({});

    const onChangeInput = ({ target: { name, value } }) => {
        setComment({ ...comment, [name]: value });
        console.log("comment", comment);
    };

    const addPlace = () => {
      console.log("placeId = ", selectPlace._id);
      console.log("userId = ", props.user._id);
      axios
        .post("http://localhost:5000/place/tovisit", {
          placeId: selectPlace._id,
          userId: props.user._id,
        })
        .then((data) => {
          props.setAuth((pre) => ({
            ...pre,
            currentUser: {
              ...pre.currentUser,
              placesToVisit: data.data.placesToVisit,
            },
          }));
          console.log(data);
        });
    };
    // git data
    useEffect(() => {
      axios.get(`http://localhost:5000/api/place/${id}`).then((res) => {
        setPlaces(res.data.pros);
        const onePlace = res.data.pros;
        console.log(onePlace)
        const total = onePlace.reviews.reduce((a, b) => a + (b["score"] || 0), 0)
        if (onePlace.reviews.length > 0) {
          setScore(total / onePlace.reviews.length)
        }
        console.log("place info", onePlace);
      });
    }, []);
    const handleRating = () => {
      if (props.isLoggedIn) {
        const body = {
          userId: props.user._id,
          score: score,
          userName: props.user.name,
          productId: id
        }
        // user id 
        // score 
        axios.post(`http://localhost:5000/api/place/review`, body)
          .then(res => {
            console.log(res)
            if (res.data == "Error! you already reviewed") {
              setErrorRating(true)
            }
          })
      } else {
        console.log("Login first");
      }
    }
    const ratingChanged = (newRating) => {
      setScore(newRating)
    }
  
    const add = () => {
      setadded(false);
      setTimeout(() => {
        setadded(true);
      }, 3000);
    };



    //handle on click send comment 
    const handleComment = (event) =>{
      event.preventDefault();
      // axios.post(`http://localhost:5000/api/comment/${place._id}`, comment)
      axios.post("http://localhost:5000/api/comment", comment)
      .then(res =>{
        console.log(res)
      })
      .catch(err => console.log(err))
    }

    

  




    return (
      <div>
        {!added && <MDBAlert color="danger">adedd to place List</MDBAlert>}
        <MDBContainer
          style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
          className="mt-5  d-flex justify-content-center align-items-center"
        >
          <MDBRow>
            <MDBCol style={{ maxWidth: "40rem" }}>
              <MDBCard reverse>
                <MDBCardImage
                  cascade
                  style={{ height: "20rem" }}
                  src={place.image}
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>{place.name}</MDBCardTitle>
                  <h5 className="indigo-text">
                    <strong>{place.category}</strong>
                  </h5>
                  <MDBCardText>{place.description}</MDBCardText>
                  <MDBBtn
                    outline
                    color="dark"
                    onClick={() => {
                      addPlace();
                      add();
                    }}
                  >
                    {" "}
                    Add To List
                  </MDBBtn>
                  {errorRating && (
                    // className="error-anim"
                    <div style={{ color: "#C70039" }}>
                      Error! already reviewed
                      <span class="gradient"></span>
                      <span class="spotlight"></span>
                    </div>
                  )}
                  <ReactStars
                    count={5}
                    value={score}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                  <MDBBtn
                    style={{ backgroundColor: "black", margin: "10px" }}
                    size="md"
                    onClick={handleRating}
                  >
                    Review
                  </MDBBtn>
                </MDBCardBody>

                {/* section comment */}
                <h2>Join the Discussion!</h2>
                <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <form>
                      <div className="grey-text">
                        <MDBInput type="textarea" rows="2" label="Your Comment" name="text" icon="pencil-alt" onChange={(e) => onChangeInput(e)}/>
                      </div>
                      <div className="text-center">
                        <MDBBtn outline color="secondary" onClick={handleComment}>
                          Comment
                          <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              </MDBCard>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
  