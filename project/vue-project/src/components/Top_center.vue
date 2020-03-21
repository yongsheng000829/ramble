<template>
  <div class="top_center">
    <h2>FIND YOUR SPECIAL TURE TODAY</h2>
    <h1>WITH RAMBLE TOURS</h1>
    <button>VIEW TOURS</button>
    <div class="select_option">
      <div>
        <input type="text" v-model="name" placeholder="请输入" />
      </div>
      <div>
        <select v-model="city">
          <option :value="item" v-for="(item,index) in data.city" :key="index">{{item}}</option>
        </select>
      </div>
      <div>
        <select v-model="day">
          <option :value="item" v-for="(item,index) in data.day" :key="index">{{item}}</option>
        </select>
      </div>
      <div>
        <select v-model="person">
          <option :value="item" v-for="(item,index) in data.person" :key="index">{{item}}</option>
        </select>
      </div>
      <div>
        <button @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      city: "",
      person: "",
      name: "",
      day: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async submit() {
      let { $httpScuress, $dataJson, name, city, person, day, $isNull } = this;
      let onData = { name, city, person, day };
      $isNull(
        [
          $dataJson(name, "名称"),
          $dataJson(city, "地区"),
          $dataJson(day, "日期"),
          $dataJson(person, "天数")
        ],
        () => {
          $httpScuress("post", "/transfer", { onData }, code => {
            if (code === 0) {
              this.name = "";
              this.city = "";
              this.day = "";
              this.person = "";
            }
          });
        }
      );
    },
    async initData() {
      let { $httpScuress } = this;
      $httpScuress("get", "/collect", {}, (code, msg, data) => {
        this.data = data;
      });
    }
  }
};
</script>
<style lang="scss">
.top_center {
  width: 1174px;
  height: 600px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 10;
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    font-size: 60px;
    font-weight: 400;
    margin-top: 90px;
    color: white;
  }
  h1 {
    font-size: 60px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 65px;
    color: white;
  }
  > button {
    width: 140px;
    height: 37px;
    border-radius: 30px;
    border: solid 1px #d3960c;
    outline: none;
    display: block;
    color: white;
    margin: 0 auto;
    background: rgba($color: #000000, $alpha: 0.1);
  }
}
.select_option {
  width: 1174px;
  height: 130px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 70px;
  margin-top: 85px;
  div {
    float: left;
    width: 184px;
    margin-top: 40px;
    background: white;
    height: 50px;
    &:nth-child(1) {
      margin-left: 60px;
    }
    margin-right: 25px;
    input,
    select,
    button {
      width: 100%;
      height: 100%;
      background: white;
      outline: none;
    }
    button {
      outline: none;
      background: #ffb300;
      border: none;
    }
  }
}
</style>