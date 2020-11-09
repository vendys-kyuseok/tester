var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
    res.send('Received a GET request, param: ' + req.params.id);
    console.log(req.body)
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body));

    res.json({ 
        success: true,
        user: req.body.username
    });
});

router.put('/', function(req, res) {
    res.status(400).json({ message: 'Hey, you.'});
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});

module.exports = router;