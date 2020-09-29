const { Router } = require("express")
const router = Router();

const CovidJsonService = require('../CovidJsonService');
const covidJsonService = new CovidJsonService();


router.get('/:filterKeyword', async (req, res) => {
	const { filterKeyword } = req.params;
	res.json(await covidJsonService.getInfoForEndPoint(filterKeyword));
});

module.exports = router;
