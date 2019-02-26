import Search from './models/Search';

/*
*global state of the app
*- search object
*- current recipe object
*- shopping list object
*- liked recipes
*/

const state = {};

const controlSearch = async () => {
    // 1. get query from view
    const query = 'pizza'; //to do

    if (query) {
        // 2. new search object and add to state
        state.search = new Search(query);

        // 3. prepare UI for results

        // 4. search for recipes
        await state.search.getResults();

        // 5. render results on UI
        console.log(state.search.result);
    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

search.getResults();
