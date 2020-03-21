<template>
  <div class="one">
    <h2>
      WHY
      <span>CHOOSE US</span>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
    <div class="top_san">
      <img src="../../assets/one/1.png" alt />
    </div>
    <div class="deverse">
      <dl>
        <dt>
          <i class="flaticon-mountain-1 icon"></i>
          <i class="flaticon-mountain-1 icon"></i>
        </dt>
        <dd>
          <h4>Diverse Destination</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <i class="flaticon-mountain-1 icon"></i>
          <i class="flaticon-mountain-1 icon"></i>
        </dt>
        <dd>
          <h4>Value of Money</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <i class="flaticon-mountain-1 icon"></i>
          <i class="flaticon-mountain-1 icon"></i>
        </dt>
        <dd>
          <h4>Passionate Travel</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</p>
        </dd>
      </dl>
      <dl>
        <dt>
          <i class="flaticon-mountain-1 icon"></i>
          <i class="flaticon-mountain-1 icon"></i>
        </dt>
        <dd>
          <h4>Beautiful Places</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</p>
        </dd>
      </dl>
    </div>
    <div class="clear_both"></div>
    <div class="earth">
      <div class="earth_left">
        <img src="../../assets/one/2.jpg" alt />
      </div>
      <div class="earth_right">
        <h2>
          WELCOME TO
          <span>RAMBLE</span>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincidid ut labore et dolore magna aliqua. Utjij enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi utjjij aliquip ex ea commodo consequat.ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.ed do eiusmod tempor incididuenimdunt.</p>
        <p>Fipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoed doeiumod tempoquis</p>
        <ul>
          <li>
            <i class="zmdi zmdi-linkedin"></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <h2 :style="{'margin-top':'100px'}">
      WHY
      <span>CHOOSE US</span>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
    <div class="people_list">
      <div v-for=" i in 3" :key="i" class="people_box">
        <div class="people_top_box">
          <img src="../../assets/team/1.jpg" alt />
        </div>
        <div>
          <h4>anika mollik</h4>
          <h6>Chief CEO Officer</h6>
          <ul>
            <li v-for="i in 5" :key="i">123</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.people_list {
  margin-top: 50px;
  width: 1200px;
  margin: 0 auto;
  .people_box {
    width: 33.3%;
    position: relative;
    padding: 0px 15px;
    float: left;
    .people_top_box:hover {
      padding: 4%;
    }
    .people_top_box {
      -webkit-transition: padding 0.3s;
      width: 100%;
      background: orange;
      padding: 1px 1px 0px 1px;
      img {
        min-width: 100%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.one {
  width: 100%;
  margin-top: 100px;
  min-width: 1519px;
  h2,
  > p {
    text-align: center;
  }
  h2 {
    margin-bottom: 30px;
    span {
      color: #ffae00;
    }
  }
  p {
    margin-bottom: 20px;
  }
  .top_san {
    width: 100%;
    text-align: center;
    margin-bottom: 51px;
  }
}
.deverse {
  width: 100%;
  padding-left: 97px;
  dt:hover {
    > i:nth-child(2) {
      z-index: 2;
      width: 95px;
      opacity: 1;
    }
  }
  i {
    font-family: Flaticon;
    font-style: normal;
    font-weight: normal;
    border-radius: 50%;
    &:nth-child(2) {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      opacity: 0;
      background: #ffae00;
      color: white;
      width: 0;
      -webkit-transition: all 0.5s;
    }
  }
  dl:nth-child(2) i::before {
    content: "\f105";
  }
  dl:nth-child(3) i::before {
    content: "\f106";
  }
  dl:nth-child(4) i::before {
    content: "\f104";
  }
  dl {
    width: 303px;
    height: 215px;
    float: left;
    margin-right: 32px;
    dt {
      width: 95px;
      height: 95px;
      margin: 0 auto;
      background: #f1f1f1;
      border-radius: 50%;
      text-align: center;
      position: relative;
      i::before {
        content: "\f103";
        text-align: center;
        line-height: 95px;
        font-size: 38px;
      }
    }

    dd {
      width: 100%;
      text-align: center;
      h4 {
        margin: 20px 0px;
        font-weight: 400;
      }
      p {
        line-height: 25px;
      }
    }
  }
}
.earth {
  width: 100%;
  height: 583px;
  margin-top: 100px;
  .earth_left {
    width: 729px;
    height: 100%;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .earth_right {
    width: 770px;
    height: 100%;
    background: #f5f5f5;
    padding-left: 20px;
    float: left;
    h2 {
      text-align: left;
      margin-bottom: 36px;
      font-size: 30px;
      font-weight: 600;
      margin-top: 110px;
    }
    p {
      line-height: 24px;
      color: #444444;
      width: 600px;
    }
    ul {
      margin-top: 50px;
      li {
        float: left;
        margin-right: 12px;
        i {
          background: #fff;
          border: 1px solid #f1f1f1;
          color: #ffb300;
          font-size: 18px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          transition: all 0.3s ease 0s;
          width: 40px;
          display: block;
        }
        i:before {
          content: "\f3f8";
        }
      }
    }
  }
}
</style>