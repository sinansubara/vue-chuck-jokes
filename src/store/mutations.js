import types from './mutation_types';

export default {
      [types.GET_CATEGORIES](state, payload) {
        state.categories = [...state.categories, ...payload];
      },
      [types.GET_RANDJOKE](state, payload) {
        const checkJokeDuplicate = state.jokes.find( joke => joke.text == payload.text);
        if(!checkJokeDuplicate){
          state.jokes = [...state.jokes, payload];
        }
      },
      [types.GET_JOKE](state, payload) {
        const checkJokeDuplicate = state.jokes.find( joke => joke.text == payload.text);
        if(!checkJokeDuplicate){
          state.jokes = [...state.jokes, payload];
        }
      },
      [types.ADD_FAVORITE_JOKE](state, payload) {
        state.favorites = [...state.favorites, payload];
        localStorage.setItem('CHUCKNORRIS_KEY', JSON.stringify([...state.favorites]));
      },
      [types.REMOVE_FAVORITE_JOKE](state, payload) {
        state.favorites = state.favorites.filter( joke => joke.id != payload);
        if(state.favorites.length > 0){
          localStorage.setItem('CHUCKNORRIS_KEY', JSON.stringify([...state.favorites]));
        }else{
          localStorage.removeItem('CHUCKNORRIS_KEY');
        }
        
      },
      [types.SEARCH_JOKE](state, value) {
        state.search = value;
      }
}