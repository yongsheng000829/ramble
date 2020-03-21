<template>
  <div class="home">
    <div class="box" ref="box">
      <div class="box_left">
        <h2>欢迎回来</h2>
        <div>账号</div>
        <input type="text" v-model="user" />
        <div>密码</div>
        <input type="text" v-model="password" />
        <div class="change">忘记密码?</div>
        <button @click="submit('/login')">登陆</button>
      </div>
      <div class="box_right">
        <div class="img">
          <div class="img_content">
            <div class="img_login">
              <div class="big">已有账号</div>
              <p>已有账号就登陆吧，好久不见了！</p>
            </div>
            <div class="img_register">
              <div class="big">还未注册</div>
              <p>立即注册，发现大量机会</p>
            </div>
            <div class="img_btn">
              <div class="btn" @click="change">
                <span>注册</span>
                <span>登陆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form">
          <h2>立即注册</h2>
          <div>用户名</div>
          <input type="text" v-model="user" />
          <div>账号</div>
          <input type="text" v-model="password" />
          <div>密码</div>
          <input type="text" />
          <div>
            <button @click="submit('/register')">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  methods: {
    change() {
      this.$refs.box.classList.toggle("signup");
      this.user = "";
      this.password = "";
    },
    async submit(url) {
      let { $http, user, password } = this;
      let res = await $http("post", url, { user, password });
      let { code, msg } = res.data;
      alert(msg);
    }
  }
};
</script>
<style lang="scss">

.box {
  width: 900px;
  height: 550px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -300px 0px 0px -450px;
  background: white;
}
.box_left,
.form {
  position: relative;
  width: 640px;
  height: 100%;
  -webkit-transition: transform 0.6s ease-in-out;
  padding: 50px 30px 0;
  text-align: center;
  h2 {
    margin-bottom: 33px;
  }
  input {
    border: none;
    border-bottom: solid 1px #ccc;
    width: 255px;
    outline: none;
    margin-bottom: 25px;
  }
  div {
    margin-bottom: 12px;
    color: #999;
  }
  .change {
    text-decoration: underline;
    color: #ccc;
  }
  button {
    width: 255px;
    background: #ceb081;
    color: white;
    border-radius: 30px;
    height: 35px;
    border: none;
    outline: none;
    margin-top: 30px;
  }
}
.box_right {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: white;
  -webkit-transition: transform 0.6s ease-in-out;
}
.img {
  width: 260px;
  height: 100%;
  overflow: hidden;
  z-index: 20;
  position: absolute;
  left: 0;
  top: 0;
  .img_content {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 100%;
    z-index: 30;
    height: 100%;
    text-align: center;
    padding-top: 55px;
    .big {
      margin-bottom: 15px;
      font-size: 25px;
    }
    .img_btn {
      width: 100px;
      height: 30px;
      border: solid 2px white;
      margin: 0 auto;
      margin-top: 250px;
      border-radius: 30px;
      overflow: hidden;
      cursor: pointer;
      .btn {
        font-size: 14px;
        height: 60px;
        width: 100%;
        -webkit-transition: transform 0.6s ease-in-out;
        span {
          width: 100%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          display: block;
        }
      }
    }
  }
}
.img:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  -webkit-transition: transform 0.6s ease-in-out;
  background-image: url("../../assets/bg.jpg");
  background-size: cover;
}
.img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
}
.img_login,
.img_register {
  height: 70px;
  -webkit-transition: transform 0.6s ease-in-out;
}
.img_login {
  transform: translate(-520px);
  position: relative;
  top: 68px;
}
.form {
  position: relative;
  width: 640px;
  height: 100%;
  -webkit-transition: transform 0.6s ease-in-out;
}
.box.signup .box_right {
  -webkit-transform: translate3d(-640px, 0, 0);
}
.box.signup .img:before {
  transform: translate3d(640px, 0, 0);
}
.box.signup .box_left {
  -webkit-transform: translate3d(640px, 0, 0);
}
.box.signup .form {
  // -webkit-transform: translate3d(0, 0, 0);
}
.register {
  -webkit-transition: transform 0.6s ease-in-out;
}
.box.signup .btn {
  -webkit-transform: translateY(-30px);
}
.box.signup .img_login {
  transform: translate(0);
}
.box.signup .img_register {
  transform: translate(520px);
}
</style>
