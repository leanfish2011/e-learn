<template>
  <div id="about">
    <top-header></top-header>
    <div class="aboutContent">
      这是一个可以生成题库的网站，适用于幼儿园、小学同学。<br>
      <br>
      可设置题型和难度，可打印题目<br>
      <br>
      使用中有任何问题或者建议，可给作者发邮件：leanfish2011@163.com
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'About',
  components: {
    "topHeader": Header,
    "bottomFooter": Footer
  }
}
</script>

<style scoped>
#about {
  width: 100%;
  margin-top: 80px;
}

.aboutContent {
  width: 50%;
  min-height: calc(100vh - 186px);
  margin: 5px auto 5px auto;
}
</style>
