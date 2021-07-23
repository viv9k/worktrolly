/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const admin = require("firebase-admin");
const firestore = admin.firestore();

const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

exports.db = firestore;
exports.functions = functions;
exports.cors = cors;

exports.generateBase64String = function(temp) {
    return Buffer.from(temp).toString("base64");
};

exports.setApplication = function() {
    const P1 = firestore.collection("RawData").doc("AppDetails").set({
        CurrentSprintId: 0,
        TotalDevelopmentTask: 0,
        TotalBusinessTask: 0,
        TotalMarketingTask: 0,
        TotalOtherTask: 0,
        TotalNumberOfTask: 0,
        TotalCompletedTask: 0,
        TotalUnCompletedTask: 0,
        TotalNumberOfOrganizations: 0,
    });
    return Promise.resolve(P1);
};

exports.updateApplication = function(inputJson) {
    const P1 = firestore.collection("RawData").doc("AppDetails").update(inputJson);
    return Promise.resolve(P1);
};

exports.getApplicationData = function() {
    const promise = firestore.collection("RawData").doc("AppDetails").get().then((doc) => {
        if (doc.exists) {
            return doc.data();
        } else {
            return;
        }
    });
    return Promise.resolve(promise);
};

exports.createSprintName = function(sprintId) {
    if (sprintId == -1) {
        return "Backlog";
    } else if (sprintId == -2) {
        return "Deleted";
    } else {
        return ("S" + sprintId.toString());
    }
};