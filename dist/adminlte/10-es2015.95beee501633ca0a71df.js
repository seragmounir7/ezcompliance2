(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8g75":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n("JX91"),r=n("lJxs"),i=n("AytR"),l=n("fXoL"),o=n("tk/3");let m=(()=>{class e{constructor(e){this.http=e}addDepartment(e){return this.http.post(i.a.apiUrl+"department/add",e)}updateDepartment(e,t){return this.http.put(`${i.a.apiUrl}department/update/${e}`,t)}deleteDepartment(e){return this.http.delete(`${i.a.apiUrl}department/delete/${e}`)}delete(){}getAllDepartment(){return this.http.get(i.a.apiUrl+"department/getAll")}getDepartmentNameAutocomplete(e,t,n){return e.controls[t].valueChanges.pipe(Object(a.a)(""),Object(r.a)(e=>"string"==typeof e?e:null==e?void 0:e.departmentName),Object(r.a)(e=>e?this._filterDepartmentName(e,n):n.slice()))}_filterDepartmentName(e,t){const n=e.toLowerCase();return t.filter(e=>e.departmentName.toLowerCase().includes(n))}displayFnDepartmentName(e){return e&&e.departmentName?e.departmentName:""}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](o.b))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"99tz":function(e,t,n){"use strict";n.r(t),n.d(t,"DepartmentModule",function(){return R});var a=n("ofXK"),r=n("tyNb"),i=n("Dh3D"),l=n("+0xr"),o=n("M9IT"),m=n("PSD3"),d=n.n(m),c=n("3Pt+"),s=n("fXoL"),p=n("0IaG"),u=n("8g75"),f=n("kmnG"),h=n("qFsG"),D=n("bTqV");let b=(()=>{class e{constructor(e,t){this.matDialogRef=e,this.departmentService=t,this.departmentName=new c.g("")}ngOnInit(){this.closeDialog=e=>{this.matDialogRef.close(e)}}addDepartment(){this.departmentService.addDepartment({departmentName:this.departmentName.value}).subscribe(e=>{this.closeDialog(!0)})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.f),s["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-department"]],decls:11,vars:2,consts:[["appearance","legacy",1,"example-full-width",2,"width","498px"],["matInput","",3,"formControl"],[1,"row"],[1,"col-sm-2","offset-8"],["mat-raised-button","",3,"click"],[1,"col-sm-2"],["mat-raised-button","",3,"disabled","click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2"),s["\u0275\u0275text"](1,"Department"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"mat-form-field",0),s["\u0275\u0275element"](3,"input",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275elementStart"](6,"button",4),s["\u0275\u0275listener"]("click",function(){return t.closeDialog(!1)}),s["\u0275\u0275text"](7,"Close"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",5),s["\u0275\u0275elementStart"](9,"button",6),s["\u0275\u0275listener"]("click",function(){return t.addDepartment()}),s["\u0275\u0275text"](10," Add "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("formControl",t.departmentName),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("disabled",!t.departmentName.valid))},directives:[f.c,h.b,c.d,c.r,c.h,D.a],styles:[""]}),e})();var g=n("p20J"),w=n("yZxC"),v=n("NFeN");function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",18),s["\u0275\u0275text"](1,"No."),s["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"td",19),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.index)}}function E(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",18),s["\u0275\u0275text"](1,"Name"),s["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"td",19),s["\u0275\u0275elementStart"](1,"input",20),s["\u0275\u0275listener"]("change",function(n){s["\u0275\u0275restoreView"](e);const a=t.$implicit,r=s["\u0275\u0275nextContext"]();return a.updatedValue=n.target.value,r.log(n.target.value)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",e.departmentName)("disabled",e.isDisabled)}}function x(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"th",21),s["\u0275\u0275text"](1,"Action"),s["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"td",22),s["\u0275\u0275elementStart"](1,"button",23),s["\u0275\u0275elementStart"](2,"mat-icon",24),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().edit(n),n.isDisabled=!n.isDisabled}),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"button",25),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().delete(n)}),s["\u0275\u0275elementStart"](5,"mat-icon",26),s["\u0275\u0275text"](6,"delete"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("matTooltip",e.isDisabled?"Edit":"Save"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.isDisabled?"edit":"save")}}function A(e,t){1&e&&s["\u0275\u0275element"](0,"tr",27)}function j(e,t){1&e&&s["\u0275\u0275element"](0,"tr",28)}function k(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tr",29),s["\u0275\u0275elementStart"](1,"td",30),s["\u0275\u0275text"](2,"Data Not Found"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}const I=function(){return[20]},T=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.snack=e,this.departmentService=t,this.dialog=n,this.setTitle=a,this.jobTaskData=[],this.ELEMENT_DATA=[],this.displayedColumns=["index","title","action"],this.dataSource=new l.l(this.ELEMENT_DATA)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.getAllDepartment(),this.setTitle.setTitle("WHS-Control And Action Required List")}getAllDepartment(e="",t=""){this.departmentService.getAllDepartment().subscribe(e=>{const t=e.data;t.forEach((e,t)=>{e.index=t+1}),this.ELEMENT_DATA=t.map(e=>Object.assign({},Object.assign(Object.assign({},e),{isDisabled:!0}))),this.dataSource=new l.l(this.ELEMENT_DATA),this.dataSource.paginator=this.paginator})}edit(e){e.isDisabled||e.title!==e.updatedValue&&this.departmentService.updateDepartment(e._id,{departmentName:e.updatedValue}).subscribe(e=>{this.getAllDepartment(),d.a.fire({title:"Parameter Edited successfully",showConfirmButton:!1,timer:1200})})}delete(e){d.a.fire({title:"Are you sure?",text:`Do you want to delete "${e.departmentName}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#00B96F",cancelButtonColor:"#d33",confirmButtonText:"Yes, Delete!"}).then(t=>{t.value&&this.departmentService.deleteDepartment(e._id).subscribe(e=>{d.a.fire({title:"Parameter Deleted successfully",showConfirmButton:!1,timer:1200}),this.getAllDepartment()})})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}copySuccess(){this.snack.openSnackBar("Copied to clipboard")}sortData(e){this.getAllDepartment(e.active,e.direction)}addDepartment(){this.dialog.open(b,{}).afterClosed().subscribe(e=>{e&&(d.a.fire({title:"Deparment Added successfully",showConfirmButton:!1,timer:1200}),this.getAllDepartment())})}log(e){console.log(e)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](g.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](p.b),s["\u0275\u0275directiveInject"](w.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-department"]],viewQuery:function(e,t){if(1&e&&(s["\u0275\u0275viewQuery"](o.a,!0),s["\u0275\u0275viewQuery"](i.a,!0)),2&e){let e;s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.paginator=e.first),s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.sort=e.first)}},decls:23,vars:5,consts:[[1,"col","ml-2","pt-3"],[1,"col","ml-2","mb-2"],[1,"btn","btn-outline-primary","mt-1","mr-2","float-right",3,"click"],[1,"fas","fa-folder-plus","mr-2"],[1,"col-6"],[1,""],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","index"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","action"],["mat-header-cell","","style","width: 10%",4,"matHeaderCellDef"],["mat-cell","","style","width: 15%",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"form-control",3,"value","disabled","change"],["mat-header-cell","",2,"width","10%"],["mat-cell","",2,"width","15%"],["mat-icon-button","","aria-label","Example icon button with a delete icon",1,"mr-2"],[3,"matTooltip","click"],["mat-icon-button","","aria-label","Example icon button with a delete icon",3,"click"],["matTooltip","Delete"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"h1"),s["\u0275\u0275text"](2,"Department List"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"button",2),s["\u0275\u0275listener"]("click",function(){return t.addDepartment()}),s["\u0275\u0275element"](5,"i",3),s["\u0275\u0275text"](6,"Add Department "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"div",4),s["\u0275\u0275elementStart"](8,"div",5),s["\u0275\u0275elementStart"](9,"table",6),s["\u0275\u0275listener"]("matSortChange",function(e){return t.sortData(e)}),s["\u0275\u0275elementContainerStart"](10,7),s["\u0275\u0275template"](11,S,2,0,"th",8),s["\u0275\u0275template"](12,C,2,1,"td",9),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](13,10),s["\u0275\u0275template"](14,E,2,0,"th",8),s["\u0275\u0275template"](15,y,2,2,"td",9),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275elementContainerStart"](16,11),s["\u0275\u0275template"](17,x,2,0,"th",12),s["\u0275\u0275template"](18,N,7,2,"td",13),s["\u0275\u0275elementContainerEnd"](),s["\u0275\u0275template"](19,A,1,0,"tr",14),s["\u0275\u0275template"](20,j,1,0,"tr",15),s["\u0275\u0275template"](21,k,3,0,"tr",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](22,"mat-paginator",17),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](9),s["\u0275\u0275property"]("dataSource",t.dataSource),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("pageSizeOptions",s["\u0275\u0275pureFunction0"](4,I)))},directives:[l.k,i.a,l.c,l.e,l.b,l.g,l.j,l.h,o.a,l.d,i.b,l.a,D.a,v.a,l.f,l.i],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.j.forChild(T)],r.j]}),e})(),R=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.m,c.y,L,l.m,D.b,v.b,o.b,i.c,f.e,h.c]]}),e})()}}]);