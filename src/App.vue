<script>
import CreateSearchBar from './CreateSearchBar.vue';
import CreateCards from './CreateCards.vue';
export default {
  components: { CreateSearchBar, CreateCards }
}
</script>

<template>
  <header>
    <CreateSearchBar />
  </header>
  <main>
    <h2>Movies</h2>
    <CreateCards />
  </main>
  <footer></footer>
</template>

<style>

</style>