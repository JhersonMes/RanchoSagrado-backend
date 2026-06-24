import{a as Xi}from"./chunk-HC2E5DD2.js";import{a as Pi,b as Li,c as Oi,d as Hi,e as zi,f as Ni,g as Vi,h as Ui,i as ji,j as qi,k as Gi,l as Qi,m as Ki,n as E,o as $i,p as M,q as Wi,r as Zi}from"./chunk-EW55H4UC.js";import{a as Ei,b as Mi}from"./chunk-4J73KOPJ.js";import"./chunk-VUUVJ5KV.js";import{c as Bi}from"./chunk-K5VEXSVO.js";import{b as Ti}from"./chunk-H6JM3NKZ.js";import{A as wi,C as xi,E as ki,F as N,H as Ii,J as Si,fa as Di,ga as Ri,h as fi,q as bi}from"./chunk-PBL34SBY.js";import"./chunk-PEMZFTBG.js";import{a as z,b as yi,e as Ci,f as Ai,g as Fi}from"./chunk-6K3V3K4X.js";import{$ as B,$a as C,$b as gi,Aa as J,Ab as ui,Ba as u,Bb as H,Db as _i,Fb as k,Gb as vi,Ha as A,I as U,Ia as I,Ja as S,L as T,Na as f,Oa as c,P as j,Pa as o,Q as g,Qa as y,S as s,U as q,Ua as _,V as G,Va as v,Xa as Y,Y as Q,Ya as ii,Z as K,Za as b,aa as $,ab as ti,bb as F,cb as ei,da as W,db as ni,ea as P,eb as p,f as R,fb as m,ga as Z,ha as L,hb as ai,ib as oi,jb as ci,lb as w,mb as ri,nb as r,oa as h,ob as di,pb as x,qb as si,rb as li,sb as hi,tb as pi,u as V,xa as D,xb as mi,ya as X,za as O}from"./chunk-YYTW3EXQ.js";var st=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],lt=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function ht(t,a){t&1&&(c(0,"span",3),F(1,1),o())}function pt(t,a){t&1&&(c(0,"span",6),F(1,2),o())}var mt=new g("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ji=new g("MatChipAvatar"),Yi=new g("MatChipTrailingIcon"),it=new g("MatChipEdit"),tt=new g("MatChipRemove"),nt=new g("MatChip"),at=(()=>{class t{_elementRef=s(L);_parentChip=s(nt);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(i){this._disabled=i}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(z).load(N),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,e){n&2&&(A("disabled",e._getDisabledAttribute())("aria-disabled",e.disabled),w("mdc-evolution-chip__action--primary",e._isPrimary)("mdc-evolution-chip__action--secondary",!e._isPrimary)("mdc-evolution-chip__action--trailing",!e._isPrimary&&!e._isLeading))},inputs:{disabled:[2,"disabled","disabled",k],tabIndex:[2,"tabIndex","tabIndex",i=>i==null?-1:vi(i)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),ut=(()=>{class t extends at{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(i){!this.disabled&&this._isPrimary&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(i){(i.keyCode===13||i.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let i;return function(e){return(i||(i=Z(t)))(e||t)}})();static \u0275dir=O({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,e){n&1&&b("click",function(d){return e._handleClick(d)})("keydown",function(d){return e._handleKeydown(d)}),n&2&&(A("tabindex",e._getTabindex()),w("mdc-evolution-chip__action--presentational",!1))},features:[J]})}return t})();var ot=(()=>{class t{_changeDetectorRef=s(_i);_elementRef=s(L);_tagName=s(ui);_ngZone=s($);_focusMonitor=s(fi);_globalRippleOptions=s(xi,{optional:!0});_document=s(K);_onFocus=new R;_onBlur=new R;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=wi();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(bi).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(i){this._value=i}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(i){this._disabled=i}_disabled=!1;removed=new B;destroyed=new B;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(ki);_injector=s(Q);constructor(){let i=s(z);i.load(N),i.load(yi),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=V(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(i){(i.keyCode===8&&!i.repeat||i.keyCode===46)&&(i.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(i){return this._getActions().find(n=>{let e=n._elementRef.nativeElement;return e===i||e.contains(i)})}_getActions(){let i=[];return this.editIcon&&i.push(this.editIcon),this.primaryAction&&i.push(this.primaryAction),this.removeIcon&&i.push(this.removeIcon),i}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(i){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{let n=i!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,e,l){if(n&1&&ei(l,Ji,5)(l,it,5)(l,Yi,5)(l,tt,5)(l,Ji,5)(l,Yi,5)(l,it,5)(l,tt,5),n&2){let d;p(d=m())&&(e.leadingIcon=d.first),p(d=m())&&(e.editIcon=d.first),p(d=m())&&(e.trailingIcon=d.first),p(d=m())&&(e.removeIcon=d.first),p(d=m())&&(e._allLeadingIcons=d),p(d=m())&&(e._allTrailingIcons=d),p(d=m())&&(e._allEditIcons=d),p(d=m())&&(e._allRemoveIcons=d)}},viewQuery:function(n,e){if(n&1&&ni(ut,5),n&2){let l;p(l=m())&&(e.primaryAction=l.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,e){n&1&&b("keydown",function(d){return e._handleKeydown(d)}),n&2&&(ii("id",e.id),A("role",e.role)("aria-label",e.ariaLabel),ri("mat-"+(e.color||"primary")),w("mdc-evolution-chip",!e._isBasicChip)("mdc-evolution-chip--disabled",e.disabled)("mdc-evolution-chip--with-trailing-action",e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",e.leadingIcon)("mdc-evolution-chip--with-primary-icon",e.leadingIcon)("mdc-evolution-chip--with-avatar",e.leadingIcon)("mat-mdc-chip-with-avatar",e.leadingIcon)("mat-mdc-chip-highlighted",e.highlighted)("mat-mdc-chip-disabled",e.disabled)("mat-mdc-basic-chip",e._isBasicChip)("mat-mdc-standard-chip",!e._isBasicChip)("mat-mdc-chip-with-trailing-icon",e._hasTrailingIcon())("_mat-animation-noopable",e._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",k],highlighted:[2,"highlighted","highlighted",k],disableRipple:[2,"disableRipple","disableRipple",k],disabled:[2,"disabled","disabled",k]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[li([{provide:nt,useExisting:t}])],ngContentSelectors:lt,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,e){n&1&&(ti(st),y(0,"span",0),c(1,"span",1)(2,"span",2),I(3,ht,2,0,"span",3),c(4,"span",4),F(5),y(6,"span",5),o()()(),I(7,pt,2,0,"span",6)),n&2&&(h(3),S(e.leadingIcon?3:-1),h(4),S(e._hasTrailingIcon()?7:-1))},dependencies:[at],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=j({providers:[Ri,{provide:mt,useValue:{separatorKeyCodes:[13]}}],imports:[Ii,Ci]})}return t})();var vt=()=>[5,10,25,100],gt=t=>["/pages/user/edit",t];function ft(t,a){t&1&&(c(0,"th",26),r(1," ID "),o())}function yt(t,a){if(t&1&&(c(0,"td",27),r(1),o()),t&2){let i=a.$implicit;h(),x(" ",i.idUser," ")}}function bt(t,a){t&1&&(c(0,"th",26),r(1," USUARIO "),o())}function Ct(t,a){if(t&1&&(c(0,"td",27),r(1),o()),t&2){let i=a.$implicit;h(),x(" ",i.username," ")}}function wt(t,a){t&1&&(c(0,"th",26),r(1," EMAIL "),o())}function xt(t,a){if(t&1&&(c(0,"td",27),r(1),o()),t&2){let i=a.$implicit;h(),x(" ",i.email," ")}}function kt(t,a){t&1&&(c(0,"th",26),r(1," EMPLEADO "),o())}function It(t,a){if(t&1&&(c(0,"td",27),r(1),o()),t&2){let i=a.$implicit;h(),si(" ",i.employee==null?null:i.employee.name," ",i.employee==null?null:i.employee.lastName," ")}}function St(t,a){t&1&&(c(0,"th",26),r(1," ROL "),o())}function Et(t,a){if(t&1&&(c(0,"td",27)(1,"mat-chip"),r(2),o()()),t&2){let i=a.$implicit;h(2),di(i.role==null?null:i.role.name)}}function Mt(t,a){t&1&&(c(0,"th",26),r(1," ESTADO "),o())}function Dt(t,a){if(t&1&&(c(0,"td",27)(1,"span",28),r(2),o()()),t&2){let i=a.$implicit;h(),w("badge-success",i.enabled)("badge-danger",!i.enabled),h(),x(" ",i.enabled?"Activo":"Inactivo"," ")}}function At(t,a){t&1&&(c(0,"th",29),r(1," ACCIONES "),o())}function Ft(t,a){if(t&1){let i=Y();c(0,"a",32),b("click",function(){q(i);let e=C().$implicit,l=C();return G(l.delete(e.idUser))}),c(1,"mat-icon"),r(2,"delete"),o(),r(3,"Eliminar"),o()}}function Rt(t,a){if(t&1&&(c(0,"td",27)(1,"a",30)(2,"mat-icon"),r(3,"edit"),o(),r(4,"Editar"),o(),I(5,Ft,4,0,"a",31),o()),t&2){let i=a.$implicit,n=C();h(),f("routerLink",pi(2,gt,i.idUser)),h(4),S(n.loginService.isAdmin()?5:-1)}}function Tt(t,a){t&1&&y(0,"tr",33)}function Bt(t,a){t&1&&y(0,"tr",34)}function Pt(t,a){if(t&1&&(c(0,"tr",35)(1,"td",36),r(2),o()()),t&2){C();let i=ci(19);h(2),x('No hay resultados para "',i.value,'"')}}var rt=class t{userService=s(Xi);snackBar=s(Ei);loginService=s(Bi);$dataSource=W(new Ki);$paginator=H(E);$sort=H(M);$users=this.userService.$listChange;displayedColumns=["idUser","username","email","employee","role","enabled","actions"];constructor(){this.userService.findAll().subscribe(a=>this.userService.setListChange(a)),P(()=>{let a=this.$users(),i=this.$paginator(),n=this.$sort(),e=this.$dataSource();e.data=a,e.paginator=i,e.sort=n}),P(()=>{let a=this.userService.$messageChange();a&&(this.snackBar.open(a,"INFO",{duration:2e3,horizontalPosition:"right",verticalPosition:"top"}),mi(()=>this.userService.setMessageChange("")))})}applyFilter(a){this.$dataSource().filter=a.target.value.trim().toLowerCase()}delete(a){window.confirm("\xBFSeguro que deseas eliminar este usuario?")&&this.userService.delete(a).pipe(U(()=>this.userService.findAll()),T(n=>this.userService.setListChange(n)),T(()=>this.userService.setMessageChange("DELETED"))).subscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["app-user"]],viewQuery:function(i,n){i&1&&ai(n.$paginator,E,5)(n.$sort,M,5),i&2&&oi(2)},decls:48,vars:5,consts:[["input",""],[1,"page"],["routerLink","/pages/business",1,"page-back"],[1,"page-head"],[1,"page-title"],[1,"page-subtitle"],["routerLink","/pages/user/new",1,"btn-primary"],[1,"search-box"],["placeholder","Buscar por usuario, email...",3,"keyup"],[1,"table-card"],[1,"table-scroll"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","idUser"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","email"],["matColumnDef","employee"],["matColumnDef","role"],["matColumnDef","enabled"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"badge"],["mat-header-cell",""],[1,"action-link","edit",3,"routerLink"],[1,"action-link","delete"],[1,"action-link","delete",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","7",1,"mat-cell"]],template:function(i,n){i&1&&(c(0,"div",1)(1,"a",2)(2,"mat-icon"),r(3,"arrow_back"),o(),r(4," Volver a la Gesti\xF3n de Negocio "),o(),c(5,"div",3)(6,"div")(7,"h1",4),r(8,"Lista de Usuarios"),o(),c(9,"p",5),r(10,"Administra los usuarios registrados."),o()(),c(11,"button",6)(12,"mat-icon"),r(13,"add"),o(),r(14," Nuevo Usuario "),o()(),c(15,"div",7)(16,"mat-icon"),r(17,"search"),o(),c(18,"input",8,0),b("keyup",function(l){return n.applyFilter(l)}),o()(),c(20,"div",9)(21,"div",10)(22,"table",11),_(23,12),u(24,ft,2,0,"th",13)(25,yt,2,1,"td",14),v(),_(26,15),u(27,bt,2,0,"th",13)(28,Ct,2,1,"td",14),v(),_(29,16),u(30,wt,2,0,"th",13)(31,xt,2,1,"td",14),v(),_(32,17),u(33,kt,2,0,"th",13)(34,It,2,2,"td",14),v(),_(35,18),u(36,St,2,0,"th",13)(37,Et,3,1,"td",14),v(),_(38,19),u(39,Mt,2,0,"th",13)(40,Dt,3,5,"td",14),v(),_(41,20),u(42,At,2,0,"th",21)(43,Rt,6,4,"td",14),v(),u(44,Tt,1,0,"tr",22)(45,Bt,1,0,"tr",23)(46,Pt,3,1,"tr",24),o()(),y(47,"mat-paginator",25),o()()),i&2&&(h(22),f("dataSource",n.$dataSource()),h(22),f("matHeaderRowDef",n.displayedColumns),h(),f("matRowDefColumns",n.displayedColumns),h(2),f("pageSizeOptions",hi(4,vt)))},dependencies:[Qi,Pi,Oi,Vi,Hi,Li,Ui,zi,Ni,ji,qi,Gi,Di,Ti,$i,E,Zi,M,Wi,Si,Fi,Ai,gi,Mi,ct,ot],styles:[".cancel-button[_ngcontent-%COMP%]{margin-left:8px;background-color:#f44336;color:#fff}.status-active[_ngcontent-%COMP%]{color:#4caf50}.status-inactive[_ngcontent-%COMP%]{color:#f44336}"]})};export{rt as UserComponent};
