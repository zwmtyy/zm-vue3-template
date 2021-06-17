const fs = require("fs")
const cd = require('./cd.json')
const path = require("path")
import vue from '@vitejs/plugin-vue';
import vueJsxPlugin from 'vite-plugin-vue-jsx';

// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")

const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  console.log(envConfig);
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

console.log(process.env.VITE_APP_PROXY_URL);
console.log(process.env.VITE_APP_CODE);
module.exports = {
  alias: {
    // es6-module 加载不能支持 ant-design 的中文设置
    'moment': 'dayjs',
    '/@/': path.resolve(__dirname, './src'),
    '/components/': path.resolve(__dirname, './src/components')
  },
  // 反向代理
  proxy: {
    "/api/auth": {
      target: process.env.VITE_APP_PROXY_URL,
      changeOrigin: true,
    },
    "/api/reseller-data-analysis": {
      target: process.env.VITE_APP_PROXY_URL,
      changeOrigin: true,
    }
  },
  plugins: [vue(), vueJsxPlugin()],
  /**
   * Base public path when served in production.
   * @default '/'
   */
  base: cd['cdn-path'] || "./",
  envc: 'fat',
  optimizeDeps: {
    include: ['ant-design-vue/es/locale/zh_CN', 
      'moment/locale/zh-cn',
     'ant-design-vue/es/date-picker/locale/zh_CN',
      // es6-module 加载不能支持 ant-design 的中文设置
     'dayjs/plugin/isSameOrBefore',
     'dayjs/plugin/isSameOrAfter',
     'dayjs/plugin/advancedFormat',
     'dayjs/plugin/customParseFormat',
     'dayjs/plugin/weekday',
     'dayjs/plugin/weekYear',
     'dayjs/plugin/weekOfYear',
     'dayjs/plugin/isMoment',
     'dayjs/plugin/localeData',
     'dayjs/plugin/localizedFormat',
     'dayjs/plugin/badMutable',
     'dayjs/locale/en',
     'dayjs/locale/zh-cn',
    ]
  }
}