<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
     <script src="js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script>
     $(function(){
       <?php
          if($_GET){
            echo 'var obj='.json_encode($_GET).';';
          }
       ?>
      if(typeof(obj)!='undefined'){
          for(k in obj){
            $("#"+k).val(obj[k]);
            $("a["+k+"="+obj[k]+"]").parent().addClass("in").siblings().removeClass("in");
          }
      }
     })
    </script>
    <script>
        function Filter(a,b){
          var $ = function(e){return document.getElementById(e);}
          var ipts = $('filterForm').getElementsByTagName('input'),result=[];
          for(var i=0,l=ipts.length;i<l;i++){
          if(ipts[i].getAttribute('to')=='filter'){
          result.push(ipts[i]);
          }
          }
          if($(a)){
          $(a).value = b;
          for(var j=0,len=result.length;j<len;j++){
          
            if(result[j].value=='' || result[j].value=='0'){
            result[j].parentNode.removeChild(result[j]);
            }
          }
            document.forms['filterForm'].submit();
          }
          return false;
          } 
    </script>
  </head>
  <style>
   .mtp30{margin-top: 80px;}
   .warning{background: #FCF8E3;}
   .img30{width: 30px;height:30px;}
   .img20{width: 20px;height:20px;}
   .listsearch{border:1px solid #FFDCAF;border-top: 2px solid #FF9100;height:200px;}
   .border-color{border-color: #FFDCAF;}
   .top-color{border-top: 2px solid #FF9100}
   .red{color: #FF335D;font-family: '微软雅黑';font-weight: 24px;}
   .searchbody{line-height: 35px;margin-left: 15px;}
   .row a{color: #444;text-decoration: none;}
   .row a:hover{color: #FA8D00}
   .row li{padding-right: 5px;padding-left: 10px;}
   .in,.in a{background: #FA8D00;color: #fff;border-radius: 4px;}
   .in a:hover{color: #fff}
  </style>
  <body>
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button><a href="" class="navbar-brand">编程主题</a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class='active'><a href="">PHP</a></li>
        <li><a href="">PYTHON</a></li>
        <li><a href="">DJANGO</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="container mtp30">
   <form id="filterForm" name="form1" method="get" action="filter.php">
      <input id="pid" type="hidden" value="" name="pid" to="filter">
      <input id="theme" type="hidden" value="" name="theme" to="filter">
      <input id="price" type="hidden" value="" name="price" to="filter">
      <input id="day" type="hidden" value="" name="day" to="filter">
      <input id="type" type="hidden" value="" name="type" to="filter">
   <ul class="list-group">
     <li class="list-group-item border-color top-color">
     <div class="row">
     <div class="col-md-3">
       <h4 class='red'><span class="glyphicon glyphicon-map-marker  text-danger"></span> 目的地</h4>
     </div>
     <div class="col-md-9">
        <ul class="nav  nav-pills nav-justified pull-left">
           <div class="row">
            <li class='col-xs-4 col-md-1 in'><a pid="0" href="javascript:Filter('pid','0');">不限</a></li>
            <li class='col-xs-4 col-md-1'><a pid="1" href="javascript:Filter('pid','1');">广州</a></li>
            <li class='col-xs-4 col-md-1'><a pid="2" href="javascript:Filter('pid','2');">深圳</a></li>
            <li class='col-xs-4 col-md-1'><a pid="3" href="javascript:Filter('pid','3');">上海</a></li>
            <li class='col-xs-4 col-md-1'><a pid="4" href="javascript:Filter('pid','4');">武汉</a></li>
            <li class='col-xs-4 col-md-1'><a pid="5" href="javascript:Filter('pid','5');">北京</a></li>
            <li class='col-xs-4 col-md-1'><a pid="6" href="javascript:Filter('pid','6');">成都</a></li>
            <li class='col-xs-4 col-md-1'><a pid="7" href="javascript:Filter('pid','7');">重庆</a></li>
            <li class='col-xs-4 col-md-1'><a pid="8" href="javascript:Filter('pid','8');">长沙</a></li>
            <li class='col-xs-4 col-md-1'><a pid="9" href="javascript:Filter('pid','9');">厦门</a></li>
            </div>
           
          </ul>
     </div>
     </div>
     </li>
     <li class="list-group-item border-color">
       <div class="row">
     <div class="col-md-3">
       <h4 class='red'><span class="glyphicon glyphicon-picture  text-primary"></span> 主题</h4>
     </div>
     <div class="col-md-9">
        <ul class="nav  nav-pills nav-justified pull-left">
           <div class="row">
            <li class='col-xs-4 col-md-1 in'><a href="javascript:Filter('theme','0');">不限</a></li>
            <li class='col-xs-4 col-md-1'><a theme='1' href="javascript:Filter('theme','1');">花样温泉</a></li>
            <li class='col-xs-4 col-md-1'><a theme='2' href="javascript:Filter('theme','2');">滑雪溜冰</a></li>
            <li class='col-xs-4 col-md-1'><a theme='3' href="javascript:Filter('theme','3');">探险极限</a></li>
            <li class='col-xs-4 col-md-1'><a theme='4' href="javascript:Filter('theme','4');">登山踏青</a></li>
            <li class='col-xs-4 col-md-1'><a theme='5' href="javascript:Filter('theme','5');">摩天轮</a></li>
            <li class='col-xs-4 col-md-1'><a theme='6' href="javascript:Filter('theme','6');">迪士尼</a></li>
            <li class='col-xs-4 col-md-1'><a theme='7' href="javascript:Filter('theme','7');">海景沙滩</a></li>
            <li class='col-xs-4 col-md-1'><a theme='8' href="javascript:Filter('theme','8');">瀑布清泉</a></li>
            <li class='col-xs-4 col-md-1'><a theme='9' href="javascript:Filter('theme','9');">水上运动</a></li>
            </div>
           
          </ul>
     </div>
       
     </div>
     </li>
     <li class="list-group-item border-color">
      <div class="row">
        <div class="col-md-3">
         <h4 class='red'><span class="glyphicon glyphicon-usd text-info"></span> 价格</h4>
        </div>
        <div class="col-md-9">
          <ul class="nav  nav-pills nav-justified pull-left">
             <div class="row">
              <li class='col-xs-4 col-md-1 in'><a price="0" href="javascript:Filter('price','0');">不限</a></li>
              <li class='col-xs-4 col-md-1'><a price="1" href="javascript:Filter('price','1');">100以下</a></li>
              <li class='col-xs-4 col-md-1'><a price="2" href="javascript:Filter('price','2');">100-200</a></li>
              <li class='col-xs-4 col-md-1'><a price="3" href="javascript:Filter('price','3');">200-300</a></li>
              <li class='col-xs-4 col-md-1'><a price="4" href="javascript:Filter('price','4');">300-400</a></li>
              <li class='col-xs-4 col-md-1'><a price="5" href="javascript:Filter('price','5');">400-500</a></li>
              <li class='col-xs-4 col-md-1'><a price="6" href="javascript:Filter('price','6');">500-600</a></li>
              <li class='col-xs-4 col-md-1'><a price="7" href="javascript:Filter('price','7');">600-700</a></li>
              <li class='col-xs-4 col-md-1'><a price="8" href="javascript:Filter('price','8');">700-800</a></li>
              <li class='col-xs-4 col-md-1'><a price="9" href="javascript:Filter('price','9');">800-900</a></li>
              </div>
            </ul>
        </div>
     </div>
     </li>
     <li class="list-group-item border-color">
       <div class="row">
        <div class="col-md-3">
         <h4 class='red'><span class="glyphicon glyphicon-dashboard  text-success"></span> 天数</h4>
        </div>
        <div class="col-md-9">
          <ul class="nav  nav-pills nav-justified pull-left">
             <div class="row">
              <li class='col-xs-4 col-md-1 in'><a day="0" href="javascript:Filter('day','0');">不限</a></li>
              <li class='col-xs-4 col-md-1'><a day="1" href="javascript:Filter('day','1');">1日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="2" href="javascript:Filter('day','2');">2日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="3" href="javascript:Filter('day','3');">3日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="4" href="javascript:Filter('day','4');">4日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="5" href="javascript:Filter('day','5');">5日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="6" href="javascript:Filter('day','6');">6日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="7" href="javascript:Filter('day','7');">7日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="8" href="javascript:Filter('day','8');">8日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="9" href="javascript:Filter('day','8');">9日游</a></li>
              <li class='col-xs-4 col-md-1'><a day="10" href="javascript:Filter('day','10');">半月游</a></li>
              <li class='col-xs-4 col-md-1'><a day="11" href="javascript:Filter('day','11');">其他</a></li>
              </div>
            </ul>
        </div>
     </div>
     </li>
     <li class="list-group-item border-color">
       <div class="row">
        <div class="col-md-3">
         <h4 class='red'><span class="glyphicon glyphicon-calendar  text-warning"></span> 类型</h4>
        </div>
        <div class="col-md-9">
          <ul class="nav  nav-pills nav-justified pull-left">
             <div class="row">
              <li class='col-xs-4 col-md-1 in'><a type="0" href="javascript:Filter('type','0');">不限</a></li>
              <li class='col-xs-4 col-md-1'><a type="1" href="javascript:Filter('type','1');">参团</a></li>
              <li class='col-xs-4 col-md-1'><a type="2" href="javascript:Filter('type','2');">组团</a></li>
              <li class='col-xs-4 col-md-1'><a type="3" href="javascript:Filter('type','3');">自驾</a></li>
              <li class='col-xs-4 col-md-1'><a type="4"href="javascript:Filter('type','4');">自由行</a></li>
              <li class='col-xs-4 col-md-1'><a type="5" href="javascript:Filter('type','5');">散客游</a></li>
              </div>
            </ul>
        </div>
     </div>
     </li>
   </ul>
   </form>
</div>
  
  </body>
  </html>