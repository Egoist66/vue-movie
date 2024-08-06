<script setup lang="ts">
import { useAppStore } from '@/stores/app-store';
import { ref, watchEffect } from 'vue';


const movieStore = useAppStore()
const pages = ref<number>(0)

watchEffect(() => {
    pages.value = Math.floor(+movieStore.movies?.totalResults / 10)
})

</script>


<template>
    <div v-if="movieStore.movies.Response !== 'False'" class="movie-pagination">
        
        <button v-if="pages > 10" :disabled="movieStore.currentPage === 1"  @click="movieStore.setCurrentPage(1)"><<</button>
        <button :disabled="movieStore.currentPage === 1"  @click="movieStore.setCurrentPage(movieStore.currentPage - 1)"><</button>
        <div :key="item" v-for="item in Math.min(10, pages)">

            <button v-if="item >= 1 && item <= 10"  @click="movieStore.setCurrentPage(item)" :class="{ 'active-page': item === movieStore.currentPage }">{{
                item }}</button>
        </div>
        <button v-if="pages > 10" :disabled="movieStore.currentPage === pages"  @click="movieStore.setCurrentPage(movieStore.currentPage + 1)">></button>
        <button v-if="pages > 10" :disabled="movieStore.currentPage === pages"  @click="movieStore.setCurrentPage(pages)">>></button>

        {{ movieStore.currentPage }} / {{ pages }}
    </div>
</template>



<style lang="scss" scoped>
.movie-pagination {
    padding: 20px 0px;
    display: flex;
    max-width: 1200px;
    margin:  0 auto;
    overflow-y: auto;
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