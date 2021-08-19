<template>
  <div className="grid ftco-intro">
    <div className="row no-gutters">
      <div className="col c-12 m-8 l-8">
        <div className="ftco-intro-address">
          <div className="row no-gutters">
            <AddressUnit
              v-for="address in address"
              :key="address.id"
              v-bind:address="address"
            />
          </div>
        </div>
      </div>
      <div className="col c-12 m-4 l-4">
        <AddressForm />
      </div>
    </div>
  </div>
</template>

<script>
import AddressUnit from "@/components/User/Address/AddressUnit.vue";
import AddressForm from "@/components/User/Address/AddressForm.vue";
export default {
  name: "Address",
  components: {
    AddressUnit,
    AddressForm,
  },
  data(){
    return{
      address: [
      {
        id: 1,
        logo: " fa-phone",
        title: "000 (123) 456 7890",
        describe:
          "A small river named Duden flows by their place and supplies.",
      },
      {
        id: 2,
        logo: "fa-map-marker",
        title: "198 West 21th Street",
        describe: "203 Fake St. Mountain View, San Francisco, California, USA",
      },
      {
        id: 3,
        logo: "fa-clock-o",
        title: "Open Monday-Friday",
        describe: "8:00am - 9:00pm",
      },
    ],
    }
  },
  computed: {
   
  },
};
</script>

<style lang="scss" scope>
@import "./Address.scss";
</style>