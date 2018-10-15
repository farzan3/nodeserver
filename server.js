var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
const port = process.env.PORT || 3000;
app.get('/scrape/:id', function(req, res){
 
  var id = req.params.id;
  url = 'https://www.appbrain.com/app/block-puzzle-conquer/'+id;

  request(url, function(error, response, html){
    if(!error){
		
	
      var $ = cheerio.load(html);

	  var ranking="None";
      
      var json = { ranking : "None"};

	  $("[tooltip='Ranking of the app on Google Play.']").filter(function(){
        var data = $(this);
        ranking = data.text().trim();
	    ranking=ranking.substr(0, ranking.indexOf('\n')); 
        json.ranking = ranking;
      })
	  
    
    }

    res.send(json)
  })
})

app.listen(port)
  console.log('Server started on port', port);
exports = module.exports = app;
