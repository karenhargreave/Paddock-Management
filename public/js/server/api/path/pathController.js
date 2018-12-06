var Path = require('./pathModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Path.findById(id)
    .then(function(path) {
      if (!path) {
        next(new Error('No path with that id'));
      } else {
        req.path = path;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Path.find({})
    .then(function(paths){
      res.json(paths);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var path = req.path;
  res.json(path);
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

exports.post = function(req, res, next) {
  var newpath = req.body;
  console.log(req.body);
  Path.create(newpath)
    .then(function(path) {
      res.json(path);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.path.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};

  
