const fetch = require('node-fetch');

class CovidJsonService {
    constructor() {
        this.URI = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
    }
    /**
     * Get all the COVID-19 cases from the COVID-19 API 
     * https://www.datos.gov.co/resource/gt2j-8ykr.json
     * 
     * @return json object with al the COVID-19 cases.
     */
     async fetchCovidCases() {
        const response = await fetch(this.URI);
        const cases = await response.json();
        return cases
    }

    /**
     * Filters by sex to show oly the male cases.
     * 
     * @return Json object with the male cases.
     */
    async getMaleCases() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.sexo === 'M');
    }

    /**
     * Filters by sex to show only de female cases.
     * 
     * @return Json object with the female cases.
     */
    async getFemaleCases() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.sexo === 'F');
    }

    /**
     * Filters by age to show cases from zero to twenty years old people
     * 
     * @return json object with the cases from zero to twenty years old people
     */
    async getZeroToTwenty() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '0' && val.edad < '20');
    }

    /**
     * Filters by age to show cases from twenty to forty years old people
     * 
     * @return json object with the cases from twenty to forty years old people
     */
    async getTwentyToForty() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '20' && val.edad < '40');
    }

    /**
     * Filters by age to show cases from forty and plus years old people
     * 
     * @return json object with the cases from forty adn plus years old people
     */
    async getFortyAndPlus() {
        const cases = await this.fetchCovidCases();
        return cases.filter(val => val.edad >= '40');
    }

    /**
     * Gets the information to send throug the endpoint.
     * This information deppends on a keyword.
     * The possible keywords are:
     * male, female, zerototwenty, twentytoforty, fortyandplus
     * 
     * @param filterKeyword the filter that is going to be used.
     * 
     * @return json object with the information for the endpoint.
     */
    async getInfoForEndPoint(filterKeyword) {
        switch(filterKeyword) {
            case 'male':
                return await this.getMaleCases();
            case 'female':
                return await this.getFemaleCases();
            case 'zerototwenty':
                return await this.getZeroToTwenty();
            case 'twentytoforty':
                return await this.getTwentyToForty();
            case 'fortyandplus':
                return await this.getFortyAndPlus();
        };
    
        return (
            { 'error': 'Error 404', 'for keyword': filterKeyword,
            'Possible keywords': 'male, female, zerototwenty, twentytoforty, fortyandplus'}
        )
    }
}

module.exports = CovidJsonService;
