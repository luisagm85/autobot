(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=function(){},i=u("pMnS"),r=u("ZGwz"),e=u("AtZD"),o=u("ZYCi"),c=u("Ip0R"),s=u("AytR"),p=function(){function l(l){this.route=l,this.carLinks=[],this.title=s.a.title,this.subtitle=s.a.version}return l.prototype.ngOnInit=function(){var l=this;this.temp=this.route.snapshot.data.cars.map(this.getLinkFromCar),setTimeout(function(){l.temp.forEach(function(n){return l.carLinks.push(n)})},2e3)},l.prototype.onClick=function(){var l=this;this.temp.forEach(function(n){return l.carLinks.push(n)})},l.prototype.getLinkFromCar=function(l){return{caption:l.link.caption,routerLink:"/car/"+l.link.routerLink,value:Object(c.t)(l.cost,"en-US")+" EUR"}},l}(),b=t.Qa({encapsulation:2,styles:[],data:{}});function h(l){return t.kb(0,[(l()(),t.Sa(0,0,null,null,7,"header",[["class","hero"]],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,6,"div",[["class","hero-body has-text-centered"]],null,null,null,null,null)),(l()(),t.Sa(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),t.ib(3,null,[" Welcome to "," "])),(l()(),t.Sa(4,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(l()(),t.ib(5,null,[" Version: "," "])),(l()(),t.Sa(6,0,null,null,1,"a",[["href","https://academiabinaria.github.io/autobot/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Sa(7,0,null,null,0,"img",[["src","./assets/logo.png"],["width","80"]],null,null,null,null,null)),(l()(),t.Sa(8,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t},null,null)),(l()(),t.ib(-1,null,["Laod"])),(l()(),t.Sa(10,0,null,null,1,"app-menu-list",[["caption","Cars in your garage:"]],null,null,null,r.b,r.a)),t.Ra(11,114688,null,0,e.a,[],{caption:[0,"caption"],links:[1,"links"]},null),(l()(),t.Sa(12,0,null,null,2,"a",[["routerLink","/a"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.cb(l,13).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a},null,null)),t.Ra(13,671744,null,0,o.l,[o.k,o.a,c.j],{routerLink:[0,"routerLink"]},null),(l()(),t.ib(-1,null,[" Home-Async "]))],function(l,n){l(n,11,0,"Cars in your garage:",n.component.carLinks),l(n,13,0,"/a")},function(l,n){var u=n.component;l(n,3,0,u.title),l(n,5,0,u.subtitle),l(n,12,0,t.cb(n,13).target,t.cb(n,13).href)})}var k=t.Oa("app-home",p,function(l){return t.kb(0,[(l()(),t.Sa(0,0,null,null,1,"app-home",[],null,null,null,h,b)),t.Ra(1,114688,null,0,p,[o.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=u("67Y/"),m=u("nsGb"),g=function(){function l(l){this.cars=l,this.carLinks=[],this.title=s.a.title,this.subtitle=s.a.version}return l.prototype.ngOnInit=function(){var l=this;this.carLinks$=this.cars.getCars$().pipe(Object(f.a)(function(n){return n.map(l.getLinkFromCar)})),this.carLinks$.subscribe(function(n){return l.carLinks=n})},l.prototype.getLinkFromCar=function(l){return{caption:l.link.caption,routerLink:"/car/"+l.link.routerLink,value:Object(c.t)(l.cost,"en-US")+" EUR"}},l}(),y=t.Qa({encapsulation:2,styles:[],data:{}});function L(l){return t.kb(2,[(l()(),t.Sa(0,0,null,null,7,"header",[["class","hero"]],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,6,"div",[["class","hero-body has-text-centered"]],null,null,null,null,null)),(l()(),t.Sa(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),t.ib(3,null,[" Welcome to "," "])),(l()(),t.Sa(4,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(l()(),t.ib(5,null,[" Version: "," "])),(l()(),t.Sa(6,0,null,null,1,"a",[["href","https://academiabinaria.github.io/autobot/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Sa(7,0,null,null,0,"img",[["src","./assets/logo.png"],["width","80"]],null,null,null,null,null)),(l()(),t.Sa(8,0,null,null,1,"app-menu-list",[["caption","subscribe: Cars in your garage:"]],null,null,null,r.b,r.a)),t.Ra(9,114688,null,0,e.a,[],{caption:[0,"caption"],links:[1,"links"]},null),(l()(),t.Sa(10,0,null,null,2,"app-menu-list",[["caption","async: Cars in your garage:"]],null,null,null,r.b,r.a)),t.Ra(11,114688,null,0,e.a,[],{caption:[0,"caption"],links:[1,"links"]},null),t.eb(131072,c.b,[t.i]),(l()(),t.Sa(13,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.cb(l,14).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a},null,null)),t.Ra(14,671744,null,0,o.l,[o.k,o.a,c.j],{routerLink:[0,"routerLink"]},null),(l()(),t.ib(-1,null,[" Home-Resolve "]))],function(l,n){var u=n.component;l(n,9,0,"subscribe: Cars in your garage:",u.carLinks),l(n,11,0,"async: Cars in your garage:",t.jb(n,11,1,t.cb(n,12).transform(u.carLinks$))),l(n,14,0,"/")},function(l,n){var u=n.component;l(n,3,0,u.title),l(n,5,0,u.subtitle),l(n,13,0,t.cb(n,14).target,t.cb(n,14).href)})}var d=t.Oa("app-home-a",g,function(l){return t.kb(0,[(l()(),t.Sa(0,0,null,null,1,"app-home-a",[],null,null,null,L,y)),t.Ra(1,114688,null,0,g,[m.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),v=u("gIcY"),S=u("Y9ZX"),C=u("F/XL"),R=u("xMyE"),w=function(){return function(l){var n=this;this.cars=l,this.resolve=function(l,u){return n.carsCache?Object(C.a)(n.carsCache):n.cars.getCars$().pipe(Object(R.a)(function(l){return n.carsCache=l}))}}}(),O=function(){},j=u("PCNd");u.d(n,"HomeModuleNgFactory",function(){return E});var E=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,k,d]],[3,t.k],t.z]),t.ab(4608,c.o,c.n,[t.w,[2,c.w]]),t.ab(4608,v.d,v.d,[]),t.ab(4608,v.p,v.p,[]),t.ab(4608,S.a,S.a,[]),t.ab(4608,w,w,[m.a]),t.ab(1073742336,c.c,c.c,[]),t.ab(1073742336,o.m,o.m,[[2,o.s],[2,o.k]]),t.ab(1073742336,O,O,[]),t.ab(1073742336,v.m,v.m,[]),t.ab(1073742336,v.k,v.k,[]),t.ab(1073742336,j.a,j.a,[]),t.ab(1073742336,a,a,[]),t.ab(1024,o.i,function(){return[[{path:"",component:p,resolve:{cars:w}},{path:"a",component:g}]]},[])])})}}]);