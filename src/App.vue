<script>
import { store } from './store';
import { api } from './store';
import axios from 'axios';
import ProductCard from './components/ProductCard.vue';
// import CreateSearchBar from './components/CreateSearchBar.vue';
import AppHeader from './components/AppHeader.vue';
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
      let url = `${api.urlImg}${product.poster_path}`
      if (!product.poster_path) {
        url = "../src/assets/img/boolflix-no-poster.png"
      }
      console.log(url)

      return url
    }

  },
  components: { ProductCard, AppHeader }
}
</script>

<template>
  <AppHeader @term-submit="Search">

  </AppHeader>

  <main>
    <div class="container">
      <h2 class="text-white mt-5" v-if="store.movies.length > 0">Movies</h2>
      <div class=" row d-flex justify-content-left align-items-center  ">
        <ProductCard v-for="movie in store.movies" :key="movie.id" :item="movie" :url="posterPath(movie)" />
      </div>
      <h2 class="mt-5 text-white" v-if="store.series.length > 0">Series</h2>
      <div class=" row d-flex justify-content-start align-items-center ">
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
  background: linear-gradient(-45deg, #ff0000, #000000, #ff0000);
  background-size: 1000% 1000%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.row {
  width: 100%;
  /* border: 2px dashed gold; */
  flex-wrap: wrap;
  margin-bottom: 50px;

}
</style>