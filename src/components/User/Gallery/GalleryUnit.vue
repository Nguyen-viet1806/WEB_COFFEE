<template>
  <div className="col c-12 m-3">
    <!-- {" "} -->

    <div className="ftco-gallery-product-unit">
      <div className="row no-gutters">
        <!-- {" "}
                      {/* chia 2 cột 03 */}
                         {/* cột 1 03*/} -->
        <div className="col c-12 m-12 l-12">
          <!-- {" "} -->

          <div
            v-bind:style="[
              '  background-image: url(' + Product.imgProduct + ');',
            ]"
            className="ftco-gallery-product-unit-img"
          ></div>
        </div>
        <!-- {/* cột 2  03*/} -->
        <div className="col c-12 m-12 l-12">
          <!-- {" "} -->

          <div className="ftco-gallery-product-unit-info">
            <h3>
              <a href="#">{{ Product.nameProduct }}</a>
            </h3>
            <p>{{ Product.noteProduct }}</p>
            <p className="price">
              <span>${{ Product.moneyProduct }}</span>
            </p>
            <p>
              <a className="add" v-on:click="addCartDetail(Product.idProduct)"
                >Add to Cart</a
              >
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
  name: "GalleryUnit",
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
@import "./Gallery.scss";
@import "./GalleryUnit-Info.scss";
.add{
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
</style>