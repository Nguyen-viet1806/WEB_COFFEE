<template>
  <div className="overlay">
    
    <!-- {/* navbar */} -->
    <div className="grid navbar">
      <div className="row no-gutters">
        <div className="col l-1 l-o-1 c-6 m-1 m-o-1">
          <NavbarLogo />
        </div>
        <div className="col l-9 c-6 m-9">
          <NavbarMenu />
        </div>
      </div>
    </div>
    <!-- {/* banner */} -->
    <div className="grid ">
      <div className="row">
        <div className="banner">
          <div className="col c-12 m-12 l-12">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Address />
</template>

<script>
import Address from "@/components/User/Address/Address.vue";
import Banner from "@/components/User/Banner/Banner.vue";
import NavbarLogo from "@/components/User/Navbar/NavbarLogo.vue";
import NavbarMenu from "@/components/User/Navbar/NavbarMenu.vue";

export default {
  name: "Header",
  components: {
    Banner,
    NavbarLogo,
    NavbarMenu,
    Address,
  },
};
</script>

<style lang="scss" >
@import "./Header.scss";
</style>