<template>
  <el-carousel trigger="click" :autoplay="false">
    <el-carousel-item v-for="item in [2,3,4]" :key="item">
      <img :src="require('../assets/'+item+'.jpg')" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss">
.el-carousel__indicators {
  position: absolute;
  left: 10%;
  top: 40%;
  .is-active {
    width: 50px;
    button {
      background: orange;
    }
  }
}
.el-carousel__indicator {
  display: block;
  width: 25px;
  -webkit-transition: width 0.3s;
  button {
    width: 100%;
    height: 4px;
  }
}
</style>