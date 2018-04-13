import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Personal from './../components/Personal.vue';
import Post from './../components/Post.vue';
import Profile from './../components/Profile.vue';
import News from './../components/News.vue';
import Sale from './../components/Sale.vue';
import Rent from './../components/Rent.vue';
import Home from './../components/Home.vue';

Vue.use(Router)

var router = new Router({
  routes: [
  {
  	name: 'home',
  	path: '/',
  	component: Home
  },
  {
  	name: 'news',
  	path: '/news',
  	component: News
  },
  {
  	name: 'personal',
  	path: '/personal',
  	component: Personal
  },
  {
  	name: 'post',
  	path: '/post',
  	component: Post
  },
  {
  	name: 'profile',
  	path: '/profile',
  	component: Profile
  },
  {
  	name: 'sale',
  	path: '/sale',
  	component: Sale
  },
  {
  	name: 'rent',
  	path: '/rent',
  	component: Rent
  }
  ]
})

export default router