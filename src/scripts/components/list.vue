<template>
	<div class="list" id="list">
		<header>
			<ul>
				<li>
					<i><img src="/images/list-images/arrow_left.png" alt="" /></i>
				</li>
				<li>隐形护理眼镜</li>
				<li>筛选</li>
			</ul>
		</header>
		<nav>
			<ul>
				<li v-on:click="changeTab(index)" :class="{active: index==navIndex}" v-for="(item,index) in nav">{{item}}</li>
			</ul>
		</nav>
		<section>
			<div class="swiper-container" id="list-swiper">
			  	<div class="swiper-wrapper">
			    	<div class="swiper-slide"  id="list-scroll">
						<div class="scroll-container">
							<div class="head hide">
								<img src="/images/list-images/default_indicator_arrow.png" alt="" />
								<span>下拉刷新...</span>
							</div>
							<ul>
								<li v-for="item in list">
									<i><img :src="item.imgSrc"/></i>
									<p class="title">{{item.title}}</p>
									<p class="price"><b>￥</b>{{item.price}}</p>
								</li>
							</ul>	
							<div class="foot hide">
								<img src="/images/list-images/default_indicator_arrow.png" alt="" />
								<span>上拉加载...</span>
							</div>
						</div>
			    	</div>
			    	<div class="swiper-slide">
			    		<ul>
							<li v-for="item in list">
								<i><img :src="item.imgSrc"/></i>
								<p class="title">{{item.title}}</p>
								<p class="price"><b>￥</b>{{item.price}}</p>
							</li>			
						</ul>	
			    	</div>
			    	<div class="swiper-slide">
			    		<ul>
							<li v-for="item in list">
								<i><img :src="item.imgSrc"/></i>
								<p class="title">{{item.title}}</p>
								<p class="price"><b>￥</b>{{item.price}}</p>
							</li>			
						</ul>	
			    	</div>
			  	</div>
			</div>
	
		</section>
	</div>
</template>
<script>
	var common = require('../utils/util.common.js');
	module.exports = {
		data:function(){
			return{
				swiper:null,
				navIndex:0,
				nav:['综合','销量','价格'],
				list:[]
			}
		},
		methods:{
			changeTab:function(index){
				this.swiper.slideTo(index);
				
				this.navIndex = index;

			}
		},
		mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				//console.log(res);
				var that = this;
				that.list = res;
				that.swiper = new Swiper('#list-swiper',{
					loop:false,
					onSlideChangeStart:function(swiper){
						that.navIndex = swiper.activeIndex;
					}
				});
				common.isAllLoaded('#list-scroll ul',function(){
					common.scroll(that);
				});
				
				
			})
			.catch(e => console.log("oops.error",e));
			
		}
	}
</script>