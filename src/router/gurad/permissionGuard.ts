import type { Router } from 'vue-router';
import { appStore } from "/@/store/modules/app"
// import { asyncRoutes, RootRoute } from '../routes';
// import { filter } from '@/assets/utils/routerHelper';

export default function createPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        //验证是否已经登陆过 获取过用户信息
        let userInfo = appStore.getUserInfo;
        if (!userInfo.userId) {
            // await appStore.getUserInfoAction();
            userInfo = appStore.getUserInfo;
            if (userInfo.userId) {
                next()
            } else {
                next();
            }
            //     //动态生成权限路由
            //     let routes: AppRouteRecordRaw[] = [];
            //     routes = filter(asyncRoutes, (route) => {
            //         const { meta } = route;
            //         const { role } = meta!;
            //         return appStore.getPermissions.some((myRole) => myRole == role);
            //     });
            //     routes.forEach((route) => {
            //         router.addRoute(RootRoute.name, route as RouteRecordRaw);
            //     });
            //     //重新定向 动态路由会找不到路由 需要重新定向导入  为了刷新
            //     const redirectPath = (from.query.redirect || to.path) as string;
            //     const redirect = decodeURIComponent(redirectPath);
            //     const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
            //     next(nextData);
            // } else {
            //     next({ name: 'Exception', path: '/exception/500', params: { code: 500 } })
            // }
        } else {
            //1.验证路由中是否有此路由
            // let flag = router.getRoutes().findIndex((route) => {
            //     return route.name == to.name || route.path == to.path;
            // });
            // if (flag !== -1) {
            //验证是否有权限进入
            // if (appStore.getPermissions.indexOf(to.meta.role) !== -1) {
            // next()
            // } else {
            //进入Exception 你没有权限进入此页面 其实路由已经过滤过了 没有权限的路由 不会存在
            // next({ name: 'Exception', path: '/exception/403', params: { code: 403 } })
            // }
            // } else {
            next();
            // }
        }
    })
}
