<template>
	<div id="register-div">
		<header>
			
			<div><img src="/images/mine-picture/arrow_left.png"/></div>
			<div>手机注册</div>
			<div><img src="/images/mine-picture/abc_ic_menu_moreoverflow_mtrl_alpha.png"/></div>
		</header>
		
		<main>
			<div>
		        <span>手机</span>
		        <input type="text" @blur="bl" id="username" placeholder="输入手机号">
		    </div>
	    
		    <div>
		        <input  id="code" @blur="bl1" placeholder="请输入手机获取的验证码"/><button id="checkCode" @click="Math">{{ message }}</button>
		    </div>
		        
		    <div>
		        <span>设置密码</span>
		        <input id="password" @blur="bl2" type="password"  placeholder="6-20位密码">
		    </div>
		    <div>
		        <span>再次确认</span>
		        <input id="newpassword" @blur="bl3" type="password" placeholder="请输入确认密码">
		    </div>
		   
		</main>
		<footer>
			<button @click="loginMethods" class="btn">注册登录</button>
		</footer>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			 message:"获取验证码"
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
				if(toggleAll.checked == true){  
			        localStorage.setItem("toggleAll","username");
				}else{  
			        localStorage.setItem("toggleAll","");  
			    } 
			}
        }
	}
</script>
