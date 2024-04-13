<template>
  <header class="header fixed-header">
    <div class="header-container">
      <a class="home-link" href="/">
        <div class="logo"></div>
        <span>轻松学-题库</span>
      </a>
      <div class="right-list">
        <el-menu :default-active="activeIndex" mode="horizontal" router>
          <el-submenu index="1">
            <template slot="title">数学</template>
            <el-menu-item index="1-1" route="/">
              计算题
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">英语</template>
            <el-menu-item index="2-1" route="/english">
              单词
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3" route="/about">
            关于
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
    };
  }
}
</script>

<style scoped>
.header {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transition: background 0.5s;
}

.fixed-header {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 0 3px rgba(14, 14, 14, 0.26);
}

.fixed-header .home-link {
  color: #ff6700;
}

.header-container {
  max-width: 1200px;
  height: 40px;
  margin: 0 auto;
  padding: 5px 40px;
  position: relative;
}

@media screen and (max-width: 480px) {
  .header-container {
    padding: 5px 20px;
    position: relative;
  }
}

.logo {
  background: url("../../../static/log.jpg");
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.home-link {
  display: flex;
  align-items: center;
  float: left;
  font-weight: 500;
  color: #fff;
  font-size: 1.5em;
  line-height: 40px;
}

.right-list {
  list-style: none;
  float: right;
  padding: 0;
}

@media screen and (max-width: 480px) {
  .right-list {
    display: none;
  }
}
</style>