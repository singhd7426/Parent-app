const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.updateLocation = functions.https.onRequest((request, response) => {
    const location = request.body.location;
    // Logic to update location in database
    response.send({ status: 'Location updated', location });
});

exports.getChildren = functions.https.onRequest((request, response) => {
    // Logic to get children information from database
    response.send({ status: 'Fetched children' });
});