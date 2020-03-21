<template>
  <div class="relation">
    <div class="relation_nei">
      <div class="relation_top">
        <div class="relation_left">
          <img src="../../assets/contact/1.jpg" alt />
        </div>
        <div class="relation_right">
          <div class="relation_right_nei">
            <h2>
              contact
              <span>form</span>
            </h2>
            <div>
              <input type="text" placeholder="Your Nme*" />
              <input type="text" placeholder="Mail*" />
            </div>
            <div>
              <input type="text" placeholder="Subject*" />
            </div>
            <div>
              <textarea cols="30" rows="10"></textarea>
            </div>
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.relation {
  width: 100vw;
  margin-top: 100px;
}
.relation_nei {
  width: 1200px;
  margin: 0 auto;
}
.relation_top {
  width: 100%;
  height: 620px;
  .relation_left {
    width: 567px;
    float: left;
    height: 100%;
    img {
      width: 570px;
      height: 100%;
    }
  }
  .relation_right {
    width: 565px;
    float: right;
    height: 100%;
    .relation_right_nei {
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      padding: 65px;
      div {
        width: 100%;
      }
      input {
        background: #f6f6f6;
        border: solid 1px #e7e7e7;
        padding: 0 20px;
        outline: none;
        margin-bottom: 20px;
      }
      div:nth-child(2) {
        input {
          width: 205px;
          height: 40px;
          &:nth-child(1) {
            margin-right: 25px;
          }
        }
      }
      div:nth-child(3) {
        input {
          width: 100%;
          height: 40px;
        }
      }
      div:nth-child(4) {
        width: 100%;
        height: 138px;
        margin-bottom: 30px;
        textarea {
          width: 100%;
          background: #f6f6f6;
          height: 100%;
          outline: none;
          border: solid 1px #e7e7e7;
          resize: none;
        }
      }
      button {
        background: #ffb300 none repeat scroll 0 0;
        border: 1px solid #ffb300;
        border-radius: 22px;
        color: #fff;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        transition: all 0.3s ease 0s;
        cursor: pointer;
      }
      button:hover {
        background: #f6f6f6;
        color: #ffb300;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 35px;
        span {
          color: #ffb300;
        }
      }
    }
  }
}
</style>