const { RESTDataSource } = require('@apollo/datasource-rest')

class RickAndMortyAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://rickandmortyapi.com/api/';
    }
    
    async getCharacters() {
        const response = await this.get('character');

        return response.results.map(character => ({
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
        }));
    }
}

module.exports = RickAndMortyAPI