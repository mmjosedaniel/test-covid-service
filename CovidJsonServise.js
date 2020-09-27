const fetch = require('node-fetch');


class CovidJsonServise {
    constructor() {
        this.URI = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    }

     async fetchCovidCases() {
        const response = await fetch(this.URI);
        const cases = await response.json();
        return cases
    }

    async getMaleCases() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.sexo === 'M');
    }

    async getFemaleCases() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.sexo === 'F');
    }

    async getZeroToTwenty() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '0' && val.edad < '20');
    }

    async getTwentyToForty() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '20' && val.edad < '40');
    }

    async getFortyAndPlus() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '40');
    }
}

module.exports = CovidJsonServise;
