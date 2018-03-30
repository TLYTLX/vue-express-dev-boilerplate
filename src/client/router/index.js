import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Hello from './../components/Hello.vue'
import News from './../components/News.vue'

Vue.use(Router)

var router = new Router({
  routes: [
  {
    name: 'hello',
    path: '/hello',
    component: Hello
  },
  {
  	name: 'news',
  	path: '/news',
  	component: News
  }
  ]
})

export default router