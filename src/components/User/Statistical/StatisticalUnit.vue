<template>
  <div className="col c-12 m-6 l-3">
    <div className="ftco-statistical-unit">
      <div className="ftco-statistical-unit-box">
        <img
          src="https://img.icons8.com/carbon-copy/100/000000/cafe.png"
          width="70"
        />
      </div>

      <h1>{{ statistical.quantity }}</h1>
      <h4>{{ statistical.Title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticalUnit",
  props: ["statistical"],
};
</script>

<style lang="scss" scoped>
@import "./StatisticalUnit.scss";
</style>