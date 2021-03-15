export default {
    listCategories: state => state.categories,
    listJokes: state => state.jokes,
    listFavorites: state => state.favorites,
    searchJokes(state) {
        if(!state.search){
            return state.jokes;
        }
        return state.jokes.filter(joke => joke.text.toLowerCase().includes(state.search.toLowerCase()));
    }
}