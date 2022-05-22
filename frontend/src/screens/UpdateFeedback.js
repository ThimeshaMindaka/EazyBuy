import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Background.css';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
function UpdateFeedback(props) {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [About, setAbout] = useState('');
  const [Description, setDescription] = useState('');

  const UpdateFeedback = {
    name,
    Email,
    Phone,
    About,
    Description,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Feedback/get/${props.match.params.id}`)
      .then((res) => {
        setName(res.data.Feedback.name);
        setEmail(res.data.Feedback.Email);
        setPhone(res.data.Feedback.Phone);
        setAbout(res.data.Feedback.About);
        setDescription(res.data.Feedback.Description);
      })
      .catch((err) => {
        alert(err);
      });
  }, [props]);

  function updateData(e) {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/Feedback/update/${props.match.params.id}`,
        UpdateFeedback
      )
      .then(() => {
        alert('Feedback updated');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    //<div className="backgroundImage">
    <div className="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">Feedback</h2>
        </div>
      </div>

      <form onSubmit={updateData}>
        <div className="form-group">
          <label for="name">
            <b>Customer Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="name"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="Phone">
            <b>Phone</b>
          </label>
          <input
            type="phone"
            className="form-control"
            id="Phone"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="gender">
            <b>Feedback About</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="About"
            value={About}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="ID">
            <b>Description</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div class="form-submit">
          <button type="submit" className="btn btn-primary">
            Update Feedback
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
          &nbsp;&nbsp;
        </div>
      </form>
    </div>
    //</div>
  );
}

export default UpdateFeedback;
