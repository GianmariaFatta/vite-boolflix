<script>
import { store } from './store'
import CreateSeriesCards from './components/CreateSeriesCards.vue';
import CreateSearchBar from './components/CreateSearchBar.vue';
import CreateCards from './components/CreateCards.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: { CreateSearchBar, CreateCards, CreateSeriesCards }
}
</script>

<template>
  <header>
    <CreateSearchBar />
  </header>
  <main>
    <h2 v-if="store.movies.length > 0">Movies</h2>
    <CreateCards />
    <h2 v-if="store.series.length > 0">Series</h2>
    <CreateSeriesCards />
  </main>
  <footer></footer>
</template>

<style>

</style>