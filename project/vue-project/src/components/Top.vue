<template>
  <div class="top_box">
    <HeaderBar />
    <Login v-show="dialogFlag" />
    <div class="block"></div>
    <TopCenter/>
    <SwiperBar />
  </div>
</template>

<script>
import HeaderBar from "./Header";
import Login from "./Login";
import SwiperBar from "./SwiperBar";
import TopCenter from './Top_center';
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dialogFlag"])
  },
  components: {
    HeaderBar,
    SwiperBar,
    Login,
    TopCenter
  }
};
</script>
<style lang="scss">
.top_box {
  width: 1519px;
  // background: url('../assets/2.jpg');
  position: relative;
  height: 722px;
}
.block {
  width: 1519px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  height: 722px;
  z-index: 9;
}
.el-carousel {
  position: absolute;
  top: 0;
  left: 0;
}
.el-carousel,
.el-carousel__container {
  width: 100vw;
  height: 100%;
  img {
    width: 100vw;
    height: 722px;
    min-width: 1519px;
  }
}
.el-carousel__indicators {
  z-index: 30;
}
</style>