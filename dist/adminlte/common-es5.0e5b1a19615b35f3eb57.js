!function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"99tz":function(e,t,a){"use strict";a.r(t),a.d(t,"DepartmentModule",function(){return S});var i,r,l=a("SVse"),o=a("iInd"),c=a("m2BR"),m=a("8Y7J"),d=[{path:"",component:c.a}],u=((i=function e(){n(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[o.j.forChild(d)],o.j]}),i),s=a("OaSA"),p=a("Dxy4"),f=a("Tj54"),v=a("5QHs"),h=a("LUZP"),b=a("Q2Ze"),y=a("e6WT"),D=a("s7LF"),S=((r=function e(){n(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[l.c,D.m,D.y,u,s.m,p.b,f.b,v.b,h.c,b.e,y.c]]}),r)},m2BR:function(e,a,i){"use strict";i.d(a,"a",function(){return L});var r,l=i("LUZP"),o=i("OaSA"),c=i("5QHs"),m=i("PSD3"),d=i.n(m),u=i("s7LF"),s=i("8Y7J"),p=i("iELJ"),f=i("8g75"),v=i("Q2Ze"),h=i("e6WT"),b=i("Dxy4"),y=((r=function(){function e(t,a){n(this,e),this.matDialogRef=t,this.departmentService=a,this.departmentName=new u.g("")}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.closeDialog=function(t){e.matDialogRef.close(t)}}},{key:"addDepartment",value:function(){var e=this;this.departmentService.addDepartment({departmentName:this.departmentName.value}).subscribe(function(t){e.closeDialog(!0)})}}]),e}()).\u0275fac=function(e){return new(e||r)(s["\u0275\u0275directiveInject"](p.f),s["\u0275\u0275directiveInject"](f.a))},r.\u0275cmp=s["\u0275\u0275defineComponent"]({type:r,selectors:[["app-add-department"]],decls:11,vars:2,consts:[["appearance","legacy",1,"example-full-width",2,"width","498px"],["matInput","",3,"formControl"],[1,"row"],[1,"col-sm-2","offset-8"],["mat-raised-button","",3,"click"],[1,"col-sm-2"],["mat-raised-button","",3,"disabled","click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2"),s["\u0275\u0275text"](1,"Department"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"mat-form-field",0),s["\u0275\u0275element"](3,"input",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275elementStart"](6,"button",4),s["\u0275\u0275listener"]("click",function(){return t.closeDialog(!1)}),s["\u0275\u0275text"](7,"Close"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",5),s["\u0275\u0275elementStart"](9,"button",6),s["\u0275\u0275listener"]("click",function(){return t.addDepartment()}),s["\u0275\u0275text"](10," Add "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("formControl",t.departmentName),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("disabled",!t.departmentName.valid))},directives:[v.c,h.b,u.d,u.r,u.h,b.a],styles:[""]}),r),D=i("p20J"),S=i("yZxC"),w=i("Tj54");function g(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",18),s["\u0275\u0275text"](1,"No."),s["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",19),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.index)}}function C(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",18),s["\u0275\u0275text"](1,"Name"),s["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"td",19),s["\u0275\u0275elementStart"](1,"input",20),s["\u0275\u0275listener"]("change",function(e){s["\u0275\u0275restoreView"](n);var a=t.$implicit,i=s["\u0275\u0275nextContext"]();return a.updatedValue=e.target.value,i.log(e.target.value)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",a.departmentName)("disabled",a.isDisabled)}}function x(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",21),s["\u0275\u0275text"](1,"Action"),s["\u0275\u0275elementEnd"]())}function A(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"td",22),s["\u0275\u0275elementStart"](1,"button",23),s["\u0275\u0275elementStart"](2,"mat-icon",24),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"]().edit(e),e.isDisabled=!e.isDisabled}),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"button",25),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"]().delete(e)}),s["\u0275\u0275elementStart"](5,"mat-icon",26),s["\u0275\u0275text"](6,"delete"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("matTooltip",a.isDisabled?"Edit":"Save"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](a.isDisabled?"edit":"save")}}function j(e,t){1&e&&s["\u0275\u0275element"](0,"tr",27)}function T(e,t){1&e&&s["\u0275\u0275element"](0,"tr",28)}function N(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tr",29),s["\u0275\u0275elementStart"](1,"td",30),s["\u0275\u0275text"](2,"Data Not Found"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}var I,B=function(){return[20]},L=((I=function(){function e(t,a,i,r){n(this,e),this.snack=t,this.departmentService=a,this.dialog=i,this.setTitle=r,this.jobTaskData=[],this.ELEMENT_DATA=[],this.displayedColumns=["index","title","action"],this.dataSource=new o.l(this.ELEMENT_DATA)}return t(e,[{key:"ngAfterViewInit",value:function(){this.dataSource.paginator=this.paginator}},{key:"ngOnInit",value:function(){this.getAllDepartment(),this.setTitle.setTitle("WHS-Control And Action Required List")}},{key:"getAllDepartment",value:function(){var e=this;this.departmentService.getAllDepartment().subscribe(function(t){var n=t.data;n.forEach(function(e,t){e.index=t+1}),e.ELEMENT_DATA=n.map(function(e){return Object.assign({},Object.assign(Object.assign({},e),{isDisabled:!0}))}),e.dataSource=new o.l(e.ELEMENT_DATA),e.dataSource.paginator=e.paginator})}},{key:"edit",value:function(e){var t=this;e.isDisabled||e.title!==e.updatedValue&&this.departmentService.updateDepartment(e._id,{departmentName:e.updatedValue}).subscribe(function(e){t.getAllDepartment(),d.a.fire({title:"Parameter Edited successfully",showConfirmButton:!1,timer:1200})})}},{key:"delete",value:function(e){var t=this;d.a.fire({title:"Are you sure?",text:'Do you want to delete "'.concat(e.departmentName,'"?'),icon:"warning",showCancelButton:!0,confirmButtonColor:"#00B96F",cancelButtonColor:"#d33",confirmButtonText:"Yes, Delete!"}).then(function(n){n.value&&t.departmentService.deleteDepartment(e._id).subscribe(function(e){d.a.fire({title:"Parameter Deleted successfully",showConfirmButton:!1,timer:1200}),t.getAllDepartment()})})}},{key:"applyFilter",value:function(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}},{key:"copySuccess",value:function(){this.snack.openSnackBar("Copied to clipboard")}},{key:"sortData",value:function(e){this.getAllDepartment(e.active,e.direction)}},{key:"addDepartment",value:function(){var e=this;this.dialog.open(y,{}).afterClosed().subscribe(function(t){t&&(d.a.fire({title:"Deparment Added successfully",showConfirmButton:!1,timer:1200}),e.getAllDepartment())})}},{key:"log",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||I)(s["\u0275\u0275directiveInject"](D.a),s["\u0275\u0275directiveInject"](f.a),s["\u0275\u0275directiveInject"](p.b),s["\u0275\u0275directiveInject"](S.a))},I.\u0275cmp=s["\u0275\u0275defineComponent"]({type:I,selectors:[["app-department"]],viewQuery:function(e,t){var n;1&e&&(s["\u0275\u0275viewQuery"](c.a,!0),s["\u0275\u0275viewQuery"](l.a,!0)),2&e&&(s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.paginator=n.first),s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.sort=n.first))},decls:23,vars:5,consts:[[1,"col","ml-2","pt-3"],[1,"col","ml-2","mb-2"],[1,"btn","btn-outline-primary","mt-1","mr-2","float-right",3,"click"],[1,"fas","fa-folder-plus","mr-2"],[1,"col-6"],[1,""],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","index"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","action"],["mat-header-cell","","style","width: 10%",4,"matHeaderCellDef"],["mat-cell","","style","width: 15%",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"form-control",3,"value","disabled","change"],["mat-header-cell","",2,"width","10%"],["mat-cell","",2,"width","15%"],["mat-icon-button","","aria-label","Example icon button with a delete icon",1,"mr-2"],[3,"matTooltip","click"],["mat-icon-button","","aria-label","Example icon button with a delete icon",3,"click"],["matTooltip","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"h1"),s["\u0275\u0275text"](2,"Department List"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"button",2),s["\u0275\u0275listener"]("click",function(){return t.addDepartment()}),s["\u0275\u0275element"](5,"i",3),s["\u0275\u0275text"](6,"Add Department "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"div",4),s["\u0275\u0275elementStart"](8,"div",5),s["\u0275\u0275elementStart"](9,"table",6),s["\u0275\u0275listener"]("matSortChange",function(e){return t.sortData(e)}),s["\u0275\u0275elementContainerStart"](10,7),s["\u0275\u0275template"](11,g,2,0,"th",8),s["\u0275\u0275template"](12,E,2,1,"td",9),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](13,10),s["\u0275\u0275template"](14,C,2,0,"th",8),s["\u0275\u0275template"](15,k,2,2,"td",9),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](16,11),s["\u0275\u0275template"](17,x,2,0,"th",12),s["\u0275\u0275template"](18,A,7,2,"td",13),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275template"](19,j,1,0,"tr",14),s["\u0275\u0275template"](20,T,1,0,"tr",15),s["\u0275\u0275template"](21,N,3,0,"tr",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](22,"mat-paginator",17),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](9),s["\u0275\u0275property"]("dataSource",t.dataSource),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("pageSizeOptions",s["\u0275\u0275pureFunction0"](4,B)))},directives:[o.k,l.a,o.c,o.e,o.b,o.g,o.j,o.h,c.a,o.d,l.b,o.a,b.a,w.a,o.f,o.i],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),I)},p20J:function(e,a,i){"use strict";i.d(a,"a",function(){return o}),i("mrSG"),i("VfN6");var r=i("8Y7J"),l=i("zHaW"),o=function(){var e=function(){function e(t){n(this,e),this.snackbar=t}return t(e,[{key:"openSnackBar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"close";return this.snackbar.open(e,t,{duration:3e3,horizontalPosition:"right"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](l.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();