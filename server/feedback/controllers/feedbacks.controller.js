const Feedback = require('../models/feedbacks.model.js');

// Create and Save a new Feedback
exports.create = (req, res) => {
    // Validate request
    if(!req.body.description) {
        return res.status(400).send({
            message: "Feedback content can not be empty"
        });
    }

    // Create a Feedback
    const feedback = new Feedback({
        description: req.body.description, 
    });

    // Save Feedback in the database
    feedback.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Feedback."
        });
    });
};

// Retrieve and return all feedbacks from the database.
exports.findAll = (req, res) => {
    Feedback.find()
    .then(feedbacks => {
        res.send(feedbacks);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving feedbacks."
        });
    });
};

// Update a feedback identified by the feedbackId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Feedback content can not be empty"
        });
    }

    // Find feedback and update it with the request body
    Feedback.findByIdAndUpdate(req.params.feedbackId, {
        description: req.body.description,
        status: req.body.status
    }, {new: true})
    .then(feedback => {
        if(!feedback) {
            return res.status(404).send({
                message: "Feedback not found with id " + req.params.feedbackId
            });
        }
        res.send(feedback);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Feedback not found with id " + req.params.feedbackId
            });                
        }
        return res.status(500).send({
            message: "Error updating feedback with id " + req.params.feedbackId
        });
    });
};

// Delete a feedback with the specified feedbackId in the request
exports.delete = (req, res) => {
    Feedback.findByIdAndRemove(req.params.feedbackId)
    .then(feedback => {
        if(!feedback) {
            return res.status(404).send({
                message: "Feedback not found with id " + req.params.feedbackId
            });
        }
        res.send({message: "Feedback deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Feedback not found with id " + req.params.feedbackId
            });                
        }
        return res.status(500).send({
            message: "Could not delete feedback with id " + req.params.feedbackId
        });
    });
};