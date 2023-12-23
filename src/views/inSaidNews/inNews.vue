<template>
  <div>
    {{ rounte.params }}
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const rounte = useRoute();
</script>

<style lang="scss" scoped></style>
