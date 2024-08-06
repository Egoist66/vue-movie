<script setup lang="ts">
import Footer from './partials/Footer.vue';
import Header from './partials/Header.vue';


</script>


<template>
    <div id="layout" class="container">
        
        <Header />

        <main class="main-app">
                
            <div  class="container">
                <section class="main-app-section">
                    <slot /> 
                </section>
            </div>

        
        </main>
        
        <Footer />

      
    </div>
</template>



<style lang="scss" scoped>
    .main-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    
    
    }

    section {
        width: 100%;
    }
</style>