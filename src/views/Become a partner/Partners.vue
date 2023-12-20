<template>
  <div>
    <Navigation1></Navigation1>
  </div>
  <div class="section lg:flex justify-evenly w-full h-[55rem] md:py-10 py-14">
    <!--  -->
    <div
      class="bg-img md:w-2/5 w-[85%] m-auto md:h-full sm:h-4/5 h-2/4 md:pt-0"
    ></div>
    <div
      class="text-card md:w-2/5 w-[100%] md:px-0 px-6 m-auto md:h-full h-2/4 mt-10"
    >
      <p
        class="text-white font-semibold font-sans md:text-7xl text-3xl md:pt-36 md:text-left text-center"
      >
        BUSINESS PARTNERSHIP
      </p>
      <P class="text-white font-sans py-5 md:text-left text-center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
        quasi provident neque, tempora molestiae aut rerum necessitatibus
        consequuntur. Vel quidem veritatis facere officiis inventore tenetur
        dolor rerum id placeat? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Facilis amet quasi provident neque, tempora molestiae
        aut rerum necessitatibus consequuntur. Vel quidem veritatis facere
        officiis inventore tenetur dolor rerum id placeat?
      </P>
    </div>

    <!--  -->
  </div>
  <div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navigation1 from "../Navigation/Navigation.vue";

import Footer from "../Footer/Footer.vue";
</script>

<style lang="scss" scoped>
.section {
  background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}

@media (min-width: 768px) {
  .text-card {
    background: linear-gradient(
      -90deg,
      #3477b0,
      rgba(30, 83, 130, 0)
    ) !important;
  }
}
.text-card {
  background: linear-gradient(360deg, #3477b0, rgba(30, 83, 130, 0));
}
</style>
