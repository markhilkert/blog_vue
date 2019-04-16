import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Posts from './views/Posts.vue'
import Tags from './views/Tags.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/posts/:id', name: 'post', component: Posts },
    { path: '/tags/:name', name: 'tag', component: Tags },
    { path: '/about', name: 'about', component: About }
  ]
})
