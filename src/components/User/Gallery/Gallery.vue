<template>
  <div className="grid ftco-gallery">
   
    <div className="row no-gutters">
      <!-- {" "}
          {/*chia 2 cột lớn  01*/} -->
      <div className="col c-12 m-12">
        <!-- {" "}
            {/* cột 1 01*/} -->
        <GalleryInfo v-on:clickSearch="getListProductByNameWithPage"/>
         
      </div>
      <!-- {/* cột 2 01*/} -->
      <div className="col c-12 m-12">
        <!-- {" "} -->
        <div className="ftco-gallery-product">
          <div className="row no-gutters">
            <!-- {" "}
                {/* chia 4 cột 02 */}
                   {/* cột  1 02*/} -->
            <GalleryUnit
              v-for="Product in listProduct"
              :key="Product"
              v-bind:Product="Product"
            />
            <!-- {/* cột 2 02 */} -->
          </div>
          <div class="pani">
            <button v-on:click.prevent="pagePre" class="panigation">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button class="panigation">{{ pageable + 1 }}</button>
            <button v-on:click.prevent="pageNext" class="panigation">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryInfo from "@/components/User/Gallery/GalleryInfo.vue";
import GalleryUnit from "@/components/User/Gallery/GalleryUnit.vue";
import { mapGetters } from "vuex";
export default {
  name: "Gallery",
  components: { GalleryInfo, GalleryUnit },
  props: [],
  data() {
    return {
      pageable: 0,
    };
  },
  computed: {
    ...mapGetters({
      listProduct: "productModule/listProductAllPage",
    }),
  },
  watch: {
    pageable() {
      this.getListProductWithPage();
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getListProductWithPage();
    },
    getListProductByNameWithPage(keyword) {
      this.$store.dispatch("productModule/getListProductByNameWithPageV", {
        pageable: this.pageable,
        keyword: keyword,
      });
    },
    pageNext() {
      this.pageable++;
    },
    pagePre() {
      if (this.pageable > 0) {
        this.pageable--;
      }
    },
    getListProductWithPage() {
      this.$store.dispatch("productModule/getListProductByStatusWithPageV", {
        idstatus: 1,
        page: this.pageable,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Gallery.scss";
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
  // box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  // &:hover {
  //   color: white;
  //   background: #c49b63;
  //   cursor: pointer;
  //   box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63,
  //     0 0 100px #c49b63;
  // }
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