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
  //  {
  //   path: "/seasons",
  //   name: "Seasons", 
  //   component: () => import("../views/Seasons.vue"),
  // },
  {
    path: "/seasons",
    name: "Seasons", 
    component: () => import("../views/Seasons.vue"),
    children: [
      // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: () => import("../components/Seasons/SeasonsMain.vue") },
				
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: '/seasons/new', component: () => import("../components/Seasons/NewSeason.vue") },
        { path: '/seasons/:id/view', component: () => import("../components/Seasons/ViewSeason.vue") },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: '/seasons/:id/edit', component: () => import("../components/Seasons/EditSeason.vue") },
        //TODO: Implement 404 page:
        //{ path: '/*', component: () => import("../views/Login.vue") },
    ]
  },
  {
    path: "/match-categories",
    name: "Match Categories",
    component: () => import("../views/MatchCategories.vue")
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: () => import("../views/Tournaments.vue")
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
