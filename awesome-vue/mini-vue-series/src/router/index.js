import { createRouter, createWebHashHistory } from "./grouter/index";
import Home from "../pages/Home.vue";
import Counter from "../pages/Counter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
