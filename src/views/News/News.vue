<template>


  <div class="card lg:py-10 py-5 px-4 ">
    <h1 class="text-[50px] font-bold text-white  text-start pl-6">Yangiliklar</h1>
    <Carousel
      :value="news"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="5000"
    >
      <template #item="slotProps">
        <div
          class="border-1  relative  surface-border border-round mx-4 text-center py-5   hover:cursor-pointer"
        >
          <img
            :src="'https://siyfprojectapi.pythonanywhere.com' + slotProps.data.image"
            alt="image"
            class="w-[400px] brightness-90 h-[300px] object-cover rounded-2xl"
          />

          <div class="  w-full left-10  max-h-[300px] mx-auto mt-3  overflow-hidden rounded-xl">
            <p class="text-white underline ">
              <router-link :to="{name:'inside_news', params:{id:slotProps.data.id}}">{{ slotProps.data.text }}</router-link>
            </p>
          </div>

        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel";
import axios from 'axios'

import { ref, onMounted } from "vue";
const news = ref([])

onMounted(() => {
axios.get('https://siyfprojectapi.pythonanywhere.com/api/uz/news/list/').then(res =>{

  if(res.status == 200){
res.data.forEach(el =>{
  news.value.push(el)
})
  }

})
});

const products = ref();

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background: rgb(17, 64, 113);
  background: linear-gradient(  
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
 
}

// :deep(img) {
//   position: relative;
//   &::before{
// content: '';
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// background:rgba(0,0,0,0.4);
//   }
// }

:deep .p-link {
  border-radius: 50px;
  background: rgb(135, 185, 238);
  user-select: none;
}
:deep
  .p-carousel
  .p-carousel-indicators
  .p-carousel-indicator.p-highlight
  button {
  background-color: rgb(238, 240, 238);
}
:deep .p-carousel-next,
.p-carousel-prev {
  display: none;
}
:deep .p-carousel-prev {
  display: none;
}

// :deep(.p-carousel[pv_id_2] .p-carousel-item){
//     flex: 1 0 3.333333333333336%;
// }


</style>
