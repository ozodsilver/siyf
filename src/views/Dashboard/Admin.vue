<template>
  <div class="card w-full">
    <div
      class="kard2 p-0 overflow-hidden col-2 backdrop-blur-md w-[20%] h-full"
      style="transition: all 0.1s ease 0s"
    >
      <div
        class="px-3 mt-2"
        style="
          width: 100%;
          margin: auto;
          overflow: auto;
          /* border-right: 1px solid rgb(247, 243, 243); */
        "
      >
        <div class="pt-3 d-flex gap-2 align-items-center backdrop-blur-md">
          <img
            src="../../../imgaes/dashboard.png"
            alt="image"
            class="w-10/12 m-auto"
          />
        </div>
        <div
          class="d-flex flex-column position-relative align-items-center"
          style="min-height: 75vh; width: 100%"
        >
          <a
            href=""
            class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            id="link1"
            style="cursor: pointer"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fa-solid fa-house text-lg py-[11px] px-[12px] rounded-lg inner"
              ></i
              ><span class="text-sm font-sans"> Uy</span>
            </div></a
          ><!-- Yangiliklar --><a
            aria-current="page"
            href="/addNews"
            class="text-white router-link-active router-link-exact-active mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fa-regular fa-newspaper text-lg p-2.5 py-[11px] px-[12px] rounded-lg inner"
              ></i
              ><span class="text-sm font-sans"> Yangiliklar</span>
            </div></a
          ><!-- Xodimlar --><a
            href=""
            class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fas fa-chalkboard-user text-lg p-2.5 py-[11px] px-[12px] rounded-lg inner"
              ></i
              ><span class="text-sm font-sans">Xodimlar</span>
            </div></a
          ><!-- Parents --><a
            href=""
            class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fas fa-chalkboard-user text-lg p-2.5 py-[11px] px-[12px] rounded-lg inner hover:bg-slate-200 hover:text-primary"
              ></i
              ><span class="text-sm font-sans">Bolim4</span>
            </div></a
          ><a
            href=""
            class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fas fa-chalkboard-user text-lg p-2.5 py-[11px] px-[12px] rounded-lg inner"
              ></i
              ><span class="text-sm font-sans">Bolim5</span>
            </div></a
          ><a
            href=""
            class="text-white mt-4 flex text-start bg-transparent rounded-xl w-full py-2 align-items-center exact hover:bg-slate-200 hover:text-primary"
            ><div class="flex gap-3 items-center px-2">
              <i
                class="fas fa-chalkboard-user text-lg p-2.5 py-[11px] px-[12px] rounded-lg inner"
              ></i
              ><span class="text-sm font-sans">Bolim6</span>
            </div></a
          ><button
            class="justify-content-start d-flex text-white bg-transparent gap-3 items-center text-start absolute left-3 bottom-3 w-100 shadow-sm p-3 rounded-lg px-3 hover:bg-slate-200 hover:text-primary"
            style="outline: none; border: none"
          >
            <i
              class="fas fa-arrow-right-from-bracket text-sm font-extrabold"
            ></i>
            <span class="text-sm"> Sign out</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  F
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
