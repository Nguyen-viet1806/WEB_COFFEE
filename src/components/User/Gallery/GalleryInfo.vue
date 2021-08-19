<template>
  <div className="ftco-gallery-info">
    <span>Discover</span>
    <h1>Best Coffee Sellers</h1>
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.
    </p>
    <p>
      <input v-model="keyword" class="inputSearch" type="text" />
      <button v-on:click="search" class="buttonSearch">Search</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "GalleryInfo",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$emit('clickSearch', this.keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./GalleryUnit-Info.scss";
.inputSearch {
  height: 28px;
  background: transparent;

  border: none;
  animation: colorPani linear 1s infinite;
  outline: 0;
  background: #c49b63;
  color: white;
}
.buttonSearch {
  font-weight: 400;
  color: white !important;
  cursor: pointer;
  background: #c49b63;
  border: none;
  height: 28px;
  animation: colorPani linear 1s infinite;
}
@keyframes colorPani {
  from {
    box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
  }
  to {
    box-shadow: 0 0 5px #c49b63, 0 0 25px #c49b63, 0 0 50px #c49b63;
  }
}
</style>