import React, { useState, useEffect } from "react";
import { useHistory, Link, BrowserRouter, useParams } from "react-router-dom";
import { MDBCard, MDBRow, MDBCardImage, MDBCardText, MDBIcon, MDBCardTitle, MDBCol, MDBLightbox, MDBBtn, MDBAlert, MDBCardBody, MDBSpinner } from 'mdbreact';
import Profile from "../pages/Profile"
import API_URL from "../../apiConfig";
import axios from "axios";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//  import API_URL from '../apiConfig.js'
const validtionSchima = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string(),
    confirmPassword: Yup.string().test('passwords-match', 'Passwords must match ', function (value) {
        return this.parent.password === value;
    }),
    img: Yup.string().required("This Field is Required")
})
export default function EditUserInfo(props) {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState(props.user)
    const { id } = useParams()
    console.log(props)
    const user = {
        name: userInfo.name,
        email: userInfo.email,
        password: '',
        confirmPassword: "",
        img: userInfo.img
    }
    console.log('User const ==>', user)
    // to add the user info to database
    const onSubmit = (values) => {
        // let userId = props.userProfile._id
        axios
            .post(`${API_URL}/api/user/edituserinfo/${id}`, values)
            .then((res) => {
                console.log("res.data.user from profile update: ", res.data.user)
                props.setUserProfile(values)
                let userdetails = {
                    name: values.name,
                    email: values.email
                }
                setUserInfo(userdetails)
            })
            .catch((err) => console.log(err));
    };
    // const uploadImagefunc = (e) => {
    //     var formdata = new FormData();
    //     formdata.append("image", e.target.files[0]);
    //     axios.post("https://api.imgur.com/3/image", formdata, { headers: { "Authorization": "Client-ID 218eb66b0d739ed" } })
    //         .then(result => console.log(result.data.data.link))
    //         .catch(error => console.log('error', error));
    // }
    // console.log(image)
    return (
        <>
            {userInfo.name && userInfo.email == "admin@admin.com" ?
                <Link to={`/create`}>
                    ℂℝ𝔼𝔸𝕋𝔼
                    </Link>
                : <Formik
                    initialValues={userInfo}
                    // validationSchema={validtionSchima}
                    onSubmit={(values) => onSubmit(values)}
                >
                    <FormikForm className="mt-5" style={{ color: "black" }}
                    >
                        <MDBRow>
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <MDBCard testimonial>
                                    <MDBCardBody>
                                        <MDBCardTitle>  <h4 className="font-weight-bold mb-4">{userInfo.name ? userInfo.name : userInfo.name}</h4></MDBCardTitle>
                                        {/* <MDBCardTitle>  <h4 className="font-weight-bold mb-4">{userInfo.name}</h4></MDBCardTitle> */}
                                        <hr />
                                        <MDBCardText>  <p className="dark-grey-text mt-4">
                                            <MDBIcon icon="quote-left" className="pr-2" />
                                            {userInfo.name ? userInfo.email : userInfo.email}
                                            {/* {userInfo.email} */}
                                        </p></MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput"> Change Name : </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                    />
                                    <ErrorMessage name="name" render={(msg) => <MDBAlert color="danger" >
                                        {msg}
                                    </MDBAlert>} />
                                    <label htmlFor="formGroupExampleInput">Change Email : </label>
                                    <Field
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                    />
                                    <ErrorMessage name="email" render={(msg) => <MDBAlert color="danger" >
                                        {msg}
                                    </MDBAlert>} />
                                    <label htmlFor="formGroupExampleInput"> Change password : </label>
                                    <Field
                                        type="Password"
                                        name="password"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                    />
                                    <MDBBtn type="submit" style={{ margin: '20px 0px 20px 140px', color: "black" }} gradient="deep-blue">
                                        Save
                                        </MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </FormikForm>
                </Formik>
                //  <div className="spinner-border" role="status">
                //     <span className="sr-only">Loading...</span>
                // </div> 
            }
        </>
    );
}