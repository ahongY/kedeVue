var common= {
	render:function(str){
		var body = document.body;
		body.innerHTML = str + body.innerHTML;
	},
	isAllLoaded(scope, cb) {
	  	var t_img; // 定时器
	  	var isLoad = true; // 控制变量

	  	// 判断图片加载状况，加载完成后回调
	  	return isImgLoad(cb);

	  	// 判断图片加载的函数
	  	function isImgLoad(callback) {
	  		// 查找所有图片，迭代处理
	  		$(scope).find('img').each(function() {
	  			// 找到为0就将isLoad设为false，并退出each
	  			if(this.height === 0) {
	  				isLoad = false;
	  				return false;
	  			}
	  		});
	  		// 为true，没有发现为0的。加载完毕
	  		if(isLoad) {
	  			clearTimeout(t_img); // 清除定时器
	  			// 回调函数
	  			callback();
	  			// 为false，因为找到了没有加载完成的图，将调用定时器递归
	  		} else {
	  			isLoad = true;
	  			t_img = setTimeout(function() {
	  				isImgLoad(callback); // 递归扫描
	  			}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	  		}
	  	}
	},
	scroll:function(that){
			var myScroll = new IScroll('#list-scroll', {
				probeType: 3,
				mouseWheel: true
			});
			var scrollHeight = 50;
			$('.head.hide').removeClass('hide');
			$('.foot.hide').removeClass('hide');
			myScroll.scrollBy(0, -scrollHeight);

			var head = $('.head img'),
				topImgHasClass = head.hasClass('up');
			var foot = $('.foot img'),
				bottomImgHasClass = head.hasClass('down');
			myScroll.on('scroll', function() {
				var y = this.y,
					maxY = this.maxScrollY - y;
				if(y >= 0) {
					!topImgHasClass && head.addClass('up');
					return '';
				}
				if(maxY >= 0) {
					!bottomImgHasClass && foot.addClass('down');
					return '';
				}
			});

			myScroll.on('scrollEnd', function() {
				if(this.y >= -scrollHeight && this.y < 0) {
					myScroll.scrollTo(0, -scrollHeight);
					head.removeClass('up');
				} else if(this.y >= 0) {
					head.attr('src', '/images/list-images/ajax-loader.gif');

					setTimeout(function() {
						myScroll.scrollTo(0, -scrollHeight);
						head.removeClass('up');
						head.attr('src', '/images/list-images/default_indicator_arrow.png');
					}, 100);
				}

				var maxY = this.maxScrollY - this.y;
				if(maxY > -scrollHeight && maxY < 0) {
					var self = this;
					myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
					foot.removeClass('down')
				} else if(maxY >= 0) {
					foot.attr('src', '/images/list-images/ajax-loader.gif');

					var self = this;

					fetch('/api/more')
						.then(response => response.json())
						.then(res => {
							//console.log(res);
							that.list = that.list.concat(res);
							console.log(list);
							myScroll.refresh();

							myScroll.scrollTo(0, self.maxScrollY - 60);

							foot.removeClass('down');
							foot.attr('src', '/images/list-images/default_indicator_arrow.png');
						})
				}
			})			
	}
}

module.exports = common;