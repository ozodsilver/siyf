<template>
  <div class="card lg:py-10 py-5">
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
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
        </div>
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
      title:
        "1lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 2,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title:
        "2lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFi-JxJOLvuZzKZbn7tgIbDwMp3FXOH5Clg&usqp=CAU",
      title:
        "3lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 4,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title:
        "4lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 5,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title:
        "5lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkUB0AapD6b1rZMQrXgkDLcPEZt5Ik9S21w&usqp=CAU",
      title:
        "6lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 7,
      image: "https://sinaps.uz/wp-content/uploads/2023/06/3-vov-119.webp",
      title:
        "7lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2018/09/09/02/25/kzkulesi-3663817_1280.jpg",
      title:
        "8lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
    {
      id: 9,
      image:
        "https://blog.obilet.com/wp-content/uploads/2023/07/0anagorsel-1-1024x683.jpeg",
      title:
        "9lorem mauris con dictum dolor, consectetur adipiscing elit in el",
    },
  ];

  products.value = ProductService;
});

const products = ref();

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
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
  background: rgb(17, 64, 113);
  background: linear-gradient(  
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}
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
