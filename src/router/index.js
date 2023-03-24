import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProdView from '../views/SingleProdView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ManageView from '../views/ManageView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import CartView from '../views/CartView.vue'
import LogOutView from '../views/LogOutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView 
  },
  {
    path: '/product/:id',
    name: 'product',
    component: SingleProdView

  },
  
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
    
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOutView
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: ManageView
    
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
