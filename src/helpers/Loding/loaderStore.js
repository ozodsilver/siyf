import { defineStore } from 'pinia'

import {ref} from 'vue'
export const loaderStore = defineStore('loader', () => {

    const isLoaded = ref(true)
  
    return { isLoaded }
  })