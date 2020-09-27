const { Router } = require("express")
const router = Router();

const CovidJsonServise = require('../CovidJsonServise');
const covidJsonServise = new CovidJsonServise();


router.get('/', async (req, res) => {
	const result = await covidJsonServise.getMaleCases();
	console.log(result);
	res.json(result);
});

module.exports = router;
