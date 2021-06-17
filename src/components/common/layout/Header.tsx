import { Breadcrumb, Button, Col, Menu, Row, Dropdown } from "ant-design-vue";
import { defineComponent, ref, unref, watch } from "vue";
import { HomeOutlined, DownOutlined } from '@ant-design/icons-vue';

import "./Header.less"
// import Dropdown from "ant-design-vue/lib/dropdown/dropdown";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
    name: 'zmHeader',
    setup() {
        const appStore = useStore().state.appStore;
        const route = useRoute();

        const userName = appStore.userInfo.personName;
        const menus = [{
            label: "退出登录", callback: () => {
                window.location.href = window.location.origin + "/logout";
            }
        }];

        //todo 需要更改成为递归函数去获取name
        const getNameByFullPath = (list: ZMMenu[], path: string) => {
            let name: string[] = [];
            list.forEach(item => {
                if (item.path == path) {
                    name.push(item.menuName);
                }
            })
            list.forEach(item => {
                if (item.subMenu) {
                    item.subMenu.forEach(item2 => {
                        if (item2.path == path) {
                            name.push(item.menuName);
                            name.push(item2.menuName);
                        }
                    })
                }
            })
            return name;
        }


        //获取面包屑数组
        const itemList = ref<string[]>([]);
        const getBreadcrumbs = () => {
            itemList.value = getNameByFullPath(appStore.menuList, route.fullPath);
        }
        getBreadcrumbs();
        watch(route, (nv, ov) => {
            getBreadcrumbs();
        })
        console.log(Dropdown);
        return () => {
            return <Row class="zm-header">
                <Col span={12} >
                    <Breadcrumb class="zm-header-breadcrumb">
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                        {unref(itemList).map((item) => {
                            return <Breadcrumb.Item>{item}</Breadcrumb.Item>
                        })}
                    </Breadcrumb>
                </Col>
                <Col span={12} class="zm-header-right">
                    <Dropdown>
                        {{
                            default() { return <Button type={'link'} style="color: rgba(0, 0, 0, 0.65)">{userName}&nbsp;&nbsp;<DownOutlined/></Button> },
                            overlay: () => {
                                return <Menu>{menus.map((item, index) => {
                                    return <Menu.Item key={index}>
                                        <p onClick={item.callback} >{item.label}</p>
                                    </Menu.Item>
                                })}
                                </Menu>
                            }
                        }}
                    </Dropdown>
                </Col>
            </Row>
        }
    }
});