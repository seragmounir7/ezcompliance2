(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/biI":function(t,e,n){"use strict";n.r(e),n.d(e,"SuperAdminModule",function(){return tt});var a=n("SVse"),i=n("iInd"),l=n("mrSG"),r=n("GS7A"),o=n("OaSA"),m=(n("LRne"),n("vkgz")),c=n("eIep"),d=n("lJxs"),s=n("JX91"),p=n("t9Qp"),u=n("VfN6"),f=n("s7LF"),h=n("8Y7J"),C=n("AytR"),b=n("IheW");let S=(()=>{class t{constructor(t){this.http=t}getAllClientAdmin(){return this.http.get(C.a.apiUrl+"authentication/superAdmin/getAll/clientAdmin").pipe(Object(d.a)(t=>t.data.map(t=>(t.status===g.Deleted&&(t.status=g.Deactivated),t))))}getAllUserByClientAdmin(t){return this.http.get(`${C.a.apiUrl}authentication/superAdmin/getAll/users/by/clientAdmin/${t}`).pipe(Object(d.a)(t=>t.data))}getAllSubContractorsByClientAdmin(t){return this.http.get(`${C.a.apiUrl}authentication/superAdmin/getAll/subContractors/by/clientAdmin/${t}`).pipe(Object(d.a)(t=>t.data))}}return t.\u0275fac=function(e){return new(e||t)(h["\u0275\u0275inject"](b.b))},t.\u0275prov=h["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=function(t){return t.Active="active",t.Deleted="deleted",t.Deactivated="deactivated",t}({}),x=n("vSmY"),w=n("Q2Ze"),v=n("e6WT"),E=n("5QHs"),j=n("Dxy4"),A=n("ZFy/"),y=n("Tj54");function O(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Company Name"),h["\u0275\u0275elementEnd"]())}function D(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",t.companydetail[0].companyName," ")}}function I(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"isEmailVerified"),h["\u0275\u0275elementEnd"]())}function N(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",t.isEmailVerified," ")}}function $(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"FirstName"),h["\u0275\u0275elementEnd"]())}function L(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.firstName)}}function k(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Status"),h["\u0275\u0275elementEnd"]())}function _(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.status)}}function V(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"lastName"),h["\u0275\u0275elementEnd"]())}function M(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.lastName)}}function R(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Email"),h["\u0275\u0275elementEnd"]())}function P(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.email)}}function U(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Mobile Number"),h["\u0275\u0275elementEnd"]())}function F(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.mobileNumber)}}function T(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Designation"),h["\u0275\u0275elementEnd"]())}function B(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.designation)}}function z(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"th",22),h["\u0275\u0275text"](1,"Action"),h["\u0275\u0275elementEnd"]())}function H(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"td",23),h["\u0275\u0275elementStart"](1,"div",24),h["\u0275\u0275elementStart"](2,"button",25),h["\u0275\u0275listener"]("click",function(){h["\u0275\u0275restoreView"](t);const n=e.$implicit;return h["\u0275\u0275nextContext"](2).userList(n._id)}),h["\u0275\u0275elementStart"](3,"mat-icon"),h["\u0275\u0275text"](4," format_list_bulleted "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"button",26),h["\u0275\u0275listener"]("click",function(){h["\u0275\u0275restoreView"](t);const n=e.$implicit;return h["\u0275\u0275nextContext"](2).subcontractorList(n._id)}),h["\u0275\u0275elementStart"](6,"mat-icon"),h["\u0275\u0275text"](7," format_list_bulleted "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}}function J(t,e){1&t&&h["\u0275\u0275element"](0,"tr",27)}function Q(t,e){1&t&&h["\u0275\u0275element"](0,"tr",28)}function G(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"tr",29),h["\u0275\u0275elementStart"](1,"td",30),h["\u0275\u0275text"](2,"Data Not Found"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}function W(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"table",7),h["\u0275\u0275listener"]("matSortChange",function(e){return h["\u0275\u0275restoreView"](t),h["\u0275\u0275nextContext"]().sortData(e)}),h["\u0275\u0275elementContainerStart"](1,8),h["\u0275\u0275template"](2,O,2,0,"th",9),h["\u0275\u0275template"](3,D,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](4,11),h["\u0275\u0275template"](5,I,2,0,"th",9),h["\u0275\u0275template"](6,N,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](7,12),h["\u0275\u0275template"](8,$,2,0,"th",9),h["\u0275\u0275template"](9,L,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](10,13),h["\u0275\u0275template"](11,k,2,0,"th",9),h["\u0275\u0275template"](12,_,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](13,14),h["\u0275\u0275template"](14,V,2,0,"th",9),h["\u0275\u0275template"](15,M,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](16,15),h["\u0275\u0275template"](17,R,2,0,"th",9),h["\u0275\u0275template"](18,P,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](19,16),h["\u0275\u0275template"](20,U,2,0,"th",9),h["\u0275\u0275template"](21,F,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](22,17),h["\u0275\u0275template"](23,T,2,0,"th",9),h["\u0275\u0275template"](24,B,2,1,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275elementContainerStart"](25,18),h["\u0275\u0275template"](26,z,2,0,"th",9),h["\u0275\u0275template"](27,H,8,0,"td",10),h["\u0275\u0275elementContainerEnd"](),h["\u0275\u0275template"](28,J,1,0,"tr",19),h["\u0275\u0275template"](29,Q,1,0,"tr",20),h["\u0275\u0275template"](30,G,3,0,"tr",21),h["\u0275\u0275elementEnd"]()}if(2&t){const t=e.ngIf,n=h["\u0275\u0275nextContext"]();h["\u0275\u0275property"]("dataSource",t),h["\u0275\u0275advance"](28),h["\u0275\u0275property"]("matHeaderRowDef",n.displayedColumns),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("matRowDefColumns",n.displayedColumns)}}const Y=function(){return[20]};let Z=(()=>{let t=class{constructor(t,e,n,a){this.superAuth=t,this.activatedRoute=e,this.router=n,this.changeDetectorRef=a,this.searchControl=new f.g(""),this.displayedColumns=["designation","companyName","email","mobileNumber","isEmailVerified","status","action"],this.userDetailsColoumns=["designation","email","mobileNumber","firstName","lastName","isEmailVerified","status"]}ngOnInit(){this.dataSource=this.activatedRoute.params.pipe(Object(m.a)(t=>{this.title=t.value?t.value.toUpperCase():p.a.clientList.toUpperCase(),this.changeDetectorRef.detectChanges()}),Object(c.a)(t=>{switch(null==t?void 0:t.value){case p.a.clientList:return this.superAuth.getAllClientAdmin().pipe(Object(d.a)(t=>new o.l(t)));case p.a.userList:return this.displayedColumns=this.userDetailsColoumns,this.superAuth.getAllUserByClientAdmin(atob(t.id)).pipe(Object(d.a)(t=>new o.l(t)));case p.a.subcontractorList:return this.superAuth.getAllSubContractorsByClientAdmin(atob(t.id)).pipe(Object(d.a)(t=>new o.l(t)));default:return this.superAuth.getAllClientAdmin().pipe(Object(d.a)(t=>new o.l(t)))}}),Object(c.a)(t=>this.searchControl.valueChanges.pipe(Object(s.a)(""),Object(d.a)(e=>(t.filter=e.trim().toLowerCase(),t)))))}getUserData(t){}userList(t){this.router.navigate([`admin/superadmin/${p.a.clientList}/${p.a.userList}/${btoa(t)}`])}subcontractorList(t){this.router.navigate([`admin/superadmin/${p.a.clientList}/${p.a.subcontractorList}/${btoa(t)}`])}};return t.\u0275fac=function(e){return new(e||t)(h["\u0275\u0275directiveInject"](S),h["\u0275\u0275directiveInject"](i.a),h["\u0275\u0275directiveInject"](i.f),h["\u0275\u0275directiveInject"](h.ChangeDetectorRef))},t.\u0275cmp=h["\u0275\u0275defineComponent"]({type:t,selectors:[["app-client-admin-list"]],decls:13,vars:7,consts:[["backbutton","",1,"btn","btn-outline-primary"],["aria-hidden","true",1,"fa","fa-arrow-left"],[1,"col","ml-2","pt-3"],[1,""],["matInput","","placeholder","Ex. ium",3,"formControl"],["mat-table","","matSort","",3,"dataSource","matSortChange",4,"ngIf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","companyName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","isEmailVerified"],["matColumnDef","firstName"],["matColumnDef","status"],["matColumnDef","lastName"],["matColumnDef","email"],["matColumnDef","mobileNumber"],["matColumnDef","designation"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],[2,"display","flex","justify-content","space-around"],["mat-icon-button","","matTooltip","View User Associated with This Client Admin",3,"click"],["mat-icon-button","","matTooltip","View SubContractor Associated with This Client Admin",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"div",0),h["\u0275\u0275element"](1,"i",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](2,"div",2),h["\u0275\u0275elementStart"](3,"h1"),h["\u0275\u0275text"](4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"div",3),h["\u0275\u0275elementStart"](6,"mat-form-field"),h["\u0275\u0275elementStart"](7,"mat-label"),h["\u0275\u0275text"](8,"Filter"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](9,"input",4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](10,W,31,3,"table",5),h["\u0275\u0275pipe"](11,"async"),h["\u0275\u0275element"](12,"mat-paginator",6),h["\u0275\u0275elementEnd"]()),2&t&&(h["\u0275\u0275advance"](4),h["\u0275\u0275textInterpolate"](e.title),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("formControl",e.searchControl),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",h["\u0275\u0275pipeBind1"](11,4,e.dataSource)),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("pageSizeOptions",h["\u0275\u0275pureFunction0"](6,Y)))},directives:[x.a,w.c,w.f,v.b,f.d,f.r,f.h,a.n,E.a,o.k,o.c,o.e,o.b,o.g,o.j,o.h,o.d,o.a,j.a,A.a,y.a,o.f,o.i],pipes:[a.b],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}tr.example-detail-row[_ngcontent-%COMP%]{height:0}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active{background:#efefef}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.example-element-description[_ngcontent-%COMP%]{width:100%;padding:16px}"],data:{animation:[Object(r.m)("detailExpand",[Object(r.j)("collapsed",Object(r.k)({height:"0px",minHeight:"0"})),Object(r.j)("expanded",Object(r.k)({height:"*"})),Object(r.l)("expanded <=> collapsed",Object(r.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t=Object(l.b)([Object(u.a)({checkProperties:!0})],t),t})();const X=[{path:""+p.a.clientList,component:Z},{path:p.a.clientList+"/:value/:id",component:Z}];let q=(()=>{class t{}return t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.j.forChild(X)],i.j]}),t})();var K=n("Tnig");let tt=(()=>{class t{}return t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,f.y,q,o.m,E.b,y.b,A.b,K.a,w.e,v.c,j.b]]}),t})()}}]);