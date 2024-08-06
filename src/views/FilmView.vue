<script lang="ts" setup>
import { useMovie } from '@/hooks/common/useMovie';
import { useAppStore } from '@/stores/app-store';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import {useRoute } from 'vue-router';


    const {getSingleMovie} = useMovie()
    const route = useRoute()

    console.log(route);
    
    onBeforeMount(async () => {
        await getSingleMovie(route?.params?.id);
    })

    const {singleMovie} = storeToRefs(useAppStore())
    
</script>
<template>
  <div class="film-view">
    <div class="film-view-img">
      <img :src="singleMovie?.Poster === 'N/A' ? '/placeholder.jpg' : singleMovie?.Poster" :alt="singleMovie?.Title">
    </div>
    <div class="film-view-info">
      <h2>Name:{{ singleMovie?.Title }}</h2>
      <p>Year:{{ singleMovie?.Year }}</p>
      <p>Description:{{ singleMovie?.Plot }}</p>
      <p>ID:{{ singleMovie?.imdbID }}</p>
      <p>Type:{{ singleMovie?.Type }}</p>
      <p>Genre:{{ singleMovie?.Genre }}</p>
      <p>Rate:{{ singleMovie?.imdbRating }}</p>
    </div>

  </div>
</template>

<style scoped>
.film-view {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
}

.film-view-img {
  width: 300px;
  height: 460px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgb(174, 174, 174);
}

img {
    height: 100%;
    border-radius: 10px;
}

.film-view-info {
  padding: 10px;
  box-shadow: 1px 1px 4px rgb(174, 174, 174);
  max-width: 500px;
}

.film-view h2 {
  margin-top: 5px;
}

.film-view h2, p {
  margin-bottom: 5px;
}
</style>
