<script setup lang="ts">
import { useAppStore } from '@/stores/app-store';
import { storeToRefs } from 'pinia';
import type { Router } from 'vue-router';


const {setCurrentPage} = useAppStore()
const {storeSearch} = storeToRefs(useAppStore())

const resetSearchField = ($router: Router) => {
    setCurrentPage(1)
    $router.push({name: 'home'})

}

</script>

<template>
    <header class="header">

        <div class="container">

            <nav class="header-navigation">

                <div class="header-logo">
                    <h1 @click="$router.push({name: 'home'})">Movie catalog</h1>
                </div>
                <div class="header-navigation-search">
                    <input @focus="resetSearchField($router)" v-model="storeSearch" placeholder="Search a movie" pattern=".*\S.*" type="search" name="search" id="search">
                </div>

                <div class="profile">
                    <div class="profile-nick">
                        <h3>John Doe</h3>
                    </div>
                    <div class="profile-img">
                        <img src="/profile.jpg" alt="">
                    </div>
                    
                </div>

            </nav>
          
        </div>

    </header>
</template>



<style lang="scss" scoped>

h1 {
    cursor: pointer;
}

header {
    background: rgb(118, 172, 193);
    padding: 15px 0px 15px 0px;
    position: sticky;
    z-index: 22;
    top: 0;

    & .header-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}

.profile {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.profile-img img {
    width: 30px;
    border-radius: 5px;
}

.header-navigation-search {
    flex-grow: 0.5;

    & input {
        width: 100%;
        padding: 5px;
    }
}



</style>