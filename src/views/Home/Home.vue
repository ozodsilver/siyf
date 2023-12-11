<template>
  <div class="min-h-[600px] bg-black wrapper overflow-hidden">
    <div class="fixed top-0 z-50 w-full">
      <Navigation></Navigation>
    </div>

    <Carousel :autoplay="40000" :itemsToShow = '1' :wrap-around="true">
      <Slide v-for="image in images" :key="image">
        <div class="carousel__item p-0 relative top-[-20px] "> 
          <img :src="image.image" class="object-cover w-full h-[600px] brightness-90" alt="">
      <div class="absolute w-[350px] md:w-[900px] bg_description  p-5 rounded-lg  text-white font-bold  quicksand-700 ">
        <h1 class="text-start text-3xl uppercase first-letter:font-extrabold  first-letter:text-5xl first-letter:text-teal-500  ">{{ image.header }}</h1>
    <p class="text-xs md:text-base text-start relative mt-2 ">   {{ image.description }}</p>


 
      </div>

     
        
        </div>

       
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";


import Navigation from "../Navigation/Navigation.vue";



const images = [
    {
        image: new URL('../../assets/images/forHome1.jpg', import.meta.url),
        header:'Lorem',
        description:'Lorem massage lorem messagegeggsdfdsfdsfsdfjslfsdfjdiosfjs dskfjdsklf jfjsdj fldsjf lsjf ksj ksj kfsjdk lfsdj lsjd fklsdj flksdj flksdj fksd jflksd jflskdj flsdkj flsdkj flksdjf isdpj sodif osidj fsodij fsdkjfsdoij fiosdjf osdj'
    },


    {
        image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        header:'Lorem',
        description:'Lorem massage3434233'
    }
]

</script>

<style lang="scss" scoped>
// .wrapper {
//   position: relative;

//  &:before{
//   content: '';
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   background: rgb(17, 64, 113);
//   background: linear-gradient(
//     180deg,
//     rgba(17, 64, 113, 0.7) 0%,
//     rgba(52, 141, 230, 0.0503151260504207) 100%
//   );

//   z-index: 22;
//  }
// }

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  overflow: hidden;
}

.carousel__slide {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


.quicksand-700{
  font-family: 'Quicksand', sans-serif;
}

.bg_description{
  backdrop-filter: blur(4px) ;
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(188, 192, 197, 0);
    border-radius: 12px;

 
}


@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
</style>
