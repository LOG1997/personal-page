<script setup lang="ts">
const switchTheme = () => {
  console.log("switchTheme");
};
</script>

<template>
  <div class="main-container container">
    <div class="row">
      <div class="main-title col-auto me-auto">
        <p class="main-title__title">IMAGINATIONS</p>
        <p class="main-title__title">Func</p>
        <p class="desc">
          Simplify the process: keep operating process simple and
          intuitive.Definite and clear: enunciate your intentions clearly so
          that the users can quickly understand and make decisions.Easy to
          identify: the interface should be straightforward, which helps the
          users to identify and frees them from memorizing and recalling.
        </p>
        <div class="next-btn" @click="switchTheme">查看项目👉</div>
      </div>
      <div class="img-background col-auto">
        <img src="@/assets/images/background.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  // display: flex;
  .main-title {
    text-align: left;
    margin-top: 10%;
    max-width: 50%;
    font-family: monospace, Cochin, Georgia, Times, "Times New Roman", serif;
    .main-title__title {
      font-size: 50px;
      font-weight: 700;
    }
    .desc {
      font-size: 16px;
      font-weight: 400;
      margin-top: 20px;
      line-height: 30px;
    }
    .next-btn {
      width: 100px;
      height: 40px;
      // 渐变
      background: linear-gradient(90deg, #646cff 0%, #42b883 100%);
      color: #fff;
      border-radius: 10px;
      text-align: center;
      line-height: 40px;
      margin-top: 20px;
      cursor: pointer;
      // 渐变阴影
      box-shadow: 0 0 2em #646cffaa;
      &:hover {
        background-color: #646cffaa;
        box-shadow: 0 0 2em #646cff;
      }
    }
  }
  .img-background {
    img {
      width: 500px;
      height: 500px;
      min-width: 50%;
      // min-height: 500px;
      // width: 50%;

      // height: 550px;
      object-fit: cover;
    }
  }
}
@media (max-width: 1200px) {
  .main-container {
    .main-title {
      max-width: 60%;
      margin: 10% auto;
    }
    .img-background {
      position: absolute;
      // 居中
      // top: 50%;
      left: 15%;
      z-index: -1;
      filter: blur(4px);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
p {
  // 允许换行

  word-break: break-all;
}
</style>
