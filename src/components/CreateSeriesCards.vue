<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    computed: {
        // flagSrc() {
        //     const url = new URL(`../assets/img/${this.store.series.original_language}.png`, import.meta.url);
        //     return url.href;
        // }
    }
}
</script>


<template>
    <ul v-for="serie in store.series" :key='serie.id'>
        <li class="text-danger">{{ serie.name }}</li>
        <li class="text-danger">{{ serie.original_name }}</li>
        <li class="text-danger">{{ serie.overview }}</li>
        <li class="text-danger">
            <img v-if="serie.original_language === 'it'" src="../assets/img/it.png" alt="">
            <img v-else-if="serie.original_language === 'en'" src="../assets/img/en.png" alt="">
            <p v-else>{{ serie.original_language }}</p>
        </li>
        <li class="text-danger">{{ serie.vote_average }}</li>

    </ul>

</template>

<style scoped>

</style>