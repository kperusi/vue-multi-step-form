import { createApp } from "vue";
import App from "./components/App.vue";
import HomePage from "./components/bg/HomePage.vue";
import AboutPage from "./components/bg/AboutPage.vue";
import LoginPage from "./components/bg/LoginPage.vue";
import ErrorPage from "./components/bg/ErrorPage.vue";
import SignUp from "./components/bg/SignUp.vue";
import UserPage from "./components/bg/UsersPage.vue";
import BgComponent from "./components/bg/BgComponent.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/login", component: LoginPage },
  { path: "/users/:id", component: UserPage },
  { path: "/signup", component: SignUp },
  {
    path: "/randomusers",
    component: BgComponent,
    children: [
      {
        path: '',
        name: 'users',
        component:()=>import('./components/bg/UsersPage.vue')
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
