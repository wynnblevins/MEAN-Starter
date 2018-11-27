module.exports = function (app) {
  /* GET api listing. */
  app.get('/api', (req, res) => {
    res.send('api works');
  });  
};