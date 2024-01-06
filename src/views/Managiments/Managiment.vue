<template>
  <div>
    <Navigation class="bg-black"></Navigation>
  </div>
  <h1 class="md:text-[50px] font-semibold text-white text-end md:pr-10 bg-[#114071] pl-4 py-8">Rahbariyat</h1>

  <div class="card w-full xl:grid grid-cols-12 md:gap-2 gap-5  pt-10">
    <div
      class="kard   md:flex justify-center md:w-[700px] w-[100%] md:rounded-xl md:h-[15rem] h-[20rem] md:col-span-9 col-span-1 md:my-10 mx-auto "
      v-for="(item, index) of Managiments"
      :class="[
        index % 2 == 0
          ? 'col-span-3 md:col-end-10  col-end-1'
          : 'col-span-8 md:col-start-5  ',
      ]"
    >
      <Image
        :src="`https://siyfprojectapi.pythonanywhere.com/${item.image}`"
        alt="Image"
        preview
        class="md:h-full max-w-[300px] h-[55%] mr-3 w-full flex justify-center object-cover"
      />
      <div>
        <p class="text-white md:text-[30px] text-center  md:px-5 font-bold md:py-4 py-2 font-sans">
          {{ item.fullname }}
        </p>

        <p class="text-white text-center font-sans sm:text-sm text-xs px-0.5">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>

  <div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Image from "primevue/image";

import Navigation from "../Navigation/Navigation.vue";
import Footer from "../Footer/Footer.vue";
import {onMounted, ref} from 'vue'
import axios from "axios";

const Managiments = ref([])

onMounted(()=>{

  axios.get('https://siyfprojectapi.pythonanywhere.com/api/uz/employee/list/').then(res =>{
if(res.status == 200){
  res.data.forEach(el =>{
    Managiments.value.push(el)
  })
}
  })

})
</script>

<style lang="scss" scoped>
.card {
  background: #114071;
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}
.kard {
  // background: radial-gradient(
  //   173.3% 173.3% at -8.44% -13.57%,
  //   rgb(93, 159, 217) 0%,
  //   rgb(43, 104, 158) 100%
  // );
  background: linear-gradient(90deg, #3477b0, rgba(30, 83, 130, 0));
}

:deep img {
  border-radius: 0px;
  height: 100%;
  width: -200% !important;
}

:deep button {
  margin-left: 0.5rem;
  color: #fff;
}
@media (min-width: 768px) {
  :deep img {
    border-radius: 8px !important;
    border-top-right-radius: 0% !important ;
    border-bottom-right-radius: 0% !important;
    width: 100%;
  }
  .kard {
    background: linear-gradient(-90deg, #3477b0, rgba(30, 83, 130, 0));
  }
}
</style>
