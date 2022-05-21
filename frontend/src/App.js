import React from 'react';
import './App.css';
import AddFeedback from './screens/AddFeedback';
import AllFeedback from './screens/AllFeedback';
import UpdateFeedback from './screens/UpdateFeedback';
import AdminViewFeedback from './screens/AdminViewFeedback';
import AdminUpdateDelete from './screens/AdminUpdateDeleteFeedback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/adminupdate/:id" exact component={AdminUpdateDelete} />
          <Route path="/admin" exact component={AdminViewFeedback} />
          <Route path="/add" exact component={AddFeedback} />
          <Route path="/update/:id" exact component={UpdateFeedback} />
          <Route path="/" exact component={AllFeedback} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
