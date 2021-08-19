<template>
  <div className="grid ftco-testimony">
    <div className="row no-gutters">
      <div className="col c-12 m-12 l-12">
        <div className="ftco-testimony-title">
          <span>Testimony</span>
          <h1>Customers Says</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <TestimonyUnit v-for="Testimony in Testimony" :key="Testimony.id" v-bind:Testimony="Testimony"/>
      
    </div>
  </div>
</template>

<script>
import TestimonyUnit from "@/components/User/Testimony/TestimonyUnit.vue";
export default {
  name: "Testimony",
  components: { TestimonyUnit },
  computed: {
    Testimony() {
      return this.$store.state.Testimony;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Testimony.scss";
</style>