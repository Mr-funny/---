//获取元素
var getElem=function(selector){
	return document.querySelector(selector)
}
var getAllElem=function(selector){
	return document.querySelectorAll(selector)
}
//获取样式
var getCls=function(element){
	return element.getAttribute("class");
}
//设置样式
var setCls=function(element,cls){
 return element.setAttribute("class",cls);
}
//为元素添加样式
var addCls=function(element,cls){
	var basecls=getCls(element);
	if(basecls.indexOf(cls)===-1){
		setCls(element,basecls+" "+cls);
	}
}
//为元素删除样式
var delCls=function(element,cls){
	var basecls=getCls(element);
	if(basecls.indexOf(cls)!=-1){
		setCls(element,basecls.split(cls).join(" ").replace(/\s+/g," "));
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
function setScreenAnimate_done(screenCls){
	var screen=document.querySelector(screenCls);
    var animateElements=screenAnimateElements[screenCls];
    for(var i=0;i<animateElements.length;i++){
       var element = document.querySelector(animateElements[i]);
       var baseCls = element.getAttribute('class');
       element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
      }
}
function setScreenAnimate_init(screenCls){
	var screen=document.querySelector(screenCls);
    var animateElements=screenAnimateElements[screenCls];
   for(var i=0;i<animateElements.length;i++){
     	var element = document.querySelector(animateElements[i]);
     	var baseCls = element.getAttribute('class');
     	element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
     }
}
window.onload=function(){
    console.log('onload');
   for(k in screenAnimateElements){
   	if(k==='.screen-1'){
   		continue;
   	}
	setScreenAnimate_init(k);
    }
}
window.onscroll=function(){
	var top=document.body.scrollTop;
	if(top>80){
		addCls(getElem('.header'),'header_statue_black');
		delCls(getElem('.outline'),'outline_statue_in');
	}else{
		delCls(getElem('.header'),'header_statue_black')
		addCls(getElem('.outline'),'outline_statue_in');
		swichNavItemActive(0);
	}
	if(top>1){
      setScreenAnimate_done('.screen-1');
	}
	if(top>1*800-100){
      setScreenAnimate_done('.screen-2');
      swichNavItemActive(1)
	}
	if(top>2*800-100){
      setScreenAnimate_done('.screen-3');
      swichNavItemActive(2)
	}
	if(top>3*800-100){
      setScreenAnimate_done('.screen-4');
      swichNavItemActive(3)
	}
	if(top>4*800-100){
      setScreenAnimate_done('.screen-5');
      swichNavItemActive(4)
	}
}
/*双向定位*/
var navItems=getAllElem('.header__nav-item');
var outlineItems=getAllElem('.outline__item');
var swichNavItemActive=function(idx){
	for(var i=0;i<navItems.length;i++){
		delCls(navItems[i],'header__nav-item_statue_active');
	}
	   addCls(navItems[idx],'header__nav-item_statue_active');
	  for(var i=0;i<outlineItems.length;i++){
		delCls(outlineItems[i],'outline__item_statue_active');
	}
	   addCls(outlineItems[idx],'outline__item_statue_active');

}
var setNavJump=function(i,lib){
	var item=lib[i];
	item.onclick=function(){
	   document.body.scrollTop=i*800;
	}
}
for(var i=0;i<navItems.length;i++)
{
 setNavJump(i,navItems);
}
for(var i=0;i<outlineItems.length;i++)
{
 setNavJump(i,outlineItems);
}
/*滑动门特效*/
var navTip=getElem('.header__nav-tip');
var activeIdx=0;
var setTip=function(idx,lib){
     lib[idx].onmouseover=function(){
     navTip.style.left=(idx*70)+'px';
}
     lib[idx].onmouseout=function(){
    for(var i=0;i<lib.length;i++){
    	if(getCls(lib[i]).indexOf('header__nav-item_statue_active')>-1){
            activeIdx=i;
            break;
    	}
    }
   navTip.style.left=(activeIdx*70)+'px'; 
}
}
for(var i=0;i<navItems.length;i++){
     setTip(i,navItems);
}
setTimeout(function(){
	setScreenAnimate_done('.screen-1');
	},200);