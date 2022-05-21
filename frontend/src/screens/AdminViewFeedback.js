import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/AddStaff.css';
import { Heading } from './HeadingAdmin';
import { Link } from 'react-router-dom';
import './Background.css';
import { Button } from 'reactstrap';

function AdminViewFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  //delete member by ID
  const deletemember = (id) => {
    axios
      .delete(`http://localhost:5000/Feedback/delete/${id}`)
      .then((res) => alert(res.data));
    setFeedbacks(feedbacks.filter((elem) => elem._id !== id));
  };

  useEffect(() => {
    function getFeedbacks() {
      axios
        .get('http://localhost:5000/Feedback/')
        .then((res) => {
          console.log(res);
          setFeedbacks(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getFeedbacks();
  }, [setFeedbacks]);

  console.log('check', setFeedbacks);

  return (
    //<div className="backgroundImage">
    <>
      <>
        <>
          <Heading />
        </>
      </>

      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedbacks) => (
                <tr>
                  <td>{feedbacks.name}</td>
                  <td>{feedbacks.About}</td>
                  <td>{feedbacks.Description}</td>
                  <td>
                    <Link
                      color="warning"
                      className="btn btn-warning mr-1"
                      to={`update/${feedbacks._id}`}
                    >
                      {' '}
                      <i className="fas fa-edit"></i>&nbsp;View
                    </Link>
                    &nbsp;&nbsp;
                    <Button
                      onClick={() => deletemember(feedbacks._id)}
                      color="danger"
                    >
                      {' '}
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </Button>
                    &nbsp;&nbsp;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    //</div>
  );
}
export default AdminViewFeedback;
