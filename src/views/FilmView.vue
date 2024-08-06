<script lang="ts" setup>
import { useMovie } from '@/hooks/common/useMovie';
import { useAppStore } from '@/stores/app-store';
import { delay } from '@/utils/delay';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';


const { getSingleMovie, isError, isLoading } = useMovie()
const route = useRoute()

console.log(route);

onBeforeMount(async () => {
  isLoading.value = true;
  try {
    await delay(1000);
    await getSingleMovie(route?.params?.id);
  }
  catch (e) {
    isError.value = true;
  }
  finally {
    isLoading.value = false;
  }
})

const { singleMovie } = storeToRefs(useAppStore())

</script>
<template>
  <div :class="{ 'spinner-wrapper': isLoading }">
    <div v-if="isLoading" class="spinner"></div>


    <div v-else class="film-view">

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

  </div>


</template>

<style scoped>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #76acc1 94%, #0000) top/9px 9px no-repeat,
    conic-gradient(#0000 30%, #76acc1);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;
}

.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}

.loading {
  font-size: 36px;
  text-align: center;
}

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

.film-view h2,
p {
  margin-bottom: 5px;
}
</style>
