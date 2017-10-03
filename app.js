
var express = require('express');

var app = express();

// app.use(require('easy-livereload')());
app.use(express.static('public'));

app.get('/', function(req, res){
  try {
    res.send('root');
  } catch (e) {
    console.log('====');
    console.log('ERROR');
    console.log('====');
    console.log(e);
    console.log('====');
    console.log('====');
  } finally {

  }

});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3001);
  console.log('Express started on port 3001');
}
