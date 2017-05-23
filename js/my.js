
            $(function() {
                //获取屏幕宽度
                  var screenWidth=$(window).width();
                //判断是不是手机屏幕
                  if(screenWidth<768){//手机屏幕
                      $("#banner .carousel-inner .item").each(function(index,item){
                      var $item=$(item);//因为传递的item是dom对象，要把dom对象改为jQuery对象
                      $item.css("background-image","url("+$item.data('img-xs')+")");
                      });
                  }else{//大屏幕
                      $("#banner .carousel-inner .item").each(function(index,item){
                      var $item=$(item);//因为传递的item是dom对象，要把dom对象改为jQuery对象
                      $item.css("background-image",'url('+$item.data('img-lg')+')');
                      });
                  }
                //三元式
                  var isPhone=screenWidth<768;
                  $("#banner .carousel-inner .item").each(function(index,item){
                      var $item = $(item);//因为传递的item是dom对象，要把dom对象改为jQuery对象
                      $item.css("background-image","url("+$item.data(isPhone?'img-xs':'img-lg')+")");
               });
                function selectImg(){
                    var screenWidth=$(window).width();
                    var isPhone=screenWidth<768;
                    $("#banner .carousel-inner .item").each(function(index,item){
                        var $item = $(item);//因为传递的item是dom对象，要把dom对象改为jQuery对象
                        $item.css("background-image",'url('+$item.data(isPhone?'img-xs':'img-lg')+')');
                        //我们需要小图的时候等比例变化，所以我们需要img标签
                        if(isPhone){
                            $item.html("<img src='"+$item.data('img-xs')+"' alt='' />");
                        }else {
                            $item.empty();
                        }
                    });
                }
                 $(window).on("resize",selectImg);//这样是没有效果的，必须屏幕尺寸变化一下才会加载图片
                $(window).on('resize',selectImg).trigger('resize');//触发的是resize事件，不是事件处理程序selectImg

var $carousel=$(".carousel");  
var startClientX=0;  
var clientX=30;  
$carousel.on("touchstart",function(e){  
 startClientX=e.originalEvent.touches[0].clientX; 
})  
  
$carousel.on("touchmove",function(e){  
    //然后的得到用户移动后的坐标  
    var targetClientX=e.originalEvent.touches[0].clientX;
    //判断用户移动的距离是否超过了阈值  
    var target=Math.abs(targetClientX-startClientX);  
    if(target>clientX){  
        //然后，根据用户移动的方向判断用户是左滑动还是右滑动，根据左右方向触发左右滑动  
        $(".carousel").carousel(targetClientX-startClientX>0?"prev":"next");  
  
    }  
  
})  
                
            });
