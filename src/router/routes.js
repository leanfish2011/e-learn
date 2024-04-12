/**
 * 前端各个模块的路由。在main.js中使用
 */

// 1、引入各个组件
import MathHome from '../components/home/MathHome.vue'
import EnglishHome from "../components/home/EnglishHome.vue"
import About from "../components/home/About.vue"

// 2、设置路由路径
export default [
  {path: "/", component: MathHome},
  {path: "/english", component: EnglishHome},
  {path: "/about", component: About}
]
