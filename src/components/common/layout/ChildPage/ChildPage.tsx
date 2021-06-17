import { defineComponent } from "vue"

import "./ChildPage.less"
/**
 * page layout
 */
export default defineComponent({
    setup(props, context) {
        return () => <div class="root-page-layout">
            {context.slots.default ? context.slots.default() : ''}
        </div>
    }
});