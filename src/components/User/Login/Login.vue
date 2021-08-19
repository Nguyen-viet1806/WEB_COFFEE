<template >
  <div class="login-box" style="background: linear-gradient(#141e30, #243b55)">
    <h2>Việt NQV</h2>
    <h2 v-if="!isShow">Bạn đã đăng nhập!</h2>
    <h2 v-if="!isShow">Hãy đặt hàng nào rất nhiều món ăn đang chờ bạn!</h2>
    <h2 v-if="!isShow">Oke!</h2>
    <form>
      <audio src="vietnqv.mp3" loop autoplay />
      <div class="login">
        <div class="form-group">
          <input
            v-if="isShow"
            placeholder="Email"
            class="form-control textLogin"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            v-model="acccount.email"
          />
        </div>
      </div>
      <div class="form-group">
        <input
          v-if="isShow"
          type="password"
          placeholder="Pass"
          class="form-control textLogin"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autocomplete="off"
          v-model="acccount.pass"
        />
      </div>
      <div v-if="isRegistration" class="registration">
        <div class="user-box">
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            @change="onFileSelected"
          />
          <p></p>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Tên"
            class="form-control textLogin"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            v-model="user.nameUser"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Địa chỉ"
            class="form-control textLogin"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            v-model="user.addressUser"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Số điện thoại"
            class="form-control textLogin"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            v-model="user.phoneNumber"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Mô tả"
            class="form-control textLogin"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            v-model="user.noteUser"
          />
        </div>
      </div>

      <button v-if="isShow" v-on:click.prevent="login">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Đăng nhập
      </button>
      <button v-if="isShow" v-on:click.prevent="registration">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Đăng ký
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      selectedFile: null,
      isShow: false,
      isLogin: true,
      isRegistration: false,
      email: "",
      pass: "",
      acccount: {
        email: "",
        pass: "",
      },
      user: {
        addressUser: "",
        imgUser: "",
        nameUser: "",
        noteUser: "",
        phoneNumber: "",
        tblStatus: {
          idStatus: 1,
        },
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.checkFormLogin();
  },
  methods: {
    checkFormLogin() {
      if (localStorage.getItem("token") === null) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    registration() {
      if (this.isRegistration === false) {
        this.isRegistration = true;
        this.islogin = false;
      } else {
        if (this.selectedFile !== null) {
          const fd = new FormData();
          fd.append("file", this.selectedFile);
          this.$store
            .dispatch("loginModule/addFileImgAccount", fd)
            .then((res) => {
              if (res) {
                this.user.imgUser = res.data;
                this.$store
                  .dispatch("loginModule/addAccount", {
                    email: this.acccount.email,
                    pass: this.acccount.pass,
                    addressUser: this.user.addressUser,
                    imgUser: this.user.imgUser,
                    nameUser: this.user.nameUser,
                    noteUser: this.user.noteUser,
                    phoneNumber: this.user.phoneNumber,
                  })
                  .then((res) => {
                    if (res) {
                      alert(res.data);
                    }
                  });
              }
            });
        }
      }
    },
    login() {
      if (this.islogin === false) {
        this.islogin = true;
        this.isRegistration = false;
      } else {
        this.$store
          .dispatch("loginModule/login", {
            email: this.acccount.email,
            pass: this.acccount.pass,
          })
          .then((res) => {
            if (res) {
              let emaiPass = this.acccount.email + ":" + this.acccount.pass;
              let token = window.btoa(emaiPass);
              if (res.data === token) {
                localStorage.setItem("token", res.data);
                location.reload();
                alert("Đăng nhập thành công!");
                this.$router.push({ path: "/" });
              } else {
                alert("Sai thông tin đăng nhập !");
              }
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding-top: 200px;
  font-family: sans-serif;
}

.login-box {
  position: relative;
  top: 150px;
  left: 50%;
  width: 100%;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form button {
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  & span {
    pointer-events: none;
  }
}

.login-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
button {
  background: transparent;
  border: none;
  border-radius: 2px;
  outline: 0;
}
.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.textLogin {
  background: transparent;
  border: none;
  border-radius: none;
  border-bottom: 1px solid #03e9f4;
  outline: none;
}
input {
  overflow: visible;
  margin-top: 10px;
}
input {
  background: #03e9f4 !important;
  color: #fff !important;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
input:focus {
  background: #03e9f4 !important;
  color: #fff !important;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
input::placeholder {
  color: #fff;
}
</style>