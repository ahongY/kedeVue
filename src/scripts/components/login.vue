<template>
	<div id="login-div">
		<header>
			
			<div><img src="/images/mine-picture/arrow_left.png"/></div>
			<div>登录</div>
			<div></div>
		</header>
		

		<div id="mine-top">
			<div class="mine-top1">
				<img src="/images/mine-picture/no_login_default.png" alt="" />
				<p>欢迎你!</p>
			</div>
			
		</div>
		
		
		<div id="main">
			<div>
				<span>账号</span>
				<input type="text" placeholder="请输入手机号" />
			</div>
			<div>
				<span>密码</span>
				<input type="text" placeholder="请输入密码" />
			</div>
			<div class="but">
				<button>登录</button>
				<button>手机快速注册</button>
				<span><img src="/images/mine-picture/forget_pwd.png"/>忘记密码</span>
			</div>
		</div>
		<footer>
			<p>第三方登录</p>
			<div><img src="/images/mine-picture/btn_qq.png" alt="" /></div>
			<div><img src="/images/mine-picture/alipay_icon.png" alt="" /></div>
		</footer>
	</div>	
</template>
<script>
	module.exports = {
		data:function(){
			return{
				message:"获取验证码"
			}
		},
        methods:{

			bl: function() {
				var phone = $("#username").val();
				//console.log(typeof phone);
				
				if(/^1[34578]\d{9}$/.test(phone) == true){
		    			console.log("ok");
				}else{
		  			console.log("手机号码错误！");
				};
			},
			bl1: function() {
				var num = $("#code").val();
		  		if(num == checkCode.innerHTML ){
		  			console.log("ok1");
				}else{
					console.log("验证码错误！");
				};
			},
			
				bl2: function() {
				var Word = $("#password").val();
		  			console.log(typeof Word);
				
				if(/^(\w){6,20}$/.test(Word) == true){
		    		console.log("ok2");
				}else{
		  			console.log("密码格式不对！");
				};
			},
			bl3: function() {
				var nba = $("#newpassword").val();
		  		if(nba == $("#password").val() ){
		  			console.log("ok3");
				}else{
					console.log("确认密码不正确！");
				};
			},
		   
			Math:function(){
				var code = "";
				var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
				for(var i = 0; i < 4; i++){
					var charNum = Math.floor(Math.random() * 52);
				    code += codeChars[charNum];
				}
				checkCode.innerHTML = code;
			},
			loginMethods:function(){
		
	}
}

	}
</script>