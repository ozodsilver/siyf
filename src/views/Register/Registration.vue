<template>
  <div class="form_block px-10 pt-20">
   
    <div class="flex flex-col md:flex-row justify-around w-full">
      <div>
        <img src="@/assets/images/pinpng.com-signup-png-5027094.png" alt="" />
      </div>

      <form class="md:w-[350px] pt-8 p-1 rounded-xl">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Email</label
          >
          <input
          v-model="email"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="siyf@gmail.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Tel</label
          >
          <input
          v-model="phone"
            type="tel"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="+998 99 999 99 99"
          />

          <div class="card flex justify-content-center">
        <Textarea v-model="textAreaValue" class="w-full rounded-lg mt-6 text-sm h-[130px]" placeholder="Sizni qiziqtirgan savolni qoldiring" />
    </div>
        </div>

        <div class="flex items-center justify-end">
          <button
            type="submit"
            class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Jo'natish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Textarea from 'primevue/textarea';

const email = ref('')
const  phone = ref('')
const textAreaValue = ref('')

const data = {
email:'email@gmail.com',
phone:'998898777',
feedback:'fuck you'
}

</script>

<style lang="scss" scoped>
.form_block {
  background: rgb(17, 64, 113);
}
</style>
