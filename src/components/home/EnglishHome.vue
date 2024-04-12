<template>
  <div id="home">
    <top-header class="print_hide"></top-header>
    <main class="app-body">
      <main-english></main-english>
    </main>
    <bottom-footer class="print_hide"></bottom-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import English from "../english/English.vue"

export default {
  name: "EnglishHome",
  components: {
    "topHeader": Header,
    "bottomFooter": Footer,
    "mainEnglish": English
  },
}
</script>

<style scoped>
#home {
  width: 100%;
}
</style>