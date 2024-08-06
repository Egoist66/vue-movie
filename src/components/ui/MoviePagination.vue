<script setup lang="ts">
import { useMovies } from '@/hooks/useMovies';
import { useAppStore } from '@/stores/app-store';
import { ref, watchEffect } from 'vue';


const movieStore = useAppStore()
const movieData = useMovies()
const pages = ref<number>(0)

watchEffect(() => {
    pages.value = Math.ceil(+movieStore.movies?.totalResults / 10)
})

</script>


<template>
    <div class="movie-pagination">
        
        <button :disabled="movieData.page.value === 1"  @click="movieData.setPage(movieData.page.value - 1)"><</button>
        <div :key="item" v-for="item in pages">
            <button @click="movieData.setPage(item)" :class="{ 'active-page': item === movieData.page.value }">{{
                item }}</button>
        </div>
        <button :disabled="movieData.page.value === pages"  @click="movieData.setPage(movieData.page.value + 1)">></button>
    </div>
</template>



<style lang="scss" scoped>
.movie-pagination {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;

    span {
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
}
</style>