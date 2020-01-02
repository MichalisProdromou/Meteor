import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/seasons",
    name: "Seasons",
    component: () => import("../views/Seasons.vue")
  },
  {
    path: "/match-categories",
    name: "Match Categories",
    component: () => import("../views/MatchCategories.vue")
  },
  {
    path: "/championships",
    name: "Championships",
    component: () => import("../views/Championships.vue")
  },
  {
    path: "/match-weekends",
    name: "Match Weekends",
    component: () => import("../views/MatchWeekends.vue")
  },
  {
    path: "/teams",
    name: "Teams",
    component: () => import("../views/Teams.vue")
  },
  {
    path: "/players",
    name: "Players",
    component: () => import("../views/Players.vue")
  },
  {
    path: "/referees",
    name: "Referees",
    component: () => import("../views/Referees.vue")
  },  
  {
    path: "/matches",
    name: "Matches",
    component: () => import("../views/Matches.vue")
  },
  {
    path: "/fields",
    name: "Fields",
    component: () => import("../views/Fields.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
