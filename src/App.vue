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
  <CreateCards />
  <main>
  </main>
  <footer></footer>
</template>

<style>

</style>