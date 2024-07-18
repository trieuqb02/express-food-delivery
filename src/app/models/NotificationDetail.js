const mongoose = require("mongoose");

const NotificationDetaillScheme = mongoose.Schema({
    notification: { type: mongoose.Schema.Types.ObjectId, ref: 'orders' },
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'accounts' },
    status: Boolean
});

module.exports = mongoose.model("notification_details", NotificationDetaillScheme);