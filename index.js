var express = require('express');
var cors = require('cors');
const multer = require('multer');
require('dotenv').config()

var upload = multer();
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.any(), function(req,res){
  let name = req.files[0].originalname;
  let type = req.files[0].mimetype;
  let size = req.files[0].size;
  res.json({
    name,
    type,
    size
  })
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
