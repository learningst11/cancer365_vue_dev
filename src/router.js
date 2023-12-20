import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./views/adm/Login";
import List from "./views/adm/List";
import ListDetail from "./views/adm/ListDetail";
import ChangePw from "./views/adm/ChangePw";

Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes:[
    {path:"/", component:Home},
    {path:"/adm/login", component:Login},
    {path:"/adm/change_pw", component:ChangePw, meta:{requiresAuth: true}},
    {path:"/adm/list", component:List, meta: { requiresAuth: true }},
    {path:"/adm/list_detail", component:ListDetail, meta: { requiresAuth: true }},
  ]
})

import axios from 'axios';

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (!requiresAuth) {
    next();
    return;
  }

  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    next('/adm/login');
    return;
  }

  try {
    const response = await axios.get('/api/check-auth', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    if (response.data.isAuthenticated) {
      next();
    } else {
      next('/adm/login');
    }
  } catch (error) {
    next('/adm/login');
  }
});


export default router;