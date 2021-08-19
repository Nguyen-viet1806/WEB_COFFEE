<template>
  <div className="grid ftco-about" style="box-sizing: unset">
    <div className="row no-gutters" style="box-sizing: unset">
      <div className="col c-12 m-6 l-6">
        <div className="ftco-about-img" style="box-sizing: unset"></div>
      </div>
      <div className="col c-12 m-6 l-6">
        <AboutInfo />
      </div>
    </div>
  </div>
</template>

<script>
import AboutInfo from "@/components/User/About/AboutInfo.vue";
export default {
  name: "About",
  components: {
    AboutInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "./About.scss";
</style>