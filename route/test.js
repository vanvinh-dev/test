var express = require('express');
var router = express.Router();

router.get('/maintes', (req, res) => {
    res.render('test')

})
module.exports = router;