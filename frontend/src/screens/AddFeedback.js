import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddFeedback() {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [About, setAbout] = useState('');
  const [Description, setDescription] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newFeedback = {
      name,
      Email,
      Phone,
      About,
      Description,
    };

    axios
      .post('http://localhost:5000/Feedback/add/save', newFeedback)
      .then(() => {
        alert('Feedback is submited.');
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
          <h1 class="heading-section">Feedback Form</h1>
        </div>
      </div>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label for="name">
            <b>Customer Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            pattern="[a-z A-Z.]+"
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
            placeholder="Enter email"
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
            placeholder="Enter Phone"
            pattern="[0-9]{10}"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="About">
            <b>Feedback About</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="About"
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="Description">
            <b>Description</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            placeholder="your ideas"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div class="form-submit">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/" className="btn btn-success">
            View my all Feedbacks
          </Link>
        </div>
      </form>
    </div>
    //</div>
  );
}

export default AddFeedback;
