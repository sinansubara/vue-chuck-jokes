import types from './mutation_types';

export default {
      [types.GET_CATEGORIES](state, payload) {
        state.categories = [...state.categories, ...payload];
      },
      [types.GET_RANDJOKE](state, payload) {
        state.jokes = [...state.jokes, payload];
      },
      [types.GET_JOKE](state, payload) {
        state.jokes = [...state.jokes, payload];
      },
      [types.ADD_TO_FAVORITES](state, joke) {
        if(joke.favorite){
          state.jokes.splice(joke.index, 1);
          state.favorites.splice(joke.index, 1);
          localStorage.setItem('CHUCKNORRIS_KEY', JSON.stringify([...state.favorites]));
        }else{
          state.favorites = [...state.favorites, joke];
          joke.favorite = true;
          localStorage.setItem('CHUCKNORRIS_KEY', JSON.stringify([...state.favorites]));
        }
      },
      [types.SEARCH_JOKE](state, value) {
        state.search = value;
      }
}