<template>
  <div className="ftco-product-info">
    <div className="ftco-product-info-text">
      <span>Discover</span>
      <h1>OUR MENU</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <p><button v-on:click="viewMenu" class="viewMenu">View Full Menu</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  methods: {
    viewMenu(){
      this.$router.push({path:'/product'})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./ProductInfo.scss";
.viewMenu {
  cursor: pointer;
  box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63,
    0 0 100px #c49b63;
}
</style>