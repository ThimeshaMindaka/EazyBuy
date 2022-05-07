import './ProfileUpdate.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom"



function ProfileUpdate() {

    const [userData, setUserData] = useState(null);
    const [UserName, setUserName] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Password, setPassword] = useState('');
    let navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        setUserName(userData.UserName)
        setFirstName(userData.FirstName)
        setLastName(userData.LastName)
        setEmail(userData.Email)
        setContactNumber(userData.ContactNumber)
        setUserData(userData)
        setPassword(userData.Password)
        setConfirmPassword(userData.Password)
        console.log("uD", userData);
    }, [])

    const onClickEdit = async () => {
        try {
            const { data } = await Axios.put(`/api/users/update/${userData._id}`, {
                UserName,
                FirstName,
                LastName,
                Email,
                ContactNumber,
                Password,
            } , {
                headers: {
                  "Authorization": "Bearer " + userData.token
                }
              });
              localStorage.setItem('userInfo' ,JSON.stringify(data) )
            navigate('/profile')
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
                                    <h5 className="user-name">email</h5>
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
                                    <input type="text" value={userData?.UserName} className="form-control" id="fullName" placeholder="Enter full name" onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Email</label>
                                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="row gutters">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Password</label>
                                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={Password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Confirm Password</label>
                                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ marginTop: '5%', marginBottom: '10%' }}>
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
                                    <input type="text" value={FirstName} className="form-control" id="fullName" placeholder="Enter full name" onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Last Name</label>
                                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="Street">Address</label>
                                        <input type="name" className="form-control" id="Street" placeholder="Enter Street" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                                    </div>
                                </div>


                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        <button class='btn btn-success' type="button" id="submit" name="submit" onClick={() => onClickEdit()} >Save</button>
                                        <button class="btn btn-danger" type="button" id="submit" name="submit" onClick={() => navigate('/profile')} >Cancel</button>
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

export default ProfileUpdate