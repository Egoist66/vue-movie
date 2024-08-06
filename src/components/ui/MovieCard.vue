<script setup lang="ts">
import type { Movie } from '@/stores/app-store';

const {movie} = defineProps<{movie: Movie}>()


</script>

<template>
    <div class="movie-card">

        <div class="movie-card-img">
            <img class="movie-img" loading="lazy" :src="movie.Poster === 'N/A' ? '/placeholder.jpg' : movie.Poster" :alt="movie.Title">
        </div>

        <div class="movie-card-info">
            <h3>Name:{{ movie.Title }}</h3>
            <p>Year:{{ movie.Year }}</p>
            <p>ID:{{ movie.imdbID }}</p>
            <p>Type:{{ movie.Type }}</p>
        </div>

    </div>
</template>



<style scoped>

h3 {
    margin-top: 5px;
}

h3, p {
    margin-bottom: 5px;
}

.movie-img {
    width: 100%;
    height: 320px;
    object-fit: cover;
}

</style>