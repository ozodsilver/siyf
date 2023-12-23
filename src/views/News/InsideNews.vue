<template>
        <div>
           <Navigation class="bg-black"></Navigation>

           {{ route.params.id }}

           <Footer></Footer>
        </div>
</template>
    
<script setup>
    import Navigation from '../Navigation/Navigation.vue';
    import Footer from '../Footer/Footer.vue';
    import {useRoute} from 'vue-router'


    const route = useRoute()
</script>
    
<style>
    
</style>