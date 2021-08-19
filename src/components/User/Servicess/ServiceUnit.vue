<template>
  <div className="col c-12 m-4">
    <div className="ftco-service-unit">
      <div className="ftco-service-unit-icon">
        <i v-bind:class="['fa', service.logo]" aria-hidden="true"></i>
      </div>
      <div className="ftco-service-unit-info">
        <h4>{{ service.title }}</h4>
        <p>{{ service.describe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceUnit",
  props: ["service"],
};
</script>

<style lang="scss" scoped>
@import "./ServiceUnit.scss";
</style>