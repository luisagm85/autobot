(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L6id:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),r=t("pMnS"),i=t("ZGwz"),o=t("AtZD"),a=t("Ip0R"),c=t("VnD/"),s=t("67Y/"),b=t("AytR"),p=t("xy+J"),h=t("1tJV"),f=function(){function n(n){this.store=n,this.title=b.a.title,this.subtitle=b.a.version}return n.prototype.ngOnInit=function(){var n=this;this.store.dispatch(new p.b),this.carLinks$=this.store.select(h.a).pipe(Object(c.a)(function(n){return null!=n}),Object(s.a)(function(l){return l.map(n.getLinkFromCar)}))},n.prototype.getLinkFromCar=function(n){return{caption:n.link.caption,routerLink:"/car/"+n.link.routerLink,value:Object(a.t)(n.cost,"en-US")+" EUR"}},n}(),x=t("yGQT"),d=u.nb({encapsulation:2,styles:[],data:{}});function m(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,7,"header",[["class","hero"]],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,6,"div",[["class","hero-body has-text-centered"]],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),u.Fb(3,null,["Bienvenido a ",""])),(n()(),u.pb(4,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(n()(),u.Fb(5,null,["Version: ",""])),(n()(),u.pb(6,0,null,null,1,"a",[["href","https://academiabinaria.github.io/autobot/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,0,"img",[["src","./assets/logo.png"],["width","80"]],null,null,null,null,null)),(n()(),u.pb(8,0,null,null,2,"app-menu-list",[["caption","Coches en tu garaje:"]],null,null,null,i.b,i.a)),u.ob(9,114688,null,0,o.a,[],{caption:[0,"caption"],links:[1,"links"]},null),u.Bb(131072,a.b,[u.h])],function(n,l){var t=l.component;n(l,9,0,"Coches en tu garaje:",u.Gb(l,9,1,u.zb(l,10).transform(t.carLinks$)))},function(n,l){var t=l.component;n(l,3,0,t.title),n(l,5,0,t.subtitle)})}function k(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-home",[],null,null,null,m,d)),u.ob(1,114688,null,0,f,[x.n],null,null)],function(n,l){n(l,1,0)},null)}var v=u.lb("app-home",f,k,{},{},[]),g=t("gIcY"),w=t("Y9ZX"),j=t("F/XL"),y=t("xMyE"),C=t("t9fZ"),L=function(){return function(n){var l=this;this.store=n,this.cars$=this.store.select(h.a).pipe(Object(c.a)(function(n){return null!=n}),Object(y.a)(function(n){return l.carsCache=n}),Object(C.a)(1)),this.resolve=function(n,t){return l.carsCache?Object(j.a)(l.carsCache):(l.store.dispatch(new p.b),l.cars$)}}}(),O=t("ZYCi"),F=function(){return function(){}}(),Z=t("PCNd");t.d(l,"HomeModuleNgFactory",function(){return G});var G=u.mb(e,[],function(n){return u.wb([u.xb(512,u.j,u.cb,[[8,[r.a,v]],[3,u.j],u.x]),u.xb(4608,a.o,a.n,[u.u,[2,a.y]]),u.xb(4608,g.d,g.d,[]),u.xb(4608,g.p,g.p,[]),u.xb(4608,w.a,w.a,[]),u.xb(4608,L,L,[x.n]),u.xb(1073742336,a.c,a.c,[]),u.xb(1073742336,O.p,O.p,[[2,O.w],[2,O.n]]),u.xb(1073742336,F,F,[]),u.xb(1073742336,g.m,g.m,[]),u.xb(1073742336,g.k,g.k,[]),u.xb(1073742336,Z.a,Z.a,[]),u.xb(1073742336,e,e,[]),u.xb(256,u.u,"es",[]),u.xb(1024,O.l,function(){return[[{path:"",component:f,resolve:{cars:L}}]]},[]),u.xb(256,u.L,"xlf",[])])})}}]);