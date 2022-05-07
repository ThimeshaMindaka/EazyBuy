import './Profile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link , useNavigate , useLocation} from "react-router-dom"
import  Axios  from 'axios';

function Profile() {

    const [userData, setUserData] = useState(null);
    let navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        setUserData(userData)
        console.log("uD" , userData);
    }, [])


    const deleteUser = async () => {
        try {
            const { data } = await Axios.delete(`/api/users/delete/${userData._id}`, {
                headers: {
                  "Authorization": "Bearer " + userData.token
                }
              });
            navigate('/login');
            console.log(data);
        } catch (error) {
            alert('Invalid Email or Password');
        }
    }


    return (
        <div className="container">
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Maxwell Admin" />
                                    </div>
                                    <h5 className="user-name">Email</h5>
                                    <h6 className="user-name">{userData?.Email}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-2 text-primary">Your Login Information</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="fullName">Username</label>
                                        <input type="text" disabled value={userData?.UserName} className="form-control" id="fullName" placeholder="Enter full name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="eMail">Email</label>
                                        <input type="email" disabled className="form-control" id="eMail" placeholder="Enter email ID" value={userData?.Email} />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginTop:'5%' , marginBottom:'10%'}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-2 text-primary">Your Personal Information</h6>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="fullName">First Name</label>
                                        <input type="text" disabled value={userData?.FirstName} className="form-control" id="fullName" placeholder="Enter full name" />
                                    </div>
                                </div>
                               
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="eMail">Last Name</label>
                                        <input type="email" disabled className="form-control" id="eMail" placeholder="Enter email ID" value={userData?.LastName} />
                                    </div>
                                </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="Street">Address</label>
                                        <input type="name" disabled className="form-control" id="Street" placeholder="Enter Street" value={userData?.ContactNumber} />
                                    </div>
                                </div>


                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        <button class='btn btn-success' type="button" id="submit" name="submit" onClick={() => navigate('/profile-update')} >Update</button>
                                        <button class="btn btn-danger" type="button" id="submit" name="submit" onClick={() => deleteUser()} >Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile