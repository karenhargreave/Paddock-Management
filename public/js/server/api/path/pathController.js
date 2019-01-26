var Path = require('./pathModel');
var _ = require('lodash');

const fs = require('fs')
const dir = './test.json'
try {
  if (fs.existsSync(dir)) {
    console.log('file available')
  }
  else {
    var createStream = fs.createWriteStream("test.json");
    createStream.end();
    console.log("new json file create");
  }
} catch(err) {
  console.error(err)
}

exports.params = function(req, res, next, id) {
  Path.findById(id)
    .then(function(path) {
      if (!path) {
        next(new Error('No paddock with that id'));
        res.json('No paddock with that id');
      } else {
        req.path = path;
        next();
      }
    }, function(err) {
      next(err);
    });
};

/*exports.get = function(req, res, next) {
  Path.find({})
    .then(function(paths){
      res.json(paths);
    }, function(err){
      next(err);
    });
};*/

exports.get = function(req, res, next) {
  function readData(err, data) {
  console.log(data);
  res.send(data);
}
(fs.readFile(dir, 'utf8', readData));

},  function(err){
    next(err);
};


exports.getOne = function(req, res, next) {
  Path.find({_id: req.params.id})
    .then(function(paths){
      res.json(paths);
    }, function(err){
      next(err);
    });
};


exports.put = function(req, res, next) {
  var path = req.path;

  var update = req.body;

  _.merge(path, update);

  path.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

/*exports.post = function(req, res, next) {
  var newpath = req.body;
  console.log(req.body);
  Path.create(newpath)
    .then(function(path) {
      

      const content = req.body

fs.appendFileSync(dir, JSON.stringify(content) + ",", (err) => {
  if (err) {
    console.error(err)
    return
  }

})

      res.json(path);
      console.log("file written sucessfully");
    }, function(err) {
      next(err);
    });
};*/

exports.post = function(req, res, next) {
  
  function writeData(err, data){
    
  }
const content = req.body;
(fs.appendFileSync(dir, JSON.stringify(content) + ",", writeData)); 
console.log("sucessfully written");
res.json("write sucessfull");
},
    function(err) {
      next(err);
};










exports.delete = function(req, res, next) {
  Path.remove({_id: req.params.id})
  .then(function(path) {

      res.json("The paddock has been removed sucessfully");
    
  }).catch(next);
};

  
