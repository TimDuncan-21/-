define(['jquery','cookie'],function($){

      //1 获取登陆按钮，注册点击事件
      //1 获取表单，注册提交事件
          //form标签用于创建供用户输入的html表单
        //  submit 当用户单击确认按钮时，表单的内容会被传送到另一个
        // 文件。表单的动作属性定义了目的文件的文件名。
         // 由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理
      $('form').submit(function(e){
        //通过jquery的方法获取
        // 收集用户信息，通过submit进行提交
          var username=$('#tc_name').val();
            // .val  因为要获取是表单的值
          var pass=$('#tc_pass').val(); //密码
        
         //trim是string对象的一个方法 表示的是空字符串
         if (username.trim()=='') {
          alert('请输入用户名')
          return false;
         }

         if (pass.trim()==''){
          alert('请输入密码')
           return false;
         }
         

         //2 通过ajax发送请求获取数据
         //要请求的数据接口 请求方式 请求参数
         $.ajax({
            url:'/api/login',
            type:'post',
            data:{
              tc_name:username,
              tc_pass:pass
            },
          success:function(data){
          //返回一个成功的回调
            if (data.code=200) {
          //登陆成功之后，先将后台返回的用户头像以及用户信息
          //保存到cookie中 因为首页也要使用头像和信息

          //把对象转换成Json格式
           $.cookie("userinfo", JSON.stringify(data.result), {expires: 365, path: "/"});
            
           location.href='/';
           //跳转到根目录
            }
          }          
         });   
    return false;
    //阻止表单的默认提交事件
      })
})