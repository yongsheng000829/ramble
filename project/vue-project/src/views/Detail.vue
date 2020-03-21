<template>
  <div class="detail">
    <div class="detail_nei">
      <div class="aust">
        <h2>australia tour package</h2>
        <span>20% OFF</span>
      </div>
      <div class="clear_both"></div>
      <h2>Unique Tour</h2>
      <ul class="offer">
        <li v-for="i in 6" :key="i">
          <span class="el-icon-s-goods"></span>
          <span>All drink included</span>
        </li>
      </ul>
      <h2>Tour Overview</h2>
      <div class="detail_list">
        <div class="detail_item" v-for="(item,index) in list" :key="index">
          <div class="detail_item_l">
            <span>{{item.day}} days</span>
            <span>{{item.day-1}} nights</span>
          </div>
          <div class="detail_item_c">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </div>
          <div class="detail_item_r">
            <img :src="item.img" alt />
            <div class="detail_item_dialog">
              <span>BOOK BOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$route.query,
      list: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      const { product_id } = this.item;
      this.$httpScuress(
        "post",
        "/product/list",
        { product_id },
        (code, msg, data) => {
          this.list = data;
        }
      );
    }
  }
};
</script>
<style lang="scss">
.detail_list {
  width: 100%;
  .detail_item {
    width: 100%;
    height: 270px;
    > div {
      float: left;
      height: 100%;
    }
    .detail_item_l {
      width: 100px;
      margin-right: 63px;
      position: relative;
      span {
        display: block;
        margin-bottom: 5px;
      }
    }
    .detail_item_l::before {
      content: "";
      width: 3px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background: #ffb300;
    }
    .detail_item_l::after {
      content: "";
      width: 20px;
      height: 20px;
      background: #ffb300;
      position: absolute;
      top: 45%;
      right: -8px;
      -webkit-transform: rotate(45deg);
    }
    .detail_item_c {
      width: 37%;
      margin-right: 90px;
      h3 {
        margin: 30px 0;
      }
      p {
        line-height: 25px;
      }
    }
    .detail_item_r:hover {
      .detail_item_dialog {
        display: block;
      }
    }
    .detail_item_r {
      width: 40%;
      float: right;
      position: relative;
      .detail_item_dialog {
        display: none;
        transition: all 0.4s ease 0s;
        width: 100%;
        height: 217px;
        background: rgba($color: #000000, $alpha: 0.7);
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        text-align: center;
        span {
          color: white;
          display: block;
          width: 131px;
          height: 40px;
          border: solid 1px #ffb300;
          border-radius: 20px;
          text-align: center;
          line-height: 40px;
          margin: auto;
          margin-top: 18%;
          cursor: pointer;
        }
        span:hover {
          background: #ffb300;
          color: white;
        }
      }
      img {
        width: 100%;
        height: 217px;
      }
    }
  }
}
.detail {
  width: 100vw;
  margin-top: 100px;
}
.detail_nei {
  width: 1160px;
  margin: 0 auto;
  > h2 {
    position: relative;
    font-weight: 400;
    margin-bottom: 40px;
  }
  > h2::before {
    content: "";
    width: 7%;
    background: #ffb300;
    height: 2px;
    position: absolute;
    left: 0;
    top: 107%;
  }
}
.aust {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 48px;
  h2 {
    float: left;
    font-size: 26px;
    font-weight: 400;
  }
  span {
    float: left;
    color: #ffb300;
    font-size: 26px;
    font-weight: bold;
    position: relative;
    margin-left: 153px;
  }
  span::before {
    background: #ffb300 none repeat scroll 0 0;
    content: "";
    height: 2px;
    left: -84px;
    position: absolute;
    top: 50%;
    width: 80px;
  }
}
.offer {
  width: 100%;
  height: 90px;
  margin-bottom: 57px;
  li {
    width: 167px;
    height: 90px;
    margin-right: 26px;
    background: #f6f6f6;
    float: left;
    span {
      display: block;
      text-align: center;
      line-height: 40px;
      &:nth-child(1) {
        font-size: 40px;
        padding-top: 10px;
      }
    }
  }
}
</style>