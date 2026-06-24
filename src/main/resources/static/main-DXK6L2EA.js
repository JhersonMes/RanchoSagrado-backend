import{a as yn}from"./chunk-O5K7MPJ3.js";import{a as vn}from"./chunk-PLDDJK5Y.js";import{a as bn}from"./chunk-7R275KTG.js";import{a as Ve}from"./chunk-4G3Z57QW.js";import{a as Se,b as _n}from"./chunk-4J73KOPJ.js";import{h as on,k as sn,o as ln,p as mn,q as cn,s as dn,t as pn,v as Mn,w as xn,x as Cn}from"./chunk-VUUVJ5KV.js";import{c as F}from"./chunk-K5VEXSVO.js";import{a as ze,b as He}from"./chunk-H6JM3NKZ.js";import{$ as Ae,A as ct,D as gn,F as fn,G as xe,H as hn,I as Ce,J as we,L as ke,N as x,P as Ee,Q as Pe,R as Ie,T as E,U as Re,W as De,X as Te,Z as Oe,_ as Fe,a as Zt,aa as Ne,b as Jt,ba as Le,ea as Be,fa as je,h as mt,n as tn,p as nn,q as rn,z as un}from"./chunk-PBL34SBY.js";import"./chunk-PEMZFTBG.js";import{a as en,d as an,e as q,f as T,g as O}from"./chunk-6K3V3K4X.js";import{$ as pe,$a as _,$b as Y,Aa as Tt,Ba as Ot,Ca as Ft,D as vt,Db as ve,Fb as W,Gb as ye,H as me,Ha as C,I as st,Ia as u,J as yt,Ja as g,L as Mt,La as ee,Lb as Gt,Ma as te,Na as f,O as ce,Oa as r,Ob as Wt,P as B,Pa as a,Q as w,Qa as p,Qb as Yt,Ra as ne,Rb as Xt,S as c,Sa as ue,Sb as lt,U as $,Ua as H,Ub as qt,V as Z,Va as V,Vb as Ut,W as J,Wa as ge,X as xt,Xa as At,Xb as Qt,Y as de,Ya as Nt,Z as Ct,Za as M,Zb as Me,_a as Lt,_b as D,a as at,aa as wt,ab as G,ac as Kt,b as ft,bb as S,bc as $t,c as re,ca as St,cb as Bt,cc as X,da as b,db as fe,eb as N,f as ae,fb as L,ha as j,ia as kt,jb as he,k as ht,kb as _e,lb as k,m as ot,mb as be,nb as s,oa as m,ob as v,p as oe,pa as Et,qa as Pt,qb as jt,rb as zt,sa as It,u as se,ua as Rt,v as le,va as Dt,wb as Ht,x as _t,xa as h,ya as z,yb as Vt,z as bt,za as A}from"./chunk-YYTW3EXQ.js";var wn={HOST:"http://localhost:8080",RETRY:2,TOKEN_NAME:"access_token"};var Ge=class n{intercept(o,e){let t=sessionStorage.getItem(wn.TOKEN_NAME);return t&&(o=o.clone({setHeaders:{Authorization:`Bearer ${t}`}})),e.handle(o)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ce({token:n,factory:n.\u0275fac,providedIn:"root"})};var We=class n{snackBar=c(Se);router=c(D);intercept(o,e){return e.handle(o).pipe(vt(X.RETRY)).pipe(Mt(t=>{if(t instanceof Xt&&t.body&&t.body.error===!0&&t.body.errorMessage)throw new Error(t.body.errorMessage)})).pipe(_t(t=>{console.error("HTTP Error caught in interceptor:",t);let i=t.error?.message||t.error?.detail||t.message||"Error desconocido";return t.status===400?this.snackBar.open(i,"ERROR 400",{duration:5e3}):t.status===404?this.snackBar.open("No existe el recurso","ERROR 404",{duration:5e3}):t.status===401?(this.snackBar.open("No autorizado","ERROR 401",{duration:5e3}),this.router.navigate(["/login"])):t.status===500?this.snackBar.open(i,"ERROR 500",{duration:5e3}):this.snackBar.open(i,"ERROR",{duration:5e3}),ht}))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ce({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ln=["*"];var Bn=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],jn=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],zn=new w("MAT_CARD_CONFIG"),Ye=(()=>{class n{appearance;constructor(){let e=c(zn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,i){t&2&&k("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ln,decls:1,vars:0,template:function(t,i){t&1&&(G(),S(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Xe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var En=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:jn,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,i){t&1&&(G(Bn),S(0),ne(1,"div",0),S(2,1),ue(),S(3,2))},encapsulation:2,changeDetection:0})}return n})();var qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=B({imports:[q]})}return n})();var Hn=["determinateSpinner"];function Vn(n,o){if(n&1&&(J(),r(0,"svg",11),p(1,"circle",12),a()),n&2){let e=_();C("viewBox",e._viewBox()),m(),_e("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),C("r",e._circleRadius())}}var Gn=new w("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:In})}),In=100,Wn=10,Ue=(()=>{class n{_elementRef=c(j);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(Gn),t=un(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=In;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Wn)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&fe(Hn,5),t&2){let l;N(l=L())&&(i._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(C("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),be("mat-"+i.color),_e("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),k("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ye],diameter:[2,"diameter","diameter",ye],strokeWidth:[2,"strokeWidth","strokeWidth",ye]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(Ot(0,Vn,2,8,"ng-template",null,0,Ht),r(2,"div",2,1),J(),r(4,"svg",3),p(5,"circle",4),a()(),xt(),r(6,"div",5)(7,"div",6)(8,"div",7),ge(9,8),a(),r(10,"div",9),ge(11,8),a(),r(12,"div",10),ge(13,8),a()()()),t&2){let l=he(1);m(4),C("viewBox",i._viewBox()),m(),_e("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),C("r",i._circleRadius()),m(4),f("ngTemplateOutlet",l),m(2),f("ngTemplateOutlet",l),m(2),f("ngTemplateOutlet",l)}},dependencies:[Gt],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=B({imports:[q]})}return n})();function Qn(n,o){n&1&&(r(0,"mat-error"),s(1,"El usuario o correo es obligatorio"),a())}function Kn(n,o){n&1&&(r(0,"mat-error"),s(1,"La contrase\xF1a es obligatoria"),a())}function $n(n,o){n&1&&(r(0,"mat-error"),s(1,"M\xEDnimo 3 caracteres"),a())}function Zn(n,o){if(n&1&&(r(0,"div",17)(1,"mat-icon"),s(2,"error_outline"),a(),r(3,"span"),s(4),a()()),n&2){let e=_();m(4),v(e.loginError())}}function Jn(n,o){n&1&&(H(0),p(1,"mat-spinner",22),r(2,"span"),s(3,"Ingresando..."),a(),V())}function ei(n,o){n&1&&(H(0),r(1,"mat-icon"),s(2,"login"),a(),r(3,"span"),s(4,"Iniciar sesi\xF3n"),a(),V())}var Ke=class n{loginService=c(F);router=c(D);loginForm=new Ie({username:new E("",[x.required]),password:new E("",[x.required,x.minLength(3)])});isFormValid=Ve(this.loginForm.statusChanges.pipe(oe(o=>o==="VALID")),{initialValue:this.loginForm.valid});isLoggingIn=b(!1);loginError=b(null);showPassword=!1;togglePassword(){this.showPassword=!this.showPassword}login(){if(!this.loginForm.valid){this.loginForm.markAllAsTouched();return}this.isLoggingIn.set(!0),this.loginError.set(null);let{username:o,password:e}=this.loginForm.value;this.loginService.login(o,e).subscribe({next:t=>{let i=t.access_token||t.accessToken;i?(sessionStorage.setItem(X.TOKEN_NAME,i),this.router.navigate(["/pages/business"])):(this.isLoggingIn.set(!1),this.loginError.set("Error en la respuesta del servidor. No se recibi\xF3 el token."),console.error("No token found in login response:",t))},error:t=>{this.isLoggingIn.set(!1),t.status===401?this.loginError.set("Credenciales incorrectas. Intenta de nuevo."):this.loginError.set("Ocurri\xF3 un error. Por favor intenta m\xE1s tarde.")},complete:()=>{this.isLoggingIn.set(!1)}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-login"]],decls:48,vars:9,consts:[[1,"login-page"],[1,"login-bg-overlay"],["appearance","outlined",1,"login-card"],[1,"card-header"],[1,"logo-circle"],["src","/images/logo.png","alt","Rancho Sagrado",1,"logo-img"],[1,"brand-title"],[1,"brand-subtitle"],[1,"welcome-text"],["novalidate","",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matPrefix",""],["matInput","","type","text","formControlName","username","placeholder","Introduce tu usuario o correo"],["matInput","","formControlName","password","autocomplete","current-password",3,"type"],["mat-icon-button","","matSuffix","","type","button","aria-label","Toggle password visibility",3,"click"],[1,"form-footer-row"],["routerLink","/forgot",1,"forgot-link"],["role","alert",1,"error-banner"],["mat-flat-button","","type","submit",1,"btn-submit",3,"disabled"],[1,"form-footer-row",2,"justify-content","center","margin-top","1rem"],["routerLink","/register",1,"forgot-link"],[1,"card-footer"],["diameter","20","color","accent"]],template:function(e,t){if(e&1&&(r(0,"div",0),p(1,"div",1),r(2,"mat-card",2)(3,"div",3)(4,"div",4),p(5,"img",5),a(),r(6,"h1",6),s(7,"El Rancho Sagrado"),a(),r(8,"p",7),s(9,"RANCHOONLINE \u2014 SISTEMA DE GESTI\xD3N"),a()(),r(10,"mat-card-content")(11,"div",8)(12,"h2"),s(13,"Bienvenido de vuelta"),a(),r(14,"p"),s(15,"Ingresa tus credenciales para acceder al sistema"),a()(),r(16,"form",9),M("ngSubmit",function(){return t.login()}),r(17,"mat-form-field",10)(18,"mat-label"),s(19,"Usuario o Correo electr\xF3nico"),a(),r(20,"mat-icon",11),s(21,"person_outline"),a(),p(22,"input",12),u(23,Qn,2,0,"mat-error"),a(),r(24,"mat-form-field",10)(25,"mat-label"),s(26,"Contrase\xF1a"),a(),r(27,"mat-icon",11),s(28,"lock_outline"),a(),p(29,"input",13),r(30,"button",14),M("click",function(){return t.togglePassword()}),r(31,"mat-icon"),s(32),a()(),u(33,Kn,2,0,"mat-error"),u(34,$n,2,0,"mat-error"),a(),r(35,"div",15)(36,"a",16),s(37,"\xBFOlvidaste tu contrase\xF1a?"),a()(),u(38,Zn,5,1,"div",17),r(39,"button",18),u(40,Jn,4,0,"ng-container")(41,ei,5,0,"ng-container"),a(),r(42,"div",19)(43,"a",20),s(44,"\xBFNo tienes cuenta? Reg\xEDstrate"),a()()()(),r(45,"div",21)(46,"span"),s(47,"El Rancho Sagrado \xB7 Cajamarca, Per\xFA"),a()()()()),e&2){let i,l,d;m(16),f("formGroup",t.loginForm),m(7),g((i=t.loginForm.get("username"))!=null&&i.touched&&((i=t.loginForm.get("username"))!=null&&i.hasError("required"))?23:-1),m(6),f("type",t.showPassword?"text":"password"),m(3),v(t.showPassword?"visibility_off":"visibility"),m(),g((l=t.loginForm.get("password"))!=null&&l.touched&&((l=t.loginForm.get("password"))!=null&&l.hasError("required"))?33:-1),m(),g((d=t.loginForm.get("password"))!=null&&d.touched&&((d=t.loginForm.get("password"))!=null&&d.hasError("minlength"))?34:-1),m(4),g(t.loginError()?38:-1),m(),f("disabled",!t.isFormValid()||t.isLoggingIn()),m(),g(t.isLoggingIn()?40:41)}},dependencies:[Oe,Re,ke,Ee,Pe,Te,De,qe,Ye,Xe,je,Be,Fe,Ae,Ne,Le,He,ze,we,Ce,xe,O,T,Qe,Ue,Y],styles:[".login-page[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;background-color:#3b1714;background-image:radial-gradient(ellipse 80% 60% at 15% 10%,rgba(255,194,44,.18) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 85% 90%,rgba(155,36,38,.3) 0%,transparent 60%);position:relative;overflow:hidden}.login-card[_ngcontent-%COMP%]{width:100%;max-width:440px;border-radius:16px!important;overflow:hidden;border:none!important;box-shadow:0 24px 60px #00000080!important;background:#fdf8f3!important}.card-header[_ngcontent-%COMP%]{background:#722d2a;padding:2rem 2rem 1.75rem;text-align:center;border-bottom:3px solid #ffc22c}.logo-circle[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%;background:#ffc22c;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;overflow:hidden}.logo-img[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain}.brand-title[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:22px;font-weight:700;color:#fff8e7;margin:0 0 6px;letter-spacing:.3px}.brand-subtitle[_ngcontent-%COMP%]{font-size:10px;font-weight:500;color:#ffc22c;letter-spacing:2.5px;margin:0}.welcome-text[_ngcontent-%COMP%]{margin-bottom:1.5rem}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:18px;font-weight:500;color:#3b1714;margin:0 0 4px}.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#8a5a4a;margin:0}mat-card-content[_ngcontent-%COMP%]{padding:1.75rem 2rem .5rem!important}.full-width[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:.5rem}  .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing{border-color:#ffc22c!important}  .login-card .mat-mdc-form-field.mat-focused .mat-mdc-floating-label{color:#722d2a!important}  .login-card .mat-mdc-form-field .mat-icon[matPrefix]{color:#722d2a;margin-right:4px}.form-footer-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:-.25rem 0 1.25rem}.forgot-link[_ngcontent-%COMP%]{font-size:12px;color:#722d2a;text-decoration:none;transition:color .2s}.forgot-link[_ngcontent-%COMP%]:hover{color:#9b2426;text-decoration:underline}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fbe7e5;border:1px solid #e7a9a8;border-radius:8px;padding:10px 14px;margin-bottom:1rem;font-size:13px;color:#9b2426}.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.btn-submit[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:8px!important;background-color:#722d2a!important;color:#fff!important;font-size:15px;font-family:Georgia,Times New Roman,serif;font-weight:500;letter-spacing:.3px;display:flex;align-items:center;justify-content:center;gap:8px;transition:background-color .2s!important;margin-bottom:.5rem}.btn-submit[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#5a2220!important}.btn-submit[disabled][_ngcontent-%COMP%]{background-color:#d9b48a!important;cursor:not-allowed}.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.btn-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{flex-shrink:0}  .btn-submit .mat-mdc-progress-spinner circle{stroke:#fff!important}.card-footer[_ngcontent-%COMP%]{text-align:center;font-size:11px;color:#b09070;padding:.75rem 2rem 1rem;border-top:1px solid #f2ddb0;background:#fff8e7;margin-top:1.25rem}"]})};var oi=["mat-menu-item",""],si=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],li=["mat-icon, [matMenuItemIcon]","*"];function mi(n,o){n&1&&(J(),r(0,"svg",2),p(1,"polygon",3),a())}var ci=["*"];function di(n,o){if(n&1){let e=At();ne(0,"div",0),Lt("click",function(){$(e);let i=_();return Z(i.closed.emit("click"))})("animationstart",function(i){$(e);let l=_();return Z(l._onAnimationStart(i.animationName))})("animationend",function(i){$(e);let l=_();return Z(l._onAnimationDone(i.animationName))})("animationcancel",function(i){$(e);let l=_();return Z(l._onAnimationDone(i.animationName))}),ne(1,"div",1),S(2),ue()()}if(n&2){let e=_();be(e._classList),k("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Nt("id",e.panelId),C("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ut=new w("MAT_MENU_PANEL"),ie=(()=>{class n{_elementRef=c(j);_document=c(Ct);_focusMonitor=c(mt);_parentMenu=c(ut,{optional:!0});_changeDetectorRef=c(ve);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new ae;_focused=new ae;_highlighted=!1;_triggersSubmenu=!1;constructor(){c(en).load(fn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&M("click",function(d){return i._checkDisabled(d)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(C("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),k("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",W],disableRipple:[2,"disableRipple","disableRipple",W]},exportAs:["matMenuItem"],attrs:oi,ngContentSelectors:li,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(G(si),S(0),r(1,"span",0),S(2,1),a(),p(3,"div",1),u(4,mi,2,0,":svg:svg",2)),t&2&&(m(3),f("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),m(),g(i._triggersSubmenu?4:-1))},dependencies:[gn],encapsulation:2,changeDetection:0})}return n})();var pi=new w("MatMenuContent");var ui=new w("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),pt="_mat-menu-enter",Ze="_mat-menu-exit",Q=(()=>{class n{_elementRef=c(j);_changeDetectorRef=c(ve);_injector=c(de);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ct();_allItems;_directDescendantItems=new kt;_classList={};_panelAnimationState="void";_animationDone=new ae;_isAnimating=b(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,i=at({},this._classList);t&&t.length&&t.split(" ").forEach(l=>{i[l]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(l=>{i[l]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new pe;close=this.closed;panelId=c(rn).getId("mat-menu-panel-");constructor(){let e=c(ui);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new nn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(me(this._directDescendantItems),st(e=>se(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),l=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[l]&&!i[l].disabled?t.setActiveItem(l):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(me(this._directDescendantItems),st(t=>se(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:tn(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Et(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ft(at({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ze;(t||e===pt)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===pt||e===Ze)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ze),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?pt:Ze)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(me(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,l){if(t&1&&Bt(l,pi,5)(l,ie,5)(l,ie,4),t&2){let d;N(d=L())&&(i.lazyContent=d.first),N(d=L())&&(i._allItems=d),N(d=L())&&(i.items=d)}},viewQuery:function(t,i){if(t&1&&fe(Pt,5),t&2){let l;N(l=L())&&(i.templateRef=l.first)}},hostVars:3,hostBindings:function(t,i){t&2&&C("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",W],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:W(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[zt([{provide:ut,useExisting:n}])],ngContentSelectors:ci,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(G(),Ft(0,di,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),gi=new w("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(de);return()=>ln(n)}});var U=new WeakMap,fi=(()=>{class n{_canHaveBackdrop;_element=c(j);_viewContainerRef=c(Dt);_menuItemInstance=c(ie,{optional:!0,self:!0});_dir=c(an,{optional:!0});_focusMonitor=c(mt);_ngZone=c(wt);_injector=c(de);_scrollStrategy=c(gi);_changeDetectorRef=c(ve);_animationsDisabled=ct();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=re.EMPTY;_menuCloseSubscription=re.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=c(ut,{optional:!0});this._parentMaterialMenu=t instanceof Q?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=U.get(t);U.set(t,this),i&&i!==this&&i._closeMenu();let l=this._createOverlay(t),d=l.getConfig(),y=d.positionStrategy;this._setPosition(t,y),this._canHaveBackdrop?d.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:d.hasBackdrop=t.hasBackdrop??!1,l.hasAttached()||(l.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Q&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(yt(t.close)).subscribe(()=>{y.withLockedPosition(!1).reapplyLastPosition(),y.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Q&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(bt(1)).subscribe(()=>{t.detach(),U.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&U.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=dn(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Q&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new mn({positionStrategy:cn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let l=i.connectionPair.overlayX==="start"?"after":"before",d=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(l,d)})})}_setPosition(e,t){let[i,l]=e.xPosition==="before"?["end","start"]:["start","end"],[d,y]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[I,R]=[d,y],[it,rt]=[i,l],K=0;if(this._triggersSubmenu()){if(rt=i=e.xPosition==="before"?"start":"end",l=it=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let gt=this._parentMaterialMenu.items.first;this._parentInnerPadding=gt?gt._getHostElement().offsetTop:0}K=d==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(I=d==="top"?"bottom":"top",R=y==="top"?"bottom":"top");t.withPositions([{originX:i,originY:I,overlayX:it,overlayY:d,offsetY:K},{originX:l,originY:I,overlayX:rt,overlayY:d,offsetY:K},{originX:i,originY:R,overlayX:it,overlayY:y,offsetY:-K},{originX:l,originY:R,overlayX:rt,overlayY:y,offsetY:-K}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:ot(),l=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(le(d=>this._menuOpen&&d!==this._menuItemInstance)):ot();return se(e,i,l,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new sn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return W(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Rt()};static \u0275dir=A({type:n})}return n})(),On=(()=>{class n extends fi{_cleanupTouchstart;_hoverSubscription=re.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new pe;onMenuOpen=this.menuOpened;menuClosed=new pe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=c(It);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Jt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Zt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=A({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&M("click",function(d){return i._handleClick(d)})("mousedown",function(d){return i._handleMousedown(d)})("keydown",function(d){return i._handleKeydown(d)}),t&2&&C("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Tt]})}return n})();var Fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=B({imports:[hn,pn,q,on]})}return n})();var _i=(n,o)=>o.link;function bi(n,o){n&1&&(r(0,"span"),s(1,"Rancho Sagrado"),a())}function vi(n,o){if(n&1&&(r(0,"span"),s(1),a()),n&2){let e=_().$implicit;m(),v(e.label)}}function yi(n,o){if(n&1&&(r(0,"a",4)(1,"mat-icon"),s(2),a(),u(3,vi,2,1,"span"),a()),n&2){let e=o.$implicit,t=_();f("routerLink",e.link)("title",t.collapsed()?e.label:""),m(2),v(e.icon),m(),g(t.collapsed()?-1:3)}}var Je=class n{loginService=c(F);items=bn(this.loginService.getRole());collapsed=b(!1);toggle(){this.collapsed.set(!this.collapsed())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-sidebar"]],decls:10,vars:4,consts:[[1,"sidebar"],[1,"sidebar-brand"],["src","/images/logo.png","alt","Rancho Sagrado",1,"sidebar-logo"],[1,"sidebar-nav"],["routerLinkActive","active",1,"sidebar-link",3,"routerLink","title"],["type","button",1,"sidebar-toggle",3,"click"]],template:function(e,t){e&1&&(r(0,"aside",0)(1,"div",1),p(2,"img",2),u(3,bi,2,0,"span"),a(),r(4,"nav",3),ee(5,yi,4,4,"a",4,_i),a(),r(7,"button",5),M("click",function(){return t.toggle()}),r(8,"mat-icon"),s(9),a()()()),e&2&&(k("collapsed",t.collapsed()),m(3),g(t.collapsed()?-1:3),m(2),te(t.items),m(4),v(t.collapsed()?"chevron_right":"chevron_left"))},dependencies:[O,T,Y,Kt],styles:[".sidebar[_ngcontent-%COMP%]{width:252px;flex-shrink:0;display:flex;flex-direction:column;background-color:var(--brand-900);min-height:100vh;position:sticky;top:0;align-self:flex-start;transition:width .2s ease;overflow:hidden}.sidebar.collapsed[_ngcontent-%COMP%]{width:72px}.sidebar-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:22px 20px;font-weight:700;font-size:16px;color:#fff;white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.08)}.sidebar-logo[_ngcontent-%COMP%]{flex-shrink:0;width:36px;height:36px;object-fit:contain}.sidebar-nav[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:2px}.sidebar-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:var(--radius-sm);color:var(--brand-100);text-decoration:none;font-size:13.5px;font-weight:600;white-space:nowrap}.sidebar-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex-shrink:0;font-size:20px;width:20px;height:20px}.sidebar-link[_ngcontent-%COMP%]:hover{background-color:#ffffff14;color:#fff}.sidebar-link.active[_ngcontent-%COMP%]{background-color:var(--brand-gold);color:var(--brand-maroon)}.sidebar-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:44px;background:transparent;border:none;border-top:1px solid rgba(255,255,255,.08);color:var(--brand-100);cursor:pointer}.sidebar-toggle[_ngcontent-%COMP%]:hover{background-color:#ffffff14}"]})};function Mi(n,o){if(n&1&&(r(0,"span",8),s(1),a()),n&2){let e=_();m(),v(e.userRole())}}var et=class n{router=c(D);loginService=c(F);pageTitle=b("Rancho Sagrado");userName=b("Usuario");userRole=b(this.loginService.getRole()??"");userInitial=Vt(()=>this.userName().charAt(0).toUpperCase());constructor(){this.pageTitle.set(this.resolveTitle()),this.router.events.pipe(le(o=>o instanceof Qt)).subscribe(()=>this.pageTitle.set(this.resolveTitle())),this.loginService.showUserInfo().subscribe({next:o=>{let e=o?.employee;this.userName.set(e?`${e.name} ${e.lastName}`:o?.username??"Usuario"),this.userRole.set(o?.role?.name??this.loginService.getRole()??e?.job??"")},error:()=>{}})}resolveTitle(){let o=this.router.routerState.snapshot.root,e=o.data.title;for(;o.firstChild;)o=o.firstChild,o.data.title&&(e=o.data.title);return e??"Rancho Sagrado"}logout(){this.loginService.logout().subscribe({next:()=>this.finishLogout(),error:()=>this.finishLogout()})}finishLogout(){sessionStorage.removeItem(X.TOKEN_NAME),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-layout"]],decls:22,vars:5,consts:[["menu","matMenu"],[1,"app-shell"],[1,"app-main"],[1,"app-topbar"],[1,"app-topbar-title"],["type","button",1,"app-user",3,"matMenuTriggerFor"],[1,"app-user-info"],[1,"app-user-name"],[1,"app-user-role"],[1,"app-user-avatar"],["mat-menu-item","",3,"click"],[1,"app-content"]],template:function(e,t){if(e&1&&(r(0,"div",1),p(1,"app-sidebar"),r(2,"div",2)(3,"header",3)(4,"h1",4),s(5),a(),r(6,"button",5)(7,"span",6)(8,"span",7),s(9),a(),u(10,Mi,2,1,"span",8),a(),r(11,"span",9),s(12),a()(),r(13,"mat-menu",null,0)(15,"button",10),M("click",function(){return t.logout()}),r(16,"mat-icon"),s(17,"exit_to_app"),a(),r(18,"span"),s(19,"Cerrar sesi\xF3n"),a()()()(),r(20,"main",11),p(21,"router-outlet"),a()()()),e&2){let i=he(14);m(5),v(t.pageTitle()),m(),f("matMenuTriggerFor",i),m(3),v(t.userName()),m(),g(t.userRole()?10:-1),m(2),v(t.userInitial())}},dependencies:[Wt,O,T,Fn,Q,ie,On,Me,Je],styles:[".app-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;background-color:var(--color-bg)}.app-main[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}.app-topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;background-color:var(--brand-100);padding:18px 32px;border-bottom:1px solid var(--color-border)}.app-topbar-title[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:700;color:var(--color-text)}.app-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;background:transparent;border:none;padding:0;cursor:pointer;font-family:inherit}.app-user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;line-height:1.25}.app-user-name[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:var(--color-text)}.app-user-role[_ngcontent-%COMP%]{font-size:12px;color:var(--color-text-soft)}.app-user-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background-color:var(--brand-700);color:#fff;font-size:15px;font-weight:700}.app-content[_ngcontent-%COMP%]{flex:1}"]})};var xi=(n,o)=>o.idEmployee,Ci=(n,o)=>o.idRole;function wi(n,o){n&1&&(r(0,"mat-error"),s(1,"El usuario es obligatorio"),a())}function Si(n,o){n&1&&(r(0,"mat-error"),s(1,"El correo es obligatorio"),a())}function ki(n,o){n&1&&(r(0,"mat-error"),s(1,"Formato de correo inv\xE1lido"),a())}function Ei(n,o){n&1&&(r(0,"mat-error"),s(1,"La contrase\xF1a es obligatoria"),a())}function Pi(n,o){if(n&1&&(r(0,"mat-option",14),s(1),a()),n&2){let e=o.$implicit;f("value",e),m(),jt("",e.name," ",e.lastName)}}function Ii(n,o){n&1&&(r(0,"mat-error"),s(1,"Seleccionar empleado es obligatorio"),a())}function Ri(n,o){if(n&1&&(r(0,"mat-option",14),s(1),a()),n&2){let e=o.$implicit;f("value",e),m(),v(e.name)}}function Di(n,o){n&1&&(r(0,"mat-error"),s(1,"Seleccionar rol es obligatorio"),a())}function Ti(n,o){if(n&1&&(r(0,"div",16)(1,"mat-icon"),s(2,"error_outline"),a(),r(3,"span"),s(4),a()()),n&2){let e=_();m(4),v(e.registerError())}}function Oi(n,o){n&1&&(H(0),p(1,"mat-spinner",21),r(2,"span"),s(3,"Registrando..."),a(),V())}function Fi(n,o){n&1&&(H(0),r(1,"mat-icon"),s(2,"person_add"),a(),r(3,"span"),s(4,"Crear cuenta"),a(),V())}var tt=class n{loginService=c(F);router=c(D);snackBar=c(Se);employeeService=c(vn);roleService=c(yn);registerForm=new Ie({username:new E("",[x.required]),email:new E("",[x.required,x.email]),password:new E("",[x.required,x.minLength(3)]),employee:new E(null,[x.required]),role:new E(null,[x.required])});constructor(){this.employeeService.findAll().subscribe(o=>this.employeeService.setListChange(o)),this.roleService.findAll().subscribe(o=>this.roleService.setListChange(o))}compareFnEmployee(o,e){return o&&e?o.idEmployee===e.idEmployee:o===e}compareFnRole(o,e){return o&&e?o.idRole===e.idRole:o===e}isFormValid=Ve(this.registerForm.statusChanges.pipe(oe(o=>o==="VALID")),{initialValue:this.registerForm.valid});isRegistering=b(!1);registerError=b(null);showPassword=!1;togglePassword(){this.showPassword=!this.showPassword}register(){if(!this.registerForm.valid){this.registerForm.markAllAsTouched();return}this.isRegistering.set(!0),this.registerError.set(null);let{username:o,email:e,password:t,employee:i,role:l}=this.registerForm.value;this.loginService.register(o,e,t,i,l).subscribe({next:()=>{this.snackBar.open("Usuario registrado exitosamente","Cerrar",{duration:3e3}),this.router.navigate(["/login"])},error:d=>{this.isRegistering.set(!1),this.registerError.set("Ocurri\xF3 un error al registrar. Por favor intenta m\xE1s tarde."),console.error(d)},complete:()=>{this.isRegistering.set(!1)}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-register"]],decls:65,vars:14,consts:[[1,"login-container"],[1,"login-overlay"],[1,"login-card","mat-elevation-z8"],[1,"card-header"],[1,"logo-placeholder"],["src","/images/logo.png","alt","Rancho Sagrado",1,"logo-img"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","placeholder","johndoe","type","text"],["matPrefix",""],["matInput","","formControlName","email","placeholder","usuario@correo.com","type","email"],["matInput","","formControlName","password","placeholder","********",3,"type"],["mat-icon-button","","matSuffix","","type","button","aria-label","Toggle password visibility",3,"click"],["formControlName","employee",3,"compareWith"],[3,"value"],["formControlName","role",3,"compareWith"],["role","alert",1,"error-banner"],["mat-flat-button","","type","submit",1,"btn-submit",3,"disabled"],[1,"actions"],["routerLink","/login",1,"forgot-password"],[1,"card-footer"],["diameter","20","color","accent"]],template:function(e,t){if(e&1&&(r(0,"div",0),p(1,"div",1),r(2,"mat-card",2)(3,"mat-card-header",3)(4,"div",4),p(5,"img",5),a(),r(6,"mat-card-title"),s(7,"Crear Cuenta"),a(),r(8,"mat-card-subtitle"),s(9,"Reg\xEDstrate en RanchoOnline"),a()(),r(10,"mat-card-content")(11,"form",6),M("ngSubmit",function(){return t.register()}),r(12,"mat-form-field",7)(13,"mat-label"),s(14,"Nombre de usuario"),a(),p(15,"input",8),r(16,"mat-icon",9),s(17,"person"),a(),u(18,wi,2,0,"mat-error"),a(),r(19,"mat-form-field",7)(20,"mat-label"),s(21,"Correo electr\xF3nico"),a(),p(22,"input",10),r(23,"mat-icon",9),s(24,"email"),a(),u(25,Si,2,0,"mat-error"),u(26,ki,2,0,"mat-error"),a(),r(27,"mat-form-field",7)(28,"mat-label"),s(29,"Contrase\xF1a"),a(),p(30,"input",11),r(31,"mat-icon",9),s(32,"lock"),a(),r(33,"button",12),M("click",function(){return t.togglePassword()}),r(34,"mat-icon"),s(35),a()(),u(36,Ei,2,0,"mat-error"),a(),r(37,"mat-form-field",7)(38,"mat-label"),s(39,"Empleado asociado"),a(),r(40,"mat-select",13),ee(41,Pi,2,3,"mat-option",14,xi),a(),r(43,"mat-icon",9),s(44,"badge"),a(),u(45,Ii,2,0,"mat-error"),a(),r(46,"mat-form-field",7)(47,"mat-label"),s(48,"Rol del usuario"),a(),r(49,"mat-select",15),ee(50,Ri,2,2,"mat-option",14,Ci),a(),r(52,"mat-icon",9),s(53,"admin_panel_settings"),a(),u(54,Di,2,0,"mat-error"),a(),u(55,Ti,5,1,"div",16),r(56,"button",17),u(57,Oi,4,0,"ng-container")(58,Fi,5,0,"ng-container"),a(),r(59,"div",18)(60,"a",19),s(61,"\xBFYa tienes cuenta? Iniciar sesi\xF3n"),a()()()(),r(62,"div",20)(63,"span"),s(64,"El Rancho Sagrado \xB7 Cajamarca, Per\xFA"),a()()()()),e&2){let i,l,d,y,I,R;m(11),f("formGroup",t.registerForm),m(7),g((i=t.registerForm.get("username"))!=null&&i.hasError("required")&&((i=t.registerForm.get("username"))!=null&&i.touched)?18:-1),m(7),g((l=t.registerForm.get("email"))!=null&&l.hasError("required")&&((l=t.registerForm.get("email"))!=null&&l.touched)?25:-1),m(),g((d=t.registerForm.get("email"))!=null&&d.hasError("email")&&((d=t.registerForm.get("email"))!=null&&d.touched)?26:-1),m(4),f("type",t.showPassword?"text":"password"),m(5),v(t.showPassword?"visibility_off":"visibility"),m(),g((y=t.registerForm.get("password"))!=null&&y.hasError("required")&&((y=t.registerForm.get("password"))!=null&&y.touched)?36:-1),m(4),f("compareWith",t.compareFnEmployee),m(),te(t.employeeService.$listChange()),m(4),g((I=t.registerForm.get("employee"))!=null&&I.hasError("required")&&((I=t.registerForm.get("employee"))!=null&&I.touched)?45:-1),m(4),f("compareWith",t.compareFnRole),m(),te(t.roleService.$listChange()),m(4),g((R=t.registerForm.get("role"))!=null&&R.hasError("required")&&((R=t.registerForm.get("role"))!=null&&R.touched)?54:-1),m(),g(t.registerError()?55:-1),m(),f("disabled",!t.isFormValid()||t.isRegistering()),m(),g(t.isRegistering()?57:58)}},dependencies:[Oe,Re,ke,Ee,Pe,Te,De,qe,Ye,Xe,En,kn,Sn,je,Be,Fe,Ae,Ne,Le,He,ze,we,Ce,xe,O,T,Qe,Ue,Y,_n,Cn,xn,Mn],styles:[".login-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;background-color:#3b1714;background-image:radial-gradient(ellipse 80% 60% at 15% 10%,rgba(255,194,44,.18) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 85% 90%,rgba(155,36,38,.3) 0%,transparent 60%);position:relative;overflow:hidden}.login-card[_ngcontent-%COMP%]{width:100%;max-width:440px;border-radius:16px!important;overflow:hidden;border:none!important;box-shadow:0 24px 60px #00000080!important;background:#fdf8f3!important}.card-header[_ngcontent-%COMP%]{background:#722d2a;padding:2rem 2rem 1.75rem;text-align:center;border-bottom:3px solid #ffc22c;display:flex;flex-direction:column;align-items:center}.logo-placeholder[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%;background:#ffc22c;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;overflow:hidden}.logo-img[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain}.card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-size:22px;font-weight:700;color:#fff8e7;margin:0 0 6px;letter-spacing:.3px}.card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:10px;font-weight:500;color:#ffc22c;letter-spacing:2.5px;margin:0}mat-card-content[_ngcontent-%COMP%]{padding:1.75rem 2rem .5rem!important}.full-width[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:.5rem}  .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .login-card .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing{border-color:#ffc22c!important}  .login-card .mat-mdc-form-field.mat-focused .mat-mdc-floating-label{color:#722d2a!important}  .login-card .mat-mdc-form-field .mat-icon[matPrefix]{color:#722d2a;margin-right:4px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:1rem 0}.forgot-password[_ngcontent-%COMP%]{font-size:12px;color:#722d2a;text-decoration:none;transition:color .2s}.forgot-password[_ngcontent-%COMP%]:hover{color:#9b2426;text-decoration:underline}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:#fbe7e5;border:1px solid #e7a9a8;border-radius:8px;padding:10px 14px;margin-bottom:1rem;font-size:13px;color:#9b2426}.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.btn-submit[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:8px!important;background-color:#722d2a!important;color:#fff!important;font-size:15px;font-family:Georgia,Times New Roman,serif;font-weight:500;letter-spacing:.3px;display:flex;align-items:center;justify-content:center;gap:8px;transition:background-color .2s!important;margin-bottom:.5rem}.btn-submit[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#5a2220!important}.btn-submit[disabled][_ngcontent-%COMP%]{background-color:#d9b48a!important;cursor:not-allowed}.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.btn-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{flex-shrink:0}  .btn-submit .mat-mdc-progress-spinner circle{stroke:#fff!important}.card-footer[_ngcontent-%COMP%]{text-align:center;font-size:11px;color:#b09070;padding:.75rem 2rem 1rem;border-top:1px solid #f2ddb0;background:#fff8e7;margin-top:1.25rem}"]})};var An=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:Ke},{path:"register",component:tt},{path:"pages",component:et,loadChildren:()=>import("./chunk-NI4UONVE.js").then(n=>n.pagesRoutes)}];var Nn={providers:[St(),$t(An),qt(Ut()),{provide:lt,useClass:Ge,multi:!0},{provide:lt,useClass:We,multi:!0}]};var nt=class n{title=b("RanchoSagrado_Frontend");static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&p(0,"router-outlet")},dependencies:[Me],encapsulation:2})};Yt(nt,Nn).catch(n=>console.error(n));
