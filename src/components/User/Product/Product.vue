<template>
  <div className="grid ftco-product">
    <div className="row no-gutters">
      <div className="col c-12 m-6 l-6">
        <ProductInfo />
      </div>
      <div className="col c-12 m-6 l-6">
        <div className="row no-gutters">
          <div className="col c-12 m-6 l-6">
            <div className="ftco-product-unit">
              <div className="ftco-product-unit-1"></div>
            </div>
          </div>
          <div className="col c-12 m-6 l-6">
            <div className="ftco-product-unit">
              <div className="ftco-product-unit-2"></div>
            </div>
          </div>
          <div className="col c-12 m-6 l-6">
            <div className="ftco-product-unit">
              <div className="ftco-product-unit-3"></div>
            </div>
          </div>
          <div className="col c-12 m-6 l-6">
            <div className="ftco-product-unit">
              <div className="ftco-product-unit-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/User/Product/ProductInfo.vue";
export default {
  name: "Product",
  components: {
    ProductInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "./Product.scss";
</style>