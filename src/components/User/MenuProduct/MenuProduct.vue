<template>
  <div class="grid ftco-page-product-menu">
    <div class="row no-gutters">
      <ListMenuPage />
      <ListMenuPage />
      <ListMenuPage />
      <ListMenuPage />
      <div class="col c-12 m-6 l-6"></div>
      <div class="col c-12 m-6 l-6"></div>
      <div class="col c-12 m-6 l-6"></div>
    </div>
  </div>
</template>

<script>
import ListMenuPage from "@/components/User/MenuProduct/ListMenuPage.vue";
export default {
  name: "MenuProduct",
  components: { ListMenuPage },
};
</script>

<style lang="scss" scoped>
@import "./MenuProduct.scss";
</style>