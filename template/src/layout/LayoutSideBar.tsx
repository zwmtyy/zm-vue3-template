import { Layout } from 'ant-design-vue';
import { computed, defineComponent, ref, unref } from "vue";
import LayoutMenu from "./LayoutMenu";
/**
 * 图片资源
 */
import darkMiniImg from '/@/assets/images/sidebar/dark-mini.png';
import darkImg from '/@/assets/images/sidebar/dark.png';
import logo from "/@/assets/images/sidebar/logo.png";
import logo_small from "/@/assets/images/sidebar/logo_small.png";

export default defineComponent({
    name: 'layoutSideBar',
    setup() {
        //菜单是否展开
        const collapseRef = ref(false);

        // 根据展开状态设置背景图片
        const getStyle = computed((): any => {
            const collapse = unref(collapseRef);
            let bg = '';
            bg = collapse ? darkMiniImg : darkImg;
            return {
                'background-image': `url(${bg})`,
            };
        });

        //sidebar图标地址
        const imgUrl = computed((): string => {
            const collapse = unref(collapseRef);
            let url = collapse ? logo_small : logo;
            return url;
        })

        //sidebar图片样式
        const ImageClass = computed(() => {
            const collapse = unref(collapseRef);
            return {
                "layout-sidebar-logo": !collapse,
                "layout-sidebar-logo-small": collapse
            }
        })

        return () => {
            return <Layout.Sider
            v-model={[collapseRef.value, 'collapsed']}
            collapsible
            class="layout-sidebar"
            style={unref(getStyle)}>
                <div class={unref(ImageClass)}>
                    <img src={unref(imgUrl)} />
                </div>
                <LayoutMenu />
            </Layout.Sider>
        }
    }
});