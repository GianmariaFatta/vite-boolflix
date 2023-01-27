<script>
import { store } from './store';
import { api } from './store';
import axios from 'axios';
import CreateSeriesCards from './components/CreateSeriesCards.vue';
import CreateSearchBar from './components/CreateSearchBar.vue';
import CreateCardsMovies from './components/CreateCardsMovies.vue';
export default {
  data() {
    return {
      store,
      titleFilter: "",
    }
  },
  methods: {
    Search(value) {
      if (value === "") {
        store.movies = [];
        store.series = []
      }
      axios.get(`${api.baseuri}/search/movie?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.movies = res.data.results });
      axios.get(`${api.baseuri}/search/tv?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.series = res.data.results });
    }

  },
  components: { CreateSearchBar, CreateCardsMovies, CreateSeriesCards }
}
</script>

<template>
  <header>
    <CreateSearchBar @term-submit="Search" />
  </header>
  <main>
    <h2 v-if="store.movies.length > 0">Movies</h2>
    <CreateCardsMovies />
    <h2 v-if="store.series.length > 0">Series</h2>
    <CreateSeriesCards />
  </main>
  <footer></footer>
</template>

<style>

</style>