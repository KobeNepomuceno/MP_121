import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/ProductPage.vue'


const routes = [
    { /*login page*/
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../Views/LogIn'),
    },
    { /*Seller Page*/
        path: '/Seller',
        name: 'ProfilePage',
        component: () => import('../Views/SellerPage'),
    },
    {
       /*Checkout Page or Cart*/
       path: '/Checkout',
       name: 'CheckoutCart',
       component: () => import('../Views/Cart'), 
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router