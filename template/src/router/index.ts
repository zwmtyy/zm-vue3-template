import { createRouter,createWebHashHistory} from "vue-router";
import { createGuard } from './gurad';

// 路由信息
const routes = [
    {
      path: "/",
      name: "Home",
      redirect: "/welcome"
    },
    {
        path: "/welcome",
        name: "welcome",
        component:  () => import('/@/views/welcome/index.vue'),
    },
];

// 导出路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

//设置路由拦截器
// createGuard(router);

export default router;