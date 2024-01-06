<template>

<div class="main pt-20 pb-2 ">
    <h1 class="text-white pb-10 bg-transparent md:text-[50px] text-[10px] font-sans text-center  font-bold">Homiylar</h1>
    <Vue3Marquee :clone="true" :duration="5" :direction="'reverse'" >
            <img
                v-for="img in imgArray"
                :key="img"
                :src="`https://siyfprojectapi.pythonanywhere.com/${img.image}`"
                class="w-[200px] h-[80px] object-cover"
            />
        </Vue3Marquee>
</div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

// const sponsors = ref([
// {
// image:'https://img.moviesrankings.com/t/p/w1280/9kwrqlSV2d3bJwnp4uYARxVdqsx.jpg'
// },

// {
// image:'https://img.moviesrankings.com/t/p/w1280/9kwrqlSV2d3bJwnp4uYARxVdqsx.jpg'
// },



// ])

onMounted(()=>{
    axios.get('https://siyfprojectapi.pythonanywhere.com/api/sponsor/list/').then(res =>{
        console.log(res);
        if(res.status == 200){
            res.data.forEach(el =>{
                imgArray.value.push(el)
            })
        }
    })
})


const imgArray = ref([])

</script>



<style lang="scss" scoped>

.main{
    background: rgb(17, 64, 113);
}

:deep .vue3-marquee>.transparent-overlay{
    background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}

:global(.vue3-marquee>.marquee) {
    background: rgb(17, 64, 113);
}


</style>