<template>
  <div class="card lg:py-10 py-5 px-4">
    <h1 class="text-[40px] font-bold text-white text-start pl-6">
      Yangiliklar
    </h1>
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="5000"
    >
      <template #item="slotProps">
        <div
          class="border-1 surface-border border-round m-2 text-center py-5 px-3 lg:h-[24rem] h-[18rem] hover:cursor-pointer"
        >
          <img
            :src="slotProps.data.image"
            alt="image"
            class="w-full h-full rounded-2xl"
          />
        </div>АА
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel";

import { ref, onMounted } from "vue";

onMounted(() => {
  const ProductService = [
    {
      id: 1,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title: "title1",
      description: "decription",
    },
    {
      id: 2,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title: "title2",
      description: "decription",
    },

    {
      id: 9,
      image:
        "https://blog.obilet.com/wp-content/uploads/2023/07/0anagorsel-1-1024x683.jpeg",
      title: "titl3",
      description: "decription",
    },
  ];

  products.value = ProductService;
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
</style>
