var express = require('express');
var request = require('request');
var app     = express();
const port = process.env.PORT || 3000;
app.get('/scrape/:id', function(req, res){
 
  var id = req.params.id;
  url = 'http://mishnat.com/MishNat/appInfoApi.php?packageName='+id;

  request({ url: url,json: true}, function(error, response, body){
    if(!error){
		
	
      

	  var ranking="None";
      
      var json = { pakagenname : "None", url : "None" , bit :0};

	  json.pakagenname=body.Package;
		json.url=body.HeaderImage;
		json.bit=1;
	
	}

    res.send(json)
  })
})

app.listen(port)
  console.log('Server started on port', port);
exports = module.exports = app;
