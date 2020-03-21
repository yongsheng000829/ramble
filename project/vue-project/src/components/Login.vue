<template>
  <div class="dialog">
    <div class="dialog_login">
      <span class="close" @click="close">X</span>
      <h2>{{loginIsShow?'Login Hare':'Register Now'}}</h2>
      <div class="under_login" v-if="loginIsShow">
        <input type="text" v-model="user" placeholder="User Name" />
        <input type="text" v-model="password" placeholder="Password" />
        <span>
          <input type="checkbox" />
          <span>Remember Me</span>
        </span>
        <b>Forget Password?</b>
      </div>
      <div class="under_register" v-else>
        <input type="text" placeholder="Name" v-model="user" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <input type="text" placeholder="Age" v-model="age" />
      </div>

      <div class="clear_both"></div>
      <div class="submit_box">
        <button @click="submit">{{loginIsShow? 'LOGIN NOW':'REGISTER'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: "",
      password: "",
      email: "",
      age: ""
    };
  },
  computed: {
    ...mapState(["loginIsShow"])
  },
  methods: {
    ...mapMutations(["changeDialogFlag", "changeLogin"]),
    close() {
      this.changeDialogFlag(false);
      this.user = "";
      this.password = "";
      this.email = "";
      this.age = "";
    },
    submit() {
      let { loginIsShow, user, password, email, age, $dataJson } = this;
      let obj = [
        $dataJson(user, "用户名", "user"),
        $dataJson(password, "密码", "password")
      ];

      let typeArr = loginIsShow
        ? obj
        : [
            ...obj,
            $dataJson(email, "邮箱", "email"),
            $dataJson(age, "年龄", "age")
          ];

      this.$isNull(typeArr, () => this.$regType(typeArr, this.requestLogin));
    },
    async requestLogin() {
      let {
        loginIsShow,
        user,
        password,
        email,
        age,
        $message,
        $setCookie,
        changeDialogFlag,
        changeLogin,
        $http
      } = this;
      let url = loginIsShow ? "/login" : "/register";
      let data = loginIsShow
        ? { user, password }
        : { user, password, email, age };
      let res = await $http("post", url, data);
      let { code, msg } = res.data;
      if (code === 0) {
        $setCookie("webUser", user);
        changeDialogFlag(false);
        changeLogin(false);
        return $message.success(msg);
      }
      return $message.error(msg);
    }
  }
};
</script>
<style lang="scss">
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 30;
}
.dialog_login {
  width: 425px;
  height: 440px;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .close {
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 50%;
    background: #ffb200;
    color: white;
    position: absolute;
    right: -15px;
    top: -12px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
  }
  h2 {
    color: #ffb200;
    text-align: center;
    margin-top: 44px;
    margin-bottom: 37px;
  }

  .under_login,
  .under_register {
    > input {
      display: block;
      width: 345px;
      margin: 0 auto;
      margin-bottom: 20px;
      height: 40px;
      border: none;
      border-bottom: solid 1px #ccc;
      outline: none;
    }
    width: 345px;
    margin: 0 auto;
    > span {
      float: left;
      color: #999;
    }
    b {
      float: right;
      color: #ffb200;
      font-weight: normal;
    }
  }
  .submit_box {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    button {
      height: 38px;
      padding: 0px 15px;
      color: white;
      background: #ffb200;
      border: none;
      border-radius: 30px;
      outline: none;
    }
  }
}
</style>