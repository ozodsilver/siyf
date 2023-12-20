<template>
  <div>
    <nav class="glass">
      <div
        class="max-w-screen-xl text-base font-sans flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-white text-2xl font-semibold whitespace-nowrap"
            >Flowbite</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white"
          >
            <li>
              <router-link
                to="/"
                href="#home"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                aria-current="page"
                >Bosh sahifa</router-link
              >
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
              >
                Imkoniyatlar
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li class="hover:bg-gray-100 flex items-center px-2">
                    <i class="fas fa-chalkboard-user"></i>
                    <a
                      href="#learner"
                      class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                      >O'quvchilarga</a
                    >
                  </li>
                  <li class="flex items-center px-2 hover:bg-gray-100">
                    <i class="fas fa-graduation-cap"></i>
                    <a
                      href="#student"
                      class="block px-2 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Studentlarga</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white rounded md:border-0 md:p-0"
                >Hamkor va do'stlar</a
              >
            </li>
            <li>
              <router-link
                to="/Partners"
                class="block py-2 px-3 rounded text-white md:hover:bg-transparent md:border-0 md:p-0"
                >Become a partner</router-link
              >
            </li>
            <li>
              <router-link
                to="/Managiment"
                class="block py-2 px-3 rounded text-white md:hover:bg-transparent md:border-0 md:p-0"
                >Rahbariyat
              </router-link>
            </li>

            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0"
                >Contacts</a
              >
            </li>

            <li>
              <a
                href="#faq"
                class="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0"
                >FAQ</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentColor = "rgb(255,255,255)";

import Dropdown from "primevue/dropdown";
</script>

<style scoped>
.glass {
  background-color: rgba(25, 72, 95, 0.356);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
