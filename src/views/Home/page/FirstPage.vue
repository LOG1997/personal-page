<script setup lang="ts">
const switchTheme = () => {
  console.log("switchTheme");
};
</script>

<template>
  <div class="main-container flex">
    <div class="main-title">
      <p>IMAGINATIONS</p>
      <p>Func</p>
      <p class="desc">
        Simplify the process: keep operating process simple and
        intuitive.Definite and clear: enunciate your intentions clearly so that
        the users can quickly understand and make decisions.Easy to identify:
        the interface should be straightforward, which helps the users to
        identify and frees them from memorizing and recalling.
      </p>
      <div class="next-btn" @click="switchTheme">查看项目👉</div>
    </div>
    <div class="img-background">
      <img src="@/assets/images/background.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  .main-title {
    margin: auto 0;
    text-align: left;
    width: 800px;
    padding-left: 60px;
    p {
      font-family: Verdana, Genva, Arial, sans-serif;
      font-size: 90px;
      line-height: 100px;
    }

    .desc {
      font-size: 16px;
      line-height: 20px;
      text-align: left;
      line-height: 30px;
      padding: 20px 0;
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
    width: 80%;
    height: 80%;
    padding-left: 70px;
    z-index: 10;
    img {
      z-index: 10;
      width: 80%;
      height: 90%;
      object-fit: cover;
    }
  }
}
</style>
