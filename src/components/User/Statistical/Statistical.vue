<template>
  <div className="grib ftco-statistical ">
    <div className="row no-gutters">
      <StatisticalUnit
        v-for="statistical in Statisticals"
        :key="statistical.id"
        v-bind:statistical="statistical"
      />
    </div>
  </div>
</template>

<script>
import StatisticalUnit from "@/components/User/Statistical/StatisticalUnit.vue";
export default {
  name: "Statistical",
  components: { StatisticalUnit },
  data() {
    return {
      Statisticals: [
        {
          id: 1,
          quantity: "100",
          Title: "Coffee Branches",
        },
        {
          id: 2,
          quantity: "85",
          Title: "Number of Awards",
        },
        {
          id: 3,
          quantity: "10,567",
          Title: "Happy Customer",
        },
        {
          id: 4,
          quantity: "900",
          Title: "Staff",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./Statistical.scss";
</style>