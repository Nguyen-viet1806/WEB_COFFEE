<template>
  <div className="grid ftco-menu">
    <div className="row no-gutters">
      <div className="col c-12">
        <MenuTitle />
      </div>
      <div className="col c-12">
        <div className="ftco-menu-info">
          <a class="categoryProduct"
            v-for="category in listCategory"
            :key="category"
            v-on:click="getListProductWithCategorys(category.idCategory)"
            >{{ category.nameCategory }}
          </a>
        </div>
      </div>
      <div className="col c-12">
        <div className="ftco-menu-product">
          <div className="row no-gutters">
            <MenuProduct
              v-for="Product in productWithCategorys"
              :key="Product"
              v-bind:Product="Product"
            />
            <div class="pani">
              <button v-on:click.prevent="pagePre" class="panigation">
                <i class="fa fa-chevron-left"></i>
              </button>
              <button class="panigation">{{ pageable + 1 }}</button>
              <button v-on:click.prevent="pageNext" class="panigation">
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>
            <audio src="vietnqv.mp3" loop autoplay />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuTitle from "@/components/User/BaseMenuMain/MenuTitle.vue";
import MenuProduct from "@/components/User/BaseMenuMain/MenuProduct.vue";
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  components: { MenuTitle, MenuProduct },
  props: [],
  data() {
    return {
      pageable: 0,
      idCt: 58,
    };
  },
  computed: {
    ...mapGetters({
      listCategory: "categoryModule/listCategory",
      productWithCategorys: "productModule/listProduct",
    }),
  },
  watch: {
    pageable(){
      this.getListProductWithCategorys(this.idCt)
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getAllListCategoryByStatus();
      this.getListProductWithCategorys(this.idCt)
    },
    pageNext() {
      this.pageable++;
    },
    pagePre() {
      if (this.pageable > 0) {
        this.pageable--;
      }
    },
    getAllListCategoryByStatus() {
      this.$store.dispatch("categoryModule/getListCategoryByStatus", {
        idstatus: 1,
      });
    },
    getListProductWithCategorys(idcategory) {
      this.idCt = idcategory;
      this.$store.dispatch(
        "productModule/getListProductByStatusAndByCategoryWithPageLimit",
        {
          idstatus: 1,
          idcategory: idcategory,
          page: this.pageable,
          limit: 3,
        }
      );
    },
  },
};
</script>

<style lang="scss" >
@import "./Menu.scss";
@import "./MenuText.scss";
.pani {
  margin: 0 auto;
}
.panigation {
  cursor: pointer;
  margin: 20px 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #c49b63;
  background: transparent;
  color: #c49b63;
 animation: colorPani linear 1s infinite;
}
.categoryProduct{
  border-radius: 10px;
animation: colorimg linear 1s infinite;
}
@keyframes colorimg {
  10% {
    background: white;
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }
  20% {
    background: #c49b63;
    box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63;
  }
  30% {
    background: red;
    box-shadow: 0 0 5px red, 0 0 25px red, 0 0 50px red;
  }
  40% {
    background: Blue;
    box-shadow: 0 0 5px Blue, 0 0 25px Blue, 0 0 50px Blue;
  }
  50% {
    background: green;
    box-shadow: 0 0 5px green, 0 0 25px green, 0 0 50px green;
  }
  60% {
    background: orchid;
    box-shadow: 0 0 5px orchid, 0 0 25px orchid, 0 0 50px orchid;
  }
  70% {
    background: orange;
    box-shadow: 0 0 5px orange, 0 0 25px orange, 0 0 50px orange;
  }
  80% {
    background: cyan;
    box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan;
  }
  90% {
    background: cornflowerblue;
    box-shadow: 0 0 5px cornflowerblue, 0 0 25px cornflowerblue, 0 0 50px cornflowerblue;
  }
  100% {
    background: rosybrown;
    box-shadow: 0 0 5px rosybrown, 0 0 25px rosybrown, 0 0 50px rosybrown;
  }
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