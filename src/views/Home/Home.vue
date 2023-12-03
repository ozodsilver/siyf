<template>
<div class="min-h-[100vh]">
    
<div class="wrapper w-full h-full">

</div>

    <div class="relative">
    <div >
    <video src="../../assets/videos/background.mp4" loop autoplay muted  class="w-full object-cover min-h-[100vh]"></video>
  </div>
       <div class="fixed top-0 z-50 w-full">
        <Navigation></Navigation>
       </div> 

      
</div>
<!-- Home text -->
<div class="absolute top-[40%] w-[500px] z-50 left-[100px]">
    <h1 class="text-3xl text-white">Umumiy sovrin jamgʻarmasi $1 millionni tashkil qiluvchi “President Tech Award” tanlovining onlayn ovoz berish bosqichi boshlandi!</h1>
</div>

</div>

</template>
    
<script setup >
    import Navigation from '../Navigation/Navigation.vue';
    import Opportunities from '../Opportunities/Opportunities.vue'
</script>
    
<style scoped>
.wrapper{
    background: rgb(52,141,230);
background: linear-gradient(180deg, rgba(52,141,230,0.27942927170868344) 18%, rgba(17,64,113,1) 76%);
position: absolute;
top: 0;
z-index: 22;
}

    
</style>