<template id="">
	<div class="container">
	<header>
			<div class="search">
				<input type="text" placeholder="请输入你要搜索的物品" />
			</div>
		</header>	
	<section>
		<div class="swiper-container" id="banner-swiper">
			<div class="swiper-wrapper">
			    <div class="swiper-slide">
			    	<ul>
						<li>
							<img src='images/mobilevip_banner_bg.png' />
						</li>
			   		 </ul>
				</div>
				<div class="swiper-slide">
			    	<ul>
						<li>
							<img src='images/banner-02.png' />
						</li>
			   		 </ul>
				</div>
				<div class="swiper-slide">
			    	<ul>
						<li>
							<img src='images/mobilevip_banner_bg.png' />
						</li>
			   		 </ul>
				</div>
				<div class="swiper-slide">
			    	<ul>
						<li>
							<img src='images/banner-02.png' />
						</li>
			   		 </ul>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class='classify'>
			 <ul>
				<li>
					<i><img src='/images/mobileallclassify.png' /></i>
					<b>全部分类</b>
				</li>
				<li>
					<i><img src='/images/mobiletuangou.png' /></i>
					<b>团购</b>
				</li>
				<li>
					<i><img src='/images/mobileintergration.png' /></i>
					<b>积分商城</b>
				</li>
				<li>
					<i><img src='/images/mobileframeglasses.png' /></i>
					<b>框架眼镜</b>
				</li>
				<li>
					<i><img src='images/mobilesunglasses.png' /></i>
					<b>太阳镜</b>
				</li>
				<li>
					<i><img src='/images/mobileconcatlense.png' /></i>
					<b>隐形眼镜</b>
				</li>
				<li>
					<i><img src='/images/mobilecolorlense.png' /></i>
					<b>彩瞳</b>
				</li>
				<li>
					<i><img src='/images/mobilecareproducts.png' /></i>
					<b>护理用品</b>
				</li>
			</ul>
		</div>
		<div class='topSales'>
			<div class='hotTitle'>
				<b><img src='/images/hotline.png' />热销TOP榜</b>
				<b>更多<img src='/images/arrow_right.png' /></b>			
			</div>
			<div class='hotProduct'>
				<div>
					<i>
						<img src='/images/hot-01.png' />
						<b><span>点睛之美&nbsp;&nbsp;让美更美</span><span>博士伦炫眸日抛10片装</span></b>
					</i>
					<p><span>￥</span><span>68</span>/盒</p>
					<img class='itemImg' src='/images/glasses-01.png' />
				</div>
				<div>
					<i>
						<p>
							<img src='/images/hot-02.png' />
							<span><span>全面升级&nbsp;&nbsp;更易配戴</span><span>强生美瞳日抛30片装</span></span>
						</p>
						<b>
							<p><span>￥</span><span>189</span>/盒</p>
							<img src='/images/glasses-02.png' />
						</b>
					</i>
					<i>
						<p>
							<img src='/images/hot-02.png' />
							<span><span>长效高清&nbsp;&nbsp;全天水润</span><span>博士伦清朗日抛20片装</span></span>
						</p>
						<b>
							<p><span>￥</span><span>158</span>/盒</p>
							<img src='/images/glasses-03.png' />
						</b>
					</i>

				</div>
			</div>
		</div>
		<div class='discounts'>
			<img src='/images/mobilediscount.png' />
		</div>
		<div class='barginBuy'>
			<div class='salesTitle'>
				<b><img src='/images/hotline.png' />超值购</b>			
			</div>
			<div class='salesProduct'>
				<div>
					<i>
						<b>强生润眸双周抛6片装</b>
						<b>买一赠二</b>
						<b>
							<p><span>￥</span><span>82</span>/盒</p>
							<img src='/images/zhi-01.png' />
						</b>
					</i>
					<i>
						<img src='/images/zhi-02.png' />
					</i>	
				</div>
				<div>
					<b>手机专享</b>
					<b>专属优惠&nbsp;&nbsp;全品省不停</b>
					<img src='/images/zhi-03.png' />
				</div>
				
			</div>
		</div>
		<nav id="index-scroll">
			<ul>
				<li :class="{active:index==navIndex}" v-on:click="changeTab(index)" v-for="(item,index) in nav">
					<i class='yo-ico'>&#xe762;</i>
					<b>{{item}}</b>
				</li>
			</ul>
		</nav>
		<div class='list'>
			<div class="swiper-container" id="index-swiper">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			    <div class="swiper-slide">
			    	<ul>
						<li v-for="item in list">
							<img :src="item.imgSrc" />
							<b class="pTitle"><i>{{item.active}}</i>{{item.desc}}</b>
							<b class="pComment">
								<span><i>{{item.currentPrice}}</i><i>{{item.prePrice}}</i></span>
								<span><i>{{item.commentCount}}</i><i>评论</i></span>
							</b>
						</li>
					</ul>
			    </div>
			  </div>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				swiper:null,

				navIndex:0,

				nav:['精选','框架眼镜','太阳眼镜','隐形眼镜','彩瞳','护理液'],

				list:[]
			}
		},
		methods:{
			changeTab:function(index){
				this.swiper.slideTo(index);
				this.navIndex = index;
			}
		},

		mounted:function (){

			new Swiper('#banner-swiper',{
				autoplay:1000,
				loop:true,
				pagination : '.swiper-pagination'
			});

			fetch('/api/indexList').then(response => response.json())
			.then(res => {
				var that = this;
				that.list = res;
				this.swiper = new Swiper('#index-swiper',{
					loop:false,
					onSlideChangeStart:function(swiper){
						that.navIndex = swiper.activeIndex;
					}
				});
			})
			.catch(e => console.log("Oops,error",e));
		} 
	}
</script>