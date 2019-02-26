import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const key = '57f8d4c4a09b382bdcc9502ee37a22d8';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
    } catch (error) {
        alert(error);
    }
  }
}
