import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/User/Home.vue';
import Product from '@/views/User/Product.vue';
import Cart from '@/views/User/Cart.vue';
import Login from "@/components/User/Login/Login.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
