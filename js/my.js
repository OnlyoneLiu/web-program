
            $(function() {
                //��ȡ��Ļ���
                  var screenWidth=$(window).width();
                //�ж��ǲ����ֻ���Ļ
                  if(screenWidth<768){//�ֻ���Ļ
                      $("#banner .carousel-inner .item").each(function(index,item){
                      var $item=$(item);//��Ϊ���ݵ�item��dom����Ҫ��dom�����ΪjQuery����
                      $item.css("background-image","url("+$item.data('img-xs')+")");
                      });
                  }else{//����Ļ
                      $("#banner .carousel-inner .item").each(function(index,item){
                      var $item=$(item);//��Ϊ���ݵ�item��dom����Ҫ��dom�����ΪjQuery����
                      $item.css("background-image",'url('+$item.data('img-lg')+')');
                      });
                  }
                //��Ԫʽ
                  var isPhone=screenWidth<768;
                  $("#banner .carousel-inner .item").each(function(index,item){
                      var $item = $(item);//��Ϊ���ݵ�item��dom����Ҫ��dom�����ΪjQuery����
                      $item.css("background-image","url("+$item.data(isPhone?'img-xs':'img-lg')+")");
               });
                function selectImg(){
                    var screenWidth=$(window).width();
                    var isPhone=screenWidth<768;
                    $("#banner .carousel-inner .item").each(function(index,item){
                        var $item = $(item);//��Ϊ���ݵ�item��dom����Ҫ��dom�����ΪjQuery����
                        $item.css("background-image",'url('+$item.data(isPhone?'img-xs':'img-lg')+')');
                        //������ҪСͼ��ʱ��ȱ����仯������������Ҫimg��ǩ
                        if(isPhone){
                            $item.html("<img src='"+$item.data('img-xs')+"' alt='' />");
                        }else {
                            $item.empty();
                        }
                    });
                }
                 $(window).on("resize",selectImg);//������û��Ч���ģ�������Ļ�ߴ�仯һ�²Ż����ͼƬ
                $(window).on('resize',selectImg).trigger('resize');//��������resize�¼��������¼��������selectImg

var $carousel=$(".carousel");  
var startClientX=0;  
var clientX=30;  
$carousel.on("touchstart",function(e){  
 startClientX=e.originalEvent.touches[0].clientX; 
})  
  
$carousel.on("touchmove",function(e){  
    //Ȼ��ĵõ��û��ƶ��������  
    var targetClientX=e.originalEvent.touches[0].clientX;
    //�ж��û��ƶ��ľ����Ƿ񳬹�����ֵ  
    var target=Math.abs(targetClientX-startClientX);  
    if(target>clientX){  
        //Ȼ�󣬸����û��ƶ��ķ����ж��û����󻬶������һ������������ҷ��򴥷����һ���  
        $(".carousel").carousel(targetClientX-startClientX>0?"prev":"next");  
  
    }  
  
})  
                
            });
