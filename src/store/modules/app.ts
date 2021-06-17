import store from "../../store/index"
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { getUserInfo } from "../../api/modules/app"
import { ZM_AJAX_SUCCESS_CODE } from "../../api/constant";


@Module({ name: 'appStore', dynamic: true, namespaced: true, store })
class AppStore extends VuexModule {
    private menuList: ZMMenu[] = []

    private userInfo: ZMUserInfo = {}

    private permissions: string[] = []

    get getMenuList() {
        return this.menuList;
    }
    get getUserInfo() {
        return this.userInfo;
    }

    get getPermissions() {
        return this.permissions;
    }

    @Mutation
    commitMenuState(menuList: ZMMenu[]) {
        this.menuList = menuList;
    }

    @Mutation
    commitUserInfo(userInfo: ZMUserInfo) {
        this.userInfo = userInfo;
    }

    @Mutation
    commitPermissions(permissions: string[]) {
        this.permissions = permissions
    }

    @Action
    async getUserInfoAction() {
        await getUserInfo({ appCode: import.meta.env.VITE_APP_PROXY_URL }).then((res) => {
            if (res.code == ZM_AJAX_SUCCESS_CODE) {
                this.commitUserInfo(res.data.me)
                this.commitPermissions(res.data.permission);
                this.commitMenuState(res.data.menu);
            }
        })
    }

    @Action
    async setUserInfoAction(res:any) {
      this.commitUserInfo(res.data.me)
      this.commitPermissions(res.data.permission);
      this.commitMenuState(res.data.menu);
    }

    @Action
    vertifyPermission(permission: string) {
        if (this.permissions.indexOf(permission.trim()) !== -1) {
            return true
        } else {
            return false
        }
    }

}
export { AppStore };
export const appStore = getModule<AppStore>(AppStore);
