<template>
  <div id="about">
    <top-header></top-header>
    <div class="aboutContent">
      一个可以生成试题的网站，适用于幼儿园、小学、初中同学单元测试<br>
      <h4>支持功能</h4>
      <ul>
        <li>
          数学：加减乘除混合运算
        </li>
        <li>
          英语：单词训练
        </li>
        <li>
          可设置题目数量，可打印题目
        </li>
      </ul>

      <h4>访问方式</h4>
      <ul>
        <li>在线访问：<a href="https://leanfish2011.github.io/e-learn"
                        target="_blank">轻松学-题库</a></li>
        <li>离线使用：下载压缩包，用浏览器打开index.html即可访问
          <ul>
            <li>
              链接: <a href="https://pan.baidu.com/s/1mq_SrofNQIh-GDL9na8OSA"
                       target="_blank">下载链接</a>
            </li>
            <li>
              提取码: 7jgn
            </li>
          </ul>
        </li>
      </ul>

      <br>
      <br>
      使用中有任何问题或者建议，可给作者发邮件：leanfish2011@163.com<br>
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
