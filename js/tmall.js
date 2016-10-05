$(function(){

    var banner=$(".banner")[0]
    var imgbox=$(".imgbox")[0]
    var divs=$("div",imgbox)
    divs[0].style.opacity="1"
    var cw=document.documentElement.clientWidth
    for (var i = 0; i < divs.length; i++) {
    	divs[i].style.width=cw+"px"
        var divsW=parseInt(getstyle(divs[i],"width"))
        divs[i].style.left="50%"
        divs[i].style.marginLeft=-divsW/2+"px"
    	var img=$("img",divs[i])[0]
    	var iw=parseInt(getstyle(img,"width"))
    	var ih=parseInt(getstyle(img,"height"))
        img.style.left="50%"
        img.style.marginLeft=-iw/2+"px"
        img.style.top="50%"
        img.style.marginTop=-ih/2+"px"
    };
    
    //获取banner底部按钮
    var babBBtn=$("li",$("ul",$(".ban-b",banner)[0])[0]) 
    babBBtn[0].style.background="#fff"//将第一个先设为白色背景
    var index=0//表示当前播放的图片
    var next=0//表示下一张即将显示的图片
    function move(){
    	next++
    	if (next==divs.length) {
    		next=0
    	}
    	for (var i = 0; i < divs.length; i++) {
            animate(divs[i],{opacity:0},500)//用动画将所有图片透明度降低
    		/*divs[i].style.opacity="0.1"//将每张图片的透明度降低 
    		divs[i].style.zIndex="0"//层级降低*/
    	};
    	animate(divs[next],{opacity:1},500)//将下一个要显示的图片进行动画显示设置
      /*animate(divs[index],{zIndex:"0",opacity:0.3},300)*///将当前的图片的透明度降低，层级降低进行隐藏动画
        babBBtn[next].style.background="#fff"//将下一个按钮颜色变为白色
        babBBtn[index].style.background="#A2A2A2"//将当前的按钮进行颜色处理
        index=next
    }
    var t =setInterval(move,2000)
    
    banner.onmouseover=function(){
    	clearInterval(t)
    }
    banner.onmouseout=function(){
    	t =setInterval(move,2000)
    }
   //banner下边按钮的效果
    for (var i = 0; i < babBBtn.length; i++) {
        babBBtn[i].index=i//给按钮添加index用来记录下标
        babBBtn[i].onmouseover=function(){
            next=this.index
            if (index==next) {
                return
            }
            animate(divs[next],{zIndex:"1",opacity:1},300)
            animate(divs[index],{zIndex:"0",opacity:0.3},300)
            babBBtn[next].style.background="#fff"
            babBBtn[index].style.background="#A2A2A2"
            index=next
        }
    };

//猜你喜欢
var xitu=$(".xitu")
var xitu1=$(".xitu1")
for (var i = 0; i < xitu.length; i++) {
    xitu[i].index=i
    xitu[i].onmouseover=function(){
        for(var j=0;j<xitu.length;j++){
            xitu[j].style.border="1px solid #fff"
        }
        this.style.border="1px solid red"
    }
    xitu[i].onmouseout=function(){
        this.style.border="1px solid #fff"
    }
};
for (var i = 0; i < xitu1.length; i++) {
    xitu1[i].index=i
    xitu1[i].onmouseover=function(){
        for(var j=0;j<xitu1.length;j++){
            xitu1[j].style.border="1px solid #fff"
        }
        this.style.border="1px solid red"
    }
    xitu1[i].onmouseout=function(){
        this.style.border="1px solid #fff"
    }
};

//获取目录上的分类
var muluLi=$(".d-mulu-li")//获取目录上的li
var muluYc=$(".mulu-yc")//获取目录上的隐藏的图形集合
for (var i = 0; i < muluLi.length; i++) {
    muluLi[i].index=i//添加属性进行记录下标
    muluLi[i].onmouseover=function(){
        animate(muluYc[this.index],{marginTop:-20,opacity:1},300)//当鼠标移入时，将对应的影藏图案进行显示
    }
    muluLi[i].onmouseout=function(){
        animate(muluYc[this.index],{marginTop:0,opacity:0},300)//当鼠标移出该li时，价格对应的隐藏团隐藏
    }
};



//获取热门品牌中的hb-m-2
var hbbM1divs=$(".hb-b-m1-b1")//获取热门品牌中的每一个展示块
var hbbM2divs=$(".hb-m2-div")//获取一上去后要显示的div块集合
for (var i = 0; i < hbbM2divs.length; i++) {
    hbbM2divs[i].style.display="none"//将每个鼠标移上去才会显示的div块进行隐藏初始化
};


for (var i = 0; i < hbbM1divs.length; i++) {
    hbbM1divs[i].index=i//给热门品牌中的div块添加一个属性用来记录他的下标
    hbbM1divs[i].onmouseover=function(){
       for (var i = 0; i < hbbM2divs.length; i++) {
           hbbM2divs[i].style.display="none"//初始化将所有的隐藏
       };
      hbbM2divs[this.index].style.display="block"//将对应的div进行显示
    }
    hbbM1divs[i].onmouseout=function(){
      hbbM2divs[this.index].style.display="none"//鼠标移出时将上层div隐藏
    }
};

//右侧栏样式
var cetan=$(".ce-tan")
var cezuo=$(".ce1-z")
for (var i = 0; i < cetan.length; i++) {
    cetan[i].index=i
    cetan[i].onmouseover=function(){
        for (var j = 0; j < cezuo.length; j++) {
            animate(cezuo[j],{marginLeft:-105,opacity:0,display:"none"},200)
        };
        cezuo[this.index].style.display="block"
        animate(cezuo[this.index],{marginLeft:-85,opacity:1},500)
    }
    cetan[i].onmouseout=function(){
        for (var j = 0; j < cezuo.length; j++) {
            animate(cezuo[j],{marginLeft:-105,opacity:0},500,function(){
                this.style.display="none"
            })
        };
    }
};



//获取左侧定位对应的文档内容的offserTop
var chongfu=$(".chongfu")
var chongfuTop=[]
for (var i = 0; i < chongfu.length; i++) {
        chongfuTop.push(chongfu[i].offsetTop)
    };    //重复块对应的文档

//左侧栏样式
var zcFlag=true
var zuoce=$(".zuoce")[0]
var zcdivs=$("div",$(".zuoce")[0])//获取左侧div块

 var stop=document.body.scrollTop||document.documentElement.scrollTop
    if (stop>484) {
        if (zcFlag) {
             animate(zuoce,{opacity:1},300)
             zcFlag=false
        }
    }else if (stop<484) {
        if (!zcFlag) {
        animate(zuoce,{opacity:0},50)
        zcFlag=true
    };
    };


//获取顶部
var dtop=$(".tm-top")[0]
var dtopFlag=true


//获取重复块的动画设置

var color=["red","#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#DD2727","#DD2727","#ABABAB"]
//定义一个数组，用来保存触摸以后div块颜色的变化
for (var i = 0; i < zcdivs.length; i++) {
    zcdivs[i].onmouseover=function(){
         this.style.cursor="pointer"//给每一个div块添加一个鼠标移上去的手势
    }
};
for (var i = 1; i < zcdivs.length-1; i++) {
    zcdivs[i].index=i//添加一个属性用来记录下标
    zcdivs[i].onmouseover=function(){
        this.style.cursor="pointer"
        this.style.background=color[this.index]//鼠标移动到任意一个div块上时，将对应的颜色赋给该div
    }
    zcdivs[i].onmouseout=function(){
        this.style.background="#626262"//鼠标移除是，将div颜色初始化
    }
};

for (var i = 0; i < zcdivs.length; i++) {
    zcdivs[i].index=i
    zcdivs[i].onclick=function(){
        if (this.index==0) {
            return
        }
        if (this.index==9) {
        animate(document.documentElement,{scrollTop:0},500)            
        animate(document.body,{scrollTop:0},500)            
        }else{
               var cfTop=chongfuTop[this.index-1]-60        
        animate(document.documentElement,{scrollTop:cfTop},500)
        animate(document.body,{scrollTop:cfTop},500)  
        }

  
    }
};


//
var bdian=$(".band-dian")
for (var i = 0; i < bdian.length; i++) {
    bdian[i].onmouseover=function(){
        this.style.border="1px solid red"
       
    }
    bdian[i].onmouseout=function(){
        this.style.border="1px solid #fff"

    }
};
//获取天猫的每个栏目
var tianmaotu=$(".tianmaotu")
var tianmaotuTop=[]
for (var i = 0; i < tianmaotu.length; i++) {
    tianmaotuTop.push(tianmaotu[i].offsetTop)
};


//滚动条的动画
window.onscroll=function(){
    var stop=document.body.scrollTop||document.documentElement.scrollTop
    
    //图片加载优化
     for (var i = 0; i < tianmaotuTop.length; i++) {
         tianmaotuTop[i].index=i
         if(tianmaotuTop[i]<stop+450){
            var imgs=$("img",tianmaotu[i])
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].src=imgs[j].getAttribute("asrc")
            };
         }
     };


    //上顶部固定搜索的显示与隐藏
    if (stop>700) {
        if (dtopFlag) {
             animate(dtop,{top:0},300)
             dtopFlag=false
        }
    }else if (stop<700) {
        if (!dtopFlag) {
        animate(dtop,{top:-50},300)
        dtopFlag=true
    };
    };
    
    //左侧的显示与隐藏
    if (stop>484) {
        if (zcFlag) {
             animate(zuoce,{opacity:1},300)
             zcFlag=false
        }
    }else if (stop<484) {
        if (!zcFlag) {
        animate(zuoce,{opacity:0},50)
        zcFlag=true
    };
    };

    for (var i = 0; i < chongfuTop[i]; i++) {
        if(chongfuTop[i]<stop+200){
            for (var j = 1; j < zcdivs.length-1; j++) {
                zcdivs[j].style.background="#626262"
            };
            zcdivs[i+1].style.background=color[i+1]
        }

        if (chongfuTop[0]>stop+200) {
            for (var j = 1; j < zcdivs.length-1; j++) {
                zcdivs[j].style.background="#626262"
            };
        } 
    };

    
}



