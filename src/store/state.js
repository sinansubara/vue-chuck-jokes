export default {
    jokes: JSON.parse(localStorage.getItem('CHUCKNORRIS_KEY')) || [],
    categories: [],
    favorites: JSON.parse(localStorage.getItem('CHUCKNORRIS_KEY')) || [],
    search: null
}