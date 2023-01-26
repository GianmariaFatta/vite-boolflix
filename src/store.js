import {reactive} from 'vue';
export const store = reactive
({
    movies:[],
    MoviesApiUri:"https://api.themoviedb.org/3/search/movie?api_key=c6959408b096916822c4b8a2c1c56f2b&language=it-IT&query=&page=1&include_adult=false"
})