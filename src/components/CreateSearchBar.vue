<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            research: "",
        }
    },
    emits: ['term-submit']
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
