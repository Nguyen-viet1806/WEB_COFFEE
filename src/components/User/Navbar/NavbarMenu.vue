<template>
  <div className="navbar-menu">
    <ul className="ul">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/product">MENU</router-link></li>
      <li><router-link to="/c">SERVICE</router-link></li>
      <li><router-link to="/d">BLOG</router-link></li>
      <li><router-link to="/e">PROFILE</router-link></li>
      <li><router-link  to="/login">LOGIN</router-link></li>
      <li><router-link v-on:click="logout"  to="/">LOGOUT</router-link></li>
      <li>
        <router-link to="/cart"
          ><i className="fa fa-shopping-cart" aria-hidden="true"></i
        ></router-link>
      </li>
    </ul>

    <a className="bar bar-a"
      ><i
        style="margin-right: 5px"
        className="fa fa-bars"
        aria-hidden="true"
      ></i
      >MENU</a
    >
    <input className="bar " type="checkbox" />
    <div className="navbar-menu-onclick">
      <ul className="ul-1">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/product">MENU</router-link></li>
        <li><router-link to="/c">SERVICE</router-link></li>
        <li><router-link to="/d">BLOG</router-link></li>
        <li><router-link to="/e">PROFILE</router-link></li>
        <li><router-link to="/login">LOGIN</router-link></li>
        <li><router-link v-on:click="logout" to="/">LOGOUT</router-link></li>
        <li>
          <router-link to="/h"
            ><i className="fa fa-shopping-cart" aria-hidden="true"></i
          ></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMenu",
  methods:{
        logout(){
          if(localStorage.getItem("token")===null){
            alert("Bạn chưa đăng nhập!");
          }else{
            localStorage.removeItem("token");
            alert("Đăng xuất thành công!");
            location.reload();

          }
            
        

        }
    }
};
</script>

<style lang="scss" scoped >
@import "./Navbar.scss";
</style>