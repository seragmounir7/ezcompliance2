!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QX5w:function(t,a,i){"use strict";i.r(a),i.d(a,"SavedFormsModule",function(){return ie});var r,o=i("3Pt+"),l=i("ofXK"),s=i("M9IT"),c=i("Dh3D"),m=i("+0xr"),d=i("VRyK"),u=i("PSD3"),p=i.n(u),f=i("fXoL"),h=i("KFfU"),v=((r=function(){function t(){e(this,t)}return n(t,[{key:"inputDateToIso",value:function(e){return new Date(Date.parse(e)).toISOString()}}]),t}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=f["\u0275\u0275defineInjectable"]({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=i("JqCM"),S=i("zXlT"),y=i("tyNb"),b=i("yZxC"),C=i("wbBK"),E=i("+3ge"),x=i("kmnG"),w=i("qFsG"),k=i("d3UM"),D=i("FKr1"),I=i("bTqV"),F=i("1jcm"),A=i("Qu3c");function T(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"mat-option",26),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275property"]("value",n.value),f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](n.title)}}function R(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"mat-error"),f["\u0275\u0275text"](1,"You must make a selection"),f["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",27),f["\u0275\u0275text"](1,"Form Id"),f["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" ",n.formName," ")}}function N(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",27),f["\u0275\u0275text"](1,"Form Name"),f["\u0275\u0275elementEnd"]())}function O(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275text"](1,"Form Name"),f["\u0275\u0275elementEnd"]())}function q(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",29),f["\u0275\u0275text"](1,"Form Type"),f["\u0275\u0275elementEnd"]())}function z(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate"](n.fileType)}}function B(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",29),f["\u0275\u0275text"](1,"Form Frequency"),f["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275elementStart"](1,"select",30),f["\u0275\u0275listener"]("change",function(e){f["\u0275\u0275restoreView"](n);var a=t.$implicit;return f["\u0275\u0275nextContext"]().frequencyChange(e,a)}),f["\u0275\u0275elementStart"](2,"option",31),f["\u0275\u0275text"](3,"Daily"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"option",32),f["\u0275\u0275text"](5,"Weekly"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"option",33),f["\u0275\u0275text"](7,"Monthly"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"option",34),f["\u0275\u0275text"](9,"Quaterly"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](10,"option",35),f["\u0275\u0275text"](11,"Half yearly"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](12,"option",36),f["\u0275\u0275text"](13,"Yearly"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"option",37),f["\u0275\u0275text"](15,"Once Off"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("value",a.frequency)}}function P(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",29),f["\u0275\u0275text"](1,"Disable/Enable"),f["\u0275\u0275elementEnd"]())}function H(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275elementStart"](1,"mat-slide-toggle",38),f["\u0275\u0275listener"]("change",function(e){f["\u0275\u0275restoreView"](n);var a=t.$implicit;return f["\u0275\u0275nextContext"]().slideChanged(e,a)}),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("checked",a.enable)}}function V(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",27),f["\u0275\u0275text"](1," Created Date "),f["\u0275\u0275elementEnd"]())}function $(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275text"](1),f["\u0275\u0275pipe"](2,"date"),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" ",f["\u0275\u0275pipeBind2"](2,1,n.createdAt,"mediumDate")," ")}}function Q(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",27),f["\u0275\u0275text"](1," Updated Date "),f["\u0275\u0275elementEnd"]())}function K(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275text"](1),f["\u0275\u0275pipe"](2,"date"),f["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"](" ",f["\u0275\u0275pipeBind2"](2,1,n.updatedAt,"mediumDate")," ")}}function G(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"th",29),f["\u0275\u0275text"](1,"Action"),f["\u0275\u0275elementEnd"]())}function U(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"td",28),f["\u0275\u0275elementStart"](1,"div",39),f["\u0275\u0275elementStart"](2,"span",40),f["\u0275\u0275listener"]("click",function(){f["\u0275\u0275restoreView"](n);var e=t.$implicit;return f["\u0275\u0275nextContext"]().edit(e._id,e.fileType)}),f["\u0275\u0275text"](3," edit "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"span",41),f["\u0275\u0275listener"]("click",function(){f["\u0275\u0275restoreView"](n);var e=t.$implicit;return f["\u0275\u0275nextContext"]().printPage(e,e.fileType)}),f["\u0275\u0275text"](5," print "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()}}function W(e,t){1&e&&f["\u0275\u0275element"](0,"tr",42)}function X(e,t){1&e&&f["\u0275\u0275element"](0,"tr",43)}function J(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tr",44),f["\u0275\u0275elementStart"](1,"td",45),f["\u0275\u0275text"](2,"Data Not Found"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())}var L,Y,Z,ee=function(){return[5,10,20,30]},te=[{path:"",component:(L=function(){function t(n,a,i,r,o,l,s,c,m){e(this,t),this.forms=n,this.convertService=a,this.spinner=i,this.shared=r,this.router=o,this.fb=l,this.setTitle=s,this.logical=c,this.dynamicFormServise=m,this.displayedColumns=["formName","formType","formFrequency","Disable/Enable","createdAt","updatedAt","Action"],this.selectArr=[{title:"Form Id",value:"formId"},{title:"Form Type",value:"fileType"},{title:"Created Date",value:"createdAt"},{title:"Updated Date",value:"updatedAt"}],this.page=1,this.limit=5,this.searchString=""}return n(t,[{key:"ngAfterViewInit",value:function(){var e=this;this.sort.sortChange.subscribe(function(){return e.paginator1.pageIndex=0}),Object(d.a)(this.sort.sortChange,this.paginator1.page).subscribe(function(){e.changeState={field:e.sort.active||"",value:e.sort.direction||"",page:e.paginator1.pageIndex+1,limit:e.paginator1.pageSize},e.getSavedforms(),console.log(e.changeState)})}},{key:"ngOnInit",value:function(){this.searchControl=this.fb.group({searchSelect:["",o.C.required],searchInput:[""]}),this.getSavedforms(),this.setTitle.setTitle("WHS-All Saved Forms")}},{key:"getSavedforms",value:function(e,t,n,a,i,r){var o,l,s,c,d=this;void 0===e&&(e=null===(o=this.changeState)||void 0===o?void 0:o.field),void 0===t&&(t=null===(l=this.changeState)||void 0===l?void 0:l.value),void 0===n&&(n=null===(s=this.changeState)||void 0===s?void 0:s.page),void 0===a&&(a=null===(c=this.changeState)||void 0===c?void 0:c.limit),void 0===i&&(i=this.f.searchSelect.value),void 0===r&&(r=this.f.searchInput.value),"createdAt"!==i&&"updatedAt"!==i||(r=this.convertService.inputDateToIso(r)),this.forms.getAllSavedForms(n,a,e,t,i,r).subscribe(function(e){d.showDatas=e.data,console.log("get res",d.showDatas),d.totalCount=e.totalCount,d.showDatas.forEach(function(e,t){return d.showDatas[t].index=t}),d.tempArray=new m.l(d.showDatas),d.tempArray.sort=d.sort})}},{key:"edit",value:function(e,t){var n={queryParams:{formType:t.toString()}};"Hazard Report"==t?this.router.navigate(["/admin/forms/hazardRep/"+e],n):"Notifiable Accident"==t?this.router.navigate(["/admin/forms/incidentRep/"+e],n):"Site Inspection"==t?this.router.navigate(["/admin/forms/siteInspect/"+e],n):"Tool Box"==t?this.router.navigate(["/admin/forms/toolboxTalk/"+e],n):"Risk Assessment"==t&&this.router.navigate(["/admin/forms/riskAssessSWMS/"+e],n)}},{key:"printPage",value:function(e,t){this.shared.printNext(!0),this.shared.sendPrintData(Object.assign(Object.assign({},e),{formName:t.toString()})),console.log("check"),localStorage.setItem("key","print"),this.spinner.show("printLoader");var n={queryParams:{formType:t.toString()}};"Hazard Report"==t?this.router.navigate(["/",{outlets:{print:["print","hazardRep",e._id]}}],n):"Notifiable Accident"==t?this.router.navigate(["/",{outlets:{print:["print","incidentRep",e._id]}}],n):"Site Inspection"==t?this.router.navigate(["/",{outlets:{print:["print","siteInspect",e._id]}}],n):"Tool Box"==t?this.router.navigate(["/",{outlets:{print:["print","toolboxTalk",e._id]}}],n):"Risk Assessment"==t&&this.router.navigate(["/",{outlets:{print:["print","riskAssessSWMS",e._id]}}],n)}},{key:"paginator",value:function(e){this.page=e.pageIndex,this.limit=e.pageSize}},{key:"applyFilter",value:function(e){this.searchString=e.target.value}},{key:"f",get:function(){return this.searchControl.controls}},{key:"reset",value:function(){this.f.searchSelect.setValue(""),this.f.searchInput.setValue(""),this.getSavedforms()}},{key:"search",value:function(){this.searchString=this.f.searchInput.value,this.searchString=this.f.searchInput.value,this.getSavedforms()}},{key:"slideChanged",value:function(e,t){var n=function(){p.a.fire(e.checked?{title:"Form Enabled successfully",showConfirmButton:!1,timer:1200}:{title:"Form Disable successfully",showConfirmButton:!1,timer:1200})};switch(t.enable=e.checked,t.fileType){case"Site Inspection":this.logical.updateSiteInspection(t._id,t).subscribe(function(){n()});break;case"Hazard Report":this.logical.updateHazardFormData(t._id,t).subscribe(function(){n()});break;case"Notifiable Accident":this.logical.updateIncidentReport(t._id,t).subscribe(function(){n()});break;case"Tool Box":this.logical.editToolBox(t._id,t).subscribe(function(){n()});break;case"Risk Assessment":this.logical.updateAssessment(t._id,t).subscribe(function(){n()});break;default:if("Dynamic Form"!==(null==t?void 0:t.isDynamic))return;this.dynamicFormServise.editForm(t,t._id).subscribe(function(e){n()})}this.getSavedforms()}},{key:"frequencyChange",value:function(e,t){var n=function(){p.a.fire(e.checked?{title:"Form Enabled successfully",showConfirmButton:!1,timer:1200}:{title:"Form Disable successfully",showConfirmButton:!1,timer:1200})};switch(t.frequency=e.target.value,t.fileType){case"Site Inspection":this.logical.updateSiteInspection(t._id,t).subscribe(function(){n()});break;case"Hazard Report":this.logical.updateHazardFormData(t._id,t).subscribe(function(){n()});break;case"Notifiable Accident":this.logical.updateIncidentReport(t._id,t).subscribe(function(){n()});break;case"Tool Box":this.logical.editToolBox(t._id,t).subscribe(function(){n()});break;case"Risk Assessment":this.logical.updateAssessment(t._id,t).subscribe(function(){n()});break;default:if("Dynamic Form"!==(null==t?void 0:t.isDynamic))return;this.dynamicFormServise.editForm(t,t._id).subscribe(function(e){n()})}console.log(e.target.value),this.getSavedforms()}}]),t}(),L.\u0275fac=function(e){return new(e||L)(f["\u0275\u0275directiveInject"](h.a),f["\u0275\u0275directiveInject"](v),f["\u0275\u0275directiveInject"](g.c),f["\u0275\u0275directiveInject"](S.a),f["\u0275\u0275directiveInject"](y.f),f["\u0275\u0275directiveInject"](o.f),f["\u0275\u0275directiveInject"](b.a),f["\u0275\u0275directiveInject"](C.a),f["\u0275\u0275directiveInject"](E.a))},L.\u0275cmp=f["\u0275\u0275defineComponent"]({type:L,selectors:[["app-saved-forms"]],viewQuery:function(e,t){var n;1&e&&(f["\u0275\u0275viewQuery"](s.a,!0),f["\u0275\u0275viewQuery"](c.a,!0)),2&e&&(f["\u0275\u0275queryRefresh"](n=f["\u0275\u0275loadQuery"]())&&(t.paginator1=n.first),f["\u0275\u0275queryRefresh"](n=f["\u0275\u0275loadQuery"]())&&(t.sort=n.first))},decls:51,vars:10,consts:[[1,"col","ml-2","pt-3"],[1,"row",3,"formGroup"],[1,"col-3"],["matInput","","placeholder","Search","formControlName","searchInput",3,"type","keyup"],["input",""],["formControlName","searchSelect"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","",3,"click"],[1,""],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","formName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","formType"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","formFrequency"],["matColumnDef","Disable/Enable"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","Action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length","page"],[3,"value"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["aria-label","Default select example",1,"form-select","form-control",3,"value","change"],["value","daily"],["value","weekly"],["value","monthly"],["value","quaterly"],["value","halfYearly"],["value","yearly"],["value","onceOff"],["color","primary",3,"checked","change"],[2,"display","flex","justify-content","space-around"],["matTooltip","Edit",1,"material-icons",3,"click"],["matTooltip","print",1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"div",0),f["\u0275\u0275elementStart"](1,"h1"),f["\u0275\u0275text"](2,"All Saved Forms Table"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"div",1),f["\u0275\u0275elementStart"](4,"div",2),f["\u0275\u0275elementStart"](5,"mat-form-field"),f["\u0275\u0275elementStart"](6,"input",3,4),f["\u0275\u0275listener"]("keyup",function(e){return t.applyFilter(e)}),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"div",2),f["\u0275\u0275elementStart"](9,"mat-form-field"),f["\u0275\u0275elementStart"](10,"mat-select",5),f["\u0275\u0275elementStart"](11,"mat-option"),f["\u0275\u0275text"](12,"Clear"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](13,T,2,2,"mat-option",6),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](14,R,2,0,"mat-error",7),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](15,"div",2),f["\u0275\u0275elementStart"](16,"button",8),f["\u0275\u0275listener"]("click",function(){return t.search()}),f["\u0275\u0275text"](17,"Search"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](18,"div",2),f["\u0275\u0275elementStart"](19,"button",8),f["\u0275\u0275listener"]("click",function(){return t.reset()}),f["\u0275\u0275text"](20,"Reset Filter"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](21,"div",9),f["\u0275\u0275elementStart"](22,"table",10),f["\u0275\u0275elementContainerStart"](23,11),f["\u0275\u0275template"](24,j,2,0,"th",12),f["\u0275\u0275template"](25,_,2,1,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](26,14),f["\u0275\u0275template"](27,N,2,0,"th",12),f["\u0275\u0275template"](28,O,2,0,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](29,15),f["\u0275\u0275template"](30,q,2,0,"th",16),f["\u0275\u0275template"](31,z,2,1,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](32,17),f["\u0275\u0275template"](33,B,2,0,"th",16),f["\u0275\u0275template"](34,M,16,1,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](35,18),f["\u0275\u0275template"](36,P,2,0,"th",16),f["\u0275\u0275template"](37,H,2,1,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](38,19),f["\u0275\u0275template"](39,V,2,0,"th",12),f["\u0275\u0275template"](40,$,3,4,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](41,20),f["\u0275\u0275template"](42,Q,2,0,"th",12),f["\u0275\u0275template"](43,K,3,4,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275elementContainerStart"](44,21),f["\u0275\u0275template"](45,G,2,0,"th",16),f["\u0275\u0275template"](46,U,6,0,"td",13),f["\u0275\u0275elementContainerEnd"](),f["\u0275\u0275template"](47,W,1,0,"tr",22),f["\u0275\u0275template"](48,X,1,0,"tr",23),f["\u0275\u0275template"](49,J,3,0,"tr",24),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](50,"mat-paginator",25),f["\u0275\u0275listener"]("page",function(e){return t.paginator(e)}),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("formGroup",t.searchControl),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("type",t.f.searchSelect.value===t.selectArr[2].value||t.f.searchSelect.value===t.selectArr[3].value?"date":"text"),f["\u0275\u0275advance"](7),f["\u0275\u0275property"]("ngForOf",t.selectArr),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("ngIf",t.f.searchSelect.hasError("required")),f["\u0275\u0275advance"](8),f["\u0275\u0275property"]("dataSource",t.tempArray),f["\u0275\u0275advance"](25),f["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("pageSizeOptions",f["\u0275\u0275pureFunction0"](9,ee))("length",t.totalCount))},directives:[o.s,o.k,x.c,w.b,o.d,o.r,o.i,k.a,D.n,l.m,l.n,I.a,m.k,c.a,m.c,m.e,m.b,m.g,m.j,m.h,s.a,x.b,m.d,c.b,m.a,o.v,o.D,F.a,A.a,m.f,m.i],pipes:[l.e],styles:[".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007bff;font-size:21px!important}  .mat-sort-header-container{margin-left:47%!important}table[_ngcontent-%COMP%]{width:100%}.select[_ngcontent-%COMP%]{width:100%!important}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}"]}),L)}],ne=((Y=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:Y}),Y.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Y)},imports:[[y.j.forChild(te)],y.j]}),Y),ae=i("PCNd"),ie=((Z=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:Z}),Z.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Z)},imports:[[l.c,o.y,ae.a,ne]]}),Z)}}])}();