<script>
import { store } from './store'
export default {
    data() {
        return {
            store
        }
    },


}
</script>

<template>

    <ul v-for="movie in store.movies">
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>{{ movie.overview }}</li>
        <li>
            <img v-if="movie.original_language === 'it'" src="../src/img/flags/it.png" alt="">
            <img v-else-if="movie.original_language === 'en'" src="../src/img/flags/en.png" alt="">
            <p v-else>{{ movie.original_language }}</p>
        </li>
        <li>{{ movie.vote_average }}</li>
    </ul>

</template>

<style scoped>

</style>