var topyXL=$(".top-yXL")
var toXL=$(".to-XL")
for (var i = 0; i < topyXL.length; i++) {
    topyXL[i].index=i
    hover(topyXL[i],function(){
        this.style.background="#fff"
        toXL[this.index].style.display="block"
    },function(){
        this.style.background="#F2F2F2"
        this.style.color="#9999A5"
        toXL[this.index].style.display="none"
    })
};

for (var i = 0; i < topyXL.length; i++) {
    var as=$("a",topyXL[i])
    for (var j = 0; j < as.length; j++) {
        as[j].onmouseover=function(){
                 for(var k=0;k<as.length;k++){
                    as[k].style.textDecoration="none"
                    as[k].style.color="#9999a5"
                 }
                 this.style.color="#C40000"
                  this.style.textDecoration="underline"
        }
         as[j].onmouseout=function(){
                 
                    this.style.textDecoration="none"
                    this.style.color="#7C767C"
                
        }
    };
};


var dsll=$(".b-d-l-l")[0]
var banzcelis=$("li",$(".ban-zce")[0])
var banycelis=$(".ban-yce")
var banzlisW=banzcelis[0].offsetHeight

for (var i = 0; i < banycelis.length; i++) {
    banycelis[i].style.display="none"
    banycelis[i].style.top=-i*banzlisW+"px"
};

for (var i = 0; i < banzcelis.length; i++) {
    banzcelis[i].index=i
    banzcelis[i].onmouseover=function(){
        
         banycelis[this.index].style.display="block"
    }
    banzcelis[i].onmouseout=function(){
         
         banycelis[this.index].style.display="none"
    }
}



})