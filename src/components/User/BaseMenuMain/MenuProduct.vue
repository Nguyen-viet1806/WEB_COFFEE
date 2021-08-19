<template>
  <div className="col c-12 m-4 l-4">
    <div className="ftco-menu-product-unit">
      <div className="row no-gutters">
        <div className="col c-12">
          <div
            v-bind:style="[
              '  background-image: url(' + Product.imgProduct + ');',
            ]"
            className="ftco-menu-product-unit-img"
          ></div>
        </div>
        <div className="col c-12">
          <div className="ftco-menu-product-unit-info">
            <h3>{{ Product.nameProduct }}</h3>
            <p>{{ Product.noteProduct }}</p>
            <h3>${{ Product.moneyProduct }}</h3>
            <p>
              <button class="addCart" v-on:click="addCartDetail(Product.idProduct)">
                Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "MenuProduct",
  components: {},
  props: ["Product"],
  data() {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    addCartDetail(idproduct) {
      if (localStorage.getItem("token") === null) {
        swal("Việt nqv:!", "Bạn chưa đăng nhập!:))");
        this.$router.push({ path: "/login" });
      } else {
        this.$store
          .dispatch("cartdetailModule/addcartDetail", {
            idproduct: idproduct,
            token:
              localStorage.getItem("token") === null
                ? "lỗi"
                : localStorage.getItem("token"),
          })
          .then((result) => {
            if (result === null) {
              alert("Bạn chưa đăng nhập");
            } else {
              swal({
                title: "Thành công !",
                text:
                  "Thêm sản phẩm " +
                  result.data.tblProduct.nameProduct +
                  " vào giỏ hàng thành công",
                icon: "success",
                button: "Oke!",
              });
            }
          })
          .catch((err) => {
            if (err) alert("Lỗi");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MenuText.scss";
.addCart{
animation: colorPani linear 1s infinite;
}
@keyframes colorPani {
  from {
    background: #c49b63;
    color: white;
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }
  to {
    background: white;
    color: #c49b63;
    box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63;
  }
}
.ftco-menu-product-unit-img{
animation: colorimg linear 1s infinite;
}
@keyframes colorimg {
  10% {
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }
  20% {
    box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63;
  }
  30% {
    box-shadow: 0 0 5px red, 0 0 25px red, 0 0 50px red;
  }
  40% {
    box-shadow: 0 0 5px Blue, 0 0 25px Blue, 0 0 50px Blue;
  }
  50% {
    box-shadow: 0 0 5px green, 0 0 25px green, 0 0 50px green;
  }
  60% {
    box-shadow: 0 0 5px orchid, 0 0 25px orchid, 0 0 50px orchid;
  }
  70% {
    box-shadow: 0 0 5px orange, 0 0 25px orange, 0 0 50px orange;
  }
  80% {
    box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan;
  }
  90% {
    box-shadow: 0 0 5px cornflowerblue, 0 0 25px cornflowerblue, 0 0 50px cornflowerblue;
  }
  100% {
    box-shadow: 0 0 5px rosybrown, 0 0 25px rosybrown, 0 0 50px rosybrown;
  }
}
</style>