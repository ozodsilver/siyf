<script setup>
import Home from './views/Home/Home.vue';
import AboutFond from './views/AboutFond/AboutFond.vue';
import Opportunities from './views/Opportunities/Opportunities.vue';
import Registration from './views/Register/Registration.vue';
import Footer from './views/Footer/Footer.vue';
import Sponsors from './views/Sponsors/Sponsors.vue';
import Faq from './views/FAQ/Faq.vue';
</script>

<template>
<div>
 
<div class="absolute top-0 w-full">
  <Home></Home>
  <AboutFond></AboutFond>
  <Opportunities></Opportunities>
  <Registration></Registration>
  <Faq></Faq>
  <Sponsors></Sponsors>
  <Footer></Footer>

</div>

</div>
</template>

<style>

@import './style.css';

</style>
