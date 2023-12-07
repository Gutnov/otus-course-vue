<template>
  <div class="product-card">
    <q-card class="my-card bg-white" flat bordered>
      <q-img height="200px" fit="contain" :src="props.cardData.image" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="product-card__title col text-h6 ellipsis">{{ props.cardData.title }}</div>
        </div>

        <q-rating :model-value="randonStars()" :max="5" size="32px" />
      </q-card-section>

      <q-separator />
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps(['cardData']);

function randonStars() {
  return Math.floor(1 + Math.random() * 5);
}
</script>

<style lang="scss">
.q-img__container {
  padding: 0 10px;
}
.product-card__title {
  max-width: 190px !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
}
</style>
