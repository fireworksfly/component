import { createRouter, createWebHistory } from 'vue-router'
import Home from "../view/home/Home";
import CateGory from "../view/category/CateGory";
import Profile from "../view/profile/Profile";
import shopCart from "../view/shopcart/shopCart";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: shopCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
