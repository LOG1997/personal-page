<script setup lang="ts">
const switchTheme = () => {
  console.log("switchTheme");
};
</script>

<template>
  <div class="main-container">
    <div class="main-title">
      <p class="main-title__title">IMAGINATIONS</p>
      <p class="main-title__title">Func</p>
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
  display: flex;
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
    z-index: -1;
    top: 0;
    left: 50%;
    img {
      position: absolute;
      width: 600px;
      height: 600px;
      object-fit: cover;
    }
  }
}
</style>
