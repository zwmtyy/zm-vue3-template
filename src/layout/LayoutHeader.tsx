import { Layout } from "ant-design-vue"
import { defineComponent } from "vue"
import Header from "../components/common/layout/Header"
export default defineComponent({
    name: 'layoutHeader',
    setup() {
        return () => {
            return <Layout.Header class="header-layout">
                <Header />
            </Layout.Header>
        }
    }
})