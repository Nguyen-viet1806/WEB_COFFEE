<template>
  <div v-bind:class="['col c-12 m-4 l-3', address.id === 1 ? 'l-o-2' : '']">
    <div className="ftco-intro-address-unit">
      <div className="ftco-intro-address-unit-logo"><i v-bind:class="['fa', address.logo]" aria-hidden="true"></i></div>
      <div className="ftco-intro-address-unit-text">
        <h4>{{ address.title }}</h4>
        <p>{{ address.describe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressUnit",
  props: ['address'],
 
};
</script>

<style lang="scss" scoped>
@import "./AddressUnit.scss";
</style>