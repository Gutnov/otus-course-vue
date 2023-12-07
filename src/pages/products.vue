<template>
  <div class="products bg-white">
    <template v-if="!loading">
      <h1>Products</h1>
      <div class="products__wr">
        <ProductCard v-for="item in products" :key="item.id" :card-data="item" />
      </div>
    </template>
    <q-spinner-ios v-else color="primary" size="100px" :thickness="10" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { fetchProducts } from '../api';
import ProductCard from '../components/productCard.vue';
let products = ref({});
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  products.value = await fetchProducts();
  loading.value = false;
});
</script>

<style lang="scss">
.products__wr {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
</style>
