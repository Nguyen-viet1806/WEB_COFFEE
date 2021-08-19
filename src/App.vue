<template>
  <div>
    <template v-if="islogin">
      <div>
        <Header />
        <router-view />
        <Footer />
      </div>
    </template>
  </div>
</template>

<script>
import Header from "@/components/User/Header/Header.vue";
import Footer from "@/components/User/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  props: {},
  data() {
    return{
      //  checkLogin: true,
      islogin: true,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    // this.testLogin();
  },
  methods: {
    //  testLogin() {
    //   if (localStorage.getItem("token") !== null) {
    //     this.checkLogin = false;
    //     this.islogin = true;
    //   }
    // },
    // login(emailg, passg) {
    //   this.$store
    //     .dispatch("loginModule/login", {
    //       email: emailg,
    //       pass: passg,
    //     })
    //     .then((res) => {
    //       if (res) {
    //         let emaiPass = emailg + ":" + passg;
    //         let token = window.btoa(emaiPass);
    //         if (res.data === token) {
    //           localStorage.setItem("token", res.data);
    //           location.reload();
    //             (this.checkLogin = false), (this.islogin = true);
    //         }else{
    //           alert("Sai thông tin đăng nhập !")
    //         }
    //       }
    //     });
    // },
  },
};
</script>
<style lang="scss">
@import url("./Grid.scss");
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css?family=Great+Vibes");
* {
  box-sizing: border-box;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
h1,
h2,
h3,
h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.row {
  width: 100%;
  max-width: 100%;
}
</style>
