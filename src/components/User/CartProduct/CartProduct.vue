<template>
  <div class="cartProduct">
    <table>
      <thead>
        <tr class="cartProduct-title">
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Cập nhập</th>
        </tr>
        <tr
          class="cartProduct-into"
          v-for="cartDetai in getlistCartDetail"
          :key="cartDetai"
        >
          <td>
            <button
              v-on:click="deleteCartDetails(cartDetai.idCartDetail)"
              class="deleteCartDetail"
            >
              X
            </button>
          </td>
          <td>
            <img width="100" :src="cartDetai.tblProduct.imgProduct" />
          </td>
          <td style="width: 330px">
            <h3>{{ cartDetai.tblProduct.nameProduct }}</h3>
            <p>
              {{ cartDetai.tblProduct.noteProduct }}
            </p>
          </td>
          <td>${{ cartDetai.tblProduct.moneyProduct }}</td>
          <td>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              v-model="cartDetai.quantityProduct"
              min="1"
              max="100"
            />
          </td>
          <td>
            ${{ cartDetai.tblProduct.moneyProduct * cartDetai.quantityProduct }}
          </td>
          <td>
            <button
              v-on:click="updateDetail(cartDetai)"
              class="updateCartDetail"
            >
              V
            </button>
          </td>
        </tr>
      </thead>
    </table>
    <h3 class="allPrice">
      Tổng tiền <span> ${{ priceAll }}</span>
    </h3>
    <button v-on:click="payCartDetails" class="patCartDetail">
      Thanh toán
    </button>
    <button v-on:click="onClickIsShowBill" class="patCartDetail">
      Xem hóa đơn
    </button>

    <table v-if="isShowBill">
      <thead>
        <tr class="cartProduct-title">
          <th>ID</th>
          <th>Date</th>
          <th>Note bill</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr
          class="cartProduct-into"
          v-for="bill in getlistBill"
          :key="bill"
          v-on:click="getLisBillDetail(bill)"
        >
          <td>{{ bill.idBill }}</td>
          <td>{{ bill.dateOrder }}</td>
          <td style="width: 330px">{{ bill.noteBill }}</td>
          <td>{{ bill.tblStatus.nameStatus }}</td>
          <td>
            <button
              v-on:click="updateBill(bill)"
              v-if="bill.tblStatus.idStatus === 5"
              class="buttonRecieve"
            >
              Đã nhận hàng!
            </button>
          </td>
        </tr>
      </thead>
    </table>

    <table v-if="isShowBill">
      <thead>
        <tr class="cartProduct-title">
          <th>ID bill detail</th>
          <th>ID bill</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        <tr
          class="cartProduct-into"
          v-for="billDetail in getlistBillDetail"
          :key="billDetail"
        >
          <td>{{ billDetail.idBillDetail }}</td>
          <td>{{ billDetail.tblBill.idBill }}</td>
          <td><img width="100" :src="billDetail.tblProduct.imgProduct" /></td>
          <td style="width: 330px">{{ billDetail.quantityProduct }}</td>

          <td>${{ billDetail.tblProduct.moneyProduct }}</td>
          <td>
            ${{
              billDetail.tblProduct.moneyProduct * billDetail.quantityProduct
            }}
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartProduct",
  components: {},
  props: [],
  data() {
    return {
      quantityProduct: 0,
      priceAll: 0,
      isShowBill: false,
    };
  },
  computed: {
    ...mapGetters({
      getlistCartDetail: "cartdetailModule/getlistCartDetail",
      getlistBill: "cartdetailModule/getlistBill",
      getlistBillDetail: "cartdetailModule/getlistBillDetail",
    }),
  },
  watch: {},
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getlistCartDetails();
      this.getListBillByUser();
    },
    updateBill(bill) {
      this.$store
        .dispatch("cartdetailModule/updateBill", {
          idbill: bill.idBill,
          idstatus: 6,
        })
        .then((res) => {
          if (res) {
            this.getListBillByUser();
          }
        });
    },
    getLisBillDetail(bill) {
      console.log(bill);
      this.$store.dispatch("cartdetailModule/getListBillDetailByBill", {
        idbill: bill.idBill,
      });
    },
    onClickIsShowBill() {
      this.isShowBill = !this.isShowBill;
    },
    getListBillByUser() {
      if (localStorage.getItem("token") === null) {
        alert("Bạn chưa đăng nhập");
        this.$router.push({ path: "/login" });
      } else {
        this.$store.dispatch("cartdetailModule/getListBill", {
          token: localStorage.getItem("token"),
        });
      }
    },
    payCartDetails() {
      if (localStorage.getItem("token") === null) {
        alert("Bạn chưa đăng nhập");
        this.$router.push({ path: "/login" });
      } else {
        this.$store
          .dispatch("cartdetailModule/payCartDetail", {
            token: localStorage.getItem("token"),
          })
          .then((res) => {
            if (res) {
              this.priceAll = 0;
              this.initData();
              alert(res.data);
            }
          });
      }
    },
    updateDetail(cartDetai) {
      this.quantityProduct = Number(cartDetai.quantityProduct);
      if (this.quantityProduct <= 0) {
        cartDetai.quantityProduct = 1;
        alert("Không được để số lượng bằng nhỏ hơn 1");
      } else {
        this.$store
          .dispatch("cartdetailModule/updateCartDetail", {
            ...cartDetai,
            quantityProduct: Number(this.quantityProduct),
          })
          .then((res) => {
            if (res) {
              alert(
                "Cập nhập sản phẩm " +
                  res.data.tblProduct.nameProduct +
                  " thành công!"
              );
              (this.priceAll = 0), this.getlistCartDetails();
            }
          });
      }
    },
    getlistCartDetails() {
      if (localStorage.getItem("token") === null) {
        alert("Bạn chưa đăng nhập");
        this.$router.push({ path: "/login" });
      } else {
        this.$store
          .dispatch("cartdetailModule/getListCartDetail", {
            token: localStorage.getItem("token"),
          })
          .then((res) => {
            if (res) {
              res.data.map((item) => {
                this.priceAll += Number(
                  item.tblProduct.moneyProduct * item.quantityProduct
                );
              });
            }
          });
      }
    },

    deleteCartDetails(idcartdetail) {
      if (localStorage.getItem("token") === null) {
        alert("Bạn chưa đăng nhập");
        this.$router.push({ path: "/login" });
      } else {
        this.$store
          .dispatch("cartdetailModule/deteleCartDetail", {
            idcartdetail: idcartdetail,
          })
          .then((res) => {
            if (res) {
              alert(res.data);
              this.initData();
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./CartProduct.scss";
.deleteCartDetail:hover {
  cursor: pointer;
  color: red !important;
}
.updateCartDetail:hover {
  cursor: pointer;
  color: green !important;
}
.allPrice {
  margin-left: 78%;
}
.buttonRecieve {
  cursor: pointer;
  width: 150px !important;
  height: 30px !important;
  &:hover {
    color: #c49b63 !important;
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }
}
.patCartDetail {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 78%;
  width: 145px;
  height: 55px;
  background-color: transparent;
  border: 1px solid #c49b63;
  color: #c49b63;
  box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  &:hover {
    color: white;
    background: #c49b63;
    cursor: pointer;
    box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63,
      0 0 100px #c49b63;
  }
}
img {
  box-shadow: 0 0 5px orchid, 0 0 25px orchid, 0 0 50px orchid;
}
</style>