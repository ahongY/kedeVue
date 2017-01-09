<template>
	<div class="product" id="m-product">
		<header>
			<ul>
				<li>
					<i><img src="/images/arrow_left.png" alt="" /></i>
				</li>
				<li>商品详情</li>
				<li>
					<i><img src="/images/abc_ic_menu_moreoverflow_mtrl_alpha.png" alt="" /></i>
				</li>
			</ul>		
		</header>
		<section>
		<div class="img">
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide"><img src="/images/001.jpg" /></div>
			    <div class="swiper-slide"><img src="/images/001.jpg" /></div>
			    <div class="swiper-slide"><img src="/images/001.jpg" /></div>
			  </div>
			</div>
		</div>
			<div class="product_nav">
				<ul class="productNav">
					<li class="{active:index==proNavIndex}" v-on:click="changeTab(index)" v-for="(item,index) in proNav">
						<i class="yo-ico" v-html="item.ico">&#xe627;</i>
						<b v-text="item.title"></b>
					</li>
				</ul>
			</div>
			<ol class="introduce">
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide">
				    	<div class="contain">
				    		<div class="message">
								<div class="introLeft">
									<span>爱尔康视康舒视氧硅水凝胶月抛隐形眼镜6片装(新老包装随机发货)</span>
									<i>￥289.00</i>
									<strong>￥118.00<b>可得价</b></strong>
									<em>积分抵扣$10元</em><em>购买赠送118积分</em>
								</div>
								<div class="introRight">
									<i class="yo-ico">&#xe67d;</i>
									<i class="yo-ico">&#xe63d;</i>
								</div>
							</div>
							<div class="present">
								<div class="title">
									<p>促销</p>
									<p>赠品</p>
								</div>
								<div class="list">
								<figure>
									<img src="/images/zp_001.jpg" />
									<figuration>送品牌护理液</figuration>
								</figure>
								<figure>
									<img src="/images/zp_002.jpg" />
									<figuration>赠精美隐形眼镜</figuration>
								</figure>
								<figure>
									<img src="/images/zp_003.jpg" />
									<figuration>全场下单送护眼贴</figuration>
								</figure>
								<figure>
									<img src="/images/zp_004.jpg" />
									<figuration>爱尔康全套</figuration>
								</figure>
								<figure>
									<img src="/images/zp_001.jpg" />
									<figuration>爱尔康护理液</figuration>
								</figure>
								<figure>
									<img src="/images/zp_002.jpg" />
									<figuration>赠精美隐形眼镜</figuration>
								</figure>
								<figure>
									<img src="/images/zp_003.jpg" />
									<figuration>全场下单送护眼贴</figuration>
								</figure>
								<figure>
									<img src="/images/zp_004.jpg" />
									<figuration>爱尔康全套</figuration>
								</figure>
								<figure>
									<img src="/images/zp_001.jpg" />
									<figuration>爱尔康护理液</figuration>
								</figure>
								</div>
							</div>
							<div class="kf">
								<span class="zx">
									<i class="yo-ico">&#xe616;</i>
									<b>在线客服</b>
								</span>
								<span class="zx">
									<i class="yo-ico">&#xe666;</i>
									<b>电话客服</b>
								</span>
							</div>
							<div class="likely">
								<h2>猜你喜欢</h2>
								<div class="list">
									<dl>
										<dt><img src="/images/likly_001.jpg" /></dt>
										<dd>
											<i>HAN板材金属光学眼镜</i>
											<b>￥169.00</b>
										</dd>
									</dl>
									<dl>
										<dt><img src="/images/likly_002.jpg" /></dt>
										<dd>
											<i>HAN SUNGLASSES太阳镜</i>
											<b>￥169.00</b>
										</dd>
									</dl>
									<dl>
										<dt><img src="/images/likly_002.jpg" /></dt>
										<dd>
											<i>KKR舒透氧气</i>
											<b>￥25.00</b>
										</dd>
									</dl>
									<dl>
										<dt><img src="/images/likly_001.jpg" /></dt>
										<dd>
											<i>HAN板材金属光学眼镜</i>
											<b>￥169.00</b>
										</dd>
									</dl>
									<dl>
										<dt><img src="/images/likly_002.jpg" /></dt>
										<dd>
											<i>HAN SUNGLASSES太阳镜</i>
											<b>￥169.00</b>
										</dd>
									</dl>
									<dl>
										<dt><img src="/images/likly_002.jpg" /></dt>
										<dd>
											<i>KKR舒透氧气</i>
											<b>￥25.00</b>
										</dd>
									</dl>
								</div>
							</div>
						</div>
				    </div>
				    <div class="swiper-slide">
				    	<div class="contain">
					    	<img src="/images/content_1.jpg" />
							<img src="/images/content_2.jpg" />
							<img src="/images/content_3.jpg" />
							<img src="/images/content_4.jpg" />
						</div>
				    </div>
				    <div class="swiper-slide">
				    	<div class="contain">
				    		<ul class="comment">
				    			<li>
				    				<div class="person">
				    					<div class="personLeft">
				    						<img src="/images/comment_001.jpg" />
				    						<i>5***R</i>
				    					</div>
				    					<div class="personRight">
				    						<i>2017-01-07&nbsp;14:33:37</i>
				    					</div>
				    				</div>
				    				<span class="grade">★★★★★</span>
				    				<span class="account">挺好，挺便宜的，不错，经常买</span>
				    				<span class="color">博士伦朗一日水润高清日抛隐形眼镜30片装</span>
				    				<span class="add">来自：北京市</span>
				    			</li>
				    		</ul>
				    	</div>
				    </div>
				  </div>
				</div>
			</ul>
		</section>
		<footer>
			<ul>
				<li>
					<i class="yo-ico">&#xe639;</i>
					<b>收藏</b>
				</li>
				<li>
					<i class="yo-ico">&#xe730;</i>
					<b>购物车</b>
				</li>
				<li>
					<i class="yo-ico">&#xe730;</i>
					<b>加入购物车</b>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
					swiper:null,
					imgSwiper:null,
					proNavIndex:0,
					proNav:[
						{
							title:'简介',
							ico:'&#xe627;'
						},
						{
							title:'详情',
							ico:'&#xe65d;'
						},
						{
							title:'评论',
							ico:'&#xe655;'
						}
					]
			}
		},
		methods:{
			changeTab:function(i){
				this.swiper.slideTo(i+1);
				this.proNavIndex = i;
			}
		},
		mounted:function(){
			this.swiper =  new Swiper('.introduce .swiper-container', {
				autoplay: 0,//可选选项，自动滑动
				loop : true,
				autoHeight: true,
				touchRatio : 0
				//noSwiping : true,'
			});
			this.imgSwiper = new Swiper('.img .swiper-container', {
				autoplay: 0,//可选选项，自动滑动
				//loop : true
			});
		}
	}
</script>