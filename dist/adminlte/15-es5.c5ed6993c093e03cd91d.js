!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QX5w:function(t,a,r){"use strict";r.r(a),r.d(a,"SavedFormsModule",function(){return J});var i,o=r("3Pt+"),l=r("ofXK"),s=r("M9IT"),m=r("Dh3D"),c=r("+0xr"),d=r("VRyK"),u=r("fXoL"),p=r("KFfU"),f=((i=function(){function t(){e(this,t)}return n(t,[{key:"inputDateToIso",value:function(e){return new Date(Date.parse(e)).toISOString()}}]),t}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=u["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac,providedIn:"root"}),i),h=r("JqCM"),v=r("zXlT"),S=r("tyNb"),g=r("yZxC"),y=r("kmnG"),C=r("qFsG"),w=r("d3UM"),E=r("FKr1"),x=r("bTqV"),I=r("Qu3c");function b(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"mat-option",24),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n.value),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](n.title)}}function k(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"mat-error"),u["\u0275\u0275text"](1,"You must make a selection"),u["\u0275\u0275elementEnd"]())}function D(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",25),u["\u0275\u0275text"](1,"Form Id"),u["\u0275\u0275elementEnd"]())}function A(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n.formName," ")}}function T(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",25),u["\u0275\u0275text"](1,"Form Name"),u["\u0275\u0275elementEnd"]())}function F(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275text"](1,"Form Name"),u["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",27),u["\u0275\u0275text"](1,"Form Type"),u["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](n.fileType)}}function R(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",25),u["\u0275\u0275text"](1," Created Date "),u["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275text"](1),u["\u0275\u0275pipe"](2,"date"),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind2"](2,1,n.createdAt,"mediumDate")," ")}}function M(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",25),u["\u0275\u0275text"](1," Updated Date "),u["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275text"](1),u["\u0275\u0275pipe"](2,"date"),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind2"](2,1,n.updatedAt,"mediumDate")," ")}}function z(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"th",27),u["\u0275\u0275text"](1,"Action"),u["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"td",26),u["\u0275\u0275elementStart"](1,"div",28),u["\u0275\u0275elementStart"](2,"span",29),u["\u0275\u0275listener"]("click",function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"]().edit(e._id,e.fileType)}),u["\u0275\u0275text"](3," edit "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"span",30),u["\u0275\u0275listener"]("click",function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"]().printPage(e,e.fileType)}),u["\u0275\u0275text"](5," print "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}function q(e,t){1&e&&u["\u0275\u0275element"](0,"tr",31)}function V(e,t){1&e&&u["\u0275\u0275element"](0,"tr",32)}function H(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tr",33),u["\u0275\u0275elementStart"](1,"td",34),u["\u0275\u0275text"](2,"Data Not Found"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]())}var Q,$,B,G=function(){return[5,10,20,30]},K=[{path:"",component:(Q=function(){function t(n,a,r,i,o,l,s){e(this,t),this.forms=n,this.convertService=a,this.spinner=r,this.shared=i,this.router=o,this.fb=l,this.setTitle=s,this.displayedColumns=["formName","formType","createdAt","updatedAt","Action"],this.selectArr=[{title:"Form Id",value:"formId"},{title:"Form Type",value:"fileType"},{title:"Created Date",value:"createdAt"},{title:"Updated Date",value:"updatedAt"}],this.page=1,this.limit=5,this.searchString=""}return n(t,[{key:"ngAfterViewInit",value:function(){var e=this;this.sort.sortChange.subscribe(function(){return e.paginator1.pageIndex=0}),Object(d.a)(this.sort.sortChange,this.paginator1.page).subscribe(function(){e.changeState={field:e.sort.active||"",value:e.sort.direction||"",page:e.paginator1.pageIndex+1,limit:e.paginator1.pageSize},e.getSavedforms(),console.log(e.changeState)})}},{key:"ngOnInit",value:function(){this.searchControl=this.fb.group({searchSelect:["",o.C.required],searchInput:[""]}),this.getSavedforms(),this.setTitle.setTitle("WHS-All Saved Forms")}},{key:"getSavedforms",value:function(e,t,n,a,r,i){var o,l,s,m,d=this;void 0===e&&(e=null===(o=this.changeState)||void 0===o?void 0:o.field),void 0===t&&(t=null===(l=this.changeState)||void 0===l?void 0:l.value),void 0===n&&(n=null===(s=this.changeState)||void 0===s?void 0:s.page),void 0===a&&(a=null===(m=this.changeState)||void 0===m?void 0:m.limit),void 0===r&&(r=this.f.searchSelect.value),void 0===i&&(i=this.f.searchInput.value),"createdAt"!==r&&"updatedAt"!==r||(i=this.convertService.inputDateToIso(i)),this.forms.getAllSavedForms(n,a,e,t,r,i).subscribe(function(e){d.showDatas=e.data,console.log("get res",d.showDatas),d.totalCount=e.totalCount,d.showDatas.forEach(function(e,t){return d.showDatas[t].index=t}),d.tempArray=new c.l(d.showDatas),d.tempArray.sort=d.sort})}},{key:"edit",value:function(e,t){var n={queryParams:{formType:t.toString()}};"Hazard Report"==t?this.router.navigate(["/admin/forms/hazardRep/"+e],n):"Notifiable Accident"==t?this.router.navigate(["/admin/forms/incidentRep/"+e],n):"Site Inspection"==t?this.router.navigate(["/admin/forms/siteInspect/"+e],n):"Tool Box"==t?this.router.navigate(["/admin/forms/toolboxTalk/"+e],n):"Risk Assessment"==t&&this.router.navigate(["/admin/forms/riskAssessSWMS/"+e],n)}},{key:"printPage",value:function(e,t){this.shared.printNext(!0),this.shared.sendPrintData(Object.assign(Object.assign({},e),{formName:t.toString()})),console.log("check"),localStorage.setItem("key","print"),this.spinner.show("printLoader");var n={queryParams:{formType:t.toString()}};"Hazard Report"==t?this.router.navigate(["/",{outlets:{print:["print","hazardRep",e._id]}}],n):"Notifiable Accident"==t?this.router.navigate(["/",{outlets:{print:["print","incidentRep",e._id]}}],n):"Site Inspection"==t?this.router.navigate(["/",{outlets:{print:["print","siteInspect",e._id]}}],n):"Tool Box"==t?this.router.navigate(["/",{outlets:{print:["print","toolboxTalk",e._id]}}],n):"Risk Assessment"==t&&this.router.navigate(["/",{outlets:{print:["print","riskAssessSWMS",e._id]}}],n)}},{key:"paginator",value:function(e){this.page=e.pageIndex,this.limit=e.pageSize}},{key:"applyFilter",value:function(e){this.searchString=e.target.value}},{key:"f",get:function(){return this.searchControl.controls}},{key:"reset",value:function(){this.f.searchSelect.setValue(""),this.f.searchInput.setValue(""),this.getSavedforms()}},{key:"search",value:function(){this.searchString=this.f.searchInput.value,this.searchString=this.f.searchInput.value,this.getSavedforms()}}]),t}(),Q.\u0275fac=function(e){return new(e||Q)(u["\u0275\u0275directiveInject"](p.a),u["\u0275\u0275directiveInject"](f),u["\u0275\u0275directiveInject"](h.c),u["\u0275\u0275directiveInject"](v.a),u["\u0275\u0275directiveInject"](S.f),u["\u0275\u0275directiveInject"](o.f),u["\u0275\u0275directiveInject"](g.a))},Q.\u0275cmp=u["\u0275\u0275defineComponent"]({type:Q,selectors:[["app-saved-forms"]],viewQuery:function(e,t){var n;1&e&&(u["\u0275\u0275viewQuery"](s.a,!0),u["\u0275\u0275viewQuery"](m.a,!0)),2&e&&(u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.paginator1=n.first),u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.sort=n.first))},decls:45,vars:10,consts:[[1,"col","ml-2","pt-3"],[1,"row",3,"formGroup"],[1,"col-3"],["matInput","","placeholder","Search","formControlName","searchInput",3,"type","keyup"],["input",""],["formControlName","searchSelect"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","",3,"click"],[1,""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","formName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","formType"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length","page"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[2,"display","flex","justify-content","space-around"],["matTooltip","Edit",1,"material-icons",3,"click"],["matTooltip","print",1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"h1"),u["\u0275\u0275text"](2,"All Saved Forms Table"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"div",2),u["\u0275\u0275elementStart"](5,"mat-form-field"),u["\u0275\u0275elementStart"](6,"input",3,4),u["\u0275\u0275listener"]("keyup",function(e){return t.applyFilter(e)}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"div",2),u["\u0275\u0275elementStart"](9,"mat-form-field"),u["\u0275\u0275elementStart"](10,"mat-select",5),u["\u0275\u0275elementStart"](11,"mat-option"),u["\u0275\u0275text"](12,"Clear"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](13,b,2,2,"mat-option",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](14,k,2,0,"mat-error",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"div",2),u["\u0275\u0275elementStart"](16,"button",8),u["\u0275\u0275listener"]("click",function(){return t.search()}),u["\u0275\u0275text"](17,"Search"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](18,"div",2),u["\u0275\u0275elementStart"](19,"button",8),u["\u0275\u0275listener"]("click",function(){return t.reset()}),u["\u0275\u0275text"](20,"Reset Filter"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](21,"div",9),u["\u0275\u0275elementStart"](22,"table",10),u["\u0275\u0275elementContainerStart"](23,11),u["\u0275\u0275template"](24,D,2,0,"th",12),u["\u0275\u0275template"](25,A,2,1,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](26,14),u["\u0275\u0275template"](27,T,2,0,"th",12),u["\u0275\u0275template"](28,F,2,0,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](29,15),u["\u0275\u0275template"](30,j,2,0,"th",16),u["\u0275\u0275template"](31,N,2,1,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](32,17),u["\u0275\u0275template"](33,R,2,0,"th",12),u["\u0275\u0275template"](34,O,3,4,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](35,18),u["\u0275\u0275template"](36,M,2,0,"th",12),u["\u0275\u0275template"](37,P,3,4,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275elementContainerStart"](38,19),u["\u0275\u0275template"](39,z,2,0,"th",16),u["\u0275\u0275template"](40,_,6,0,"td",13),u["\u0275\u0275elementContainerEnd"](),u["\u0275\u0275template"](41,q,1,0,"tr",20),u["\u0275\u0275template"](42,V,1,0,"tr",21),u["\u0275\u0275template"](43,H,3,0,"tr",22),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](44,"mat-paginator",23),u["\u0275\u0275listener"]("page",function(e){return t.paginator(e)}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("formGroup",t.searchControl),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("type",t.f.searchSelect.value===t.selectArr[2].value||t.f.searchSelect.value===t.selectArr[3].value?"date":"text"),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("ngForOf",t.selectArr),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.f.searchSelect.hasError("required")),u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("dataSource",t.tempArray),u["\u0275\u0275advance"](19),u["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("pageSizeOptions",u["\u0275\u0275pureFunction0"](9,G))("length",t.totalCount))},directives:[o.s,o.k,y.c,C.b,o.d,o.r,o.i,w.a,E.n,l.m,l.n,x.a,c.k,m.a,c.c,c.e,c.b,c.g,c.j,c.h,s.a,y.b,c.d,m.b,c.a,I.a,c.f,c.i],pipes:[l.e],styles:[".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}"]}),Q)}],U=(($=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:$}),$.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||$)},imports:[[S.j.forChild(K)],S.j]}),$),X=r("PCNd"),J=((B=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:B}),B.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||B)},imports:[[l.c,o.y,X.a,U]]}),B)}}])}();