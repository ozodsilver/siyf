<template>
  <div class="flex">
    <div class="card w-[300px] ">
      <div class="kard2 p-0 overflow-hidden col-2 backdrop-blur-md  h-full" style="transition: all 0.1s ease 0s">
        <div class="px-3 mt-2" style="
          width: 100%;
          margin: auto;
          overflow: auto;
          /* border-right: 1px solid rgb(247, 243, 243); */
        ">
          <div class="pt-3 d-flex gap-2 align-items-center backdrop-blur-md">
            <!-- <img
            src="../../../imgaes/dashboard.png"
            alt="image"
            class="w-10/12 m-auto"
          /> -->
          </div>
          <div class="d-flex flex-column position-relative align-items-center" style="min-height: 75vh; width: 100%">
            <router-link :to="{name:'employee'}"
              class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
              style="cursor: pointer">
              <div class="flex gap-3 items-center px-2">
                <i class="fa-solid fa-house text-lg py-[11px] px-[12px] rounded-lg inner"></i>
                <span class="text-sm font-sans"> Uy</span>
              </div>
            </router-link>

            <router-link :to='{name:"addNews"}'
              class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
              id="link1" style="cursor: pointer">
              <div class="flex gap-3 items-center px-2">
                <i class="fa-solid fa-house text-lg py-[11px] px-[12px] rounded-lg inner"></i>
                <span class="text-sm font-sans"> Uy</span>
              </div>
            </router-link>

          </div>
        </div>
      </div>

    </div>



    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  background-color: aliceblue;
  // background: linear-gradient(-180deg, #858585a4, rgba(201, 198, 198, 0.589));
}

.kard2 {
  background: linear-gradient(180deg, #247a9452, rgba(44, 164, 233, 0.863));
}
</style>
