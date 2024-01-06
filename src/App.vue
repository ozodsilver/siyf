<script setup>
import {onMounted, ref} from 'vue'
import Main from './views/Main/Main.vue';
import Loader from './helpers/Loding/Loader.vue'
import { loaderStore } from './helpers/Loding/loaderStore';

const storeLoader = loaderStore()


</script>

<template>
<div>
 <div v-show="storeLoader.isLoaded">
     <Loader></Loader>
 </div>
<div class="absolute top-0 w-full" v-show = '!storeLoader.isLoaded'>
 
 <Router-view></Router-view>

</div>

</div>
</template>

<style>

@import './style.css';

</style>
