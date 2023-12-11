<script setup>
import Home from './views/Home/Home.vue';
import AboutFond from './views/AboutFond/AboutFond.vue';
import Opportunities from './views/Opportunities/Opportunities.vue';
import Sponsors from './views/Sponsors/Sponsors.vue';
import FooterComp from './views/Footer/FooterComp.vue';
</script>

<template>
<div>
 
<div class="absolute top-0 w-full">
  <Home></Home>
  <AboutFond></AboutFond>
  <Sponsors></Sponsors>
  <Opportunities></Opportunities>
<FooterComp></FooterComp>

</div>

</div>
</template>

<style>

@import './style.css';

</style>
