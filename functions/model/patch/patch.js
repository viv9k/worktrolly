/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
// eslint-disable-next-line no-dupe-else-if


const { functions, cors } = require("../application/lib");
const { patch1 } = require("./patch1");
const { patch2 } = require("./patch2");
const { patch3 } = require("./patch3");

exports.patch = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const mode = request.body.data.mode;

        if (mode == "patch1") {
            // To fix counters of all sprints
            return patch1(request, response);
        } else if (mode == "patch2") {
            // To add a new field and value to all tasks
            return patch2(request, response);
        } else if (mode == "patch3") {
            // To change a particular field in relevent tasks
            return patch3(request, response);
        }
    });
});