<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },


}
</script>

<template>

    <ul v-for="serie in store.series">
        <li class="text-danger">{{ serie.name }}</li>
        <li class="text-danger">{{ serie.original_name }}</li>
        <li class="text-danger">{{ serie.overview }}</li>
        <li>
            <img v-if="serie.original_language === 'it'" src="../img/flags/it.png" alt="">
            <img v-else-if="serie.original_language === 'en'" src="../img/flags/en.png" alt="">
            <p v-else>{{ serie.original_language }}</p>
        </li>
        <li class="text-danger">{{ serie.vote_average }}</li>

    </ul>

</template>

<style scoped>

</style>