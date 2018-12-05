var router = require('express').Router();

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    console.log('Hey from path!!');
    res.send({ok: true});
  });

module.exports = router;
