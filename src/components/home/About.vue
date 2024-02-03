<template>
  <div id="about">
    <top-header></top-header>
    <div class="aboutContent">
      关于
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
