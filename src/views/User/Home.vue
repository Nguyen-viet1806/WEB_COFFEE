<template>
  <About />
  <Service />
  <Product />
  <Statistical />
  <Gallery />
  <BlogImg />
  <BaseMenuMain  />
  <Testimony />
  <MapForm />
</template>

<script>
import About from "@/components/User/About/About.vue";
import Service from "@/components/User/Servicess/Service.vue";
import Product from "@/components/User/Product/Product.vue";
import Statistical from "@/components/User/Statistical/Statistical.vue";
import Gallery from "@/components/User/Gallery/Gallery.vue";
import BlogImg from "@/components/User/BlogImg/BlogImg.vue";
import BaseMenuMain from "@/components/User/BaseMenuMain/Menu.vue";
import Testimony from "@/components/User/Testimony/Testimony.vue";
import MapForm from "@/components/User/MapForm/MapForm.vue";
export default {
  name: "Home",
  components: {
    About,
    Service,
    Product,
    Statistical,
    Gallery,
    BlogImg,
    BaseMenuMain,
    Testimony,
    MapForm,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
  },
  watch: {},
  mounted() {},
  methods: {
    initData() {},
  
  },
};
</script>

<style lang="scss">
</style>