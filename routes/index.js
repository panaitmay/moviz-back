var express = require('express');
var router = express.Router();

const api = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {  
	 fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)  
	   .then(response => response.json())  
	   .then(data => {  
	   res.json({ movies : data });  
	   });  
	});


module.exports = router;
