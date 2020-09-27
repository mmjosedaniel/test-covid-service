const { Router } = require("express")
const router = Router();

const CovidJsonServise = require('../CovidJsonServise');
const covidJsonServise = new CovidJsonServise();


router.get('/:filters', async (req, res) => {
	const { filters } = req.params;
	switch(filters) {
		case 'male':
			return res.json(await covidJsonServise.getMaleCases());
		case 'female':
			return res.json(await covidJsonServise.getFemaleCases());
		case 'zerototwenty':
			return res.json(await covidJsonServise.getZeroToTwenty());
		case 'twentytoforty':
			return res.json(await covidJsonServise.getTwentyToForty());
		case 'fortyandplus':
			return res.json(await covidJsonServise.getFortyAndPlus());
	};

	res.send('<h2>Error 404 for keyword: ' + filters + '<h2>')
});

module.exports = router;
