require.config({
  //url的设计原则就是大多部分文件引用的
  //在配置的时候要判断一下引用的文件是否有依赖项目
  baseUrl:'/views/assets',
  paths:{
   jquery:'./jquery/jquery',
   cookie:'./jquery-cookie/jquery.cookie',
   template:'./artTemplate/template'
  //!!!一定要注意在结尾加逗号！！！！！！！
  }
})