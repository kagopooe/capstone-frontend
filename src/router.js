import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Contact from "./views/Contact.vue"
import Profile from "./views/Profile.vue";
import Menu from './views/Menu.vue'
import Order from './views/Order.vue'
import Cart from './views/Cart.vue'
// lazy-loaded
// const Profile = () => import("./views/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/contact",
    component: Contact
    // lazy-loaded
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/cart",
    component: Cart,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;