const router = require("express").Router();
const {  createResult, getAllResults, getResult } = require("../controllers/resultController");

router.route("/result")
    .post(createResult)
    .get(getAllResults);
router.route("/result/:id")
    .get(getResult)

module.exports = router;
