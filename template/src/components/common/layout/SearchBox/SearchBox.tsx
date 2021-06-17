import { defineComponent } from "vue"

import "./SearchBox.less"
/**
 * page layout
 */
export default defineComponent({
    setup(props, context) {
        return () => <div class="root-searchbox">
            {context.slots.default ? context.slots.default() : ''}
        </div>
    }
});
