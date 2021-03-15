import axios from 'axios';
import types from './mutation_types';

export default {
    [types.GET_CATEGORIES](state) {
        axios.get('https://api.chucknorris.io/jokes/categories')
          .then((response) => {
            state.categories.push(...response.data);
          });
      },
      [types.GET_RANDJOKE](state) {
        axios.get('https://api.chucknorris.io/jokes/random')
          .then((response) => {
            state.jokes.push({
              text: response.data.value,
              favorite: false
              });
          });
      },
      [types.GET_JOKE](state, category) {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then((response) => {
            state.jokes.push({
              text: response.data.value,
              favorite: false
              });
          });
      },
      [types.ADD_TO_FAVORITES](state, joke) {
        if(joke.favorite){
          state.jokes.splice(joke.index, 1);
          state.favorites.splice(joke.index, 1);
          console.log(state.favorites);
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