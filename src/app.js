require('./styles/usage/app.scss');
var layout = require('./scripts/tpls/layout.string');
var common = require('./scripts/utils/util.common.js');

common.render(layout);
//var common = require('./scripts/utils/util.common.js');
//var html = require('./scripts/tpls/index.string');
//var html = require('./scripts/tpls/classify.string');
//var html = require('./scripts/tpls/shopcar.string');
//var html = require('./scripts/tpls/product.string');
//common.render(html);
//require('./scripts/views/product.js');
//
//components
import index from './scripts/components/index.vue';
import home from './scripts/components/home.vue';
import classify from './scripts/components/classify.vue';
import shopcar from './scripts/components/shopcar.vue';
import product from './scripts/components/product.vue';
import login from './scripts/components/login.vue';
import mine from './scripts/components/mine.vue';
import Register from './scripts/components/Register.vue';
import list from './scripts/components/list.vue';
//vue router 2
const routes = [{
		path:'/',
		component:index,
		children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/',
          component: home
        },{
        	path:'/classify',
        	component:classify
        },{
        	path:'/shopcar',
        	component:shopcar
        },{
          path:'/my',
          component:mine
        },{
          path:'/product',
          component:product
        },{
          path:'/login',
          component:login
        },{
          path:'/Register',
          component:Register
        },        {
          path:'/list',
          component:list
        }
      ]
}]

const router = new VueRouter({
	routes //(缩写)相当于routes:routes
})

const app = new Vue({
	router
}).$mount("#app")