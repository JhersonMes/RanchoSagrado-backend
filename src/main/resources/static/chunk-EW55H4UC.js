import{a as Rt,b as Me,c as St,d as kt,e as xt,f as Tt,g as Mt,h as It,i as Et,j as Ot,o as Pt,q as Ft,s as At,t as zt,u as jt,v as Vt,w as Ut,x as $t}from"./chunk-VUUVJ5KV.js";import{A as _e,B as He,F as Nt,G as Lt,J as Bt,d as Se,e as Be,ea as Ht,f as yt,h as ke,j as vt,m as bt,n as Ct,q as Dt,t as xe}from"./chunk-PBL34SBY.js";import{a as wt,d as Te,e as le}from"./chunk-6K3V3K4X.js";import{$ as oe,$a as P,Aa as y,Db as W,Eb as re,Fb as _,Ga as dt,Gb as pe,Ha as U,Ia as S,J as C,Ja as k,Ka as ct,La as ht,Ma as mt,Na as $,O as ze,Oa as u,P as L,Pa as p,Q as B,Qa as fe,Ra as Z,S as r,Sa as J,Ta as ut,U as he,V as me,W as K,Wa as x,X as nt,Xa as De,Y as ue,Z as Ce,Za as O,_a as ft,a as de,aa as at,ab as ae,bb as F,cb as Ne,da as st,db as Le,eb as A,f as b,fa as ne,fb as z,g as te,ga as E,h as ve,ha as D,i as et,j as tt,jb as pt,lb as j,m as ie,mb as _t,nb as G,o as it,oa as m,ob as Re,p as be,pa as Q,pb as se,q as Y,qa as V,rb as M,sa as rt,ta as lt,u as ce,va as X,w as ot,xa as R,ya as H,za as c,zb as gt}from"./chunk-YYTW3EXQ.js";var si=[[["caption"]],[["colgroup"],["col"]],"*"],ri=["caption","colgroup, col","*"];function li(o,s){o&1&&F(0,2)}function di(o,s){o&1&&(u(0,"thead",0),x(1,1),p(),u(2,"tbody",0),x(3,2)(4,3),p(),u(5,"tfoot",0),x(6,4),p())}function ci(o,s){o&1&&x(0,1)(1,2)(2,3)(3,4)}var N=new B("CDK_TABLE");var Oe=(()=>{class o{template=r(V);constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkCellDef",""]]})}return o})(),Pe=(()=>{class o{template=r(V);constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkHeaderCellDef",""]]})}return o})(),Qt=(()=>{class o{template=r(V);constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkFooterCellDef",""]]})}return o})(),q=(()=>{class o{_table=r(N,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,n){if(t&1&&Ne(n,Oe,5)(n,Pe,5)(n,Qt,5),t&2){let a;A(a=z())&&(i.cell=a.first),A(a=z())&&(i.headerCell=a.first),A(a=z())&&(i.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",_],stickyEnd:[2,"stickyEnd","stickyEnd",_]}})}return o})(),Ee=class{constructor(s,e){e.nativeElement.classList.add(...s._columnCssClassName)}},Xt=(()=>{class o extends Ee{constructor(){super(r(q),r(D))}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[y]})}return o})();var Wt=(()=>{class o extends Ee{constructor(){let e=r(q),t=r(D);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[y]})}return o})();var Ve=(()=>{class o{template=r(V);_differs=r(re);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof we?e.headerCell.template:this instanceof Ue?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,features:[ne]})}return o})(),we=(()=>{class o extends Ve{_table=r(N,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(r(V),r(re))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",_]},features:[y,ne]})}return o})(),Ue=(()=>{class o extends Ve{_table=r(N,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(r(V),r(re))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",_]},features:[y,ne]})}return o})(),Fe=(()=>{class o extends Ve{_table=r(N,{optional:!0});when;constructor(){super(r(V),r(re))}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[y]})}return o})(),ee=(()=>{class o{_viewContainer=r(X);cells;context;static mostRecentCellOutlet=null;constructor(){o.mostRecentCellOutlet=this}ngOnDestroy(){o.mostRecentCellOutlet===this&&(o.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","cdkCellOutlet",""]]})}return o})(),$e=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&x(0,0)},dependencies:[ee],encapsulation:2})}return o})();var Ge=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&x(0,0)},dependencies:[ee],encapsulation:2})}return o})(),Ae=(()=>{class o{templateRef=r(V);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["ng-template","cdkNoDataRow",""]]})}return o})(),Gt=["top","bottom","left","right"],je=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(s=>this._updateCachedSizes(s)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(s,e,t=!0,i=!0,n,a,l){this._isNativeHtmlTable=s,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=n,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(s,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(s);let t=[];for(let i of s)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));Q({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(s,e,t,i=!0,n=!0){if(!s.length||!this._isBrowser||!(e.some(I=>I)||t.some(I=>I))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=s[0],l=a.children.length,d=this.direction==="rtl",h=d?"right":"left",f=d?"left":"right",g=e.lastIndexOf(!0),w=t.indexOf(!0),v,Ke,Ze;n&&this._updateStickyColumnReplayQueue({rows:[...s],stickyStartStates:[...e],stickyEndStates:[...t]}),Q({earlyRead:()=>{v=this._getCellWidths(a,i),Ke=this._getStickyStartColumnPositions(v,e),Ze=this._getStickyEndColumnPositions(v,t)},write:()=>{for(let I of s)for(let T=0;T<l;T++){let Je=I.children[T];e[T]&&this._addStickyStyle(Je,h,Ke[T],T===g),t[T]&&this._addStickyStyle(Je,f,Ze[T],T===w)}this._positionListener&&v.some(I=>!!I)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:v.slice(0,g+1).map((I,T)=>e[T]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:v.slice(w).map((I,T)=>t[T+w]?I:null).reverse()}))}},{injector:this._tableInjector})}stickRows(s,e,t){if(!this._isBrowser)return;let i=t==="bottom"?s.slice().reverse():s,n=t==="bottom"?e.slice().reverse():e,a=[],l=[],d=[];Q({earlyRead:()=>{for(let h=0,f=0;h<i.length;h++){if(!n[h])continue;a[h]=f;let g=i[h];d[h]=this._isNativeHtmlTable?Array.from(g.children):[g];let w=this._retrieveElementSize(g).height;f+=w,l[h]=w}},write:()=>{let h=n.lastIndexOf(!0);for(let f=0;f<i.length;f++){if(!n[f])continue;let g=a[f],w=f===h;for(let v of d[f])this._addStickyStyle(v,t,g,w)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(s,e){this._isNativeHtmlTable&&Q({write:()=>{let t=s.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(s,e){if(!s.classList.contains(this._stickCellCss))return;for(let i of e)s.style[i]="",s.classList.remove(this._borderCellCss[i]);Gt.some(i=>e.indexOf(i)===-1&&s.style[i])?s.style.zIndex=this._getCalculatedZIndex(s):(s.style.zIndex="",this._needsPositionStickyOnElement&&(s.style.position=""),s.classList.remove(this._stickCellCss))}_addStickyStyle(s,e,t,i){s.classList.add(this._stickCellCss),i&&s.classList.add(this._borderCellCss[e]),s.style[e]=`${t}px`,s.style.zIndex=this._getCalculatedZIndex(s),this._needsPositionStickyOnElement&&(s.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(s){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Gt)s.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(s,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=s.children;for(let n=0;n<i.length;n++){let a=i[n];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(s,e){let t=[],i=0;for(let n=0;n<s.length;n++)e[n]&&(t[n]=i,i+=s[n]);return t}_getStickyEndColumnPositions(s,e){let t=[],i=0;for(let n=s.length;n>0;n--)e[n]&&(t[n]=i,i+=s[n]);return t}_retrieveElementSize(s){let e=this._elemSizeCache.get(s);if(e)return e;let t=s.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(s,i),this._resizeObserver.observe(s,{box:"border-box"})),i}_updateStickyColumnReplayQueue(s){this._removeFromStickyColumnReplayQueue(s.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(s)}_removeFromStickyColumnReplayQueue(s){let e=new Set(s);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(s){let e=!1;for(let t of s){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&hi(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function hi(o){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(s=>o.classList.contains(s))}var ge=new B("STICKY_POSITIONING_LISTENER");var Ye=(()=>{class o{viewContainer=r(X);elementRef=r(D);constructor(){let e=r(N);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","rowOutlet",""]]})}return o})(),Qe=(()=>{class o{viewContainer=r(X);elementRef=r(D);constructor(){let e=r(N);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","headerRowOutlet",""]]})}return o})(),Xe=(()=>{class o{viewContainer=r(X);elementRef=r(D);constructor(){let e=r(N);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","footerRowOutlet",""]]})}return o})(),We=(()=>{class o{viewContainer=r(X);elementRef=r(D);constructor(){let e=r(N);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","noDataRowOutlet",""]]})}return o})(),qe=(()=>{class o{_differs=r(re);_changeDetectorRef=r(W);_elementRef=r(D);_dir=r(Te,{optional:!0});_platform=r(Se);_viewRepeater;_viewportRuler=r(Tt);_injector=r(ue);_virtualScrollViewport=r(Mt,{optional:!0,host:!0});_positionListener=r(ge,{optional:!0})||r(ge,{optional:!0,skipSelf:!0});_document=r(Ce);_data;_renderedRange;_onDestroy=new b;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new b;_footerRowStickyUpdates=new b;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new b;_dataStream=new b;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new oe;viewChange=new te({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){r(new gt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(C(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new kt:new jt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Me(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,n,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{i.operation===St.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let n=t.get(i.currentIndex);n.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Yt(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Yt(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((n,a)=>{this._addStickyColumnStyles([n],this._headerRowDefs[a])}),this._rowDefs.forEach(n=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===n&&a.push(t[l]);this._addStickyColumnStyles(a,n)}),i.forEach((n,a)=>{this._addStickyColumnStyles([n],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(n=>n.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let n=this._renderedRange.start;n<t;n++){let a=this._data[n],l=this._getRenderRowsForData(a,n,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let d=0;d<l.length;d++){let h=l[d],f=this._cachedRenderRowsMap.get(h.data);f.has(h.rowDef)?f.get(h.rowDef).push(h):f.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(a=>{let l=i&&i.has(a)?i.get(a):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ie(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ie(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ie(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ie(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let d=!!l.getColumnsDiff();return a||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let n=this._footerRowDefs.reduce(e,!1);return n&&this._forceRenderFooterRows(),t||i||n}_switchDataSource(e){this._data=[],Me(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Me(this.dataSource)?e=this.dataSource.connect(this):it(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ie(this.dataSource)),this._renderChangeSubscription=Y([e,this.viewChange]).pipe(C(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);return d}),n=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,n,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let n=e.viewContainer.get(i);t.push(n.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(n=>!n.when||n.when(t,e));else{let n=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;n&&i.push(n)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,n={$implicit:e.data};return{templateRef:i.template,context:n,index:t}}_renderRow(e,t,i,n={}){let a=e.viewContainer.createEmbeddedView(t.template,n,i);return this._renderCellTemplateForItem(t,n),a}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))ee.mostRecentCellOutlet&&ee.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let a=e.get(t).context;a.count=i,a.first=t===0,a.last=t===i-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new je(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:ie()).pipe(C(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?tt:et;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ot(0,t),C(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,n)=>this._measureRangeSize(i,n)}),Y([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(C(this._onDestroy)).subscribe(([i,n])=>{if(!(!n.sizes||!n.offsets||!n.elements))for(let a=0;a<n.elements.length;a++){let l=n.elements[a];if(l){let d=n.offsets[a],h=i!==0?Math.max(i-d,d):-d;for(let f of l)f.style.top=`${-h}px`}}}),Y([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(C(this._onDestroy)).subscribe(([i,n])=>{if(!(!n.sizes||!n.offsets||!n.elements))for(let a=0;a<n.elements.length;a++){let l=n.elements[a];if(l)for(let d of l)d.style.bottom=`${i+n.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let n=i.createEmbeddedView(e.templateRef),a=n.rootNodes[0];if(n.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,n=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let a=e.start-i.start,l=e.end-e.start,d,h;for(let w=0;w<l;w++){let v=n.get(w+a);if(v&&v.rootNodes.length){d=h=v.rootNodes[0];break}}for(let w=l-1;w>-1;w--){let v=n.get(w+a);if(v&&v.rootNodes.length){h=v.rootNodes[v.rootNodes.length-1];break}}let f=d?.getBoundingClientRect?.(),g=h?.getBoundingClientRect?.();return f&&g?g.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,n){if(t&1&&Ne(n,Ae,5)(n,q,5)(n,Fe,5)(n,we,5)(n,Ue,5),t&2){let a;A(a=z())&&(i._noDataRow=a.first),A(a=z())&&(i._contentColumnDefs=a),A(a=z())&&(i._contentRowDefs=a),A(a=z())&&(i._contentHeaderRowDefs=a),A(a=z())&&(i._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&j("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",_],fixedLayout:[2,"fixedLayout","fixedLayout",_],recycleRows:[2,"recycleRows","recycleRows",_]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[M([{provide:N,useExisting:o},{provide:ge,useValue:null}])],ngContentSelectors:ri,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(ae(si),F(0),F(1,1),S(2,li,1,0),S(3,di,7,0)(4,ci,4,0)),t&2&&(m(2),k(i._isServer?2:-1),m(),k(i._isNativeHtmlTable?3:4))},dependencies:[Qe,Ye,We,Xe],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return o})();function Ie(o,s){return o.concat(Array.from(s))}function Yt(o,s){let e=s.toUpperCase(),t=o.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var qt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=H({type:o});static \u0275inj=L({imports:[Et]})}return o})();var mi=[[["caption"]],[["colgroup"],["col"]],"*"],ui=["caption","colgroup, col","*"];function fi(o,s){o&1&&F(0,2)}function pi(o,s){o&1&&(u(0,"thead",0),x(1,1),p(),u(2,"tbody",2),x(3,3)(4,4),p(),u(5,"tfoot",0),x(6,5),p())}function _i(o,s){o&1&&x(0,1)(1,3)(2,4)(3,5)}var Mo=(()=>{class o extends qe{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275cmp=R({type:o,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&j("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[M([{provide:qe,useExisting:o},{provide:N,useExisting:o},{provide:ge,useValue:null}]),y],ngContentSelectors:ui,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(ae(mi),F(0),F(1,1),S(2,fi,1,0),S(3,pi,7,0)(4,_i,4,0)),t&2&&(m(2),k(i._isServer?2:-1),m(),k(i._isNativeHtmlTable?3:4))},dependencies:[Qe,Ye,We,Xe],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return o})(),Io=(()=>{class o extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["","matCellDef",""]],features:[M([{provide:Oe,useExisting:o}]),y]})}return o})(),Eo=(()=>{class o extends Pe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["","matHeaderCellDef",""]],features:[M([{provide:Pe,useExisting:o}]),y]})}return o})();var Oo=(()=>{class o extends q{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[M([{provide:q,useExisting:o}]),y]})}return o})(),Po=(()=>{class o extends Xt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[y]})}return o})();var Fo=(()=>{class o extends Wt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[y]})}return o})();var Ao=(()=>{class o extends we{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",_]},features:[M([{provide:we,useExisting:o}]),y]})}return o})();var zo=(()=>{class o extends Fe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275dir=c({type:o,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[M([{provide:Fe,useExisting:o}]),y]})}return o})(),No=(()=>{class o extends $e{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275cmp=R({type:o,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[M([{provide:$e,useExisting:o}]),y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&x(0,0)},dependencies:[ee],encapsulation:2})}return o})();var Lo=(()=>{class o extends Ge{static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(o)))(i||o)}})();static \u0275cmp=R({type:o,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[M([{provide:Ge,useExisting:o}]),y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&x(0,0)},dependencies:[ee],encapsulation:2})}return o})(),Bo=(()=>{class o extends Ae{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["ng-template","matNoDataRow",""]],features:[M([{provide:Ae,useExisting:o}]),y]})}return o})();var Ho=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=H({type:o});static \u0275inj=L({imports:[qt,le]})}return o})(),gi=9007199254740991,Kt=class extends Rt{_data;_renderData=new te([]);_filter=new te("");_internalPageChanges=new b;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(s){s=Array.isArray(s)?s:[],this._data.next(s),this._renderChangesSubscription||this._filterData(s)}get filter(){return this._filter.value}set filter(s){this._filter.next(s),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(s){this._sort=s,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(s){this._paginator=s,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(s,e)=>{let t=s[e];if(yt(t)){let i=Number(t);return i<gi?i:t}return t};sortData=(s,e)=>{let t=e.active,i=e.direction;return!t||i==""?s:s.sort((n,a)=>{let l=this.sortingDataAccessor(n,t),d=this.sortingDataAccessor(a,t),h=typeof l,f=typeof d;h!==f&&(h==="number"&&(l+=""),f==="number"&&(d+=""));let g=0;return l!=null&&d!=null?l>d?g=1:l<d&&(g=-1):l!=null?g=1:d!=null&&(g=-1),g*(i=="asc"?1:-1)})};filterPredicate=(s,e)=>{let t=e.trim().toLowerCase();return Object.values(s).some(i=>`${i}`.toLowerCase().includes(t))};constructor(s=[]){super(),this._data=new te(s),this._updateChangeSubscription()}_updateChangeSubscription(){let s=this._sort?ce(this._sort.sortChange,this._sort.initialized):ie(null),e=this._paginator?ce(this._paginator.page,this._internalPageChanges,this._paginator.initialized):ie(null),t=this._data,i=Y([t,this._filter]).pipe(be(([l])=>this._filterData(l))),n=Y([i,s]).pipe(be(([l])=>this._orderData(l))),a=Y([n,e]).pipe(be(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(l=>this._renderData.next(l))}_filterData(s){return this.filteredData=this.filter==null||this.filter===""?s:s.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(s){return this.sort?this.sortData(s.slice(),this.sort):s}_pageData(s){if(!this.paginator)return s;let e=this.paginator.pageIndex*this.paginator.pageSize;return s.slice(e,e+this.paginator.pageSize)}_updatePaginator(s){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=s,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var wi=["tooltip"],vi=20;var bi=new B("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=r(ue);return()=>Pt(o,{scrollThrottle:vi})}}),Ci=new B("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Zt="tooltip-panel",Di={passive:!0},Ri=8,Si=8,ki=24,xi=200,Jt=(()=>{class o{_elementRef=r(D);_ngZone=r(at);_platform=r(Se);_ariaDescriber=r(xe);_focusMonitor=r(ke);_dir=r(Te);_injector=r(ue);_viewContainerRef=r(X);_mediaMatcher=r(vt);_document=r(Ce);_renderer=r(rt);_animationsDisabled=_e();_defaultOptions=r(Ci,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ti;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=He(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=He(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Be(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Be(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new b;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ri}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(C(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Ot(this._tooltipComponent,this._viewContainerRef);let n=this._tooltipInstance=i.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe(C(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof D)return this._overlayRef;this._detach()}let t=this._injector.get(xt).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Zt}`,n=Ft(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return n.positionChanges.pipe(C(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=At(this._injector,{direction:this._dir,positionStrategy:n,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(bi)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(C(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(C(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(C(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(C(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),n=this._getOverlayPosition();t.withPositions([this._addOffset(de(de({},i.main),n.main)),this._addOffset(de(de({},i.fallback),n.fallback))])}_addOffset(e){let t=Si,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:n,y:a}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:n,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:n,y:a}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:n,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Q(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:n}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=i==="end"?"left":"right":a=i==="start"?"left":"right":a=t==="bottom"&&n==="top"?"above":"below",a!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${Zt}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let n=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??n)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Di))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Q({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ct(e):!0;static \u0275fac=function(t){return new(t||o)};static \u0275dir=c({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&j("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),Ti=(()=>{class o{_changeDetectorRef=r(W);_elementRef=r(D);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=_e();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new b;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ki&&e.width>=xi}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,n=this._hideAnimation;if(t.classList.remove(e?n:i),t.classList.add(e?i:n),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&Le(wi,7),t&2){let n;A(n=z())&&(i._tooltip=n.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&O("mouseleave",function(a){return i._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(Z(0,"div",1,0),ft("animationend",function(a){return i._handleAnimationEnd(a)}),Z(2,"div",2),G(3),J()()),t&2&&(_t(i.tooltipClass),j("mdc-tooltip--multiline",i._isMultiline),m(3),Re(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return o})();var ei=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=H({type:o});static \u0275inj=L({imports:[bt,zt,le,It]})}return o})();function Mi(o,s){if(o&1&&(u(0,"mat-option",17),G(1),p()),o&2){let e=s.$implicit;$("value",e),m(),se(" ",e," ")}}function Ii(o,s){if(o&1){let e=De();u(0,"mat-form-field",14)(1,"mat-select",16,0),O("selectionChange",function(i){he(e);let n=P(2);return me(n._changePageSize(i.value))}),ht(3,Mi,2,2,"mat-option",17,ct),p(),u(5,"div",18),O("click",function(){he(e);let i=pt(2);return me(i.open())}),p()()}if(o&2){let e=P(2);$("appearance",e._formFieldAppearance)("color",e.color),m(),$("value",e.pageSize)("disabled",e.disabled),dt("aria-labelledby",e._pageSizeLabelId),$("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),m(2),mt(e._displayedPageSizeOptions)}}function Ei(o,s){if(o&1&&(u(0,"div",15),G(1),p()),o&2){let e=P(2);m(),Re(e.pageSize)}}function Oi(o,s){if(o&1&&(u(0,"div",3)(1,"div",13),G(2),p(),S(3,Ii,6,7,"mat-form-field",14),S(4,Ei,2,1,"div",15),p()),o&2){let e=P();m(),U("id",e._pageSizeLabelId),m(),se(" ",e._intl.itemsPerPageLabel," "),m(),k(e._displayedPageSizeOptions.length>1?3:-1),m(),k(e._displayedPageSizeOptions.length<=1?4:-1)}}function Pi(o,s){if(o&1){let e=De();u(0,"button",19),O("click",function(){he(e);let i=P();return me(i._buttonClicked(0,i._previousButtonsDisabled()))}),K(),u(1,"svg",8),fe(2,"path",20),p()()}if(o&2){let e=P();$("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),U("aria-label",e._intl.firstPageLabel)}}function Fi(o,s){if(o&1){let e=De();u(0,"button",21),O("click",function(){he(e);let i=P();return me(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),K(),u(1,"svg",8),fe(2,"path",22),p()()}if(o&2){let e=P();$("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),U("aria-label",e._intl.lastPageLabel)}}var Ai=(()=>{class o{changes=new b;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let n=e*t,a=n<i?Math.min(n+t,i):n+t;return`${n+1} \u2013 ${a} of ${i}`};static \u0275fac=function(t){return new(t||o)};static \u0275prov=ze({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),zi=50;var Ni=new B("MAT_PAGINATOR_DEFAULT_OPTIONS"),Li=(()=>{class o{_intl=r(Ai);_changeDetectorRef=r(W);_formFieldAppearance;_pageSizeLabelId=r(Dt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new ve(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>pe(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new oe;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=r(Ni,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:n,hidePageSize:a,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),n!=null&&(this._pageSizeOptions=n),a!=null&&(this.hidePageSize=a),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:zi),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",pe],length:[2,"length","length",pe],pageSize:[2,"pageSize","pageSize",pe],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",_],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",_],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",_]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(u(0,"div",1)(1,"div",2),S(2,Oi,5,4,"div",3),u(3,"div",4)(4,"div",5),G(5),p(),S(6,Pi,3,5,"button",6),u(7,"button",7),O("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),K(),u(8,"svg",8),fe(9,"path",9),p()(),nt(),u(10,"button",10),O("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),K(),u(11,"svg",8),fe(12,"path",11),p()(),S(13,Fi,3,5,"button",12),p()()()),t&2&&(m(2),k(i.hidePageSize?-1:2),m(3),se(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),m(),k(i.showFirstLastButtons?6:-1),m(),$("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),U("aria-label",i._intl.previousPageLabel),m(3),$("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),U("aria-label",i._intl.nextPageLabel),m(3),k(i.showFirstLastButtons?13:-1))},dependencies:[Ht,Ut,Vt,Lt,Jt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return o})(),En=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=H({type:o});static \u0275inj=L({imports:[Bt,$t,ei,Li]})}return o})();var Bi=["mat-sort-header",""],Hi=["*",[["","matSortHeaderIcon",""]]],ji=["*","[matSortHeaderIcon]"];function Vi(o,s){o&1&&(K(),Z(0,"svg",3),ut(1,"path",4),J())}function Ui(o,s){o&1&&(Z(0,"div",2),F(1,1,null,Vi,2,0),J())}var ti=new B("MAT_SORT_DEFAULT_OPTIONS"),$i=(()=>{class o{_defaultOptions;_initializedStream=new ve(1);sortables=new Map;_stateChanges=new b;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new oe;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=Gi(e.start||this.start,t),n=i.indexOf(this.direction)+1;return n>=i.length&&(n=0),i[n]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||o)(lt(ti,8))};static \u0275dir=c({type:o,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",_],disabled:[2,"matSortDisabled","disabled",_]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ne]})}return o})();function Gi(o,s){let e=["asc","desc"];return o=="desc"&&e.reverse(),s||e.push(""),e}var Jn=(()=>{class o{_sort=r($i,{optional:!0});_columnDef=r(q,{optional:!0});_changeDetectorRef=r(W);_focusMonitor=r(ke);_elementRef=r(D);_ariaDescriber=r(xe,{optional:!0});_renderChanges;_animationsDisabled=_e();_recentlyCleared=st(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){r(wt).load(Nt);let e=r(ti,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=ce(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=R({type:o,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,i){t&1&&O("click",function(){return i._toggleOnInteraction()})("keydown",function(a){return i._handleKeydown(a)})("mouseleave",function(){return i._recentlyCleared.set(null)}),t&2&&(U("aria-sort",i._getAriaSortAttribute()),j("mat-sort-header-disabled",i._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",_],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",_]},exportAs:["matSortHeader"],attrs:Bi,ngContentSelectors:ji,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,i){t&1&&(ae(Hi),Z(0,"div",0)(1,"div",1),F(2),J(),S(3,Ui,3,0,"div",2),J()),t&2&&(j("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before")("mat-sort-header-descending",i._sort.direction==="desc")("mat-sort-header-ascending",i._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",i._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",i._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",i._animationsDisabled),U("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),m(3),k(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return o})(),ea=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=H({type:o});static \u0275inj=L({imports:[le]})}return o})();export{Mo as a,Io as b,Eo as c,Oo as d,Po as e,Fo as f,Ao as g,zo as h,No as i,Lo as j,Bo as k,Ho as l,Kt as m,Li as n,En as o,$i as p,Jn as q,ea as r};
