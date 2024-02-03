/**
 * 前端各个模块的路由。在main.js中使用
 */

// 1、引入各个组件
import Home from '../components/home/Home.vue'
import About from "../components/home/About.vue"

// 2、设置路由路径
export default [
  {path: "/", component: Home},
  {path: "/about", component: About}
]
