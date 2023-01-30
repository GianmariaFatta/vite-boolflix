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
    <form class="d-flex w-100 " role="search">
        <input class="form-control me-2 search" type="search" placeholder="Search" v-model.trim="research">
        <button class="btn btn-outline-success" type="submit"
            @click.prevent="$emit('term-submit', research)">Search</button>
    </form>
</template>

<style scoped >
button {
    background-color: #ff0000;
    color: #fff;
}

button:hover {
    background-color: #ff0000;
    box-shadow: 0 0 10px #fff;
}

form .search:focus {
    border-color: #ff0000
}
</style>
