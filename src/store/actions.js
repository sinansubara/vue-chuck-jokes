import axios from 'axios';
import types from './mutation_types'
export default {
      async getCategories({ commit }) {
        await axios.get('https://api.chucknorris.io/jokes/categories')
        .then((response) => {
          commit(types.GET_CATEGORIES, response.data);
        });
      },
      async getRandJoke({ commit }) {
        await axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
          commit(types.GET_RANDJOKE, {
            text: response.data.value,
            favorite: false
          });
        });
      },
      async getJoke({ commit }, category) {
        await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then((response) => {
            commit(types.GET_JOKE, {
              text: response.data.value,
              favorite: false
            });
          });
      },
      addFavJoke({ commit }, joke) {
        commit(types.ADD_FAVORITE_JOKE, joke);
      },
      removeFavJoke({ commit }, id) {
        commit(types.REMOVE_FAVORITE_JOKE, id);
      }
}