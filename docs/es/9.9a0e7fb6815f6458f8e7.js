(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{gekI:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),r=function(){return function(){}}(),a=t("pMnS"),u=t("Ip0R"),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),o=l.nb({encapsulation:2,styles:[],data:{}});function c(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"div",[["class","tags has-addons"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,1,"span",[["class","tag is-dark"]],null,null,null,null,null)),(n()(),l.Fb(2,null,["",""])),(n()(),l.pb(3,0,null,null,3,"span",[],null,null,null,null,null)),l.ob(4,278528,null,0,u.k,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.Ab(5,2),(n()(),l.Fb(6,null,["",""]))],function(n,e){var t=n(e,5,0,"tag",e.component.tagClass);n(e,4,0,t)},function(n,e){var t=e.component;n(e,2,0,t.caption),n(e,6,0,t.value)})}var s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=l.nb({encapsulation:2,styles:[],data:{}});function p(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,3,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"app-data-tag",[],null,null,null,c,o)),l.ob(2,114688,null,0,i,[],{caption:[0,"caption"],value:[1,"value"],tagClass:[2,"tagClass"]},null),l.Cb(3,2)],function(n,e){var t=e.context.$implicit.caption,r=l.Gb(e,2,1,n(e,3,0,l.zb(e.parent,0),e.context.$implicit.value,"1.0-0"));n(e,2,0,t,r,e.context.$implicit.class)},null)}function b(n){return l.Hb(0,[l.Bb(0,u.f,[l.u]),(n()(),l.pb(1,0,null,null,2,"div",[["class","field is-grouped is-grouped-multiline"]],null,null,null,null,null)),(n()(),l.hb(16777216,null,null,1,null,p)),l.ob(3,278528,null,0,u.l,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.pb(4,0,null,null,2,"progress",[],[[8,"value",0],[8,"max",0]],null,null,null,null)),l.ob(5,278528,null,0,u.k,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.Ab(6,2),(n()(),l.pb(7,0,null,null,0,"br",[],null,null,null,null,null))],function(n,e){var t=e.component;n(e,3,0,t.indicator.tags);var l=n(e,6,0,"progress",t.indicator.class);n(e,5,0,l)},function(n,e){var t=e.component;n(e,4,0,t.indicator.value,t.indicator.max)})}var h=function(){function n(){this.brakeDisabled=!1,this.throttleDisabled=!1,this.brake=new l.m,this.throttle=new l.m}return n.prototype.ngOnInit=function(){},n}(),v=l.nb({encapsulation:2,styles:[],data:{}});function f(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"section",[["class","field is-grouped"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,1,"button",[["class","button is-danger is-outlined is-large"]],[[8,"disabled",0]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.brake.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,["Brake"])),(n()(),l.pb(4,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(5,0,null,null,1,"button",[["class","button is-primary is-outlined is-large"]],[[8,"disabled",0]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.throttle.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,["Throttle"]))],null,function(n,e){var t=e.component;n(e,2,0,t.brakeDisabled),n(e,5,0,t.throttleDisabled)})}var g=t("gIcY"),y=t("Y9ZX"),m=function(){function n(n,e){this.fb=n,this.formTools=e,this.recharge=new l.m,this.totalBattery=100,this.minimumBattery=10}return n.prototype.ngOnInit=function(){this.form=this.fb.group({rechargedDistance:[0,[g.l.required,g.l.min(this.minimumBattery),g.l.max(this.totalBattery)]]})},n.prototype.getErrors=function(n){return this.formTools.getErrors(this.form,n)},n.prototype.mustShowError=function(n){return this.formTools.mustShowError(this.form,n)},n.prototype.hasError=function(n,e){return this.formTools.hasError(this.form,n,e)},n}(),T=l.nb({encapsulation:2,styles:[],data:{}});function D(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(n()(),l.Fb(1,null,["Fill more than ",""]))],null,function(n,e){n(e,1,0,e.component.getErrors("rechargedDistance").min.min)})}function B(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(n()(),l.Fb(1,null,["Fill less than ",""]))],null,function(n,e){n(e,1,0,e.component.getErrors("rechargedDistance").max.max)})}function O(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(n,e,t){var r=!0,a=n.component;return"submit"===e&&(r=!1!==l.zb(n,2).onSubmit(t)&&r),"reset"===e&&(r=!1!==l.zb(n,2).onReset()&&r),"keyup.enter"===e&&(r=!1!==a.recharge.next(a.form.value.rechargedDistance)&&r),r},null,null)),l.ob(1,16384,null,0,g.o,[],null,null),l.ob(2,540672,null,0,g.f,[[8,null],[8,null]],{form:[0,"form"]},null),l.Db(2048,null,g.b,null,[g.f]),l.ob(4,16384,null,0,g.j,[[4,g.b]],null,null),(n()(),l.pb(5,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),l.pb(6,0,null,null,15,"div",[["class","field has-addons"]],null,null,null,null,null)),(n()(),l.pb(7,0,null,null,11,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(8,0,null,null,6,"input",[["class","input"],["formControlName","rechargedDistance"],["name","rechargedDistance"],["placeholder","Kilometers"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,e,t){var r=!0;return"input"===e&&(r=!1!==l.zb(n,9)._handleInput(t.target.value)&&r),"blur"===e&&(r=!1!==l.zb(n,9).onTouched()&&r),"compositionstart"===e&&(r=!1!==l.zb(n,9)._compositionStart()&&r),"compositionend"===e&&(r=!1!==l.zb(n,9)._compositionEnd(t.target.value)&&r),"change"===e&&(r=!1!==l.zb(n,10).onChange(t.target.value)&&r),"input"===e&&(r=!1!==l.zb(n,10).onChange(t.target.value)&&r),"blur"===e&&(r=!1!==l.zb(n,10).onTouched()&&r),r},null,null)),l.ob(9,16384,null,0,g.c,[l.D,l.k,[2,g.a]],null,null),l.ob(10,16384,null,0,g.n,[l.D,l.k],null,null),l.Db(1024,null,g.g,function(n,e){return[n,e]},[g.c,g.n]),l.ob(12,671744,null,0,g.e,[[3,g.b],[8,null],[8,null],[6,g.g],[2,g.q]],{name:[0,"name"]},null),l.Db(2048,null,g.h,null,[g.e]),l.ob(14,16384,null,0,g.i,[[4,g.h]],null,null),(n()(),l.hb(16777216,null,null,1,null,D)),l.ob(16,16384,null,0,u.m,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.hb(16777216,null,null,1,null,B)),l.ob(18,16384,null,0,u.m,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.pb(19,0,null,null,2,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(20,0,null,null,1,"button",[["class","button is-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,e,t){var l=!0,r=n.component;return"click"===e&&(l=!1!==r.recharge.next(r.form.value.rechargedDistance)&&l),l},null,null)),(n()(),l.Fb(-1,null,["Recharge"]))],function(n,e){var t=e.component;n(e,2,0,t.form),n(e,12,0,"rechargedDistance"),n(e,16,0,t.hasError("rechargedDistance","min")),n(e,18,0,t.hasError("rechargedDistance","max"))},function(n,e){var t=e.component;n(e,0,0,l.zb(e,4).ngClassUntouched,l.zb(e,4).ngClassTouched,l.zb(e,4).ngClassPristine,l.zb(e,4).ngClassDirty,l.zb(e,4).ngClassValid,l.zb(e,4).ngClassInvalid,l.zb(e,4).ngClassPending),n(e,8,0,l.zb(e,14).ngClassUntouched,l.zb(e,14).ngClassTouched,l.zb(e,14).ngClassPristine,l.zb(e,14).ngClassDirty,l.zb(e,14).ngClassValid,l.zb(e,14).ngClassInvalid,l.zb(e,14).ngClassPending),n(e,20,0,t.form.invalid)})}var k=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),I=l.nb({encapsulation:2,styles:[],data:{}});function C(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,11,"article",[["class","card"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,4,"header",[["class","card-header"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,1,"span",[["class","card-header-title"]],null,null,null,null,null)),(n()(),l.Fb(3,null,[" "," "])),(n()(),l.pb(4,0,null,null,1,"span",[["class","card-header-icon"]],null,null,null,null,null)),(n()(),l.Fb(5,null,[" "," "])),(n()(),l.pb(6,0,null,null,2,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),l.pb(7,0,null,null,1,"div",[["class","content"]],null,null,null,null,null)),l.yb(null,0),(n()(),l.pb(9,0,null,null,2,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),l.pb(10,0,null,null,1,"div",[["class","card-footer-item"]],null,null,null,null,null)),l.yb(null,1)],null,function(n,e){var t=e.component;n(e,3,0,t.caption),n(e,5,0,t.value)})}var w=function(){function n(){this.brake=new l.m,this.throttle=new l.m,this.recharge=new l.m}return n.prototype.ngOnInit=function(){},n}(),j=l.nb({encapsulation:2,styles:[],data:{}});function S(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-indicator",[],null,null,null,b,d)),l.ob(1,114688,null,0,s,[],{indicator:[0,"indicator"]},null)],function(n,e){n(e,1,0,e.context.$implicit)},null)}function x(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-speed-controls",[],null,[[null,"brake"],[null,"throttle"]],function(n,e,t){var l=!0,r=n.component;return"brake"===e&&(l=!1!==r.brake.next()&&l),"throttle"===e&&(l=!1!==r.throttle.next()&&l),l},f,v)),l.ob(1,114688,null,0,h,[],{brakeDisabled:[0,"brakeDisabled"],throttleDisabled:[1,"throttleDisabled"]},{brake:"brake",throttle:"throttle"})],function(n,e){var t=e.component;n(e,1,0,t.isBrakeDisabled,t.isThrottleDisabled)},null)}function E(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-battery-recharger",[],null,[[null,"recharge"]],function(n,e,t){var l=!0;return"recharge"===e&&(l=!1!==n.component.recharge.next(t)&&l),l},O,T)),l.ob(1,114688,null,0,m,[g.d,y.a],{totalBattery:[0,"totalBattery"]},{recharge:"recharge"})],function(n,e){n(e,1,0,e.component.car.totalBattery)},null)}function L(n){return l.Hb(0,[l.Bb(0,u.r,[]),l.Bb(0,u.d,[l.u]),(n()(),l.pb(2,0,null,null,11,"app-card",[],null,null,null,C,I)),l.ob(3,114688,null,0,k,[],{caption:[0,"caption"],value:[1,"value"]},null),l.Cb(4,1),l.Cb(5,2),(n()(),l.pb(6,0,null,0,2,"main",[],null,null,null,null,null)),(n()(),l.hb(16777216,null,null,1,null,S)),l.ob(8,278528,null,0,u.l,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.pb(9,0,null,1,4,"footer",[],null,null,null,null,null)),(n()(),l.hb(16777216,null,null,1,null,x)),l.ob(11,16384,null,0,u.m,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.hb(16777216,null,null,1,null,E)),l.ob(13,16384,null,0,u.m,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component,r=l.Gb(e,3,0,n(e,4,0,l.zb(e,0),t.car.name)),a=l.Gb(e,3,1,n(e,5,0,l.zb(e,1),t.car.cost,"EUR"));n(e,3,0,r,a),n(e,8,0,t.indicators),n(e,11,0,t.hasBattery),n(e,13,0,!t.hasBattery)},null)}var U=function(){function n(){this.save=new l.m,this.delete=new l.m}return n.prototype.ngOnInit=function(){},n}(),$=l.nb({encapsulation:2,styles:[],data:{}});function z(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,7,"section",[],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,6,"div",[["class","field is-grouped"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,2,"p",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(3,0,null,null,1,"a",[["class","button is-success"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.save.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,[" Save travel "])),(n()(),l.pb(5,0,null,null,2,"p",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(6,0,null,null,1,"a",[["class","button is-danger"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.delete.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,[" Delete travel "]))],null,null)}var F=t("6blF"),K=t("T1DM"),H=t("/21U");function R(n){var e=n.subscriber,t=n.counter,l=n.period;e.next(t),this.schedule({subscriber:e,counter:t+1,period:l},l)}var G,M=t("67Y/"),P=t("xMyE"),_=t("VnD/"),q=t("t9fZ"),Y=t("AytR"),N=t("Ocbj"),V=[{value:0,max:0,class:"is-info",tags:[{caption:"Speed",value:0,class:"is-info"},{caption:"Top",value:0,class:"is-danger"}]},{value:0,max:0,class:"is-success",tags:[{caption:"Traveled",value:0,class:"is-success"},{caption:"Remaining",value:0,class:"is-danger"}]}],Z=function(){function n(){this.indicators=V,this.speedIndicator=this.indicators[0],this.batteryIndicator=this.indicators[1]}return n.prototype.initilizeIndicators=function(n){return this.speedIndicator.max=n.topSpeed,this.speedIndicator.tags[1].value=n.topSpeed,this.batteryIndicator.max=n.totalBattery,this.updateIndicators(n),this.indicators},n.prototype.updateIndicators=function(n){return this.speedIndicator.value=n.currentSpeed,this.speedIndicator.class=this.getSpeedClass(n),this.speedIndicator.tags[0].value=n.currentSpeed,this.batteryIndicator.value=n.remainingBattery,this.batteryIndicator.class=this.getBatteryClass(n),this.batteryIndicator.tags[0].value=n.distanceTraveled,this.batteryIndicator.tags[1].value=n.remainingBattery,this.indicators},n.prototype.getBatteryClass=function(n){return n.remainingBattery<=Y.a.dangerKmsBattery?"is-danger":n.remainingBattery<=Y.a.warningKmsBattery?"is-warning":"is-success"},n.prototype.getSpeedClass=function(n){var e=n.currentSpeed/n.topSpeed;return e>=Y.a.dangerSpeedRate?"is-danger":e>=Y.a.warningSpeedRate?"is-warning":"is-info"},n}(),A=function(){function n(){var n=this;this.oneHourSecs=3600,this.hasBattery=function(n){return n.remainingBattery>0},this.isBrakeDisabled=function(n){return n.currentSpeed<=0},this.isThrottleDisabled=function(n){return n.currentSpeed>=n.topSpeed},this.deltaSpeed=function(e){return n.rawDeltaSpeed(e)/Y.a.factorSpeed},this.rawDeltaSpeed=function(n){return n.topSpeed-n.currentSpeed+1},this.travelDistance=function(e){var t=e.currentSpeed*Y.a.timeTravel/n.oneHourSecs;e.distanceTraveled+=t,e.remainingBattery-=t},this.getValidatedRecharging=function(n,e){var t=n;return!n||n<0?t=0:n>e.totalBattery&&(t=e.totalBattery),t}}return n.prototype.brake=function(n){n.currentSpeed-=this.deltaSpeed(n),n.currentSpeed<=1&&(n.currentSpeed=0)},n.prototype.throttle=function(n){n.currentSpeed+=this.deltaSpeed(n),n.currentSpeed>n.topSpeed&&(n.currentSpeed=n.topSpeed)},n.prototype.recharge=function(n,e){e.remainingBattery=this.getValidatedRecharging(n,e)},n.prototype.checkBattery=function(n){n.remainingBattery<=n.currentSpeed?this.stopCar(n):this.travelDistance(n)},n.prototype.updateCarTravelData=function(n,e){return n.currentSpeed=e.currentSpeed,n.remainingBattery=e.remainingBattery,n.distanceTraveled=e.distanceTraveled,n.owner=e.owner,n},n.prototype.stopCar=function(n){n.currentSpeed=0,n.distanceTraveled+=n.remainingBattery,n.remainingBattery=0},n}();!function(n){n.LoadCar="[Car] Load Car",n.LoadCarOK="[Car] Load Car OK",n.LoadCarError="[Car] Load Car Error",n.LoadTravel="[Travel] Load Travel",n.LoadTravelOK="[Travel] Load Travel OK",n.LoadTravelError="[Travel] Load Travel Error",n.InsertTravel="[Travel] Insert Travel",n.InsertTravelOK="[Travel] Insert Travel OK",n.InsertTravelError="[Travel] Insert Travel Error",n.UpdateTravel="[Travel] Update Travel",n.UpdateTravelOK="[Travel] Update Travel OK",n.UpdateTravelError="[Travel] Update Travel Error",n.DeleteTravel="[Travel] Delete Travel",n.DeleteTravelOK="[Travel] Delete Travel OK",n.DeleteTravelError="[Travel] Delete Travel Error",n.Brake="[Engine] Brake",n.Throttle="[Engine] Throttle",n.Recharge="[Engine] Recharge",n.UpdateIndicators="[Display] Update Indicators"}(G||(G={}));var X=function(){return function(n){this.payload=n,this.type=G.LoadCar}}(),J=function(){return function(n){this.payload=n,this.type=G.LoadCarOK}}(),Q=function(){return function(n){this.payload=n,this.type=G.LoadCarError}}(),W=function(){return function(n){this.payload=n,this.type=G.LoadTravel}}(),nn=function(){return function(n){this.payload=n,this.type=G.LoadTravelOK}}(),en=function(){return function(n){this.payload=n,this.type=G.LoadTravelError}}(),tn=function(){return function(n){this.payload=n,this.type=G.InsertTravel}}(),ln=function(){return function(n){this.payload=n,this.type=G.InsertTravelOK}}(),rn=function(){return function(n){this.payload=n,this.type=G.InsertTravelError}}(),an=function(){return function(n){this.payload=n,this.type=G.UpdateTravel}}(),un=function(){return function(n){this.payload=n,this.type=G.UpdateTravelOK}}(),on=function(){return function(n){this.payload=n,this.type=G.UpdateTravelError}}(),cn=function(){return function(n){this.payload=n,this.type=G.DeleteTravel}}(),sn=function(){return function(){this.type=G.DeleteTravelOK}}(),dn=function(){return function(n){this.payload=n,this.type=G.DeleteTravelError}}(),pn=function(){return function(n){this.payload=n,this.type=G.Brake}}(),bn=function(){return function(n){this.payload=n,this.type=G.Throttle}}(),hn=function(){return function(n){this.payload=n,this.type=G.Recharge}}(),vn=function(){return function(n){this.payload=n,this.type=G.UpdateIndicators}}(),fn=t("yGQT"),gn={car:null,travel:null,indicators:[],working:!1,completed:!1,message:"",canBeDeactivated:!0},yn=Object(fn.B)("car"),mn=(Object(fn.D)(yn,function(n){return n}),Object(fn.D)(yn,function(n){return n.car})),Tn=Object(fn.D)(yn,function(n){return n.travel}),Dn=Object(fn.D)(yn,function(n){return n.canBeDeactivated}),Bn=Object(fn.D)(yn,function(n){return n.indicators}),On=function(){function n(n,e,t,l,r){var a=this;this.route=n,this.display=e,this.engine=t,this.globalStore=l,this.store=r,this._canBeDeactivated=!0,this.onBrake=function(){a.engine.brake(a.car),a.store.dispatch(new pn(a.car))},this.onThrottle=function(){a.engine.throttle(a.car),a.store.dispatch(new bn(a.car))},this.onRecharge=function(n){a.engine.recharge(n,a.car),a.store.dispatch(new hn(a.car))},this.onSaveTravel=function(){return a.store.dispatch(new an(a.car))},this.onDeleteTravel=function(){return a.store.dispatch(new cn(a.car))},this.hasBattery=function(){return a.engine.hasBattery(a.car)},this.isBrakeDisabled=function(){return a.engine.isBrakeDisabled(a.car)},this.isThrottleDisabled=function(){return a.engine.isThrottleDisabled(a.car)},this.onCarGotten=function(n){if(null!=n){if(null==a.car||null==a.car.owner){var e=a.display.initilizeIndicators(n);a.store.dispatch(new vn(e)),a.store.dispatch(new W(n))}a.car=n,a.updateIndicators()}},this.onCarTravelGotten=function(n){a.engine.updateCarTravelData(a.car,n),a.globalStore.dispatchUserMessage("Ride like the wind!!"),a.updateIndicators()},this.timeGoesBy=function(n){null!=a.car&&a.updateIndicators()}}return n.prototype.ngOnInit=function(){this.loadCar(),this.subscribeToChanges()},n.prototype.canBeDeactivated=function(){return this.globalStore.dispatchUserMessage(this._canBeDeactivated?"You can go your own away ;-)":"Save or delete before exit !!"),this._canBeDeactivated},n.prototype.ngOnDestroy=function(){null!=this.intervalSubscription&&this.intervalSubscription.unsubscribe()},n.prototype.loadCar=function(){var n=this;this.globalStore.dispatchUserMessage("Loading data !!"),this.route.params.pipe(Object(M.a)(function(n){return n.carId})).subscribe(function(e){return n.store.dispatch(new X(e))})},n.prototype.subscribeToChanges=function(){var n,e,t=this;this.car$=this.store.select(mn).pipe(Object(P.a)(this.onCarGotten)),this.indicators$=this.store.select(Bn),this.travel$=this.store.select(Tn).pipe(Object(_.a)(function(n){return null!=n}),Object(q.a)(1),Object(P.a)(this.onCarTravelGotten)),this.store.select(Dn).subscribe(function(n){return t._canBeDeactivated=n}),this.intervalSubscription=(n=Y.a.refreshInterval,void 0===n&&(n=0),void 0===e&&(e=K.a),(!Object(H.a)(n)||n<0)&&(n=0),e&&"function"==typeof e.schedule||(e=K.a),new F.a(function(t){return t.add(e.schedule(R,n,{subscriber:t,counter:0,period:n})),t})).subscribe(this.timeGoesBy)},n.prototype.updateIndicators=function(){this.engine.checkBattery(this.car);var n=this.display.updateIndicators(this.car);this.store.dispatch(new vn(n))},n}(),kn=t("ZYCi"),In=l.nb({encapsulation:2,styles:[],data:{}});function Cn(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"article",[],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"app-driver-cockpit",[],null,[[null,"brake"],[null,"throttle"],[null,"recharge"]],function(n,e,t){var l=!0,r=n.component;return"brake"===e&&(l=!1!==r.onBrake()&&l),"throttle"===e&&(l=!1!==r.onThrottle()&&l),"recharge"===e&&(l=!1!==r.onRecharge(t)&&l),l},L,j)),l.ob(2,114688,null,0,w,[],{car:[0,"car"],indicators:[1,"indicators"],hasBattery:[2,"hasBattery"],isBrakeDisabled:[3,"isBrakeDisabled"],isThrottleDisabled:[4,"isThrottleDisabled"]},{brake:"brake",throttle:"throttle",recharge:"recharge"}),l.Bb(131072,u.b,[l.h]),(n()(),l.pb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),l.pb(5,0,null,null,1,"app-travel-manager",[],null,[[null,"save"],[null,"delete"]],function(n,e,t){var l=!0,r=n.component;return"save"===e&&(l=!1!==r.onSaveTravel()&&l),"delete"===e&&(l=!1!==r.onDeleteTravel()&&l),l},z,$)),l.ob(6,114688,null,0,U,[],null,{save:"save",delete:"delete"})],function(n,e){var t=e.component;n(e,2,0,t.car,l.Gb(e,2,1,l.zb(e,3).transform(t.indicators$)),t.hasBattery(),t.isBrakeDisabled(),t.isThrottleDisabled()),n(e,6,0)},null)}function wn(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" Loading car and travel data... "]))],null,null)}function jn(n){return l.Hb(2,[(n()(),l.hb(16777216,null,null,3,null,Cn)),l.ob(1,16384,null,0,u.m,[l.P,l.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),l.Bb(131072,u.b,[l.h]),l.Bb(131072,u.b,[l.h]),(n()(),l.hb(0,[["loading",2]],null,0,null,wn))],function(n,e){var t=e.component;n(e,1,0,null!=l.Gb(e,1,0,l.zb(e,2).transform(t.car$))&&null!=l.Gb(e,1,0,l.zb(e,3).transform(t.travel$)),l.zb(e,4))},null)}function Sn(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-car",[],null,null,null,jn,In)),l.ob(1,245760,null,0,On,[kn.a,Z,A,N.a,fn.n],null,null)],function(n,e){n(e,1,0)},null)}var xn=l.lb("app-car",On,Sn,{},{},[]),En=function(){function n(){}return n.prototype.canDeactivate=function(n,e,t,l){return!!l.url.includes("auth")||n.canBeDeactivated()},n}(),Ln=function(){return function(){}}(),Un=t("PCNd"),$n=function(){return($n=Object.assign||function(n){for(var e,t=1,l=arguments.length;t<l;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)};function zn(n,e){switch(void 0===n&&(n=gn),e.type){case G.LoadCar:return{car:null,travel:null,indicators:[],working:!0,completed:!1,message:"Loading car...",canBeDeactivated:!0};case G.LoadCarOK:return{car:e.payload,travel:null,indicators:[],working:!1,completed:!0,message:"Car Loaded",canBeDeactivated:!0};case G.LoadCarError:return{car:null,travel:null,indicators:[],working:!1,completed:!1,message:e.payload,canBeDeactivated:!0};case G.LoadTravel:return $n({},n,{travel:null,working:!0,completed:!1,message:"Loading Travel...",canBeDeactivated:!0});case G.LoadTravelOK:return $n({},n,{travel:e.payload,working:!1,completed:!0,message:"Travel Loaded",canBeDeactivated:!0});case G.LoadTravelError:return $n({},n,{travel:null,working:!1,completed:!1,message:e.payload,canBeDeactivated:!0});case G.InsertTravel:return $n({},n,{travel:null,working:!0,completed:!1,message:"Inserting Travel...",canBeDeactivated:!0});case G.InsertTravelOK:return $n({},n,{travel:e.payload,working:!1,completed:!0,message:"Travel Inserted",canBeDeactivated:!0});case G.InsertTravelError:return $n({},n,{travel:null,working:!1,completed:!1,message:e.payload,canBeDeactivated:!0});case G.UpdateTravel:return $n({},n,{travel:null,working:!0,completed:!1,message:"Updating Travel...",canBeDeactivated:!1});case G.UpdateTravelOK:return $n({},n,{travel:e.payload,working:!1,completed:!0,message:"Travel Updated",canBeDeactivated:!0});case G.UpdateTravelError:return $n({},n,{travel:null,working:!1,completed:!1,message:e.payload,canBeDeactivated:!0});case G.DeleteTravel:return $n({},n,{travel:null,working:!0,completed:!1,message:"Deleting Travel...",canBeDeactivated:!1});case G.DeleteTravelOK:return $n({},n,{travel:null,working:!1,completed:!0,message:"Travel Deleted",canBeDeactivated:!0});case G.DeleteTravelError:return $n({},n,{working:!1,completed:!1,message:e.payload,canBeDeactivated:!0});case G.Brake:return $n({},n,{car:$n({},e.payload),message:"Brake",canBeDeactivated:!1});case G.Throttle:return $n({},n,{car:$n({},e.payload),message:"Throttle",canBeDeactivated:!1});case G.Throttle:return $n({},n,{car:$n({},e.payload),message:"Recharge",canBeDeactivated:!1});case G.UpdateIndicators:return $n({},n,{indicators:e.payload.slice(),message:"Updating Indicators"});default:return n}}var Fn=t("mrSG"),Kn=t("jYNz"),Hn=t("F/XL"),Rn=t("psW0"),Gn=t("9Z1F"),Mn=function(){function n(n,e,t){var l=this;this.actions$=n,this.cars=e,this.travels=t,this.loadCarEffect$=this.actions$.pipe(Object(Kn.d)(G.LoadCar),Object(Rn.a)(function(n){return l.cars.getCarByLinkId$(n.payload).pipe(Object(M.a)(function(n){return new J(n)}),Object(Gn.a)(function(n){return Object(Hn.a)(new Q("Error loading car"))}))})),this.loadTravelEffect$=this.actions$.pipe(Object(Kn.d)(G.LoadTravel),Object(Rn.a)(function(n){return l.travels.getCarTravelByCar$(n.payload).pipe(Object(M.a)(function(n){return new nn(n)}),Object(Gn.a)(function(e){return l.onLoadTravelError$(e,n)}))})),this.InsertTravelEffect$=this.actions$.pipe(Object(Kn.d)(G.InsertTravel),Object(Rn.a)(function(n){return l.travels.postCarTravel$(n.payload).pipe(Object(M.a)(function(n){return new ln(n)}),Object(Gn.a)(function(n){return Object(Hn.a)(new rn("Error inserting travel"))}))})),this.UpdateTravelEffect$=this.actions$.pipe(Object(Kn.d)(G.UpdateTravel),Object(Rn.a)(function(n){return l.travels.putCarTravel$(n.payload).pipe(Object(M.a)(function(n){return new un(n)}),Object(Gn.a)(function(n){return Object(Hn.a)(new on("Error updating travel"))}))})),this.DeleteTravelEffect$=this.actions$.pipe(Object(Kn.d)(G.DeleteTravel),Object(Rn.a)(function(n){return l.travels.deleteCarTravel$(n.payload).pipe(Object(M.a)(function(){return new sn}),Object(Gn.a)(function(n){return Object(Hn.a)(new dn("Error deleting travel"))}))}))}return n.prototype.onLoadTravelError$=function(n,e){return 404===n.status?Object(Hn.a)(new tn(e.payload)):Object(Hn.a)(new en("Unexpected Error loading travel."))},Object(Fn.b)([Object(Kn.b)(),Object(Fn.d)("design:type",F.a)],n.prototype,"loadCarEffect$",void 0),Object(Fn.b)([Object(Kn.b)(),Object(Fn.d)("design:type",F.a)],n.prototype,"loadTravelEffect$",void 0),Object(Fn.b)([Object(Kn.b)(),Object(Fn.d)("design:type",F.a)],n.prototype,"InsertTravelEffect$",void 0),Object(Fn.b)([Object(Kn.b)(),Object(Fn.d)("design:type",F.a)],n.prototype,"UpdateTravelEffect$",void 0),Object(Fn.b)([Object(Kn.b)(),Object(Fn.d)("design:type",F.a)],n.prototype,"DeleteTravelEffect$",void 0),n}(),Pn=t("nsGb"),_n=t("t/Na"),qn=function(){function n(n){var e=this;this.http=n,this.travelsUrl=Y.a.apiUrl+"priv/travels",this.getCarTravelByCar$=function(n){return e.http.get(e.getUrlTravel(n))},this.postCarTravel$=function(n){return e.http.post(e.travelsUrl,e.getTravel(n))},this.putCarTravel$=function(n){return e.http.put(e.getUrlTravel(n),e.getTravel(n))},this.deleteCarTravel$=function(n){return e.http.delete(e.getUrlTravel(n))},this.getUrlTravel=function(n){return e.travelsUrl+"/"+e.getTravelId(n)},this.getTravel=function(n){return{_id:e.getTravelId(n),currentSpeed:n.currentSpeed,remainingBattery:n.remainingBattery,distanceTraveled:n.distanceTraveled,owner:n.owner}},this.getTravelId=function(n){return""+n.link.routerLink}}return n.ngInjectableDef=l.T({factory:function(){return new n(l.X(_n.c))},token:n,providedIn:"root"}),n}();t.d(e,"CarModuleNgFactory",function(){return Yn});var Yn=l.mb(r,[],function(n){return l.wb([l.xb(512,l.j,l.cb,[[8,[a.a,xn]],[3,l.j],l.x]),l.xb(4608,u.o,u.n,[l.u,[2,u.y]]),l.xb(4608,g.d,g.d,[]),l.xb(4608,g.p,g.p,[]),l.xb(4608,y.a,y.a,[]),l.xb(4608,Z,Z,[]),l.xb(4608,A,A,[]),l.xb(4608,En,En,[]),l.xb(1073742336,u.c,u.c,[]),l.xb(1073742336,kn.p,kn.p,[[2,kn.w],[2,kn.n]]),l.xb(1073742336,Ln,Ln,[]),l.xb(1073742336,g.m,g.m,[]),l.xb(1073742336,g.k,g.k,[]),l.xb(1073742336,Un.a,Un.a,[]),l.xb(1024,fn.j,function(){return[{key:"car",reducerFactory:fn.z,metaReducers:[],initialState:void 0}]},[]),l.xb(1024,fn.q,function(){return[zn]},[]),l.xb(1024,fn.r,function(n){return[n]},[fn.q]),l.xb(1024,fn.b,function(n,e,t){return[fn.w(n,e,t)]},[l.q,fn.q,fn.r]),l.xb(1073873408,fn.o,fn.o,[fn.j,fn.b,fn.g,fn.p]),l.xb(512,Mn,Mn,[Kn.a,Pn.a,qn]),l.xb(1024,Kn.i,function(n){return[Kn.e(n)]},[Mn]),l.xb(1073742336,Kn.g,Kn.g,[Kn.f,Kn.i,[2,fn.p],[2,fn.o]]),l.xb(1073742336,r,r,[]),l.xb(256,l.u,"es",[]),l.xb(1024,kn.l,function(){return[[{path:":carId",component:On,canDeactivate:[En]}]]},[]),l.xb(256,l.L,"xlf",[])])})}}]);