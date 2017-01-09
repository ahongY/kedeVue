<template>
	<div id="classify">
		<header>
			<input type="search" value="请输入您要搜索的物品">
		</header>
		<section>
			<ul>
				<li v-for="cla in classify">
					<i class="yo-ico" v-html="cla.ico"></i>
					<a href="/#/list"><b>{{cla.title}}</b></a>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				classify:[
					{
						ico:"&#xe6bd;",
						title:"透明隐形眼镜"
					},
					{
						ico:"&#xe644;",
						title:"彩色隐形眼镜"
					},
					{
						ico:"&#xe610;",
						title:"护理用品"
					},
					{
						ico:"&#xe638;",
						title:"近视眼镜"
					},
					{
						ico:"&#xe63e;",
						title:"太阳眼镜"
					},
					{
						ico:"&#xe644;",
						title:"功能眼镜"
					},
					{
						ico:"&#xe620;",
						title:"美妆个护"
					}
				]
			}

		}
	}
</script>