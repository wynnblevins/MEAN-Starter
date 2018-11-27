module.exports = function (app, db) {
  app.get('/api/thing', (req, res) => {
    // get all things from db
    console.log('inside thing GET endpoint');
    db.find({}).then(function (things) {
      res.send(things);  
    });
  });
  
  app.post('/api/thing', (req, res) => {
    // create a new thing
    var newThing = {
      name: req.body.thing 
    };
  
    db.create(newThing).then((thing) => {
      res.send(thing);
    });
  });  
};