(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{gekI:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),r=function(){return function(){}}(),a=e("pMnS"),u=e("Ip0R"),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),o=l.nb({encapsulation:2,styles:[],data:{}});function c(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"div",[["class","tags has-addons"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,1,"span",[["class","tag is-dark"]],null,null,null,null,null)),(n()(),l.Fb(2,null,["",""])),(n()(),l.pb(3,0,null,null,3,"span",[],null,null,null,null,null)),l.ob(4,278528,null,0,u.k,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.Ab(5,2),(n()(),l.Fb(6,null,["",""]))],function(n,t){var e=n(t,5,0,"tag",t.component.tagClass);n(t,4,0,e)},function(n,t){var e=t.component;n(t,2,0,e.caption),n(t,6,0,e.value)})}var s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=l.nb({encapsulation:2,styles:[],data:{}});function p(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,3,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"app-data-tag",[],null,null,null,c,o)),l.ob(2,114688,null,0,i,[],{caption:[0,"caption"],value:[1,"value"],tagClass:[2,"tagClass"]},null),l.Cb(3,2)],function(n,t){var e=t.context.$implicit.caption,r=l.Gb(t,2,1,n(t,3,0,l.zb(t.parent,0),t.context.$implicit.value,"1.0-0"));n(t,2,0,e,r,t.context.$implicit.class)},null)}function b(n){return l.Hb(0,[l.Bb(0,u.f,[l.u]),(n()(),l.pb(1,0,null,null,2,"div",[["class","field is-grouped is-grouped-multiline"]],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,p)),l.ob(3,278528,null,0,u.l,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.pb(4,0,null,null,2,"progress",[],[[8,"value",0],[8,"max",0]],null,null,null,null)),l.ob(5,278528,null,0,u.k,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.Ab(6,2),(n()(),l.pb(7,0,null,null,0,"br",[],null,null,null,null,null))],function(n,t){var e=t.component;n(t,3,0,e.indicator.tags);var l=n(t,6,0,"progress",e.indicator.class);n(t,5,0,l)},function(n,t){var e=t.component;n(t,4,0,e.indicator.value,e.indicator.max)})}var h=function(){function n(){this.brakeDisabled=!1,this.throttleDisabled=!1,this.brake=new l.m,this.throttle=new l.m}return n.prototype.ngOnInit=function(){},n}(),v=l.nb({encapsulation:2,styles:[],data:{}});function f(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"section",[["class","field is-grouped"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,1,"button",[["class","button is-danger is-outlined is-large"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.brake.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,["Brake"])),(n()(),l.pb(4,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(5,0,null,null,1,"button",[["class","button is-primary is-outlined is-large"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.throttle.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,["Throttle"]))],null,function(n,t){var e=t.component;n(t,2,0,e.brakeDisabled),n(t,5,0,e.throttleDisabled)})}var g=e("gIcY"),y=e("Y9ZX"),m=function(){function n(n,t){this.fb=n,this.formTools=t,this.recharge=new l.m,this.totalBattery=100,this.minimumBattery=10}return n.prototype.ngOnInit=function(){this.form=this.fb.group({rechargedDistance:[0,[g.l.required,g.l.min(this.minimumBattery),g.l.max(this.totalBattery)]]})},n.prototype.getErrors=function(n){return this.formTools.getErrors(this.form,n)},n.prototype.mustShowError=function(n){return this.formTools.mustShowError(this.form,n)},n.prototype.hasError=function(n,t){return this.formTools.hasError(this.form,n,t)},n}(),T=l.nb({encapsulation:2,styles:[],data:{}});function D(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(n()(),l.Fb(1,null,["Fill more than ",""]))],null,function(n,t){n(t,1,0,t.component.getErrors("rechargedDistance").min.min)})}function O(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(n()(),l.Fb(1,null,["Fill less than ",""]))],null,function(n,t){n(t,1,0,t.component.getErrors("rechargedDistance").max.max)})}function C(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(n,t,e){var r=!0,a=n.component;return"submit"===t&&(r=!1!==l.zb(n,2).onSubmit(e)&&r),"reset"===t&&(r=!1!==l.zb(n,2).onReset()&&r),"keyup.enter"===t&&(r=!1!==a.recharge.next(a.form.value.rechargedDistance)&&r),r},null,null)),l.ob(1,16384,null,0,g.o,[],null,null),l.ob(2,540672,null,0,g.f,[[8,null],[8,null]],{form:[0,"form"]},null),l.Db(2048,null,g.b,null,[g.f]),l.ob(4,16384,null,0,g.j,[[4,g.b]],null,null),(n()(),l.pb(5,0,null,null,16,"div",[],null,null,null,null,null)),(n()(),l.pb(6,0,null,null,15,"div",[["class","field has-addons"]],null,null,null,null,null)),(n()(),l.pb(7,0,null,null,11,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(8,0,null,null,6,"input",[["class","input"],["formControlName","rechargedDistance"],["name","rechargedDistance"],["placeholder","Kilometers"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,t,e){var r=!0;return"input"===t&&(r=!1!==l.zb(n,9)._handleInput(e.target.value)&&r),"blur"===t&&(r=!1!==l.zb(n,9).onTouched()&&r),"compositionstart"===t&&(r=!1!==l.zb(n,9)._compositionStart()&&r),"compositionend"===t&&(r=!1!==l.zb(n,9)._compositionEnd(e.target.value)&&r),"change"===t&&(r=!1!==l.zb(n,10).onChange(e.target.value)&&r),"input"===t&&(r=!1!==l.zb(n,10).onChange(e.target.value)&&r),"blur"===t&&(r=!1!==l.zb(n,10).onTouched()&&r),r},null,null)),l.ob(9,16384,null,0,g.c,[l.D,l.k,[2,g.a]],null,null),l.ob(10,16384,null,0,g.n,[l.D,l.k],null,null),l.Db(1024,null,g.g,function(n,t){return[n,t]},[g.c,g.n]),l.ob(12,671744,null,0,g.e,[[3,g.b],[8,null],[8,null],[6,g.g],[2,g.q]],{name:[0,"name"]},null),l.Db(2048,null,g.h,null,[g.e]),l.ob(14,16384,null,0,g.i,[[4,g.h]],null,null),(n()(),l.gb(16777216,null,null,1,null,D)),l.ob(16,16384,null,0,u.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,O)),l.ob(18,16384,null,0,u.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.pb(19,0,null,null,2,"div",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(20,0,null,null,1,"button",[["class","button is-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0,r=n.component;return"click"===t&&(l=!1!==r.recharge.next(r.form.value.rechargedDistance)&&l),l},null,null)),(n()(),l.Fb(-1,null,["Recharge"]))],function(n,t){var e=t.component;n(t,2,0,e.form),n(t,12,0,"rechargedDistance"),n(t,16,0,e.hasError("rechargedDistance","min")),n(t,18,0,e.hasError("rechargedDistance","max"))},function(n,t){var e=t.component;n(t,0,0,l.zb(t,4).ngClassUntouched,l.zb(t,4).ngClassTouched,l.zb(t,4).ngClassPristine,l.zb(t,4).ngClassDirty,l.zb(t,4).ngClassValid,l.zb(t,4).ngClassInvalid,l.zb(t,4).ngClassPending),n(t,8,0,l.zb(t,14).ngClassUntouched,l.zb(t,14).ngClassTouched,l.zb(t,14).ngClassPristine,l.zb(t,14).ngClassDirty,l.zb(t,14).ngClassValid,l.zb(t,14).ngClassInvalid,l.zb(t,14).ngClassPending),n(t,20,0,e.form.invalid)})}var B=e("9W44"),k=e("SHZb"),I=function(){function n(){this.brake=new l.m,this.throttle=new l.m,this.recharge=new l.m}return n.prototype.ngOnInit=function(){},n}(),w=l.nb({encapsulation:2,styles:[],data:{}});function j(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-indicator",[],null,null,null,b,d)),l.ob(1,114688,null,0,s,[],{indicator:[0,"indicator"]},null)],function(n,t){n(t,1,0,t.context.$implicit)},null)}function S(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-speed-controls",[],null,[[null,"brake"],[null,"throttle"]],function(n,t,e){var l=!0,r=n.component;return"brake"===t&&(l=!1!==r.brake.next()&&l),"throttle"===t&&(l=!1!==r.throttle.next()&&l),l},f,v)),l.ob(1,114688,null,0,h,[],{brakeDisabled:[0,"brakeDisabled"],throttleDisabled:[1,"throttleDisabled"]},{brake:"brake",throttle:"throttle"})],function(n,t){var e=t.component;n(t,1,0,e.isBrakeDisabled,e.isThrottleDisabled)},null)}function x(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-battery-recharger",[],null,[[null,"recharge"]],function(n,t,e){var l=!0;return"recharge"===t&&(l=!1!==n.component.recharge.next(e)&&l),l},C,T)),l.ob(1,114688,null,0,m,[g.d,y.a],{totalBattery:[0,"totalBattery"]},{recharge:"recharge"})],function(n,t){n(t,1,0,t.component.car.totalBattery)},null)}function E(n){return l.Hb(0,[l.Bb(0,u.r,[]),l.Bb(0,u.d,[l.u]),(n()(),l.pb(2,0,null,null,11,"app-card",[],null,null,null,B.b,B.a)),l.ob(3,114688,null,0,k.a,[],{caption:[0,"caption"],value:[1,"value"]},null),l.Cb(4,1),l.Cb(5,2),(n()(),l.pb(6,0,null,0,2,"main",[],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,j)),l.ob(8,278528,null,0,u.l,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.pb(9,0,null,1,4,"footer",[],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,S)),l.ob(11,16384,null,0,u.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,x)),l.ob(13,16384,null,0,u.m,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component,r=l.Gb(t,3,0,n(t,4,0,l.zb(t,0),e.car.name)),a=l.Gb(t,3,1,n(t,5,0,l.zb(t,1),e.car.cost,"EUR"));n(t,3,0,r,a),n(t,8,0,e.indicators),n(t,11,0,e.hasBattery),n(t,13,0,!e.hasBattery)},null)}var L=function(){function n(){this.save=new l.m,this.delete=new l.m}return n.prototype.ngOnInit=function(){},n}(),U=l.nb({encapsulation:2,styles:[],data:{}});function $(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,7,"section",[],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,6,"div",[["class","field is-grouped"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,2,"p",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(3,0,null,null,1,"a",[["class","button is-success"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.save.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,[" Save travel "])),(n()(),l.pb(5,0,null,null,2,"p",[["class","control"]],null,null,null,null,null)),(n()(),l.pb(6,0,null,null,1,"a",[["class","button is-danger"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.delete.next()&&l),l},null,null)),(n()(),l.Fb(-1,null,[" Delete travel "]))],null,null)}var z=e("6blF"),K=e("T1DM"),F=e("/21U");function H(n){var t=n.subscriber,e=n.counter,l=n.period;t.next(e),this.schedule({subscriber:t,counter:e+1,period:l},l)}var R,G=e("67Y/"),_=e("xMyE"),M=e("VnD/"),q=e("t9fZ"),P=e("AytR"),Y=e("Ocbj"),N=[{value:0,max:0,class:"is-info",tags:[{caption:"Speed",value:0,class:"is-info"},{caption:"Top",value:0,class:"is-danger"}]},{value:0,max:0,class:"is-success",tags:[{caption:"Traveled",value:0,class:"is-success"},{caption:"Remaining",value:0,class:"is-danger"}]}],V=function(){function n(){this.indicators=N,this.speedIndicator=this.indicators[0],this.batteryIndicator=this.indicators[1]}return n.prototype.initilizeIndicators=function(n){return this.speedIndicator.max=n.topSpeed,this.speedIndicator.tags[1].value=n.topSpeed,this.batteryIndicator.max=n.totalBattery,this.updateIndicators(n),this.indicators},n.prototype.updateIndicators=function(n){return this.speedIndicator.value=n.currentSpeed,this.speedIndicator.class=this.getSpeedClass(n),this.speedIndicator.tags[0].value=n.currentSpeed,this.batteryIndicator.value=n.remainingBattery,this.batteryIndicator.class=this.getBatteryClass(n),this.batteryIndicator.tags[0].value=n.distanceTraveled,this.batteryIndicator.tags[1].value=n.remainingBattery,this.indicators},n.prototype.getBatteryClass=function(n){return n.remainingBattery<=P.a.dangerKmsBattery?"is-danger":n.remainingBattery<=P.a.warningKmsBattery?"is-warning":"is-success"},n.prototype.getSpeedClass=function(n){var t=n.currentSpeed/n.topSpeed;return t>=P.a.dangerSpeedRate?"is-danger":t>=P.a.warningSpeedRate?"is-warning":"is-info"},n}(),Z=function(){function n(){var n=this;this.oneHourSecs=3600,this.hasBattery=function(n){return n.remainingBattery>0},this.isBrakeDisabled=function(n){return n.currentSpeed<=0},this.isThrottleDisabled=function(n){return n.currentSpeed>=n.topSpeed},this.deltaSpeed=function(t){return n.rawDeltaSpeed(t)/P.a.factorSpeed},this.rawDeltaSpeed=function(n){return n.topSpeed-n.currentSpeed+1},this.travelDistance=function(t){var e=t.currentSpeed*P.a.timeTravel/n.oneHourSecs;t.distanceTraveled+=e,t.remainingBattery-=e},this.getValidatedRecharging=function(n,t){var e=n;return!n||n<0?e=0:n>t.totalBattery&&(e=t.totalBattery),e}}return n.prototype.brake=function(n){n.currentSpeed-=this.deltaSpeed(n),n.currentSpeed<=1&&(n.currentSpeed=0)},n.prototype.throttle=function(n){n.currentSpeed+=this.deltaSpeed(n),n.currentSpeed>n.topSpeed&&(n.currentSpeed=n.topSpeed)},n.prototype.recharge=function(n,t){t.remainingBattery=this.getValidatedRecharging(n,t)},n.prototype.checkBattery=function(n){n.remainingBattery<=n.currentSpeed?this.stopCar(n):this.travelDistance(n)},n.prototype.updateCarTravelData=function(n,t){return n.currentSpeed=t.currentSpeed,n.remainingBattery=t.remainingBattery,n.distanceTraveled=t.distanceTraveled,n.owner=t.owner,n},n.prototype.stopCar=function(n){n.currentSpeed=0,n.distanceTraveled+=n.remainingBattery,n.remainingBattery=0},n}();!function(n){n.LoadCar="[Car] Load Car",n.LoadCarOK="[Car] Load Car OK",n.LoadCarError="[Car] Load Car Error",n.LoadTravel="[Car] Load Travel",n.LoadTravelOK="[Car] Load Travel OK",n.LoadTravelError="[Car] Load Travel Error",n.InsertTravel="[Car] Insert Travel",n.InsertTravelOK="[Car] Insert Travel OK",n.InsertTravelError="[Car] Insert Travel Error",n.UpdateTravel="[Car] Update Travel",n.UpdateTravelOK="[Car] Update Travel OK",n.UpdateTravelError="[Car] Update Travel Error",n.DeleteTravel="[Car] Delete Travel",n.DeleteTravelOK="[Car] Delete Travel OK",n.DeleteTravelError="[Car] Delete Travel Error",n.Brake="[Car] Brake",n.Throttle="[Car] Throttle",n.Recharge="[Car] Recharge",n.UpdateIndicators="[Car] Update Indicators"}(R||(R={}));var A=function(){return function(n){this.payload=n,this.type=R.LoadCar}}(),W=function(){return function(n){this.payload=n,this.type=R.LoadCarOK}}(),J=function(){return function(n){this.payload=n,this.type=R.LoadCarError}}(),X=function(){return function(n){this.payload=n,this.type=R.LoadTravel}}(),Q=function(){return function(n){this.payload=n,this.type=R.LoadTravelOK}}(),nn=function(){return function(n){this.payload=n,this.type=R.LoadTravelError}}(),tn=function(){return function(n){this.payload=n,this.type=R.InsertTravel}}(),en=function(){return function(n){this.payload=n,this.type=R.InsertTravelOK}}(),ln=function(){return function(n){this.payload=n,this.type=R.InsertTravelError}}(),rn=function(){return function(n){this.payload=n,this.type=R.UpdateTravel}}(),an=function(){return function(n){this.payload=n,this.type=R.UpdateTravelOK}}(),un=function(){return function(n){this.payload=n,this.type=R.UpdateTravelError}}(),on=function(){return function(n){this.payload=n,this.type=R.DeleteTravel}}(),cn=function(){return function(){this.type=R.DeleteTravelOK}}(),sn=function(){return function(n){this.payload=n,this.type=R.DeleteTravelError}}(),dn=function(){return function(n){this.payload=n,this.type=R.Brake}}(),pn=function(){return function(n){this.payload=n,this.type=R.Throttle}}(),bn=function(){return function(n){this.payload=n,this.type=R.Recharge}}(),hn=function(){return function(n){this.payload=n,this.type=R.UpdateIndicators}}(),vn=e("yGQT"),fn={car:null,travel:null,indicators:[],working:!1,completed:!1,message:"",canBeDeactivated:!0},gn=Object(vn.B)("car"),yn=(Object(vn.D)(gn,function(n){return n}),Object(vn.D)(gn,function(n){return n.car})),mn=Object(vn.D)(gn,function(n){return n.travel}),Tn=Object(vn.D)(gn,function(n){return n.canBeDeactivated}),Dn=Object(vn.D)(gn,function(n){return n.indicators}),On=function(){function n(n,t,e,l,r){var a=this;this.route=n,this.display=t,this.engine=e,this.globalStore=l,this.store=r,this._canBeDeactivated=!0,this.onBrake=function(){a.engine.brake(a.car),a.store.dispatch(new dn(a.car))},this.onThrottle=function(){a.engine.throttle(a.car),a.store.dispatch(new pn(a.car))},this.onRecharge=function(n){a.engine.recharge(n,a.car),a.store.dispatch(new bn(a.car))},this.onSaveTravel=function(){return a.store.dispatch(new rn(a.car))},this.onDeleteTravel=function(){return a.store.dispatch(new on(a.car))},this.hasBattery=function(){return a.engine.hasBattery(a.car)},this.isBrakeDisabled=function(){return a.engine.isBrakeDisabled(a.car)},this.isThrottleDisabled=function(){return a.engine.isThrottleDisabled(a.car)},this.onCarGotten=function(n){if(null!=n){if(null==a.car){var t=a.display.initilizeIndicators(n);a.store.dispatch(new hn(t)),a.store.dispatch(new X(n))}a.car=n,a.updateIndicators()}},this.onCarTravelGotten=function(n){a.engine.updateCarTravelData(a.car,n),a.globalStore.dispatchUserMessage("Ride like the wind!!"),a.updateIndicators()},this.timeGoesBy=function(n){null!=a.car&&a.updateIndicators()}}return n.prototype.ngOnInit=function(){this.loadCar(),this.subscribeToChanges()},n.prototype.canBeDeactivated=function(){return this.globalStore.dispatchUserMessage(this._canBeDeactivated?"You can go your own away ;-)":"Save or delete before exit !!"),this._canBeDeactivated},n.prototype.ngOnDestroy=function(){null!=this.intervalSubscription&&this.intervalSubscription.unsubscribe()},n.prototype.loadCar=function(){var n=this;this.globalStore.dispatchUserMessage("Loading data !!"),this.route.params.pipe(Object(G.a)(function(n){return n.carId})).subscribe(function(t){return n.store.dispatch(new A(t))})},n.prototype.subscribeToChanges=function(){var n,t,e=this;this.car$=this.store.select(yn).pipe(Object(_.a)(this.onCarGotten)),this.indicators$=this.store.select(Dn),this.travel$=this.store.select(mn).pipe(Object(M.a)(function(n){return null!=n}),Object(q.a)(1),Object(_.a)(this.onCarTravelGotten)),this.store.select(Tn).subscribe(function(n){return e._canBeDeactivated=n}),this.intervalSubscription=(n=P.a.refreshInterval,void 0===n&&(n=0),void 0===t&&(t=K.a),(!Object(F.a)(n)||n<0)&&(n=0),t&&"function"==typeof t.schedule||(t=K.a),new z.a(function(e){return e.add(t.schedule(H,n,{subscriber:e,counter:0,period:n})),e})).subscribe(this.timeGoesBy)},n.prototype.updateIndicators=function(){this.engine.checkBattery(this.car);var n=this.display.updateIndicators(this.car);this.store.dispatch(new hn(n))},n}(),Cn=e("ZYCi"),Bn=l.nb({encapsulation:2,styles:[],data:{}});function kn(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,6,"article",[],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"app-driver-cockpit",[],null,[[null,"brake"],[null,"throttle"],[null,"recharge"]],function(n,t,e){var l=!0,r=n.component;return"brake"===t&&(l=!1!==r.onBrake()&&l),"throttle"===t&&(l=!1!==r.onThrottle()&&l),"recharge"===t&&(l=!1!==r.onRecharge(e)&&l),l},E,w)),l.ob(2,114688,null,0,I,[],{car:[0,"car"],indicators:[1,"indicators"],hasBattery:[2,"hasBattery"],isBrakeDisabled:[3,"isBrakeDisabled"],isThrottleDisabled:[4,"isThrottleDisabled"]},{brake:"brake",throttle:"throttle",recharge:"recharge"}),l.Bb(131072,u.b,[l.h]),(n()(),l.pb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),l.pb(5,0,null,null,1,"app-travel-manager",[],null,[[null,"save"],[null,"delete"]],function(n,t,e){var l=!0,r=n.component;return"save"===t&&(l=!1!==r.onSaveTravel()&&l),"delete"===t&&(l=!1!==r.onDeleteTravel()&&l),l},$,U)),l.ob(6,114688,null,0,L,[],null,{save:"save",delete:"delete"})],function(n,t){var e=t.component;n(t,2,0,e.car,l.Gb(t,2,1,l.zb(t,3).transform(e.indicators$)),e.hasBattery(),e.isBrakeDisabled(),e.isThrottleDisabled()),n(t,6,0)},null)}function In(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" Loading car and travel data... "]))],null,null)}function wn(n){return l.Hb(2,[(n()(),l.gb(16777216,null,null,3,null,kn)),l.ob(1,16384,null,0,u.m,[l.O,l.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),l.Bb(131072,u.b,[l.h]),l.Bb(131072,u.b,[l.h]),(n()(),l.gb(0,[["loading",2]],null,0,null,In))],function(n,t){var e=t.component;n(t,1,0,null!=l.Gb(t,1,0,l.zb(t,2).transform(e.car$))&&null!=l.Gb(t,1,0,l.zb(t,3).transform(e.travel$)),l.zb(t,4))},null)}function jn(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-car",[],null,null,null,wn,Bn)),l.ob(1,245760,null,0,On,[Cn.a,V,Z,Y.a,vn.n],null,null)],function(n,t){n(t,1,0)},null)}var Sn=l.lb("app-car",On,jn,{},{},[]),xn=function(){function n(){}return n.prototype.canDeactivate=function(n,t,e,l){return!!l.url.includes("auth")||n.canBeDeactivated()},n}(),En=function(){return function(){}}(),Ln=e("PCNd"),Un=function(){return(Un=Object.assign||function(n){for(var t,e=1,l=arguments.length;e<l;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)};function $n(n,t){switch(void 0===n&&(n=fn),t.type){case R.LoadCar:return{car:null,travel:null,indicators:[],working:!0,completed:!1,message:"Loading car...",canBeDeactivated:!0};case R.LoadCarOK:return{car:t.payload,travel:null,indicators:[],working:!1,completed:!0,message:"Car Loaded",canBeDeactivated:!0};case R.LoadCarError:return{car:null,travel:null,indicators:[],working:!1,completed:!1,message:t.payload,canBeDeactivated:!0};case R.LoadTravel:return Un({},n,{travel:null,working:!0,completed:!1,message:"Loading Travel...",canBeDeactivated:!0});case R.LoadTravelOK:return Un({},n,{travel:t.payload,working:!1,completed:!0,message:"Travel Loaded",canBeDeactivated:!0});case R.LoadTravelError:return Un({},n,{travel:null,working:!1,completed:!1,message:t.payload,canBeDeactivated:!0});case R.InsertTravel:return Un({},n,{travel:null,working:!0,completed:!1,message:"Inserting Travel...",canBeDeactivated:!0});case R.InsertTravelOK:return Un({},n,{travel:t.payload,working:!1,completed:!0,message:"Travel Inserted",canBeDeactivated:!0});case R.InsertTravelError:return Un({},n,{travel:null,working:!1,completed:!1,message:t.payload,canBeDeactivated:!0});case R.UpdateTravel:return Un({},n,{travel:null,working:!0,completed:!1,message:"Updating Travel...",canBeDeactivated:!1});case R.UpdateTravelOK:return Un({},n,{travel:t.payload,working:!1,completed:!0,message:"Travel Updated",canBeDeactivated:!0});case R.UpdateTravelError:return Un({},n,{travel:null,working:!1,completed:!1,message:t.payload,canBeDeactivated:!0});case R.DeleteTravel:return Un({},n,{travel:null,working:!0,completed:!1,message:"Deleting Travel...",canBeDeactivated:!1});case R.DeleteTravelOK:return Un({},n,{travel:null,working:!1,completed:!0,message:"Travel Deleted",canBeDeactivated:!0});case R.DeleteTravelError:return Un({},n,{working:!1,completed:!1,message:t.payload,canBeDeactivated:!0});case R.Brake:return Un({},n,{car:Un({},t.payload),message:"Brake",canBeDeactivated:!1});case R.Throttle:return Un({},n,{car:Un({},t.payload),message:"Throttle",canBeDeactivated:!1});case R.Throttle:return Un({},n,{car:Un({},t.payload),message:"Recharge",canBeDeactivated:!1});case R.UpdateIndicators:return Un({},n,{indicators:t.payload.slice(),message:"Updating Indicators"});default:return n}}var zn=e("mrSG"),Kn=e("jYNz"),Fn=e("F/XL"),Hn=e("psW0"),Rn=e("9Z1F"),Gn=function(){function n(n,t,e){var l=this;this.actions$=n,this.cars=t,this.travels=e,this.loadCarEffect$=this.actions$.pipe(Object(Kn.d)(R.LoadCar),Object(Hn.a)(function(n){return l.cars.getCarByLinkId$(n.payload).pipe(Object(G.a)(function(n){return new W(n)}),Object(Rn.a)(function(n){return Object(Fn.a)(new J("Error loading car"))}))})),this.loadTravelEffect$=this.actions$.pipe(Object(Kn.d)(R.LoadTravel),Object(Hn.a)(function(n){return l.travels.getCarTravelByCar$(n.payload).pipe(Object(G.a)(function(n){return new Q(n)}),Object(Rn.a)(function(t){return l.onLoadTravelError$(t,n)}))})),this.InsertTravelEffect$=this.actions$.pipe(Object(Kn.d)(R.InsertTravel),Object(Hn.a)(function(n){return l.travels.postCarTravel$(n.payload).pipe(Object(G.a)(function(n){return new en(n)}),Object(Rn.a)(function(n){return Object(Fn.a)(new ln("Error inserting travel"))}))})),this.UpdateTravelEffect$=this.actions$.pipe(Object(Kn.d)(R.UpdateTravel),Object(Hn.a)(function(n){return l.travels.putCarTravel$(n.payload).pipe(Object(G.a)(function(n){return new an(n)}),Object(Rn.a)(function(n){return Object(Fn.a)(new un("Error updating travel"))}))})),this.DeleteTravelEffect$=this.actions$.pipe(Object(Kn.d)(R.DeleteTravel),Object(Hn.a)(function(n){return l.travels.deleteCarTravel$(n.payload).pipe(Object(G.a)(function(){return new cn}),Object(Rn.a)(function(n){return Object(Fn.a)(new sn("Error deleting travel"))}))}))}return n.prototype.onLoadTravelError$=function(n,t){return 404===n.status?Object(Fn.a)(new tn(t.payload)):Object(Fn.a)(new nn("Unexpected Error loading travel."))},Object(zn.b)([Object(Kn.b)(),Object(zn.d)("design:type",z.a)],n.prototype,"loadCarEffect$",void 0),Object(zn.b)([Object(Kn.b)(),Object(zn.d)("design:type",z.a)],n.prototype,"loadTravelEffect$",void 0),Object(zn.b)([Object(Kn.b)(),Object(zn.d)("design:type",z.a)],n.prototype,"InsertTravelEffect$",void 0),Object(zn.b)([Object(Kn.b)(),Object(zn.d)("design:type",z.a)],n.prototype,"UpdateTravelEffect$",void 0),Object(zn.b)([Object(Kn.b)(),Object(zn.d)("design:type",z.a)],n.prototype,"DeleteTravelEffect$",void 0),n}(),_n=e("nsGb"),Mn=e("t/Na"),qn=function(){function n(n){var t=this;this.http=n,this.travelsUrl=P.a.apiUrl+"priv/travels",this.getCarTravelByCar$=function(n){return t.http.get(t.getUrlTravel(n))},this.postCarTravel$=function(n){return t.http.post(t.travelsUrl,t.getTravel(n))},this.putCarTravel$=function(n){return t.http.put(t.getUrlTravel(n),t.getTravel(n))},this.deleteCarTravel$=function(n){return t.http.delete(t.getUrlTravel(n))},this.getUrlTravel=function(n){return t.travelsUrl+"/"+t.getTravelId(n)},this.getTravel=function(n){return{_id:t.getTravelId(n),currentSpeed:n.currentSpeed,remainingBattery:n.remainingBattery,distanceTraveled:n.distanceTraveled,owner:n.owner}},this.getTravelId=function(n){return""+n.link.routerLink}}return n.ngInjectableDef=l.S({factory:function(){return new n(l.W(Mn.c))},token:n,providedIn:"root"}),n}();e.d(t,"CarModuleNgFactory",function(){return Pn});var Pn=l.mb(r,[],function(n){return l.wb([l.xb(512,l.j,l.bb,[[8,[a.a,Sn]],[3,l.j],l.x]),l.xb(4608,u.o,u.n,[l.u,[2,u.x]]),l.xb(4608,g.d,g.d,[]),l.xb(4608,g.p,g.p,[]),l.xb(4608,y.a,y.a,[]),l.xb(4608,V,V,[]),l.xb(4608,Z,Z,[]),l.xb(4608,xn,xn,[]),l.xb(1073742336,u.c,u.c,[]),l.xb(1073742336,Cn.p,Cn.p,[[2,Cn.w],[2,Cn.n]]),l.xb(1073742336,En,En,[]),l.xb(1073742336,g.m,g.m,[]),l.xb(1073742336,g.k,g.k,[]),l.xb(1073742336,Ln.a,Ln.a,[]),l.xb(1024,vn.j,function(){return[{key:"car",reducerFactory:vn.z,metaReducers:[],initialState:void 0}]},[]),l.xb(1024,vn.q,function(){return[$n]},[]),l.xb(1024,vn.r,function(n){return[n]},[vn.q]),l.xb(1024,vn.b,function(n,t,e){return[vn.w(n,t,e)]},[l.q,vn.q,vn.r]),l.xb(1073873408,vn.o,vn.o,[vn.j,vn.b,vn.g,vn.p]),l.xb(512,Gn,Gn,[Kn.a,_n.a,qn]),l.xb(1024,Kn.i,function(n){return[Kn.e(n)]},[Gn]),l.xb(1073742336,Kn.g,Kn.g,[Kn.f,Kn.i,[2,vn.p],[2,vn.o]]),l.xb(1073742336,r,r,[]),l.xb(1024,Cn.l,function(){return[[{path:":carId",component:On,canDeactivate:[xn]}]]},[])])})}}]);