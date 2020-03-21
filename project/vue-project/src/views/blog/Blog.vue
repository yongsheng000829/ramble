<template>
  <div class="blog">
    <div class="blog_nei">
      <div class="blog_nei_left">
        <h3>Search</h3>
        <div class="search">
          <input type="text" v-model="value" placeholder="请输入要搜索的名称" />
          <button class="el-icon-star-off" @click="search"></button>
        </div>
        <h3>最近发布</h3>
        <ul>
          <li :style="{'cursor': 'pointer'}" v-for="(item,index) in latelyList" :key="index">
            <span>{{item.title}}</span>
            <span>{{$getDate(item.time*1)}}</span>
          </li>
        </ul>
        <h3>排序</h3>
        <ul>
          <li :class="sort_index===0?'sort_active':''" @click="clickSort('s',0)">日期升序</li>
          <li :class="sort_index===1?'sort_active':''" @click="clickSort('j',1)">日期降序</li>
          <li :class="sort_index===-1?'sort_active':''" @click="initData">默认排序</li>
        </ul>
        <h3>Tags</h3>
        <ol>
          <li
            @click="clickFilter(i,index)"
            :class="tag_index===index?'tag_active':''"
            :style="{'cursor':'pointer'}"
            v-for="(i,index) in tagsArr"
            :key="index"
          >{{i}}</li>
          <li :class="tag_index===-1?'tag_active':''" @click="initData">全部</li>
        </ol>
      </div>
      <div class="blog_nei_right">
        <div class="blog_list">
          <div class="blog_list_item" v-for="item in list" :key="item.blog_id">
            <img src="../../assets/blog/big-img/b1.jpg" alt />
            <div class="blog_list_top">
              <span>
                <i class="el-icon-user"></i>
                {{item.promulgator}}
              </span>
              <span>
                <i class="el-icon-goods"></i>
                {{$getDate(item.time*1)}}
              </span>
            </div>
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
            <a href="#">READ MORE</a>
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
      list: [],
      latelyList: [],
      tagsArr: [],
      sort_index: -1,
      tag_index: -1,
      value: "",
      sortFlag: "",
      tag: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    clickSort(val, index) {
      this.sortFlag = val;
      this.sort_index = index;
      this.filterData();
    },
    initData() {
      this.$httpScuress("get", "/blog/list", {}, (code, msg, data) => {
        this.tagsArr = data.tagsArr;
        this.list = data.data;
        this.latelyList = data.latelyArr;
      });
    },
    search() {
      let { value, clickFilter, initData } = this;
      if (value) {
        this.filterData();
        return;
      }
      this.initData();
    },
    filterData() {
      let { $httpScuress, sortFlag, tag, value } = this;
      this.$httpScuress(
        "post",
        "/blog/listFilter",
        { sortFlag, tag, value },
        (code, msg, data) => {
          console.log(data);
          this.list = data;
        }
      );
    },
    clickFilter(value, index) {
      this.tag_index = index;
      this.tag = value;
      this.filterData();
    }
  }
};
</script>

<style lang="scss" scoped>
.blog_list {
  width: 100%;
  .blog_list_item:hover {
    .blog_list_item::before {
      content: "";
      opacity: 1;
    }
  }
  .blog_list_item {
    color: #666666;
    margin-bottom: 60px;
    width: 100%;
    img::before {
      background: #000 none repeat scroll 0 0;
      content: "";
      height: 100%;
      left: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: all 0.4s ease 0s;
      width: 100%;
    }
    img {
      width: 100%;
      position: relative;
      height: 370px;
    }
    .blog_list_top {
      width: 100%;
      margin: 20px 0px;
      span {
        i {
          margin-right: 10px;
        }
        margin-right: 25px;
      }
    }
    h3 {
      margin: 20px 0px;
      font-weight: 400;
    }
    a {
      border: 1px solid #464646;
      border-radius: 20px;
      color: #464646;
      display: inline-block;
      font-size: 12px;
      font-weight: bold;
      margin-top: 27px;
      text-decoration: none;
      padding: 8px 30px;
      text-transform: uppercase;
      transition: all 0.3s ease 0s;
    }
    a:hover {
      background: #ffb300;
      color: white;
    }
  }
}
.blog {
  width: 100vw;
  margin-top: 100px;
}
.blog_nei {
  width: 1160px;
  margin: 0 auto;
}
.blog_nei_left {
  width: 270px;
  float: left;
  ol {
    width: 100%;
    li {
      display: inline-block;
      margin-bottom: 20px;
      margin-right: 14px;
      border: 1px solid #c1c1c1;
      color: #666;
      padding: 9px 24px;
      transition: all 0.4s ease 0s;
      transition: 0.3s;
      font-size: 15px;
    }
    li:hover {
      background: #ffb300;
      color: white;
    }
  }
  ul {
    width: 100%;
    margin-bottom: 72px;
    li {
      margin-bottom: 12px;
      cursor: pointer;
      height: 25px;
      line-height: 25px;
      color: #666666;
      span:nth-child(1) {
        float: left;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span:nth-child(2) {
        float: right;
      }
    }
  }
  > h3 {
    font-weight: 400;
    position: relative;
    margin-bottom: 45px;
    display: inline-block;
  }
  > h3::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #ffb300;
    position: absolute;
    left: 0;
    bottom: -38%;
  }
}
.search {
  width: 100%;
  margin-bottom: 65px;
  height: 42px;
  input {
    width: 226px;
    height: 42px;
    float: left;
  }
  button {
    width: 42px;
    height: 42px;
    background: #ffb300;
    color: white;
    outline: none;
    border: solid 1px #ffb300;
    float: left;
  }
}
.blog_nei_right {
  width: 862px;
  float: right;
}
.tag_active {
  background: #ffb300;
  color: white;
}
.sort_active {
  color: #ffb300 !important;
}
</style>