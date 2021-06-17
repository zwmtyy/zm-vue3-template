<template>
  <a-config-provider :locale="zh_CN">
  <Layout class="default-layout relative">
    <Layout>
    <LayoutSideBar />
    <Layout>
        <LayoutHeader />
        <layout-content style="background: white; height: 100%; overflow: auto">
          <div id="subappcontainer">
          <RouterView></RouterView>
          </div>
        </layout-content>
    </Layout>
    </Layout> 
  </Layout> 
  </a-config-provider>
</template>

<script lang="ts">
import { Layout } from 'ant-design-vue';
import HelloWorld from './components/HelloWorld.vue';
import LayoutSideBar from "./layout/LayoutSideBar";
import LayoutHeader from "./layout/LayoutHeader";
import zh_CN from 'ant-design-vue/es/locale/zh_CN';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Layout,
    LayoutSideBar,
    LayoutHeader,
  },
  data() {
      return {
        zh_CN,
      };
  }
}
</script>

<style lang="less">
@import "./assets/less/reset.less";
@import "./index.less";
#app {
  height: 100%;
}
#subappcontainer {
  height: 100%;
}
</style>
