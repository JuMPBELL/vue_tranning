import Vue from 'vue'
import App from './App.vue'
import router from './router'
//axios
import axios from 'axios'
//导入样式
import './assets/css/global.css'
//element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

//axios请求根路径
axios.defaults.baseURL = "http://localhost:8080"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
