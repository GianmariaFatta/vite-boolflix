<script>
import CreateSearchBar from './CreateSearchBar.vue';
export default {
    components: { CreateSearchBar, },
    emits: ['term-submit']
}
</script>

<template>
    <div class="row d-flex  align-items-center justify-content-between g-0 ">
        <div class="col-6 d-flex ">
            <img class="img-fluid ms-3" src="../assets/img/BOOLFLIX.LOGO.png" alt="">
        </div>
        <div class="d-flex col-5 justify-content-end">
            <CreateSearchBar @term-submit="$emit('term-submit', $event)"></CreateSearchBar>
        </div>
    </div>

</template>

<style scoped >
.row {
    background-color: #000;
    height: 150px;
    width: 100%;
}
</style>