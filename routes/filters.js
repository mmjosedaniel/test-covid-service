const { Router } = require("express")
const router = Router();

const CovidJsonServise = require('../CovidJsonServise');
const covidJsonServise = new CovidJsonServise();


router.get('/:filterKeyword', async (req, res) => {
	const { filterKeyword } = req.params;
	res.json(await covidJsonServise.getInfoForEndPoint(filterKeyword));
});

module.exports = router;
