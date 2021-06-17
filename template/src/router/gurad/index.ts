import type { Router } from 'vue-router';
import createPermissionGuard from './permissionGuard';

export function createGuard(router: Router) {

    router.beforeEach(async () => {
    });
    createPermissionGuard(router);
}
