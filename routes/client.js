const express = require('express');

const router = express.Router();

router.get('/get-employee',(req, res, next) => {
    console.log("Hello ");
    res.send({"data":{"id":1,"name": "Mahesh"}});
});

module.exports = router;