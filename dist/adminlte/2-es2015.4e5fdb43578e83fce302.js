(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2X0P":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("0IaG"),o=n("PSD3"),l=n.n(o),i=n("fXoL"),a=n("3Pt+"),m=n("wbBK"),s=n("ofXK");function d(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",18),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.title," ")}}let c=(()=>{class e{constructor(e,t,n,r){this.dialogRef=e,this.data=t,this.fb=n,this.logicalFormInfoService=r,this.allState=[]}ngOnInit(){this.editSitesForm=this.fb.group({siteName:[this.data.siteName],streetNumber:[this.data.streetNumber],streetAddress:[this.data.streetAddress],suburb:[this.data.suburb],postcode:[this.data.postcode],stateId:[this.data.stateId._id]}),this.getAllStates()}onSubmit(){console.log(this.editSitesForm.value),this.logicalFormInfoService.updateSite(this.data._id,this.editSitesForm.value).subscribe(e=>{console.log(e),this.dialogRef.close("true"),l.a.fire({title:"Site Edited successfully",showConfirmButton:!1,timer:1200}),this.ngOnInit()})}close(){this.dialogRef.close()}getAllStates(){this.logicalFormInfoService.getAllStates().subscribe(e=>{console.log("getAllStates=>",e),this.allState=e.data})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.f),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-edit-site"]],decls:38,vars:2,consts:[[3,"formGroup"],["mat-dialog-title","",1,"dialog-title"],["type","button","aria-label","Close",1,"close",2,"font-size","30px",3,"click"],["aria-hidden","true"],[1,"row"],[1,"my-3","col-6"],["for","exampleFormControlInput1",1,"form-Label"],["type","text","formControlName","siteName","id","siteName",1,"form-control"],[1,"my-3","col-4"],["type","text","formControlName","streetAddress","id","streetAddress",1,"form-control"],["type","text","formControlName","suburb","id","suburb",1,"form-control"],["for","exampleFormControlInput1",1,"form-label"],["id","stateId","aria-label","Default select example","formControlName","stateId",1,"form-select","form-control","col"],["selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],[1,"my-3","col-3"],["type","text","id","postcode","formControlName","postcode",1,"form-control"],[1,"btn","btn-primary",3,"click"],[3,"value"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"section",0),i["\u0275\u0275elementStart"](1,"div"),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"h2"),i["\u0275\u0275text"](4,"Update Site Information"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"button",2),i["\u0275\u0275listener"]("click",function(){return t.close()}),i["\u0275\u0275elementStart"](6,"span",3),i["\u0275\u0275text"](7,"\xd7"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](8,"hr"),i["\u0275\u0275elementStart"](9,"div",4),i["\u0275\u0275elementStart"](10,"div",5),i["\u0275\u0275elementStart"](11,"p",6),i["\u0275\u0275text"](12," Site Name "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](13,"input",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",4),i["\u0275\u0275elementStart"](15,"div",8),i["\u0275\u0275elementStart"](16,"p",6),i["\u0275\u0275text"](17," Street Address "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](18,"textarea",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"div",8),i["\u0275\u0275elementStart"](20,"p",6),i["\u0275\u0275text"](21,"Suburb"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](22,"textarea",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"div",8),i["\u0275\u0275elementStart"](24,"p",11),i["\u0275\u0275text"](25,"State"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"select",12),i["\u0275\u0275elementStart"](27,"option",13),i["\u0275\u0275text"](28,"Select"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](29,d,2,2,"option",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](30,"div",15),i["\u0275\u0275elementStart"](31,"p",6),i["\u0275\u0275text"](32," Postal Code "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](33,"input",16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](34,"hr"),i["\u0275\u0275elementStart"](35,"div"),i["\u0275\u0275elementStart"](36,"button",17),i["\u0275\u0275listener"]("click",function(){return t.onSubmit()}),i["\u0275\u0275text"](37,"Update"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("formGroup",t.editSitesForm),i["\u0275\u0275advance"](29),i["\u0275\u0275property"]("ngForOf",t.allState))},directives:[a.s,a.k,r.g,a.d,a.r,a.i,a.A,a.v,a.D,s.m],styles:["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label){font-weight:500}input[_ngcontent-%COMP%]:focus{border:2px solid #1e90ff}label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif}.form-control[_ngcontent-%COMP%]:hover{border-color:rgba(46,105,255,.5);box-shadow:0 0 0 2px rgba(46,105,255,.25)}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}.container[_ngcontent-%COMP%]{background-color:#fff}.form-Label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif;width:100%;margin-left:2px;margin-bottom:14px}.sign[_ngcontent-%COMP%]{padding:10px;border:1px solid rgba(46,105,255,.5);width:500px;border-radius:5px}.sign[_ngcontent-%COMP%]:hover{border:1px solid rgba(46,105,255,.25098039215686274);box-shadow:0 0 0 3px rgba(46,105,255,.25)}.imgStyle[_ngcontent-%COMP%]{border:2px solid rgba(46,105,255,.25098039215686274);border-radius:10px}.example-additional-selection[_ngcontent-%COMP%]{opacity:.75;font-size:.75em}table[_ngcontent-%COMP%]{width:100%}.dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),e})()},"2xAX":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("3Pt+"),o=n("0IaG"),l=n("PSD3"),i=n.n(l),a=n("fXoL"),m=n("wbBK"),s=n("5eqV"),d=n("ofXK");function c(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"option",18),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275property"]("value",e._id),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.title," ")}}let u=(()=>{class e{constructor(e,t,n,r){this.dialogRef=e,this.data=t,this.fb=n,this.logicalFormInfoService=r,this.allState=[]}ngOnInit(){this.getAllStates(),this.addSitesForm=this.fb.group({siteName:["",r.C.required],streetAddress:["",r.C.required],suburb:["",r.C.required],postcode:["",r.C.required],stateId:["",r.C.required]})}getAllStates(){this.logicalFormInfoService.getAllStates().subscribe(e=>{console.log("getAllStates=>",e),this.allState=e.data})}onSubmit(){console.log(this.addSitesForm.value),this.logicalFormInfoService.addSite(this.addSitesForm.value).subscribe(e=>{console.log(e),this.dialogRef.close("true"),i.a.fire({title:"Site Added successfully",showConfirmButton:!1,timer:1200})})}close(){this.dialogRef.close()}calcHeight(e){this.numberOfLineBreaks=(e.match(/\n/g)||[]).length+1,console.log("numberOfLineBreaks",this.numberOfLineBreaks)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](o.f),a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](r.f),a["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-site"]],decls:38,vars:4,consts:[[3,"formGroup"],["mat-dialog-title","",1,"dialog-title"],["type","button","aria-label","Close",1,"close",2,"font-size","30px",3,"click"],["aria-hidden","true"],[1,"row",3,"formGroup"],[1,"my-3","col-6"],["for","exampleFormControlInput1",1,"form-Label"],["type","text","formControlName","siteName","id","siteName",1,"form-control"],[1,"row"],[1,"my-3","col-3"],["autosize","","type","text","formControlName","streetAddress","id","streetAddress",1,"form-control"],["autosize","","type","text","formControlName","suburb","id","suburb",1,"form-control"],["for","exampleFormControlInput1",1,"form-label"],["id","stateId","aria-label","Default select example","formControlName","stateId",1,"form-select","form-control","col"],["selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["type","text","id","postcode","formControlName","postcode",1,"form-control"],[1,"btn","btn-primary",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"section",0),a["\u0275\u0275elementStart"](1,"div"),a["\u0275\u0275elementStart"](2,"div",1),a["\u0275\u0275elementStart"](3,"h2"),a["\u0275\u0275text"](4,"Add Site Information"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"button",2),a["\u0275\u0275listener"]("click",function(){return t.close()}),a["\u0275\u0275elementStart"](6,"span",3),a["\u0275\u0275text"](7,"\xd7"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](8,"hr"),a["\u0275\u0275elementStart"](9,"div",4),a["\u0275\u0275elementStart"](10,"div",5),a["\u0275\u0275elementStart"](11,"p",6),a["\u0275\u0275text"](12," Site Name "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](13,"input",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",8),a["\u0275\u0275elementStart"](15,"div",9),a["\u0275\u0275elementStart"](16,"p",6),a["\u0275\u0275text"](17," Street Address "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](18,"textarea",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",9),a["\u0275\u0275elementStart"](20,"p",6),a["\u0275\u0275text"](21,"Suburb"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](22,"textarea",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div",9),a["\u0275\u0275elementStart"](24,"p",12),a["\u0275\u0275text"](25,"State"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](26,"select",13),a["\u0275\u0275elementStart"](27,"option",14),a["\u0275\u0275text"](28,"Select"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](29,c,2,2,"option",15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](30,"div",9),a["\u0275\u0275elementStart"](31,"p",6),a["\u0275\u0275text"](32," PostCode "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](33,"input",16),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](34,"hr"),a["\u0275\u0275elementStart"](35,"div"),a["\u0275\u0275elementStart"](36,"button",17),a["\u0275\u0275listener"]("click",function(){return t.onSubmit()}),a["\u0275\u0275text"](37," Add "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("formGroup",t.addSitesForm),a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("formGroup",t.addSitesForm),a["\u0275\u0275advance"](20),a["\u0275\u0275property"]("ngForOf",t.allState),a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("disabled",t.addSitesForm.invalid))},directives:[r.s,r.k,o.g,r.d,r.r,r.i,s.a,r.A,r.v,r.D,d.m],styles:["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label){font-weight:500}input[_ngcontent-%COMP%]:focus{border:2px solid #1e90ff}label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif}.form-control[_ngcontent-%COMP%]:hover{border-color:rgba(46,105,255,.5);box-shadow:0 0 0 2px rgba(46,105,255,.25)}.pt-3[_ngcontent-%COMP%]{display:inline-block;font-size:32px;font-weight:700;word-break:break-word;font-family:Inter,sans-serif}.container[_ngcontent-%COMP%]{background-color:#fff}.form-Label[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:500;word-break:break-word;font-family:Inter,sans-serif;width:100%;margin-left:2px;margin-bottom:14px}.sign[_ngcontent-%COMP%]{padding:10px;border:1px solid rgba(46,105,255,.5);width:500px;border-radius:5px}.sign[_ngcontent-%COMP%]:hover{border:1px solid rgba(46,105,255,.25098039215686274);box-shadow:0 0 0 3px rgba(46,105,255,.25)}.imgStyle[_ngcontent-%COMP%]{border:2px solid rgba(46,105,255,.25098039215686274);border-radius:10px}.example-additional-selection[_ngcontent-%COMP%]{opacity:.75;font-size:.75em}table[_ngcontent-%COMP%]{width:100%}.dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),e})()},Sgjq:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("3Pt+"),o=n("fXoL"),l=n("wbBK"),i=n("tyNb"),a=n("0IaG"),m=n("ofXK"),s=n("5eqV");const d=function(){return["/admin/siteInfo/addCustomer"]};function c(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",18),o["\u0275\u0275element"](1,"i",19),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("routerLink",o["\u0275\u0275pureFunction0"](1,d))}function u(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",20),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275property"]("value",e._id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.title," ")}}function f(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementContainerStart"](0,21),o["\u0275\u0275elementStart"](1,"div"),o["\u0275\u0275elementStart"](2,"h1"),o["\u0275\u0275text"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",3),o["\u0275\u0275elementStart"](5,"div",22),o["\u0275\u0275elementStart"](6,"p",5),o["\u0275\u0275text"](7," Position "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"input",23),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"div",22),o["\u0275\u0275elementStart"](10,"p",5),o["\u0275\u0275text"](11," Email "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](12,"input",24),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"div",22),o["\u0275\u0275elementStart"](14,"p",5),o["\u0275\u0275text"](15," Phone Number "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](16,"input",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"div",26),o["\u0275\u0275elementStart"](18,"span",27),o["\u0275\u0275listener"]("click",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().addCustomerDetails()}),o["\u0275\u0275text"](19,"add_circle_outline "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"div",26),o["\u0275\u0275elementStart"](21,"span",27),o["\u0275\u0275listener"]("click",function(){o["\u0275\u0275restoreView"](e);const n=t.index;return o["\u0275\u0275nextContext"]().removeCustomerDetails(n)}),o["\u0275\u0275text"](22," remove_circle_outline "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](23,"hr"),o["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=t.index;o["\u0275\u0275property"]("formGroupName",e),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("Contact ",e+1,"")}}let p=(()=>{class e{constructor(e,t,n,r){this.fb=e,this.logicalFormInfoService=t,this.router=n,this.dialogRef=r,this.StatesData=[""]}ngOnInit(){this.addCustomerForm=this.fb.group({customerName:["",r.C.required],customerContact:["",r.C.required],streetAddress:["",r.C.required],stateId:["",r.C.required],subUrb:["",r.C.required],postCode:["",r.C.required],ABN:["",r.C.required],contacts:this.fb.array([])}),this.addCustomerDetails(),this.getAllStates()}addCustomerDetails(){this.customerArr().push(this.customerForm())}customerArr(){return this.addCustomerForm.get("contacts")}customerForm(){return this.fb.group({email:["",r.C.required],phone:["",r.C.required],position:["",r.C.required]})}removeCustomerDetails(e){const t=this.addCustomerForm.controls.contacts;t.length>1&&t.removeAt(e)}onSubmit(){console.log(this.addCustomerForm.value),this.logicalFormInfoService.addCustomer(this.addCustomerForm.value).subscribe(e=>{console.log("addCustomerForm=>",e),this.dialogRef?this.dialogRef.close("ok"):this.router.navigate(["/admin/siteInfo/addCustomer"])},e=>{console.error(e)})}getAllStates(){this.logicalFormInfoService.getAllStates().subscribe(e=>{console.log("setStatesDetails=>",e),this.StatesData=e.data})}calcHeight(e){this.numberOfLineBreaks=(e.match(/\n/g)||[]).length+1,console.log("numberOfLineBreaks",this.numberOfLineBreaks)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.f),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](i.f),o["\u0275\u0275directiveInject"](a.f))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-adding-cust"]],decls:46,vars:5,consts:[["class","btn btn-outline-primary",3,"routerLink",4,"ngIf"],[1,"content",2,"height","60%"],[1,"container","px-4","py-4","bg-white",3,"formGroup"],[1,"row"],[1,"my-3","col"],["for","exampleFormControlInput1",1,"form-Label"],["type","text","id","customerName","formControlName","customerName",1,"form-control"],["type","text","id","customerContact","formControlName","customerContact",1,"form-control"],["autosize","","type","text","id","customerStreetAddress","formControlName","streetAddress",1,"form-control"],["autosize","","type","text","formControlName","subUrb","id","siteName",1,"form-control"],["aria-label","Default select example","formControlName","stateId",1,"form-select","form-control"],["value","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["type","text","id","postCode","formControlName","postCode",1,"form-control"],["type","text","id","businessName","formControlName","ABN",1,"form-control"],["formArrayName","contacts"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-outline-primary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-arrow-left"],[3,"value"],[3,"formGroupName"],[1,"my-3","col-3"],["type","text","formControlName","position","id","position",1,"form-control"],["type","text","formControlName","email","id","email",1,"form-control"],["type","text","formControlName","phone","id","phone",1,"form-control"],[1,"my-3","col-1","my-auto"],[1,"material-icons",2,"margin-top","35%",3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,c,2,2,"div",0),o["\u0275\u0275elementStart"](1,"mat-dialog-content"),o["\u0275\u0275elementStart"](2,"section",1),o["\u0275\u0275elementStart"](3,"div",2),o["\u0275\u0275elementStart"](4,"h2"),o["\u0275\u0275text"](5,"Add Customer"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](6,"hr"),o["\u0275\u0275elementStart"](7,"div",3),o["\u0275\u0275elementStart"](8,"div",4),o["\u0275\u0275elementStart"](9,"p",5),o["\u0275\u0275text"](10," Customer Name "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](11,"input",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div",4),o["\u0275\u0275elementStart"](13,"p",5),o["\u0275\u0275text"](14," Customer Contact "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](15,"input",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",3),o["\u0275\u0275elementStart"](17,"div",4),o["\u0275\u0275elementStart"](18,"p",5),o["\u0275\u0275text"](19," Street Address "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](20,"textarea",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"div",4),o["\u0275\u0275elementStart"](22,"p",5),o["\u0275\u0275text"](23," Suburb "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](24,"textarea",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"div",4),o["\u0275\u0275elementStart"](26,"p",5),o["\u0275\u0275text"](27," State "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](28,"select",10),o["\u0275\u0275elementStart"](29,"option",11),o["\u0275\u0275text"](30,"Select State"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](31,u,2,2,"option",12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"div",4),o["\u0275\u0275elementStart"](33,"p",5),o["\u0275\u0275text"](34," Postal Code "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](35,"input",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](36,"div",3),o["\u0275\u0275elementStart"](37,"div",4),o["\u0275\u0275elementStart"](38,"p",5),o["\u0275\u0275text"](39," Australian Business Name (ABN) "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](40,"input",14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerStart"](41,15),o["\u0275\u0275template"](42,f,24,2,"ng-container",16),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275elementStart"](43,"div"),o["\u0275\u0275elementStart"](44,"button",17),o["\u0275\u0275listener"]("click",function(){return t.onSubmit()}),o["\u0275\u0275text"](45," Submit "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("ngIf",!t.dialogRef),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("formGroup",t.addCustomerForm),o["\u0275\u0275advance"](28),o["\u0275\u0275property"]("ngForOf",t.StatesData),o["\u0275\u0275advance"](11),o["\u0275\u0275property"]("ngForOf",t.customerArr().controls),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("disabled",t.addCustomerForm.invalid))},directives:[m.n,a.d,r.s,r.k,r.d,r.r,r.i,s.a,r.A,r.v,r.D,m.m,r.e,i.g,r.l],styles:[""]}),e})()},X72n:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n("3Pt+"),o=n("PSD3"),l=n.n(o),i=n("fXoL"),a=n("tyNb"),m=n("wbBK"),s=n("0IaG"),d=n("ofXK"),c=n("5eqV");const u=function(){return["/admin/siteInfo/jobTask"]};function f(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",8),i["\u0275\u0275element"](1,"i",9),i["\u0275\u0275elementEnd"]()),2&e&&i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](1,u))}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"option",20),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.title," ")}}function b(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementContainerStart"](0,10),i["\u0275\u0275elementStart"](1,"div",11),i["\u0275\u0275elementStart"](2,"div",12),i["\u0275\u0275elementStart"](3,"span"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"div",13),i["\u0275\u0275element"](6,"textarea",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",13),i["\u0275\u0275elementStart"](8,"select",15),i["\u0275\u0275elementStart"](9,"option",16),i["\u0275\u0275text"](10," Select category "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](11,p,2,2,"option",17),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"div",18),i["\u0275\u0275elementStart"](13,"span",19),i["\u0275\u0275listener"]("click",function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().addAction()}),i["\u0275\u0275text"](14,"add_circle_outline "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"div",18),i["\u0275\u0275elementStart"](16,"span",19),i["\u0275\u0275listener"]("click",function(){i["\u0275\u0275restoreView"](e);const n=t.index;return i["\u0275\u0275nextContext"]().removeSafetyModule(n)}),i["\u0275\u0275text"](17," remove_circle_outline "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](18,"hr"),i["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=t.index,n=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("formGroupName",e),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"]("",e+1,". "),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngForOf",n.licenceCatAll)}}let g=(()=>{class e{constructor(e,t,n,r){this.fb=e,this.router=t,this.logicalFormInfo=n,this.dialogRef=r,this.licenceCatAll=[],this.jobTaskDetails=this.fb.group({arrObj:this.fb.array([])})}ngOnInit(){this.addAction(),this.getAllCategories()}getAllCategories(){this.logicalFormInfo.getAllLicenceCat().subscribe(e=>{console.log("getAllLicenceCat=>",e),this.licenceCatAll=e.data})}addAction(){this.add().push(this.newAction())}add(){return this.jobTaskDetails.get("arrObj")}newAction(){return this.fb.group({title:["",r.C.required],tradeCategoryId:["",r.C.required]})}removeSafetyModule(e){const t=this.jobTaskDetails.controls.arrObj;t.length>1&&t.removeAt(e)}onFormSubmit(){console.log(this.jobTaskDetails.get("arrObj").value);const e={arrObj:this.jobTaskDetails.get("arrObj").value};this.logicalFormInfo.addMultipleJobTask(e).subscribe(e=>{console.log("JOBTask=>",e),l.a.fire({title:"Parameter Added successfully",showConfirmButton:!1,timer:1200}),this.dialogRef?this.dialogRef.close("ok"):this.router.navigate(["/admin/siteInfo/jobTask"])},e=>{this.dialogRef&&this.dialogRef.close("error"),console.error(e)})}calcHeight(e){this.numberOfLineBreaks=(e.match(/\n/g)||[]).length+1,console.log("numberOfLineBreaks",this.numberOfLineBreaks)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.f),i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](m.a),i["\u0275\u0275directiveInject"](s.f))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-job-task"]],decls:13,vars:4,consts:[["class","btn btn-outline-primary",3,"routerLink",4,"ngIf"],[1,"container","px-4","py-4","bg-white"],[3,"formGroup","ngSubmit"],[1,"text-center"],["formArrayName","arrObj"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"col-md-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"btn","btn-outline-primary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-arrow-left"],[3,"formGroupName"],[1,"row","justify-content-center"],[1,"mr-1","mt-2"],[1,"col-4"],["autosize","","type","text","formControlName","title","id","title",1,"form-control","sign"],["aria-label","Default select example","formControlName","tradeCategoryId",1,"form-select","form-control"],["value","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-1","mt-2"],[1,"material-icons",3,"click"],[3,"value"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,2,2,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"form",2),i["\u0275\u0275listener"]("ngSubmit",function(){return t.onFormSubmit()}),i["\u0275\u0275elementStart"](3,"h2",3),i["\u0275\u0275text"](4,"Add Job Task"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](5,"br"),i["\u0275\u0275element"](6,"hr"),i["\u0275\u0275elementContainerStart"](7,4),i["\u0275\u0275template"](8,b,19,3,"ng-container",5),i["\u0275\u0275elementContainerEnd"](),i["\u0275\u0275element"](9,"br"),i["\u0275\u0275elementStart"](10,"div",6),i["\u0275\u0275elementStart"](11,"button",7),i["\u0275\u0275text"](12," Add "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("ngIf",!t.dialogRef),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("formGroup",t.jobTaskDetails),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("ngForOf",t.add().controls),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("disabled",t.jobTaskDetails.get("arrObj").invalid))},directives:[d.n,r.E,r.s,r.k,r.e,d.m,a.g,r.l,r.d,c.a,r.r,r.i,r.A,r.v,r.D],styles:[""]}),e})()}}]);