<script>
import { store } from './store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            research: "",
        }
    },
    methods: {
        Search(value) {
            if (value === "") {
                store.movies = []
            }
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6959408b096916822c4b8a2c1c56f2b&language=it-IT&query=${value}&page=1&include_adult=false`).then(res => { store.movies = res.data.results })


        }

    }
}
</script>

<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="research"
            @keyup="Search(research)">
        <button class="btn btn-outline-success" type="submit" @click.prevent>Search</button>
    </form>
    <ul>
        <li v-for="movie in store.movies">{{ movie.title }}</li>
    </ul>
</template>

<style scoped >

</style>
