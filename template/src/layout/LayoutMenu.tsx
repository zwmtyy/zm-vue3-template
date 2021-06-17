import { defineComponent } from "vue"
import ZMMenu from "../components/common/layout/Menu"
export default defineComponent({
    name: 'layoutMenu',
    setup() {
        return () => {
            return <ZMMenu />
        }
    }
});