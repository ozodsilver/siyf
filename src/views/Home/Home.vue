<template>
  <div class="min-h-[700px] bg-black wrapper relative overflow-hidden" id="home">
    <div class="fixed top-0 z-50 w-full">
      <Navigation></Navigation>
    </div>

    <Carousel :autoplay="40000" :itemsToShow="1" :wrap-around="true">
      <Slide v-for="image in images" :key="image">
        <div class="carousel__item p-0 relative top-[-10px]">
          <img
            :src="image.image_url"
            class="object-cover w-full brightness-50 h-[750px]"
            alt=""
          />


          <div
            class="absolute hover:scale-110 hover:z-[99999] transition w-[280px] md:top-[160px] md:left-[100px]  left-[30px] top-[200px] md:w-[400px] bg_description p-5 md:p-10 rounded-lg text-white font-bold quicksand-700 overflow-hidden"
          >
            <h1
              class="text-start md:text-3xl uppercase first-letter:font-extrabold first-letter:text-5xl first-letter:text-zinc-300"
            >
              {{ image.content[0].title }}
            </h1>
            <p class="text-xs md:text-base text-start relative mt-2">
              {{ image.content[0].text }}
            </p>
          </div>


        </div>

        <div class="p-0 top-[-20px]">
          <div
            class="absolute hover:scale-110 transition w-[280px] md:left-[200px] md:top-[260px] top-[240px] left-[60px] md:w-[400px] bg_description p-5 md:p-10 rounded-lg text-white font-bold quicksand-700 overflow-hidden"
          >
            <h1
              class="text-start md:text-3xl uppercase first-letter:font-extrabold first-letter:text-5xl first-letter:text-gray-200"
            >
              {{ image.content[1].title }}
            </h1>
            <p class="text-xs md:text-base text-start relative mt-2 s">
              {{ image.content[1].text }}
            </p>
          </div>
        </div>

        <div
          class="md:w-[400px] h-[400px] absolute top-[250px] md:top-[100px] md:right-[150px] flex items-center "
        >
          <h1 class="text-white font-semibold md:text-2xl px-5 md:px-0 md:text-justify text-center">
            {{ image.main_title }}
          </h1>
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
    image_url:
      "https://w.forfun.com/fetch/1f/1f1ffcabbcce195aa0b1364a57bd8ad5.jpeg",
    main_title: "Eng yaxshi sarflangan mablag' bu ilmga sarflangan mablag'dir",
    content: [
      {
        title: "HeaderNew1Lorem1",
        text: "HeaderNews1LoremText1",
      },
      {
        title: "HeaderNews1Lorem2",
        text: "HeaderNews1LoremText2 lore lore lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      },
    ],
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    main_title: "ilm ilm",
    content: [
      {
        title: "HeaderNew2Lorem3",
        text: "HeaderNews2LoremText3",
      },
      {
        title: "HeaderNews2Lorem4",
        text: "HeaderNews2oremText4",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>

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

.quicksand-700 {
  font-family: "Quicksand", sans-serif;
}

.bg_description {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(253, 252, 252, 0.123);
  border-radius: 12px;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
</style>
