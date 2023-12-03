<template>
  <div class="q-pa-sm">
    <q-toolbar class="bg-primary text-white q-my-md shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-separator dark vertical inset />
      <q-btn stretch flat label="Link" />

      <q-space />

      <q-separator dark vertical />
      <q-btn to="/products" stretch flat label="Products" />
      <q-separator dark vertical />
      <q-btn to="/" stretch label="Home" />
    </q-toolbar>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.swg-wr {
  width: max-content;
  position: relative;
}
.swg-wr-span {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: -3px;
  z-index: 1;
  transform-origin: 120px 8px;
  transform: rotate(0deg);
  display: block;
}
</style>
