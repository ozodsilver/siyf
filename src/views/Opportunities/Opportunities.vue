<template>
  <div class="opportunities">
    <h1 class="text-[50px] text-center text-white pt-10 font-bold">
      Imkoniyatlar
    </h1>

    
    <div class="flex justify-center gap-10 flex-col items-center md:flex-row   mt-12">
      <div class="card w-[350px] h-[300px] md:w-[400px] md:h-[250px] p-ripple" v-ripple >
        <div class="card-inner">
          <div class="card-front">
            <div>
                <img src="../../assets/images/pngwing.com.png" class="img-thumbnail w-2/4 block mx-auto" alt="...">
            <h2 class="text-center text-white">Studentlarga</h2>
            </div>
          </div>
          <div class="card-back text-xs overflow-hidden">
            
            <p>
             sdsds
            </p>
          </div>
        </div>
      </div>


      <div class="card  w-[350px] h-[300px] md:w-[400px] md:h-[250px]  mt-8 md:mt-0">
        <div class="card-inner">
          <div class="card-front">
            <div>
                <img src="../../assets/images/pngwing.com.png" class="img-thumbnail w-2/4 block mx-auto" alt="...">
            <h2 class="text-center text-white">Studentlarga</h2>
            </div>
          </div>
          <div class="card-back text-xs overflow-hidden">
            
            <p>
             
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Fieldset from "primevue/fieldset";
import { onMounted } from "vue";


</script>

<style scoped lang="scss">
.opportunities {
  padding: 0 20px;
  background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}

.card {
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.433s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6a2c70;
  border-radius: 24px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
  border: 2px solid rgb(52, 119, 176);
  cursor: pointer;
}

.card-back {
background: red;
backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(188, 192, 197, 0.32);
    border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 24px;
  padding: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}
</style>
