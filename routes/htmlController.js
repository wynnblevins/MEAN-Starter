module.exports = function (app, path) {
  // Catch all other routes and return the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/mean-starter/index.html'));
  });  
};