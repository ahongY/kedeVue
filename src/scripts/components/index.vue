<template>
	<div class='m-index' id='mIndex'>
		<router-view></router-view>
		<footer>
			<ul>
				<li @click="changeNav(i)" :class="{active:i==navIndex}" v-for="(fn,i) in footerNav">
					<router-link :to="fn.router">
						<i class='yo-ico' v-html="fn.ico"></i>
						<b>{{fn.title}}</b>
					</router-link>
				</li>
		</footer>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return{
				navIndex:0,
				footerNav:[
					{
						router:'/',
						title:"主页",
						ico:"&#xe67c;"
					},
					{
						router:'/classify',
						title:"分类",
						ico:"&#xe637;"
					},
					{
						router:'/shopcar',
						title:"购物车",
						ico:"&#xe68a;"
					},
					{
						router:'/my',
						title:"我的",
						ico:"&#xe614;"
					}
				]
			}
		},
		methods:{
			changeNav:function(index){
				this.navIndex = index;
			}
		}
	}
</script>