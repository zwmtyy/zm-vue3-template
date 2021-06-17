import { createApp, h } from "vue";
import App from "./App.vue";
import { Form, Input, Modal, Select, Button, DatePicker, ConfigProvider, Space, Layout, LocaleProvider } from 'ant-design-vue'
import router from "./router/index";
import store from "./store/index";
import { appStore } from "./store/modules/app";
import { getUserInfo } from "./api/modules/app";
import { ZM_AJAX_SUCCESS_CODE } from "./api/constant";
import "ant-design-vue/dist/antd.css";
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekday from 'dayjs/plugin/weekday'
import weekYear from 'dayjs/plugin/weekYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isMoment from 'dayjs/plugin/isMoment'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import badMutable from 'dayjs/plugin/badMutable'
// import 'dayjs/locale/en'
import 'dayjs/locale/zh-cn'

let APP_CODE = import.meta.env.VITE_APP_CODE;
let userParams:any = {
  appCode: APP_CODE
} 
getUserInfo(userParams).then((res:any) => {
    console.log(res);
    if (res.code !== ZM_AJAX_SUCCESS_CODE) {
      return;
    }
    let mainApp = createApp({
        render: ()=> {
          return h(App);
        },
        created () {
          // 设置store
          appStore.setUserInfoAction(res);
        }
    });
    mainApp.
    use(router).
    use(store).
    use(Layout).use(Modal).use(Form).use(Input).use(Select).use(Button).use(DatePicker).use(ConfigProvider).use(LocaleProvider).use(Space);
    router.isReady().then(() => mainApp.mount('#app'));

    // ### extend
    dayjs.extend(isSameOrBefore)
    dayjs.extend(isSameOrAfter)
    dayjs.extend(advancedFormat)
    dayjs.extend(customParseFormat)
    dayjs.extend(weekday)
    dayjs.extend(weekYear)
    dayjs.extend(weekOfYear)
    dayjs.extend(isMoment)
    dayjs.extend(localeData)
    dayjs.extend(localizedFormat)
    dayjs.extend(badMutable)

    // ### locale
    // dayjs.locale('en')
    dayjs.locale('zh-cn')
    // mount('#app');
});
