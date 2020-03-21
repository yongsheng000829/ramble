<template>
  <div>
    <div class="select_option">
      <div>
        <input type="text" v-model="address" placeholder="请输入" />
      </div>
      <div>
        <select v-model="type">
          <option value="跟团">跟团</option>
          <option value="不跟团">不跟团</option>
          <option value>不选择</option>
        </select>
      </div>
      <div>
        <select v-model="time">
          <option :value="item" v-for="item in 8" :key="item">{{item}}天</option>
          <option value>不选择</option>
        </select>
      </div>
      <div>
        <select v-model="star">
          <option :value="i" v-for="i in 5" :key="i">{{i}}星</option>
          <option value>不选择</option>
        </select>
      </div>
      <div>
        <button @click="submit">提交</button>
      </div>
    </div>
    <div class="product_list">
      <div class="product_item" v-for="item in data" :key="item.product_id">
        <img :src="item.img" alt />
        <div class="product_dialog"></div>
        <div class="product_msg">
          <h5>{{item.address}}</h5>
          <p>{{item.time}}天{{item.time-1}}晚</p>
          <p>{{item.content}}</p>
          <div class="product_msg_bottom">
            <ul>
              <li v-for="i in 5" :key="i" :class="i<=item.star?'active':''">※</li>
            </ul>
            <span @click="jumpDetail(item)">VIEW MORE</span>
          </div>
        </div>
        <div class="product_the">
          <h4>{{item.address}}</h4>
          <h6>singapore</h6>
          <p>
            Offer Available
            <span>${{item.money}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      address: "",
      type: "",
      star: "",
      time: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$httpScuress("get", "/product/list", {}, (code, msg, data) => {
        this.data = data;
      });
    },
    jumpDetail(item) {
      this.$router.push({ path: "/main/detail", query: item });
    },
    submit() {
      const { address, type, star, time, $message } = this;
      let subData = { address, type, star, time };
      if (Object.keys(subData).some(val => subData[val] !== "")) {
        this.$httpScuress(
          "post",
          "/product/screen",
          subData,
          (code, msg, data) => {
            this.data = data;
          }
        );
        return;
      }
      this.initData();
    }
  }
};
</script>
<style lang="scss">
// .block,
// .el-carousel {
//   height: 500px;
// }
// .block {
//   background: rgba($color: #000000, $alpha: 0.7);
// }
.select_option:nth-child(2) {
  background: #f9f9f9 !important;
}
.active {
  color: orange !important;
}
.product_list {
  width: 100%;
  .product_item:hover {
    .product_msg {
      -webkit-transform: translateX(-0px);
    }
    .product_dialog {
      -webkit-transform: translateX(1170px);
    }
    .product_the {
      display: none;
    }
  }
  .product_item {
    width: 1170px;
    margin: 20px auto;
    height: 330px;
    position: relative;
    color: white;
    overflow: hidden;
    .product_msg {
      width: 60%;
      height: 100%;
      padding-left: 70px;
      position: absolute;
      transition: transform 0.2s;
      -webkit-transform: translateX(-702px);
      background: rgba($color: #000000, $alpha: 0.8);
      left: 0;
      top: 0;
      z-index: 10;
      .product_msg_bottom {
        width: 100%;
        height: 50px;
        span {
          color: #ffb300;
          float: left;
          margin-left: 337px;
          cursor: pointer;
        }
        ul {
          float: left;
          li {
            float: left;
            color: #ccc;
            margin-right: 10px;
          }
        }
      }
      h5 {
        color: #ffb300;
        margin-top: 80px;
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 30px;
      }
    }
    .product_the {
      color: white;
      height: 200px;
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 50%;
      margin-left: -75px;
      margin-top: -58px;
      h4 {
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 10px;
        text-align: center;
      }
      h6 {
        text-align: center;
        font-size: 25px;
        margin: 10px 0px;
        font-weight: 400;
      }
      p {
        margin: 10px 0px;
      }
    }
    .product_dialog {
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.8);
      position: absolute;
      z-index: 2;
      -webkit-transition: transform 0.2s ease-in-out;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>