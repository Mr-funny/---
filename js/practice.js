//获取元素
var getElem=function(selector){
	return document.querySelector(selector);
}
var getAllElem=function(selector){
	return document.querySelectorAll(selector);
}
//获取样式
var getCls=function(element){
    return element.getAttribute("class");
}
//设置样式
var setCls=function(element,cls){
   element.setAttribute("class",cls);
   return;
}
//为元素添加样式
var addCls=function(element,cls){
  var baseCls=getCls(element);
  if(baseCls.indexOf(cls)===-1){
  	element.setAttribute("class",baseCls+" "+cls);
  }
}
//为元素删除样式
var delCls=function(element,cls){
  var baseCls=getCls(element);
  if(baseCls.indexOf(cls)!=-1){
  	element.setAttribute("class",baseCls.split(cls).join(" ").replace(/\s+/g," "));
  }
}

//初始化页面
var screenAnimateElements = {
	'.screen-1' : [
	  '.screen-1__heading',
	  '.screen-1__phone',
	  '.screen-1__shadow',
	],
	'.screen-2' : [
	'.screen-2__heading',
	'.screen-2__subheading',
	'.screen-2__phone',
	'.screen-2__point-i-1',
	'.screen-2__point-i-2',
	'.screen-2__point-i-3',
	],
	'.screen-3' : [
	'.screen-3__phone',
    '.screen-3__heading',
    '.screen-3__subheading',
    '.screen-3__features',
	],
	'.screen-4' : [
	'.screen-4__type',
    '.screen-4__heading',
    '.screen-4__subheading',
    ],
    '.screen-5' : [
	'.screen-5__bg',
    '.screen-5__heading',
    '.screen-5__subheading',
    ]
};
var setScreenAnimate_init=function(screenCls){
	var screen=document.querySelector(screenCls);
    var animateElements=screenAnimateElements[screenCls];
        for(var i=0;i<animateElements.length;i++){
     		var element = document.querySelector(animateElements[i]);
     		var baseCls = element.getAttribute('class');
     		element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
     	}
}
var  setScreenAnimate_done=function(screenCls){
	var screen=document.querySelector(screenCls);
    var animateElements=screenAnimateElements[screenCls];
      for(var i=0;i<animateElements.length;i++){
     		var element = document.querySelector(animateElements[i]);
     		var baseCls = element.getAttribute('class');
     		element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
     	}
}
window.onload=function(){
	for(k in screenAnimateElements){
        setScreenAnimate_init(k);
	}
}
//设置滑动特效
window.onscroll=function(){
	var top=document.body.scrollTop;
	if(top>1){
   setScreenAnimate_done('.screen-1');
	}
	if(top>1*400){
   setScreenAnimate_done('.screen-2');
	}
	if(top>3*400){
   setScreenAnimate_done('.screen-3');
	}
	if(top>5*400){
   setScreenAnimate_done('.screen-4');
	}
	if(top>7*400){
   setScreenAnimate_done('.screen-5');
	}
}