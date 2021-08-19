<template>
  <div class="ftco-page-product">
    <MenuProduct />
    <BaseMenuMain
     
    />
  </div>
</template>

<script>
import MenuProduct from "@/components/User/MenuProduct/MenuProduct.vue";
import BaseMenuMain from "@/components/User/BaseMenuMain/Menu.vue";
export default {
  name: "Product",
  components: { MenuProduct, BaseMenuMain },
  data() {
    return{
      
    }
  },
  computed: {
    
  },
};
</script>

<style lang="scss" scoped>
.ftco-page-product {
  padding: 0 7% 0 7%;
  width: 100%;
  background-image: url("https://preview.colorlib.com/theme/coffeeblend/images/bg_4.jpg.webp");
  background-size: cover;
}
</style>