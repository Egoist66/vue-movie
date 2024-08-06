<script setup lang="ts">
import MovieCard from '@/components/ui/MovieCard.vue';
import { useMovies } from '@/hooks/useMovies';
import { useAppStore } from '@/stores/app-store';


import MoviePagination from '@/components/ui/MoviePagination.vue';


const moviesData = useMovies()
const moviesStore = useAppStore()

</script>

<template>

  <div class="home-view" :class="{loading: moviesStore.isLoadingWhileSearch}">

   
    <h2 v-if="!moviesStore?.movies?.Search?.length || !moviesStore?.search">
      {{ moviesStore.movies.Error || 'No results' }}
    </h2>
    <h2 v-else>You searched for: {{ moviesStore.search }}, {{ moviesStore.movies.totalResults }} results found </h2>

    <h2 class="loader" v-if="moviesData.isLoading.value">Loading...</h2>
    <div v-else class="movies-grid">

      <MovieCard v-for="movie in moviesStore.movies.Search" :key="movie.imdbID" :movie="movie" />

    </div>

    <MoviePagination />

  </div>


</template>

<style lang="scss" scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 auto;
  padding-bottom: 30px;

}

.loader {
  font-size: 36px;
  text-align: center;
}
</style>
