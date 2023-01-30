<script>
import CreateSearchBar from './CreateSearchBar.vue';
export default {
    components: { CreateSearchBar, },
    emits: ['term-submit']
}
</script>

<template>
    <div class="row d-flex  align-items-center justify-content-between ">
        <div class="col-6 mt-">
            <img class="img-fluid ms-3" src="../assets/img/BOOLFLIX.LOGO.png" alt="">
        </div>
        <div class="d-inline col-5 justify-content-end">
            <CreateSearchBar @term-submit="$emit('term-submit', $event)"></CreateSearchBar>
        </div>
    </div>

</template>

<style scoped >
.row {
    background-color: #000;
    height: 150px;
    /* padding: 5px; */
}
</style>