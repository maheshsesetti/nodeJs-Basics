const express = require('express');


const router = express.Router();

router.get('/add-employee',(req,res,next) => {
res.send('<form action="/employees" method="POST" ><input type="text" name="title"><button type="submit">Add Employees</button></form>');
});

router.post('/employees',(req,res,next) => {
    console.log(req.body);
    res.send({"message":"Done"});
    res.redirect('/');
});

module.exports = router;