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
    import {ref, onMounted} from 'vue'
import axios from 'axios'

    const route = useRoute()

    onMounted(()=>{
    
   

    })
</script>
    
<style>
    
</style>