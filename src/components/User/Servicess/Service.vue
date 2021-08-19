<template>
  <div className="grid ftco-service">
    <div className="row no-gutters">
      <ServiceUnit
        v-for="service in services"
        :key="service.id"
        v-bind:service="service"
      />
    </div>
  </div>
</template>
<script>
import ServiceUnit from "@/components/User/Servicess/ServiceUnit.vue";
export default {
  name: "Service",
  components: { ServiceUnit },
  data(){
    return {
      services: [
      {
        id: 1,
        logo: "fa-grav",
        title: "EASY TO ORDER",
        describe:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      },
      {
        id: 2,
        logo: "fa-car",
        title: "FASTEST DELIVERY",
        describe:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      },
      {
        id: 3,
        logo: "fa-coffee",
        title: "QUALITY COFFEE",
        describe:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      },
    ],
    }
  },
  computed: {
   
  },
};
</script>

<style lang="scss" scoped>
@import "./Service.scss";
</style>