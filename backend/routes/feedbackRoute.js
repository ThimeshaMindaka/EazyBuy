const express = require('express');
const Feedback = require('../modules/Feedback');

const router = express.Router();

//create Feedback
router.post('/add/save', (req, res) => {
  let newFeedback = new Feedback(req.body);

  newFeedback.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: 'Feedback sent successfully',
    });
  });
});

//get Feedbacks
router.get('/get', (req, res) => {
  Feedback.find().exec((err, Feedback) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingFeedbacks: Feedback,
    });
  });
});

//update Feedback
router.put('/update/:id', (req, res) => {
  Feedback.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, Feedback) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: 'Feedback updated successfully',
      });
    }
  );
});

//delete Feedback
router.delete('/delete/:id', (req, res) => {
  Feedback.findByIdAndRemove(req.params.id).exec((err, deletedFeedback) => {
    if (err)
      return res.status(400).json({
        message: 'delete Feedback unsuccesfull',
        err,
      });

    return res.json({
      message: 'delete Feedback succesfull',
      deletedFeedback,
    });
  });
});

//get a specific Feedback
router.get('/get/:id', (req, res) => {
  let FeedbackID = req.params.id;
  Feedback.findById(FeedbackID, (err, Feedback) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      Feedback,
    });
  });
});

module.exports = router;
