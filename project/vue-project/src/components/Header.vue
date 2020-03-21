<template>
  <div>
    <div class="click_top" @click="clickTop" v-show="fixIsShow">↑</div>
    <div class="header">
      <div class="header_log">
        <img src="../assets/ramble.png" alt />
      </div>
      <div class="header_center">
        <div class="header_center_top" v-show="isShow">
          <span>
            <i>Concat:</i>
            <span>0088-234-675-827</span>
          </span>
          <span>
            <i>Opening Hours:</i>
            <span>Mon - Sat 8.00 - 18.00.Sunday CLOSED</span>
          </span>
          <span class="login" v-show="isLogin" @click="changeLoginIsShow(true)">
            <b class="iconfont">&#xe61a;</b>
            Login
          </span>
          <span class="register" v-show="isLogin" @click="changeLoginIsShow(false)">
            <b class="iconfont">&#xe61a;</b>
            Register
          </span>
          <span v-show="!isLogin">
            hello! {{$getCookie('webUser')}}
            <i @click="exitLogin">退出</i>
          </span>
        </div>
        <div class="header_center_bottom">
          <ul>
            <li @click="go('/main/home')">HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li @click="go('/main/page')">PAGES</li>
            <li>GALLERY</li>
            <li @click="go('/main/blog')">BLOG</li>
            <li @click="go('/main/relation')">CONTACT</li>
          </ul>
        </div>
      </div>
      <div class="header_right">
        <ul>
          <li class="iconfont">&#xe82a;</li>
          <li class="iconfont">&#xe82a;</li>
          <li class="iconfont">&#xe82a;</li>
          <li class="iconfont">&#xe82a;</li>
          <li class="iconfont">&#xe82a;</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "../untils/iconfont/iconfont.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isShow: true,
      fixIsShow: false
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapMutations(["changeLoginIsShow", "changeLogin"]),
    exitLogin() {
      let { $httpScuress } = this;
      $httpScuress("get", "/login/out", {}, null, () => {
        this.changeLogin(true);
        this.$rmCookie('webUser');
      });
    },
    clickTop() {
      document.documentElement.scrollTop = 0;
    },
    go(path) {
      this.$router.push(path);
    },
    monScroll() {
      this.header = document.querySelector(".header");
      document.addEventListener("scroll", e => {
        if (e.path[1].scrollY >= 124) {
          this.isShow = false;
          this.fixIsShow = true;
          this.header.classList.add("fix");
        } else {
          this.isShow = true;
          this.header.classList.remove("fix");
          this.fixIsShow = false;
        }
      });
    }
  },
  mounted() {
    this.monScroll();
  }
};
</script>
<style lang="scss" scoped>
.click_top {
  width: 40px;
  height: 40px;
  color: white;
  background: orange;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  position: fixed;
  cursor: pointer;
  right: 2%;
  bottom: 3%;
  z-index: 50;
}
.fix {
  position: fixed !important;
  transform: translateY(75px);
  left: 0;
  top: 0;
  z-index: 50 !important;
  background: rgba(0, 0, 0, 0.7);
  height: 75px !important;
  line-height: 75px !important;
  ul {
    line-height: 75px !important;
  }
}
.header {
  width: 100vw;
  height: 124px;
  min-width: 1519px;
  position: relative;
  transition: all 0.5s;
  top: -124px;
  transform: translateY(124px);
  z-index: 10;
}
.header_log {
  width: 319px;
  float: left;
  text-align: center;
  line-height: 124px;
}
.header_center {
  width: 856px;
  height: 100%;
  float: left;
  font-size: 12px;
  color: white;
}
.header_center_top,
.header_center_bottom {
  width: 100%;
  height: 50%;
  line-height: 62px;
}
.header_center_top {
  > span:nth-child(1) {
    margin-right: 55px;
  }
  > span:nth-child(2) {
    margin-right: 169px;
  }
  span {
    i {
      color: #cf9d14;
      font-style: normal;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  border-bottom: solid 1px #ccc;
  .login {
    margin-right: 25px;
  }
}
.login,
.register {
  cursor: pointer;
}
.header_center_bottom {
  width: 100%;
  height: 100%;
  line-height: 62px;
  ul {
    margin-left: 140px;
    li {
      float: left;
      margin-right: 39px;
      cursor: pointer;
    }
  }
}
.header_right {
  width: 342px;
  height: 100%;
  float: left;
  padding-left: 45px;
  color: white;
  ul {
    width: 100%;
    line-height: 123px;
    height: 100%;
    li {
      float: left;
      margin-right: 30px;
    }
  }
}
</style>