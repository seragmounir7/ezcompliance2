(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QX5w:function(e,t,n){"use strict";n.r(t),n.d(t,"SavedFormsModule",function(){return _});var a=n("3Pt+"),r=n("ofXK"),i=n("M9IT"),o=n("Dh3D"),l=n("+0xr"),s=n("VRyK"),m=n("fXoL"),d=n("KFfU");let c=(()=>{class e{constructor(){}inputDateToIso(e){return new Date(Date.parse(e)).toISOString()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=m["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("JqCM"),u=n("zXlT"),h=n("tyNb"),f=n("kmnG"),v=n("qFsG"),S=n("d3UM"),g=n("FKr1"),y=n("bTqV"),C=n("Qu3c");function w(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"mat-option",24),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275property"]("value",e.value),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e.title)}}function E(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"mat-error"),m["\u0275\u0275text"](1,"You must make a selection"),m["\u0275\u0275elementEnd"]())}function I(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",25),m["\u0275\u0275text"](1," Form Id "),m["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e.formName)}}function D(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",25),m["\u0275\u0275text"](1,"Form Name "),m["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275text"](1,"Form Name"),m["\u0275\u0275elementEnd"]())}function k(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",27),m["\u0275\u0275text"](1,"Form Type"),m["\u0275\u0275elementEnd"]())}function A(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e.fileType)}}function T(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",25),m["\u0275\u0275text"](1,"Created Date"),m["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"date"),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind2"](2,1,e.createdAt,"mediumDate")," ")}}function j(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",25),m["\u0275\u0275text"](1,"Updated Date"),m["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"date"),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind2"](2,1,e.updatedAt,"mediumDate")," ")}}function N(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"th",27),m["\u0275\u0275text"](1," Action "),m["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"td",26),m["\u0275\u0275elementStart"](1,"div",28),m["\u0275\u0275elementStart"](2,"span",29),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"]().edit(n._id,n.fileType)}),m["\u0275\u0275text"](3," edit "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"span",30),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"]().printPage(n._id,n.fileType)}),m["\u0275\u0275text"](5," print "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}function O(e,t){1&e&&m["\u0275\u0275element"](0,"tr",31)}function z(e,t){1&e&&m["\u0275\u0275element"](0,"tr",32)}function P(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tr",33),m["\u0275\u0275elementStart"](1,"td",34),m["\u0275\u0275text"](2,"Data Not Found "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}const q=function(){return[5,10,20,30]},V=[{path:"",component:(()=>{class e{constructor(e,t,n,a,r,i){this.forms=e,this.convertService=t,this.spinner=n,this.shared=a,this.router=r,this.fb=i,this.displayedColumns=["formName","formType","createdAt","updatedAt","Action"],this.selectArr=[{title:"Form Id",value:"formId"},{title:"Form Type",value:"fileType"},{title:"Created Date",value:"createdAt"},{title:"Updated Date",value:"updatedAt"}],this.page=1,this.limit=5,this.searchString=""}ngAfterViewInit(){this.sort.sortChange.subscribe(()=>this.paginator1.pageIndex=0),Object(s.a)(this.sort.sortChange,this.paginator1.page).subscribe(()=>{this.changeState={field:this.sort.active||"",value:this.sort.direction||"",page:this.paginator1.pageIndex+1,limit:this.paginator1.pageSize},this.getSavedforms(),console.log(this.changeState)})}ngOnInit(){this.searchControl=this.fb.group({searchSelect:["",a.C.required],searchInput:[""]}),this.getSavedforms()}getSavedforms(e,t,n,a,r,i){var o,s,m,d;void 0===e&&(e=null===(o=this.changeState)||void 0===o?void 0:o.field),void 0===t&&(t=null===(s=this.changeState)||void 0===s?void 0:s.value),void 0===n&&(n=null===(m=this.changeState)||void 0===m?void 0:m.page),void 0===a&&(a=null===(d=this.changeState)||void 0===d?void 0:d.limit),void 0===r&&(r=this.f.searchSelect.value),void 0===i&&(i=this.f.searchInput.value),"createdAt"!==r&&"updatedAt"!==r||(i=this.convertService.inputDateToIso(i)),this.forms.getAllSavedForms(n,a,e,t,r,i).subscribe(e=>{this.showDatas=e.data,console.log("get res",this.showDatas),this.totalCount=e.totalCount,this.showDatas.forEach((e,t)=>this.showDatas[t].index=t),this.tempArray=new l.l(this.showDatas),this.tempArray.sort=this.sort})}edit(e,t){let n={queryParams:{formType:t.toString()}};"Hazard"==t?this.router.navigate(["/admin/forms/hazardRep/"+e],n):"Incident"==t?this.router.navigate(["/admin/forms/incidentRep/"+e],n):"Site Inspection"==t?this.router.navigate(["/admin/forms/siteInspect/"+e],n):"Tool Box"==t?this.router.navigate(["/admin/forms/toolboxTalk/"+e],n):"Risk Assessment"==t&&this.router.navigate(["/admin/forms/riskAssessSWMS/"+e],n)}printPage(e,t){this.shared.printNext(!0),console.log("check"),localStorage.setItem("key","print"),this.spinner.show("printLoader");let n={queryParams:{formType:t.toString()}};"Hazard"==t?this.router.navigate(["/",{outlets:{print:["print","hazardRep",e]}}],n):"Incident"==t?this.router.navigate(["/",{outlets:{print:["print","incidentRep",e]}}],n):"Site Inspection"==t?this.router.navigate(["/",{outlets:{print:["print","siteInspect",e]}}],n):"Tool Box"==t?this.router.navigate(["/",{outlets:{print:["print","toolboxTalk",e]}}],n):"Risk Assessment"==t&&this.router.navigate(["/",{outlets:{print:["print","riskAssessSWMS",e]}}],n)}paginator(e){this.page=e.pageIndex,this.limit=e.pageSize}applyFilter(e){this.searchString=e.target.value}get f(){return this.searchControl.controls}reset(){this.f.searchSelect.setValue(""),this.f.searchInput.setValue(""),this.getSavedforms()}search(){this.searchString=this.f.searchInput.value,this.searchString=this.f.searchInput.value,this.getSavedforms()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](c),m["\u0275\u0275directiveInject"](p.c),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](h.f),m["\u0275\u0275directiveInject"](a.f))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-saved-forms"]],viewQuery:function(e,t){if(1&e&&(m["\u0275\u0275viewQuery"](i.a,!0),m["\u0275\u0275viewQuery"](o.a,!0)),2&e){let e;m["\u0275\u0275queryRefresh"](e=m["\u0275\u0275loadQuery"]())&&(t.paginator1=e.first),m["\u0275\u0275queryRefresh"](e=m["\u0275\u0275loadQuery"]())&&(t.sort=e.first)}},decls:45,vars:10,consts:[[1,"col","ml-2","pt-3"],[1,"row",3,"formGroup"],[1,"col-3"],["matInput","","placeholder","Search","formControlName","searchInput",3,"type","keyup"],["input",""],["formControlName","searchSelect"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","",3,"click"],[1,""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","formName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","formType"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length","page"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[2,"display","flex","justify-content","space-around"],["matTooltip","Edit",1,"material-icons",3,"click"],["matTooltip","print",1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"h1"),m["\u0275\u0275text"](2," All Saved Forms Table"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"div",1),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275elementStart"](5,"mat-form-field"),m["\u0275\u0275elementStart"](6,"input",3,4),m["\u0275\u0275listener"]("keyup",function(e){return t.applyFilter(e)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"div",2),m["\u0275\u0275elementStart"](9,"mat-form-field"),m["\u0275\u0275elementStart"](10,"mat-select",5),m["\u0275\u0275elementStart"](11,"mat-option"),m["\u0275\u0275text"](12,"Clear"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](13,w,2,2,"mat-option",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](14,E,2,0,"mat-error",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"div",2),m["\u0275\u0275elementStart"](16,"button",8),m["\u0275\u0275listener"]("click",function(){return t.search()}),m["\u0275\u0275text"](17," Search "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"div",2),m["\u0275\u0275elementStart"](19,"button",8),m["\u0275\u0275listener"]("click",function(){return t.reset()}),m["\u0275\u0275text"](20," Reset Filter "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"div",9),m["\u0275\u0275elementStart"](22,"table",10),m["\u0275\u0275elementContainerStart"](23,11),m["\u0275\u0275template"](24,I,2,0,"th",12),m["\u0275\u0275template"](25,x,2,1,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275elementContainerStart"](26,14),m["\u0275\u0275template"](27,D,2,0,"th",12),m["\u0275\u0275template"](28,b,2,0,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275elementContainerStart"](29,15),m["\u0275\u0275template"](30,k,2,0,"th",16),m["\u0275\u0275template"](31,A,2,1,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275elementContainerStart"](32,17),m["\u0275\u0275template"](33,T,2,0,"th",12),m["\u0275\u0275template"](34,F,3,4,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275elementContainerStart"](35,18),m["\u0275\u0275template"](36,j,2,0,"th",12),m["\u0275\u0275template"](37,R,3,4,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275elementContainerStart"](38,19),m["\u0275\u0275template"](39,N,2,0,"th",16),m["\u0275\u0275template"](40,M,6,0,"td",13),m["\u0275\u0275elementContainerEnd"](),m["\u0275\u0275template"](41,O,1,0,"tr",20),m["\u0275\u0275template"](42,z,1,0,"tr",21),m["\u0275\u0275template"](43,P,3,0,"tr",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](44,"mat-paginator",23),m["\u0275\u0275listener"]("page",function(e){return t.paginator(e)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("formGroup",t.searchControl),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("type",t.f.searchSelect.value===t.selectArr[2].value||t.f.searchSelect.value===t.selectArr[3].value?"date":"text"),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngForOf",t.selectArr),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.f.searchSelect.hasError("required")),m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("dataSource",t.tempArray),m["\u0275\u0275advance"](19),m["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("pageSizeOptions",m["\u0275\u0275pureFunction0"](9,q))("length",t.totalCount))},directives:[a.s,a.k,f.c,v.b,a.d,a.r,a.i,S.a,g.n,r.m,r.n,y.a,l.k,o.a,l.c,l.e,l.b,l.g,l.j,l.h,i.a,f.b,l.d,o.b,l.a,C.a,l.f,l.i],pipes:[r.e],styles:[".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[h.j.forChild(V)],h.j]}),e})();var $=n("PCNd");let _=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,a.y,$.a,Q]]}),e})()}}]);