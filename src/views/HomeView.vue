<script setup lang="ts">
import MovieCard from '@/components/ui/MovieCard.vue';
import { useMovies } from '@/hooks/useMovies';
import { useAppStore } from '@/stores/app-store';


import MoviePagination from '@/components/ui/MoviePagination.vue';
import { onBeforeMount } from 'vue';


const moviesData = useMovies()
const moviesStore = useAppStore()

onBeforeMount(async() => {
      moviesData.isLoading.value = true;

      try {
        await moviesData.getMovies();
      }
      catch (e) {
        moviesData.isError.value = true;
      }
      finally {
        moviesData.isLoading.value = false;
      }
    });

</script>

<template>

  <div class="home-view" :class="{loading: moviesStore.isLoadingWhileSearch}">

   
    <h2 v-if="!moviesStore?.movies?.Search?.length || !moviesStore?.storeSearch">
      {{ moviesStore.movies.Error || 'No results' }}
    </h2>
    <h2 v-else>You searched for: {{ moviesStore.storeSearch }}, {{ moviesStore.movies.totalResults }} results found </h2>

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
