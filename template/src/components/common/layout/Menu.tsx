import { Menu } from "ant-design-vue";
import { computed, defineComponent, reactive, ref, unref, watch } from "vue"
import {
    UserOutlined, LeftCircleOutlined
} from '@ant-design/icons-vue';
import { useRoute, useRouter } from "vue-router";
import "./Menu.less";
import { useStore } from "vuex";

export default defineComponent({
    name: 'zmMenu',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const appStore = store.state.appStore;

        //todo 需要更改成为递归函数去获取权限
        const getPermissionByFullPath = (list: ZMMenu[], path: string) => {
            let permission = "";
            let parentPermission = ""
            list.forEach(item => {
                if (item.path == path) {
                    permission = item.permission;
                }
            })
            list.forEach(item => {
                if (item.subMenu) {
                    item.subMenu.forEach(item2 => {
                        if (item2.path == path) {
                            parentPermission = item.permission;
                            permission = item2.permission;
                        }
                    })
                }
            })
            return {
                permission,
                parentPermission
            };
        }

        let selectedKeys: string[] = reactive([]);
        let openKeys: string[] = reactive([]);
        const isShowMenu = computed(() => {
            console.log(1123);
            return appStore.menuList && appStore.menuList.length > 0
        })

        watch(isShowMenu, (val, oldVal) => {
            // setTimeout(() => {
                // console.log(val);
                if (val != oldVal) {
                    // console.log(route);
                    if (route.fullPath !== '/') {
                        const { permission, parentPermission } = getPermissionByFullPath(appStore.menuList, route.fullPath);
                        selectedKeys[0] = permission;
                        openKeys[0] = parentPermission;
                        console.log(selectedKeys)
                        console.log(openKeys)
                    }
                }
        }, { immediate: true })


        const menuItemClick = (item: ZMMenu) => {
            router.push({ path: item.path });
        }

        const returnSystem = () => {
            location.href = "/telecast/";
        }

        //生成menu菜单
        const renderMenu = (menuList: ZMMenu[]) => {
            //筛选出本系统的菜单
            const myMenuList = menuList.filter((item) => {
                return appStore.permissions.indexOf(item.permission) !== -1
            })
            const menu = myMenuList.map((item, index) => {
                if (!item.subMenu) {
                    return <Menu.Item onClick={() => { menuItemClick(item) }} key={item.permission} >
                        <p  >{item.menuName}</p>
                    </Menu.Item>
                } else {
                    return <Menu.SubMenu key={item.permission}>
                        {{ default: () => item.subMenu && renderMenu(item.subMenu), title: () => <span><UserOutlined /><span>{item.menuName}</span></span> }}
                    </Menu.SubMenu>
                }
            })
            return menu
        }

        return () => {
            // vModel={[selectedKeys, 'selectedKeys']}
            return unref(isShowMenu) && <Menu mode="inline" class="zm_basic_menu" defaultSelectedKeys={selectedKeys} defaultOpenKeys={openKeys} >
                {renderMenu(appStore.menuList)}
            </Menu>
        }
    }
});
