
            $(function() {
 function resize() {  
        //��ȡ��Ļ���  
        var windowWidth = $(window).width();  
        //�жϵ�ǰ��Ļ�Ǵ���Ļ����С��Ļ  
        var isSmallWidth = windowWidth < 768;  
        //�����ֲ�ͼ��ÿһ��       
        $(".carousel-inner>.item").each(function(i, item) {  
                       //��Ҫ��DOM����ת��Ϊjqurey���󣬲��ܵ���jquery����  
        var $item = $(item);  
        //������Ļ��ȸ��ֲ�ͼ�еı���ͼƬ����Ϊ��ͼƬ����СͼƬ  
        var imgUrl = isSmallWidth ? $item.data("img-xs") : $item.data("img-lg");  
        $item.css('backgroundImage', 'url("' + imgUrl + '")');  
        //����ĻΪС��Ļʱ�����ֲ�ͼ����ͼƬ�ʹ���ܹ����еȱ�������  
        if (isSmallWidth) {  
            $item.html("<img src='" + imgUrl + "'>");  
        }  
        //��������ֲ�ͼ�е�ͼƬ���ݣ��������ͼƬ�ص�  
        else {  
            $item.empty();  
        }  
    })  
}  
//����resize�¼�  
$(window).on("resize", resize)  
    .trigger("resize");  

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


