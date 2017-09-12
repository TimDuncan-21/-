
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });




//因为侧边栏是公用部分，所以放在公共部分

  define(['jquery','template','cookie'],function($,template){
//有返回值的放前面，没返回值的放后面
       $(function(){
            //判断用户是否登录了，如果没有登录，就给他跳回到登录页
            
            //判断用户是否登录的依据，最好是通过向后台发送请求，
            // 问后台用户是否登录，这才是最严谨的判断登录的方式，
            //但由于做这个后台的太烂了 就不能这样做

            //我们就使用PHPSESSID来作为判断用户是否登录的依据即可
            //如果在cookie有PHPSESSID，那么就证明用户已经登录了
            //如果在cookie没有PHPSESSID，那么就证明用户没有登录了

            //如果当前用户不在登陆页面 才做如下的事情
         if (location.pathname!="/dashboard/login") { 
         // pathname 表示的是域名后面的路径信息  
         //如果不在登陆页面，就返回到登陆页面
            if(!$.cookie("PHPSESSID")){
                location.href = "/dashboard/login";
            }

            //只有不在登陆页的时候 才需要获取用户的信息
            //1. 从cookie中获取用户存储好的用户信息
            var userinfo = JSON.parse($.cookie("userinfo"));
            console.log(userinfo);
            //2. 使用模板引擎将对象渲染到用户信息的模板中去
            var html = template("profile_tpl", userinfo);
            $("#profile").html(html);
            }
        }) 

  })