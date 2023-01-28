import {reactive} from 'vue';
export const store = reactive ({
    movies:[],
    series:[],
})
const api ={
key:"c6959408b096916822c4b8a2c1c56f2b",
baseuri:"https://api.themoviedb.org/3",
urlImg:"https://image.tmdb.org/t/p/w342/",
}
export {api}