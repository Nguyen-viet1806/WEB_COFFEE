<template>
  <div class="col c-12 m-6 l-6">
    <h2 class="category">Page</h2>
    <MenuProductUnit/>
     <MenuProductUnit/>
      <MenuProductUnit/>
       <MenuProductUnit/>
  </div>
</template>

<script>
import MenuProductUnit from "@/components/User/MenuProduct/MenuProductUnit.vue";
export default {
  name: "ListMenuPage",
  components: {
    MenuProductUnit,
  },
};
</script>

<style lang="scss" scoped>
@import "./MenuProduct.scss";
</style>