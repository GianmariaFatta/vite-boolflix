<script>
import { store } from './store';
import { api } from './store';
import axios from 'axios';
import ProductCard from './components/ProductCard.vue';
import CreateSearchBar from './components/CreateSearchBar.vue';
export default {
  data() {
    return {
      store,
      api,
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
    },
    posterPath(product) {
      const url = `${api.urlImg}${product.poster_path}`
      console.log(url)

      return url
    }

  },
  components: { CreateSearchBar, ProductCard }
}
</script>

<template>
  <header>
    <CreateSearchBar @term-submit="Search" />
  </header>
  <main>
    <div class="container">
      <h2 v-if="store.movies.length > 0">Movies</h2>
      <div class=" row display-flex justify-content-left align-items-center p-2 ">
        <ProductCard v-for="movie in store.movies" :key="movie.id" :item="movie" :url="posterPath(movie)" />
      </div>
      <h2 class="mt-5" v-if="store.series.length > 0">Series</h2>
      <div class=" row display-flex justify-content-start align-items-center h-50 mt-5">
        <ProductCard v-for="serie in store.series" :key="serie.id" :item="serie" :url="posterPath(serie)" />
      </div>
    </div>
  </main>
  <footer>
  </footer>
</template>

<style>
* {
  list-style-type: none;
}

body {
  background-color: #636060;

}

.row {
  width: 100%;
  height: auto;
  gap: 15px;
  border: 2px dashed gold;
  flex-wrap: wrap;

}
</style>