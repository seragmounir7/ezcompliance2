(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8df9":function(e,t,n){"use strict";n.r(t),n.d(t,"AdminSetupModule",function(){return J});var i=n("ofXK"),r=n("tyNb"),s=n("mrSG"),a=n("3Pt+"),o=n("0IaG"),l=n("+z1p"),d=n("IzEk"),c=n("lJxs"),p=n("VfN6"),m=n("fXoL"),u=n("wbBK"),h=n("zioG");function g(e,t){if(1&e&&m["\u0275\u0275element"](0,"ckeditor",6),2&e){const e=t.ngIf,n=m["\u0275\u0275nextContext"]();m["\u0275\u0275propertyInterpolate"]("data",e.termsAndCond),m["\u0275\u0275property"]("editor",n.Editor)("disabled",!0)}}let f=(()=>{let e=class{constructor(e,t,n,i,r){this.fb=e,this.router=t,this.logicalFormInfo=n,this.dialogRef=i,this.data=r,this.Editor=l,this.termsAndCond=new a.g}ngOnInit(){this.acknowledgment$=this.logicalFormInfo.getTermsAndConditions().pipe(Object(d.a)(1),Object(c.a)(e=>e[0]))}onFormSubmit(){this.dialogRef.close(!0)}};return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](a.f),m["\u0275\u0275directiveInject"](r.f),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](o.f),m["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-terms-and-conditions"]],decls:13,vars:3,consts:[[1,"container","px-4","py-4","bg-white"],[1,"text-center"],[1,"col"],["class","toolbarborder","style","width: 100%",3,"editor","disabled","data",4,"ngIf"],[1,"col-md-2"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"toolbarborder",2,"width","100%",3,"editor","disabled","data"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"form"),m["\u0275\u0275elementStart"](2,"h2",1),m["\u0275\u0275text"](3,"Acknowledgement"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"br"),m["\u0275\u0275element"](5,"hr"),m["\u0275\u0275elementStart"](6,"div",2),m["\u0275\u0275template"](7,g,1,3,"ckeditor",3),m["\u0275\u0275pipe"](8,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"br"),m["\u0275\u0275elementStart"](10,"div",4),m["\u0275\u0275elementStart"](11,"button",5),m["\u0275\u0275listener"]("click",function(){return t.onFormSubmit()}),m["\u0275\u0275text"](12," I Acknowledge "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngIf",m["\u0275\u0275pipeBind1"](8,1,t.acknowledgment$)))},directives:[a.E,a.s,a.t,i.n,h.a],pipes:[i.b],styles:[""]}),e=Object(s.b)([Object(p.a)({checkProperties:!0})],e),e})();var b=n("AjY1"),v=n("bH0Y"),S=n("xHqg"),x=n("YfJ4"),E=n("bTqV"),y=n("Qu3c"),I=n("9NQz"),D=n("m2BR"),F=n("pYHN"),w=n("45le");const L=["stepper"];function j(e,t){1&e&&m["\u0275\u0275text"](0,"Enter Company Details")}function C(e,t){1&e&&m["\u0275\u0275text"](0,"Add Roles")}function k(e,t){1&e&&m["\u0275\u0275text"](0,"Add Department")}function N(e,t){1&e&&m["\u0275\u0275text"](0,"Employee Details")}function O(e,t){1&e&&m["\u0275\u0275text"](0,"Add Sub Contractor")}const R=[{path:"",component:(()=>{let e=class{constructor(e,t,n,i,r){this._formBuilder=e,this.router=t,this.authService=n,this.changeDetectorRef=i,this.dialog=r,this.isEditable=!1,this.closed=!1}ngAfterViewInit(){this.authService.loginData$.subscribe(e=>{(null==e?void 0:e.designation)===b.a.clientAdmin&&(this.changeDetectorRef.detectChanges(),!1===(null==e?void 0:e.FirstLogin.step1)&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===(null==e?void 0:e.FirstLogin.step2)&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===(null==e?void 0:e.FirstLogin.step3)&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===(null==e?void 0:e.FirstLogin.step4)&&(this.stepper.selected.completed=!0,this.stepper.next()),!1===(null==e?void 0:e.FirstLogin.step5)&&(this.stepper.selected.completed=!0,this.stepper.next()))})}ngOnInit(){this.authService.loginData$.subscribe(e=>{(null==e?void 0:e.designation)===b.a.clientAdmin&&(null==e?void 0:e.FirstLogin.step1)&&!this.closed&&this.openDialog(),this.userData=e}),this.firstFormGroup=this._formBuilder.group({firstCtrl:["",a.C.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",a.C.required]})}updateFirstLogin(e){this.userData.FirstLogin[e]=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(t=>{"step5"===e&&this.setupComplete(),this.authService.nextLoginData(this.userData),sessionStorage.setItem("userData",JSON.stringify(this.userData)),sessionStorage.setItem("firstLogin",JSON.stringify(this.userData.FirstLogin))})}setupComplete(){this.userData.FirstLogin.firstLogin=!1,this.authService.updateFirstLogin(this.userData.FirstLogin).subscribe(e=>{sessionStorage.setItem("firstLogin",JSON.stringify(this.userData.FirstLogin)),sessionStorage.setItem("userData",JSON.stringify(this.userData)),this.authService.nextLoginData(this.userData)}),this.router.navigate(["/admin"])}openDialog(){try{this.dialog.open(f,{disableClose:!0}).afterClosed().subscribe(e=>{this.closed=e})}catch(e){console.error(e)}}};return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](a.f),m["\u0275\u0275directiveInject"](r.f),m["\u0275\u0275directiveInject"](v.a),m["\u0275\u0275directiveInject"](m.ChangeDetectorRef),m["\u0275\u0275directiveInject"](o.b))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-admin-setup"]],viewQuery:function(e,t){if(1&e&&m["\u0275\u0275viewQuery"](L,!0),2&e){let e;m["\u0275\u0275queryRefresh"](e=m["\u0275\u0275loadQuery"]())&&(t.stepper=e.first)}},decls:40,vars:2,consts:[[1,"d-flex","justify-content-end"],[1,"col-4","card","p-3","mr-4",2,"font-size","24px","text-align","center"],["stepper",""],["matStepLabel",""],[3,"isInvalid","updatedSuccessFull"],[1,"buttonDiv"],["matTooltip","Please Update Company Details","mat-raised-button","","matStepperNext","",3,"disabled","click"],[3,"isRoleInvaid"],["mat-raised-button","","matStepperNext","",3,"click"],[1,"shadow"],[3,"isEmpRegInvalid"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"mat-horizontal-stepper",null,2),m["\u0275\u0275elementStart"](5,"mat-step"),m["\u0275\u0275template"](6,j,1,0,"ng-template",3),m["\u0275\u0275elementStart"](7,"div"),m["\u0275\u0275elementStart"](8,"app-add-and-edit-company-info",4),m["\u0275\u0275listener"]("isInvalid",function(e){return t.companyInfoValid=e})("updatedSuccessFull",function(e){return t.updatedSuccessFull=e}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"div",5),m["\u0275\u0275elementStart"](10,"button",6),m["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step1")}),m["\u0275\u0275text"](11," Next "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"mat-step"),m["\u0275\u0275template"](13,C,1,0,"ng-template",3),m["\u0275\u0275elementStart"](14,"div"),m["\u0275\u0275elementStart"](15,"app-role-management",7),m["\u0275\u0275listener"]("isRoleInvaid",function(e){return t.isRoleInvaid=e}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"div",5),m["\u0275\u0275elementStart"](17,"button",8),m["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step2")}),m["\u0275\u0275text"](18," Next "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"mat-step"),m["\u0275\u0275template"](20,k,1,0,"ng-template",3),m["\u0275\u0275elementStart"](21,"div"),m["\u0275\u0275element"](22,"app-department"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](23,"div",5),m["\u0275\u0275elementStart"](24,"button",8),m["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step3")}),m["\u0275\u0275text"](25," Next "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](26,"mat-step"),m["\u0275\u0275template"](27,N,1,0,"ng-template",3),m["\u0275\u0275elementStart"](28,"div",9),m["\u0275\u0275elementStart"](29,"app-employee-registration",10),m["\u0275\u0275listener"]("isEmpRegInvalid",function(e){return t.isEmpRegInvalid=e}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"div",5),m["\u0275\u0275elementStart"](31,"button",8),m["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step4")}),m["\u0275\u0275text"](32," Next "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](33,"mat-step"),m["\u0275\u0275template"](34,O,1,0,"ng-template",3),m["\u0275\u0275elementStart"](35,"div",9),m["\u0275\u0275element"](36,"app-subcontract"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"div",5),m["\u0275\u0275elementStart"](38,"button",8),m["\u0275\u0275listener"]("click",function(){return t.updateFirstLogin("step5")}),m["\u0275\u0275text"](39," Goto DashBoard "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" Subscription Purchased For ",t.userData.employeePurchased||0," Employees "),m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("disabled",!t.updatedSuccessFull))},directives:[S.a,S.b,S.c,x.a,E.a,S.e,y.a,I.a,D.a,F.a,w.a],styles:[".shadow[_ngcontent-%COMP%]{box-shadow:0 6px 7px hsla(0,0%,50.2%,.25882352941176473)}  .mat-horizontal-stepper-header{pointer-events:none!important}.buttonDiv[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:2%}.buttonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:200px;box-shadow:inset;font-size:30px}"]}),e=Object(s.b)([Object(p.a)({checkProperties:!0})],e),e})()}];let A=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.j.forChild(R)],r.j]}),e})();var M=n("DNuw"),P=n("xd2E"),z=n("99tz");let J=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,A,S.d,M.RegistrationModule,P.RoleManagementModule,z.DepartmentModule,h.b]]}),e})()}}]);