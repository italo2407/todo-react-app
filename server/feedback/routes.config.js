const FeedbacksController = require('./controllers/feedbacks.controller');

exports.routesConfig = function (app) {
    // Create a new Feedback
    app.post('/feedbacks', FeedbacksController.create);

    // Retrieve all Feedbacks
    app.get('/feedbacks', FeedbacksController.findAll);

    // Update a Feedback with feedbackId
    app.put('/feedbacks/:feedbackId', FeedbacksController.update);

    // Delete a Feedback with feedbackId
    app.delete('/feedbacks/:feedbackId', FeedbacksController.delete);
};