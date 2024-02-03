<template>
  <div id="home">
    <top-header></top-header>
    <main class="app-body">
      <main-math></main-math>
    </main>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Math from "../math/Math.vue";

export default {
  name: "Home",
  components: {
    "topHeader": Header,
    "bottomFooter": Footer,
    "mainMath": Math
  },
}
</script>

<style scoped>
#home {
  width: 100%;
  margin-top: 20px;
}
</style>