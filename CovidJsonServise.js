const fetch = require('node-fetch');
class CovidJsonServise {
    constructor() {
        this.URI = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    }

    async getMaleCases() {
        const response = await fetch(this.URI);
        const cases = await response.json();
        console.log(cases)
        return cases;
    }
}

module.exports = CovidJsonServise;
