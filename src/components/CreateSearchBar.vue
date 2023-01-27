<script>
import { store } from '../store'
import { api } from '../store'
import axios from 'axios';
export default {
    data() {
        return {
            store,
            research: "",
        }
    },
    emits: ['term-submit']
    // methods: {
    //     Search(value) {
    //         if (value === "") {
    //             store.movies = [];
    //             store.series = []
    //         }

    //         axios.get(`${api.baseuri}/search/movie?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.movies = res.data.results });
    //         axios.get(`${api.baseuri}/search/tv?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.series = res.data.results });




    //     }

    // },

}
</script>

<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" v-model.trim="research">
        <button class="btn btn-outline-success" type="submit"
            @click.prevent="$emit('term-submit', research)">Search</button>
    </form>
</template>

<style scoped >

</style>
