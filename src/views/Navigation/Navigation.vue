<template>
  <div>
    <nav class="glass">
      <div
        class="max-w-screen-xl text-sm font-sans flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to = '/' class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-white text-2xl font-semibold whitespace-nowrap"
            >Flowbite</span
          >
        </router-link>
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
                >  {{ $t('Navigation.home') }}</router-link
              >
            </li>
            <li>
              <a href="#opportunites"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                
              >
              {{ $t('Navigation.opportune') }}
             
              </a>
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

            <li>
              <div>
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton
                      class="inline-flex w-full justify-center px-2 items-center rounded-lg text-white focus:outline-none focus-visible:ring-2 uppercase focus-visible:ring-white/75"
                    >
                     {{ selectedLang }}
                      <i
                        class="fas fa-chevron-down text-sm mx-2 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      ></i>
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-50 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-110 opacity-0"
                  >
                    <MenuItems
                      class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                          @click="selectedLanguage('ru')"
                            :class="[
                              active
                                ? 'bg-primary text-white'
                                : 'text-gray-900',
                              'group flex w-full items-center capitalize rounded-md px-2 py-2 text-sm',
                          ]"
                          >
                          ru 
                          </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <button
                          @click="selectedLanguage('en')"
                            :class="[
                              active
                                ? 'bg-primary text-white'
                                : 'text-gray-900',
                              'group flex w-full items-center capitalize rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            en
                          </button>
                        </MenuItem>

                        <MenuItem v-slot="{ active }">
                          <button
                          @click="selectedLanguage('uz')"
                            :class="[
                              active
                                ? 'bg-primary text-white'
                                : 'text-gray-900',
                              'group flex w-full items-center capitalize rounded-md px-2 py-2 text-sm',
                            ]" 
                          >
                            uz 
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import Dropdown from "primevue/dropdown";
// for localization
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })


const selectedLang = ref(`${locale.value}`)

const selectedLanguage = (lang)=> {
  selectedLang.value = lang
}


watch(selectedLang, (newVal) => {
  locale.value = newVal
})
</script>

<style scoped>
.glass {
  background-color: rgba(25, 72, 95, 0.356);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
