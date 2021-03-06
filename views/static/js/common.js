    
// -----------登陆功能---------------------------------------------
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
            // console.log(userinfo);
            //2. 使用模板引擎将对象渲染到用户信息的模板中去
            var html = template("profile_tpl", userinfo);
            $("#profile").html(html);
            }

    // ---------登陆功能结束-------------------------------------------

    // ---------退出功能开始-------------------------------------
       $('#logout_btn').click(function(){
        //注册点击事件
        //想后台发送请求，请求退出
        $.ajax({
          url:'api/logout',
          type:'post',
          success:function(data){
            if(data.code==200){
            //接收到返回来的数据,如果返回成功，就退到登陆页面
            location.href='/dashboard/login'
            }
          }
        })
       });
// -------------退出功能结束--------------------------------------------
      

//--------------课程管理导航栏效果实现开始-----------------------------
     $('.navs>ul>li>ul').parent().click(function(){
        //点击的时候，让子菜单显示
        $(this).children('ul').stop().slideToggle()
        //slideDown和slideUp可以用slideToggle替换
        //stop()方法是为了防止连续点击
     })

//--------------课程管理导航栏效果实现结束-----------------------------


//--------------导航栏切换高亮效果显示开始------------------------------
   // 思路：
   //通过a标签，a标签的href属性和地址栏链接的地址是一样的，只需要获取到地址
   //栏最后的路径，通过location.pathname可以获取.点击某个标签给某个标签添加
   //active类
     $('.navs a').each(function(index,ele){
          // if (ele.href==location.pathname) { 
          // }    这种找不到
          //寻找导航栏中和当前路径相同的地址
          if ($(ele).attr('href')==location.pathname) {
             //让当前的a标签添加active类
           $(ele).addClass('active')    
          }
     })
//--------------导航栏切换高亮效果显示开始------------------------------
        }) 
  })
